# @r6nted/logger

A simple logger that fills all your colorful node.js needs. _Typescript compatible_.

#### Why this package?

Logger is a simple, colorful, and lightweight logger. The package is compatible with both typescript and node.js projects.

![](./logger.png)

**[Report a Bug]()**  **[Feature Request]()**  **[NPM]()**

### Installation

Yarn: `yarn add @r6nted/logger@latest` </br>
NPM: `npm i @r6nted/logger` </br>

#### Notice

> **_PNPM NOTICE_** : Not sure if this package works with pnpm but you can always try.

### Getting Started

Get started using typescript,

```ts
import { logger } from '@r6nted/logger';
logger('Hello World!', 1);
```

or using javascript,

```js
const logger = require('@r6nted/logger');
logger('Hello World!', 1);
```

Instead of using types of logs this package uses levels. All log levels and their colors are below.

```js
logger('Grey', 0); // returns grey
logger('Green', 1); // returns green
logger('Yellow', 2); // returns yelllow
logger('Orange', 3); // returns orange
logger('Purple', 4); // returns purple
logger('Red', 5); // returns red

logger('Random Color', 1337); // returns random color
```

### Example

```ts
// import the package
import { logger } as log from '@r6nted/logger';

// declaring variables
let x = 1
let i = 2

// output will be a random color.
if(x === 1) log('X is equal to 1', 1337)
if(i === 2) log('I is equal to 2', 1337)
```
