(function(a){if(typeof exports=="object"&&typeof module=="object"){a(require("../../lib/codemirror"))}else{if(typeof define=="function"&&define.amd){define(["../../lib/codemirror"],a)}else{a(CodeMirror)}}})(function(a){a.defineMode("tiddlywiki",function(){var s={};var i=function(){function y(z){return{type:z,style:"macro"}}return{allTags:y("allTags"),closeAll:y("closeAll"),list:y("list"),newJournal:y("newJournal"),newTiddler:y("newTiddler"),permaview:y("permaview"),saveChanges:y("saveChanges"),search:y("search"),slider:y("slider"),tabs:y("tabs"),tag:y("tag"),tagging:y("tagging"),tags:y("tags"),tiddler:y("tiddler"),timeline:y("timeline"),today:y("today"),version:y("version"),option:y("option"),"with":y("with"),filter:y("filter")}}();var u=/[\w_\-]/i,n=/^\-\-\-\-+$/,g=/^\/\*\*\*$/,b=/^\*\*\*\/$/,p=/^<<<$/,f=/^\/\/\{\{\{$/,r=/^\/\/\}\}\}$/,l=/^<!--\{\{\{-->$/,x=/^<!--\}\}\}-->$/,t=/^\{\{\{$/,j=/^\}\}\}$/,e=/.*?\}\}\}/;function o(A,z,y){z.tokenize=y;return y(A,z)}function m(D,B){var z=D.sol(),y;B.block=false;y=D.peek();if(z&&/[<\/\*{}\-]/.test(y)){if(D.match(t)){B.block=true;return o(D,B,q)}if(D.match(p)){return"quote"}if(D.match(g)||D.match(b)){return"comment"}if(D.match(f)||D.match(r)||D.match(l)||D.match(x)){return"comment"}if(D.match(n)){return"hr"}}y=D.next();if(z&&/[\/\*!#;:>|]/.test(y)){if(y=="!"){D.skipToEnd();return"header"}if(y=="*"){D.eatWhile("*");return"comment"}if(y=="#"){D.eatWhile("#");return"comment"}if(y==";"){D.eatWhile(";");return"comment"}if(y==":"){D.eatWhile(":");return"comment"}if(y==">"){D.eatWhile(">");return"quote"}if(y=="|"){return"header"}}if(y=="{"&&D.match(/\{\{/)){return o(D,B,q)}if(/[hf]/i.test(y)){if(/[ti]/i.test(D.peek())&&D.match(/\b(ttps?|tp|ile):\/\/[\-A-Z0-9+&@#\/%?=~_|$!:,.;]*[A-Z0-9+&@#\/%=~_|$]/i)){return"link"}}if(y=='"'){return"string"}if(y=="~"){return"brace"}if(/[\[\]]/.test(y)){if(D.peek()==y){D.next();return"brace"}}if(y=="@"){D.eatWhile(u);return"link"}if(/\d/.test(y)){D.eatWhile(/\d/);return"number"}if(y=="/"){if(D.eat("%")){return o(D,B,c)}else{if(D.eat("/")){return o(D,B,v)}}}if(y=="_"){if(D.eat("_")){return o(D,B,d)}}if(y=="-"){if(D.eat("-")){if(D.peek()!=" "){return o(D,B,w)}if(D.peek()==" "){return"brace"}}}if(y=="'"){if(D.eat("'")){return o(D,B,h)}}if(y=="<"){if(D.eat("<")){return o(D,B,k)}}else{return null}D.eatWhile(/[\w\$_]/);var C=D.current(),A=s.propertyIsEnumerable(C)&&s[C];return A?A.style:null}function c(B,A){var y=false,z;while(z=B.next()){if(z=="/"&&y){A.tokenize=m;break}y=(z=="%")}return"comment"}function h(B,A){var y=false,z;while(z=B.next()){if(z=="'"&&y){A.tokenize=m;break}y=(z=="'")}return"strong"}function q(z,y){var A=y.block;if(A&&z.current()){return"comment"}if(!A&&z.match(e)){y.tokenize=m;return"comment"}if(A&&z.sol()&&z.match(j)){y.tokenize=m;return"comment"}z.next();return"comment"}function v(B,A){var y=false,z;while(z=B.next()){if(z=="/"&&y){A.tokenize=m;break}y=(z=="/")}return"em"}function d(B,A){var y=false,z;while(z=B.next()){if(z=="_"&&y){A.tokenize=m;break}y=(z=="_")}return"underlined"}function w(B,A){var y=false,z;while(z=B.next()){if(z=="-"&&y){A.tokenize=m;break}y=(z=="-")}return"strikethrough"}function k(C,A){var y,B,z;if(C.current()=="<<"){return"macro"}y=C.next();if(!y){A.tokenize=m;return null}if(y==">"){if(C.peek()==">"){C.next();A.tokenize=m;return"macro"}}C.eatWhile(/[\w\$_]/);B=C.current();z=i.propertyIsEnumerable(B)&&i[B];if(z){return z.style,B}else{return null,B}}return{startState:function(){return{tokenize:m,indented:0,level:0}},token:function(A,z){if(A.eatSpace()){return null}var y=z.tokenize(A,z);return y},electricChars:""}});a.defineMIME("text/x-tiddlywiki","tiddlywiki")});