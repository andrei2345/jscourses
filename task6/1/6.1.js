var elements = 0;
var comments = 0;
var text = 0;

 var f =function(e){
 	if(e.nodeType==1) 
 		elements++;
 	else if(e.nodeType==3)
 	 text++;
 	else if(e.nodeType==8) 
 		comments++;
	if(e.childNodes.length) 
		for (var i = 0; i < e.childNodes.length; i++) 
			f(e.childNodes[i]);
 }

 f(document);

console.log("Kol-vo tegov: " + elements);
console.log("Kol-vo kommentariyev: " + comments);
console.log("Kol-vo tekstovykh uzlov: " + text);