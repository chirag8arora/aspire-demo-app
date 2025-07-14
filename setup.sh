#!/bin/bash

echo "🚀 Setting up Aspire Demo App..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18 or later."
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo "❌ Node.js version 18 or later is required. Current version: $(node -v)"
    exit 1
fi

echo "✅ Node.js version: $(node -v)"

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -eq 0 ]; then
    echo "✅ Dependencies installed successfully!"
else
    echo "❌ Failed to install dependencies"
    exit 1
fi

# Run linting
echo "🔍 Running code quality checks..."
npm run lint

if [ $? -eq 0 ]; then
    echo "✅ Code quality checks passed!"
else
    echo "⚠️  Code quality issues found. Run 'npm run lint:fix' to fix them."
fi

# Run tests
echo "🧪 Running tests..."
npm test -- --watchAll=false

if [ $? -eq 0 ]; then
    echo "✅ Tests passed!"
else
    echo "⚠️  Some tests failed. Check the output above."
fi

echo ""
echo "🎉 Setup complete! You can now:"
echo "  • Run 'npm start' to start the development server"
echo "  • Run 'npm run build' to build for production"
echo "  • Run 'npm test' to run tests"
echo "  • Run 'npm run lint' to check code quality"
echo ""
echo "📖 Check the README.md file for more information." 