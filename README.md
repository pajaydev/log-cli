# log-cli
[![Build Status](https://travis-ci.org/pajaydev/log-cli.svg?branch=master)](https://travis-ci.org/github/pajaydev/log-cli)

A simple logger for node cli, it wraps around chalk and ora package.


## Installation

```shell
npm install log-cli
```
or

```shell
yarn add log-cli
```

## Usage:

```javascript
const Logger = require('log-cli')

const logger = new Logger();
logger.log('this is normal message');
logger.success('this is success message');
```

<img align="left" src="./log-input.png" height="280">
<img align="left" src="./log-output.png" height="280">

## examples
- [click here](https://github.com/pajaydev/log-cli/blob/master/example.js)

## Methods

```
warn, success, error, log, info, bold, spin, spinStart, spinStop
```


### Change the default colors of logging

```javascript
logger.setColor({info: 'grey'});
```

## credits.

 - [Chalk](https://www.npmjs.com/package/chalk)
 - [Ora](https://www.npmjs.com/package/ora)
