'use strict';

var inherits = require('inherits');

var Modeler = require('bpmn-js/lib/Modeler');

function SoupeBpmnModeler(options) {
  Modeler.call(this, options);
}

inherits(SoupeBpmnModeler, Modeler);

// export
module.exports = SoupeBpmnModeler;

var customTranslate = {
  translate: ['value', require('./i18n/Translate')]
};

// load additional modules

var bpmnPropertiesPanel = require('bpmn-js-properties-panel');
var bpmnPropertiesProvider = require('bpmn-js-properties-panel/lib/provider/jbpm');
var bpmnModdleDescriptor = require('bpmn-js-properties-panel/resources/jbpm');
var droolsModdleDescriptor = require('bpmn-js-properties-panel/resources/drools');

SoupeBpmnModeler.prototype._customizedModules = [
  bpmnPropertiesPanel,
  bpmnPropertiesProvider,
  customTranslate
];

// add additional (default!) modules to bpmn-js
SoupeBpmnModeler.prototype._modules = [].concat(
  SoupeBpmnModeler.prototype._modules,
  SoupeBpmnModeler.prototype._customizedModules);

SoupeBpmnModeler.prototype._moddleExtensions = {
  jbpm: bpmnModdleDescriptor,
  drools: droolsModdleDescriptor
};
