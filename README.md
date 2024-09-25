# Universal React App

Monorepo for a cross platform React app with a shared codebase.

- Next.js for the web app
- Expo for the mobile app (iOS and Android)
- Tauri for the desktop app (Windows, macOS, Linux)

## Getting Started

1. Clone the repository
2. Install dependencies with `bun i`

> TODO: Finish instructions

## VSCode Settings

You'll benefit from adding the following to VSCode workspace settings:

```json
{
  // Use the workspace version of TypeScript
  "typescript.tsdk": "node_modules/typescript/lib",
  // Required by vscode-eslint. Otherwise it might show different results than the CLI
  "eslint.workingDirectories": [
    { "pattern": "./apps/*/" },
    { "directory": "./shared" }
  ]
}
```
