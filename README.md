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

# Microsoft Learn

## Typed Function

1. Named function : use `function` keyword with function name

- hoisting : this declarations are loaded to the execution context before any code runs // you can use function before you declare it

2. Anonymous function (function expression)

- be created at runtime and must be declared before they can be called
- represent values so they're usually assigned to a variable or passed to other functions

3. Arrow function (Lambda, fat arrow function `=>`)

- often used with simple functions and in event handling cases

* when a function is calle, the TS complier verifies
  - a value has been provided for each param
  - only params that the function requires are passed to it
  - the params are passed in the order in which they're defined in the function
* JS assumes that all params are `optional` and allows to pass more (or less) arguments to the function

* parameters
  - required parameters
  - optional parameters : `?`
    - need a logic to check if there is the optional params
  - defualt parameters : set default value `=`, default params must come after required params (technically this param is also optional)
  - rest parameters : `...` (ellipsis), treated as a boundless number of optional params
    - `...` tells the compiler to build an array of the arguments passed to function and assign the name
    - useful when multiple params as a group || when you don't know how many params a function will take
  - deconstructed object params : enable to use an `interface` to defined named params
* names of the function params don't need to match the names in the function type
  - "function type inference" : when there are no param types , return type >> TS will infer these types from the function type definition

## Class

- class compnents

  - properites (fileds/attributes) : `public` by default
  - `constructor` : initialize objects // create a new instance
  - `accessor` : `get` or `set` the value of properties
    - properties can be read-only : omitting the `set`
    - properties in inaccessible : omitting the `get` >> property will return `undefined` if you attempt to do
    - typically only used when you need to control access to values : validation // calculate values dynamically
  - methods : define the behaviors

- `new` : instantiate a class and pass params to create an object
