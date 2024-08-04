import SelectComponent from '@/components/SelectComponent'
import {fireEvent, render, screen} from '@testing-library/react'

describe('SelectElement', () => {
  const mockOptions = [
    {value: '1', label: 'Option 1'},
    {value: '2', label: 'Option 2'},
  ]
  test('renders without crashing', () => {
    const mockOnChange = jest.fn()
    render(
      <SelectComponent
        selectedValue=''
        onSelectChange={mockOnChange}
        options={mockOptions}
      />
    )
    const select = screen.getByTestId('select-element')
    expect(select).toBeInTheDocument()
  })

  test('calls onSelectChange with correct value when an option is selected', () => {
    const mockOnChange = jest.fn()
    render(
      <SelectComponent
        selectedValue=''
        onSelectChange={mockOnChange}
        options={mockOptions}
      />
    )

    const select = screen.getByTestId('select-element')
    fireEvent.change(select, {target: {value: '2'}})
    expect(mockOnChange).toHaveBeenCalledWith('2')
  })

  test('sets the correct selected value', () => {
    const mockOnChange = jest.fn()
    render(
      <SelectComponent
        selectedValue='2'
        onSelectChange={mockOnChange}
        options={mockOptions}
      />
    )

    const select = screen.getByTestId('select-element') as HTMLSelectElement
    expect(select.value).toBe('2')
  })
})
