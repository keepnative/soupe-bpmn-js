'use strict';

var inherits = require('inherits');

var Viewer = require('bpmn-js/lib/Viewer');

function SoupeBpmnViewer(options) {
  Viewer.call(this, options);
}

inherits(SoupeBpmnViewer, Viewer);

// export
module.exports = SoupeBpmnViewer;

var customTranslate = {
  translate: ['value', require('./i18n/Translate')]
};

// load additional modules

// var bpmnPropertiesPanel = require('bpmn-js-properties-panel');
// var bpmnPropertiesProvider = require('bpmn-js-properties-panel/lib/provider/jbpm');
// var bpmnModdleDescriptor = require('bpmn-js-properties-panel/resources/jbpm');
// var droolsModdleDescriptor = require('bpmn-js-properties-panel/resources/drools');

SoupeBpmnViewer.prototype._customizedModules = [
  // bpmnPropertiesPanel,
  // bpmnPropertiesProvider,
  customTranslate
];

// add additional (default!) modules to bpmn-js
// SoupeBpmnViewer.prototype._modules = [].concat(
//   SoupeBpmnViewer.prototype._modules,
//   SoupeBpmnViewer.prototype._customizedModules);
//
// SoupeBpmnViewer.prototype._moddleExtensions = {
//   jbpm: bpmnModdleDescriptor,
//   drools: droolsModdleDescriptor
// };
