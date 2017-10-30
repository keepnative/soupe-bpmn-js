Customized library of [bpmn-js](http://github.com/bpmn-io/bpmn-js) with [Properties Panel](https://github.com/bpmn-io/bpmn-js-properties-panel) for jBPM

## Build

Make sure you have [git](http://git-scm.com/), [NodeJS](http://nodejs.org) and [npm](https://www.npmjs.org/doc/cli/npm.html) installed before you continue.

The whole setup can be automated through setup scripts[setup.sh](https://github.com/bmitc/soupe-bpmn-js/blob/master/setup.sh) in root path of the source.

## Verify Things are O.K.

Execute `grunt` on project. Things should be fine.

## Attention
Need to change line[16] in bpmn-js-properties-panel/node_modules/scroll-tabs/index.js
```
var EventEmitter = require('events');
```
to
```
var EventEmitter = require('events/events');
```

Can not point the real problem, maybe to be resolved later.
