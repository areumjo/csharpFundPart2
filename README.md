# Install the TypeScript compiler

- VS Code doesn't include the TypeScript compiler

```bash
npm intall -g typescript
tsc --version
```

- `tsconfig.json` : defines the TS project settings such as the complier options and the files

```bash
tsc --int
```

- open `tsconfig.json` : change `target` to "ES2015"
- update `tsconfig.json` : the compiler saves all JS files to a new folder
  - create a new folder named `build`
  - in the `tsconfig.json`, set `outDir` to `build`

* Transpile TS into JS

```bash
tsc typescriptFileName.ts;
node typescriptFileName.js;
```
