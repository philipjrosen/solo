var pos = require('pos');

var cnfGrammar = {

  "S" : "NP VP",
  "NP" : "DT NN",
  "VP" : "VB NP",
  "DET" : "the",
  "VB" : "chased",
  "NN" : "cat",
  "NN" : "dog"
};


var makeParent = function(name) {
  var parent = {};
  parent.children = [];
  parent.name = name;
  return parent
};


exports.makeParent = makeParent;
exports.cnfGrammar = cnfGrammar;