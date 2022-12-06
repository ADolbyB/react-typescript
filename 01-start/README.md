## Lesson 1 Notes:

For global install of TypeScript:
```bash
npm i typescript -g
```
- Note that for Linux builds this likely requires a `sudo` command...
As a result, I had to deal with the [sudo: npm: command not found](https://stackoverflow.com/questions/31472755/sudo-npm-command-not-found) problem on Linux Mint 20.3
- Having compiled NodeJS v16.18.1 [from source](https://nodejs.org/download/release/v16.18.1/node-v16.18.1-linux-x64.tar.gz), I still had to `sudo apt-get install npm` and it installed a bunch of dependencies, then worked perfectly.

To name a source and destination for compiled JavaScript:

```bash
tsc main.ts
```
- TypeScript compiles `main.ts` into `main.js`
- recompiles manually after code changes

```bash
tsc main.ts -w
```

- Watch `main.ts` for changes and recompile automatically

TypeScript Config:

```bash
tsc --init
```

- Creates `tsconfig.json`
- Setup `rootDir`, `outDir` and `target` paths in `tsconfig.json`
- add `", include": [ "src" ]` at EOF so only TS files in `src` are compiled
- uncomment `"noEmitOnError": true` to prevent emitting (compiling to JS) with errors