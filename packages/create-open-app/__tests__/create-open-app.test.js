'use strict';

const createOpenApp = require('..');
const assert = require('assert').strict;

assert.strictEqual(createOpenApp(), 'Hello from createOpenApp');
console.info("createOpenApp tests passed");
