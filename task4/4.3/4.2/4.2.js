var nomer = prompt("Vvedite nomer");
var r= /(\+[3][7][5])[\s\(]?([0-9]{2})[\)\s]?([0-9]{3})[\-]?([0-9]{2})[\-]?([0-9]{2})/
var x = nomer.match(r).slice(1);
alert(+x.join(""));