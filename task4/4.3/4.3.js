var n = 1, x=5;
function circ(n,x) {
  return Math.pow(n/x,4);
}

var int=setInterval(function(){

	window.scrollBy(0,circ(n,x));
n+=0.25;
	if((window.scrollY+window.innerHeight)>=10000){
		clearInterval(int);
	}
},35);    

