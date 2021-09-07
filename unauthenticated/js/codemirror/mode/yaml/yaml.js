!function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)}(function(e){"use strict";e.defineMode("yaml",function(){var e=new RegExp("\\b(("+["true","false","on","off","yes","no"].join(")|(")+"))$","i");return{token:function(i,t){var r=i.peek(),n=t.escaped;if(t.escaped=!1,"#"==r&&(0==i.pos||/\s/.test(i.string.charAt(i.pos-1))))return i.skipToEnd(),"comment";if(i.match(/^('([^']|\\.)*'?|"([^"]|\\.)*"?)/))return"string";if(t.literal&&i.indentation()>t.keyCol)return i.skipToEnd(),"string";if(t.literal&&(t.literal=!1),i.sol()){if(t.keyCol=0,t.pair=!1,t.pairStart=!1,i.match("---"))return"def";if(i.match("..."))return"def";if(i.match(/\s*-\s+/))return"meta"}if(i.match(/^(\{|\}|\[|\])/))return"{"==r?t.inlinePairs++:"}"==r?t.inlinePairs--:"["==r?t.inlineList++:t.inlineList--,"meta";if(t.inlineList>0&&!n&&","==r)return i.next(),"meta";if(t.inlinePairs>0&&!n&&","==r)return t.keyCol=0,t.pair=!1,t.pairStart=!1,i.next(),"meta";if(t.pairStart){if(i.match(/^\s*(\||\>)\s*/))return t.literal=!0,"meta";if(i.match(/^\s*(\&|\*)[a-z0-9\._-]+\b/i))return"variable-2";if(0==t.inlinePairs&&i.match(/^\s*-?[0-9\.\,]+\s?$/))return"number";if(t.inlinePairs>0&&i.match(/^\s*-?[0-9\.\,]+\s?(?=(,|}))/))return"number";if(i.match(e))return"keyword"}return!t.pair&&i.match(/^\s*(?:[,\[\]{}&*!|>'"%@`][^\s'":]|[^,\[\]{}#&*!|>'"%@`])[^#]*?(?=\s*:($|\s))/)?(t.pair=!0,t.keyCol=i.indentation(),"atom"):t.pair&&i.match(/^:\s*/)?(t.pairStart=!0,"meta"):(t.pairStart=!1,t.escaped="\\"==r,i.next(),null)},startState:function(){return{pair:!1,pairStart:!1,keyCol:0,inlinePairs:0,inlineList:0,literal:!1,escaped:!1}},lineComment:"#",fold:"indent"}}),e.defineMIME("text/x-yaml","yaml"),e.defineMIME("text/yaml","yaml")});