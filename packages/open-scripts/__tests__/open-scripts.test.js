'use strict';

const openScripts = require('..');
const assert = require('assert').strict;

assert.strictEqual(openScripts(), 'Hello from openScripts');
console.info("openScripts tests passed");
