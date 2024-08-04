import {memo, useCallback} from 'react'

interface OptionType {
  value: string
  label: string
}

interface SelectComponentProps {
  selectedValue: string
  onSelectChange: (value: string) => void
  options: OptionType[]
}

function SelectComponent({
  selectedValue,
  onSelectChange,
  options,
}: SelectComponentProps) {
  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) => {
      onSelectChange(event.target.value)
    },
    [onSelectChange]
  )

  return (
    <select
      value={selectedValue}
      onChange={handleChange}
      data-testid='select-element'
    >
      {options.map((option) => (
        <option
          key={option.value}
          value={option.value}
          disabled={option.value === ''}
        >
          {option.label}
        </option>
      ))}
    </select>
  )
}

export default memo(SelectComponent)
