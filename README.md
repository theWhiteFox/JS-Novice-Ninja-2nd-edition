# JS-Novice-Ninja-2nd-edition

| Reserved words ||||
| -------- |------| ---------- | ----- |
| abstract | else | instanceof | super |
| boolean | enum | int | switch |
| break | export | interface | synchronized |
| byte | extends | let | this |
| case | false | long | throw |
| catch | final | native | throws |
| char | finally | new | transient |
| class | float | null | true |
| const | for | package | try |
| continue | function | private | typeof |
| debugger | goto | protected | var |
| default | if | public | void |
| delete | implements | return | volatile |
| do | import | short | while |
| double | in | static | with |

should be reserved undefined, NaN, Infinity

| primitive data types ||
| -------------------- |---|
| String | Boolean |
| Symbol | Undefined |
| Number | Null |

>  typeof "hello" → "string"

>  typeof 10 → "number"

>  typeof true → "boolean"

> typeof { name : 'John' } → "object"

> typeof [ 1, 2, 3 ] → "object"

Template Literals super-powered strings

`She said, "It's Me!"`

> const name = `Siri`; >> `Hello ${ name }!`; → 'Hello Siri!'

> const uniqueID = Symbol('this is a uniqueID');
 
> typeof uniqueID → "symbol"

Only 9 values are always false and these are known as falsy values:

- "" // double quoted empty string literal
- '' // single quoted empty string literal
- `` // empty template literal
- 0
- -0 // considered different to 0 by JavaScript!
- NaN
- false
- null
- undefined

> Boolean(0); → false

> !!(0) → false

https://www.sitepoint.com/quick-tip-create-manipulate-arrays-in-javascript/

## Set-up

Node v7.10.0

Node.js - REPL Terminal
