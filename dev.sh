#!/bin/bash

# Portfolio Development Script
# Quick script to start the development server

echo "🚀 Starting Bilal Antaki's Portfolio Development Server..."
echo ""

# Load nvm
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

# Check if node is available
if ! command -v node &> /dev/null; then
    echo "❌ Node.js not found. Please ensure nvm is installed."
    exit 1
fi

echo "✅ Node.js version: $(node --version)"
echo "✅ npm version: $(npm --version)"
echo ""

# Navigate to project directory
cd "/home/bilal/Portfolio Website"

# Start development server
echo "📦 Starting development server..."
echo "🌐 Visit http://localhost:3000 when ready"
echo ""

npm run dev
