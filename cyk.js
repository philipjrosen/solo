var pos = require('pos');
var _ = require('./node_modules/underscore/underscore-min.js');

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

var tagWords = function(sentence) {
  var words = new pos.Lexer().lex(sentence);
  var taggedWords = new pos.Tagger().tag(words);
  return taggedWords;
};

var makePosArray = function(taggedWordList) {
  return _.map(taggedWordList, function(tuple) {
    return tuple[1];
  });
};

var parseSentence = function(sentence, grammar) {


};

exports.cnfGrammar = cnfGrammar;
exports.makeParent = makeParent;
exports.tagWords = tagWords;
exports.parseSentence = parseSentence;
exports.makePosArray = makePosArray;
