This workspace is a Next.js project named "note-code" that serves as a platform for creating and sharing notes with code snippets. 

### What does this project do?
- This project is a web application that allows users to create notes with embedded code snippets using a code editor component.
- It provides a user-friendly interface for writing and organizing notes with syntax-highlighted code blocks.
- Users can apply filters to the code editor and customize the appearance of the notes.

### Why does this project exist?
- The project aims to provide a convenient way for developers or users to jot down notes alongside code snippets for reference or sharing.
- It simplifies the process of creating and managing notes with code by offering a structured layout and editing features.

### Main technologies used:
- **Next.js**: Used as the main framework for building the web application.
- **React**: Used for building the user interface components.
- **Monaco Editor**: Utilized for the code editor functionality.
- **Sass**: Used for styling the components.
- **Jest**: Used for testing the application.
- **Eslint**: Used for linting the codebase.

### Codebase organization:
- **src**: Contains the source code of the application.
  - **app**: Contains global styles and layout components for the application.
  - **components**: Contains reusable components like the code editor, editor filters, and select component.
  - **lib**: Contains constants used throughout the application.
  - **__tests__**: Contains test files for the components.
- **public**: Contains static assets like SVG images used in the application.
- **.eslintrc.json**: Configuration file for ESLint.
- **jest.config.ts**: Configuration file for Jest.
- **next.config.mjs**: Configuration file for Next.js.
- **tsconfig.json**: TypeScript configuration file.
- **package.json**: Contains project metadata and dependencies.
- **README.md**: Provides information on how to set up and run the project.

### How to run the project:
1. Install dependencies by running:
   ```
   npm install
   ```
2. Start the development server by running:
   ```
   npm run dev
   ```
3. Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

Overall, this project aims to enhance the note-taking experience for users who want to include code snippets in their notes, providing a seamless and efficient way to organize and share information.
