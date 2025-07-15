#!/bin/bash

# Deploy script for Alzheimer's Card Game
# This script pushes changes to master and deploys to GitHub Pages

set -e  # Exit on any error

echo "🚀 Starting deployment process..."

# Check if we're in a git repository
if ! git rev-parse --is-inside-work-tree > /dev/null 2>&1; then
    echo "❌ Error: Not in a git repository"
    exit 1
fi

# Check if there are any changes to commit
if git diff --quiet && git diff --cached --quiet; then
    echo "ℹ️  No changes to commit, proceeding with deployment..."
else
    echo "📝 Committing changes..."
    git add .
    git commit -m "Auto-deploy: $(date '+%Y-%m-%d %H:%M:%S')

🤖 Generated with [Claude Code](https://claude.ai/code)

Co-Authored-By: Claude <noreply@anthropic.com>"
fi

# Push to master
echo "📤 Pushing to master branch..."
git push origin master

# Check if card-game directory exists
if [ ! -d "card-game" ]; then
    echo "❌ Error: card-game directory not found"
    exit 1
fi

# Navigate to card-game directory and deploy
echo "🏗️  Building and deploying to GitHub Pages..."
cd card-game

# Check if package.json exists
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found in card-game directory"
    exit 1
fi

# Run the deployment command
npm run deploy

echo "✅ Deployment completed successfully!"
echo "🌐 Your game should be available at: https://amrdarawsheh.github.io/alzheimer-game/"