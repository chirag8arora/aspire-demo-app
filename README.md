# Aspire Demo App

A professional React TypeScript application built for coding assessments and desktop UI layout challenges. This boilerplate provides a solid foundation with modern best practices, clean architecture, and pixel-perfect styling.

## 🚀 Features

- **React 18** with TypeScript for type safety
- **Tailwind CSS** for utility-first styling
- **React Router** for client-side routing
- **Zustand** for state management with localStorage persistence
- **ESLint + Prettier** for code quality and formatting
- **Responsive Design** optimized for desktop layouts
- **Component Architecture** with proper TypeScript interfaces
- **Performance Optimized** with modern React patterns

## 🛠 Tech Stack

- **Framework**: React 18.2.0
- **Language**: TypeScript 5.3.3
- **Styling**: Tailwind CSS 3.3.6
- **State Management**: Zustand 4.4.7
- **Routing**: React Router DOM 6.20.1
- **Code Quality**: ESLint + Prettier
- **Testing**: Jest + React Testing Library
- **Build Tool**: Create React App

## 📦 Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/chirag8arora/aspire-demo-app.git
   cd aspire-demo-app
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏃‍♂️ Available Scripts

- `npm start` - Start development server
- `npm build` - Build for production
- `npm test` - Run tests
- `npm run lint` - Check code with ESLint
- `npm run lint:fix` - Fix ESLint issues automatically
- `npm run format` - Format code with Prettier

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Layout/         # Main layout wrapper
│   ├── Sidebar/        # Navigation sidebar
│   ├── Card/           # Card components
├── pages/              # Page components
│   ├── Dashboard/      # Dashboard page
├── store/              # State management
│   └── useAppStore.ts  # Zustand store
├── types/              # TypeScript type definitions
│   └── index.ts        # Main types file
├── utils/              # Utility functions
│   └── constants.ts    # App constants
│   └── utils.ts        # App utils
├── App.tsx             # Main app component
├── index.tsx           # Entry point
└── index.css           # Global styles
```

## 🎨 Design System

The application uses a consistent design system with:

- **Colors**: Blue primary palette with gray secondary colors
- **Typography**: Inter font family
- **Spacing**: Consistent 4px grid system
- **Shadows**: Soft and medium shadow variants
- **Components**: Reusable card, button, and layout components

## 🔧 Configuration Files

- `tsconfig.json` - TypeScript configuration with path aliases
- `tailwind.config.js` - Tailwind CSS configuration
- `.eslintrc.js` - ESLint rules and plugins
- `.prettierrc` - Prettier formatting rules
- `package.json` - Dependencies and scripts

## 🧪 Testing

The project includes a testing setup with Jest and React Testing Library:

```bash
# Run all tests
npm test

# Run tests in watch mode
npm test -- --watch

# Run tests with coverage
npm test -- --coverage
```

## 📝 Code Quality

The project enforces code quality through:

- **ESLint**: Code linting with TypeScript and React rules
- **Prettier**: Code formatting
- **TypeScript**: Static type checking
- **Git Hooks**: Pre-commit hooks (can be added)

## 🔄 State Management

The application uses Zustand for state management with:

- **Global State**: User, theme, sidebar state
- **Persistence**: localStorage for data persistence
- **Type Safety**: Full TypeScript support
- **Performance**: Minimal re-renders

## 🎯 Key Components

### Layout System

- **Layout**: Main wrapper with sidebar and header
- **Sidebar**: Collapsible navigation with icons

### Content Components

- **Card**: Reusable card component with hover effects
- **Dashboard**: Statistics and recent projects

## 🔧 Customization

### Adding New Pages

1. Create a new component in `src/pages/`
2. Add the route in `src/App.tsx`
3. Add navigation item in `src/utils/constants.ts`

### Styling

- Use Tailwind CSS classes for styling
- Custom styles can be added in `src/index.css`
- Component-specific styles can be added using `@apply`

### State Management

- Add new state slices in `src/store/useAppStore.ts`
- Use the store with `useAppStore()` hook

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.
