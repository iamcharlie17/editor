1. Clone the repo.
2. Copy the <h2>editor-component</h2> folder.
3. Paste it to your project.
4. Call <h2> <EditorForm/> </h2> Component

5. Match the package.json

<pre>{
  "name": "editor",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev --turbopack",
    "build": "next build --turbopack",
    "start": "next start",
    "lint": "eslint"
  },
  "dependencies": {
    "@lexical/code": "^0.36.2",
    "@lexical/file": "^0.36.2",
    "@lexical/hashtag": "^0.36.2",
    "@lexical/link": "^0.36.2",
    "@lexical/list": "^0.36.2",
    "@lexical/markdown": "^0.36.2",
    "@lexical/overflow": "^0.36.2",
    "@lexical/react": "^0.36.2",
    "@lexical/rich-text": "^0.36.2",
    "@lexical/selection": "^0.36.2",
    "@lexical/table": "^0.36.2",
    "@lexical/text": "^0.36.2",
    "@lexical/utils": "^0.36.2",
    "@radix-ui/react-checkbox": "^1.3.3",
    "@radix-ui/react-dialog": "^1.1.15",
    "@radix-ui/react-icons": "^1.3.2",
    "@radix-ui/react-label": "^2.1.7",
    "@radix-ui/react-popover": "^1.1.15",
    "@radix-ui/react-scroll-area": "^1.2.10",
    "@radix-ui/react-select": "^2.2.6",
    "@radix-ui/react-separator": "^1.1.7",
    "@radix-ui/react-slot": "^1.2.3",
    "@radix-ui/react-tabs": "^1.1.13",
    "@radix-ui/react-toggle": "^1.1.10",
    "@radix-ui/react-toggle-group": "^1.1.11",
    "@radix-ui/react-tooltip": "^1.2.8",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "cmdk": "^1.1.1",
    "lexical": "^0.36.2",
    "lodash": "^4.17.21",
    "lucide-react": "^0.545.0",
    "next": "15.5.4",
    "react": "19.1.0",
    "react-colorful": "^5.6.1",
    "react-dom": "19.1.0",
    "react-error-boundary": "^6.0.0",
    "sonner": "^2.0.7",
    "tailwind-merge": "^3.3.1"
  },
  "devDependencies": {
    "@eslint/eslintrc": "^3",
    "@tailwindcss/postcss": "^4",
    "@types/lodash": "^4.17.20",
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "eslint": "^9",
    "eslint-config-next": "15.5.4",
    "tailwindcss": "^4",
    "tw-animate-css": "^1.4.0",
    "typescript": "^5"
  }
}
</pre>
