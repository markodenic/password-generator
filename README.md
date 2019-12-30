# @mdenic/password-generator

[![npm (scoped)](https://img.shields.io/npm/v/@mdenic/password-generator.svg)](https://www.npmjs.com/package/@mdenic/password-generator)
[![npm bundle size (minified)](https://img.shields.io/bundlephobia/min/@mdenic/password-generator.svg)](https://www.npmjs.com/package/@mdenic/password-generator)
![NPM](https://img.shields.io/npm/l/@mdenic/password-generator)
![npm](https://img.shields.io/npm/dt/@mdenic/password-generator)
![GitHub top language](https://img.shields.io/github/languages/top/markoDenic/password-generator)
![GitHub last commit](https://img.shields.io/github/last-commit/markoDenic/password-generator)

Password Generator

## Install

```
$ npm install @mdenic/password-generator --save
```

## Usage

```js
var generate = require("@mdenic/password-generator");

var pass = generate();

console.log(pass); // => "gllusviuarzrdopp" //string

var pass = generate({
    length: 20,
    numbers: true,
    uppercase: true,
});
console.log(pass); // => "ZpfgmfLdw1RQ3wYgGFro" //string

```


### Options


|            Name          |                  Type                       | Default Value |
|--------------------------|---------------------------------------------|---------------|
| length                   | Integer                                     |       16      |
| numbers                  | Boolean                                     |     false     |
| symbols                  | Boolean                                     |     false     |
| uppercase                | Boolean                                     |     false     |