#!/usr/bin/env bash
set -e

echo "Running build..."
npm run build

echo "Staging changes..."
git add -A

if git diff --staged --quiet; then
  echo "No changes to commit."
  exit 0
fi

COMMIT_MSG="${1:-Build and push}"
echo "Committing: $COMMIT_MSG"
git commit -m "$COMMIT_MSG"

echo "Pushing..."
git push

echo "Done."
