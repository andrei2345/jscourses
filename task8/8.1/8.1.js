var div = document.getElementById('menu');
var menu = document.getElementById('link');


menu.addEventListener("click",function(e){
	e.stopPropagation()
})


document.addEventListener("contextmenu",function(e){
	e.preventDefault();
	menu.style.top = e.clientY + 'px';
	menu.style.left = e.clientX + 'px';
	div.style.display="block"

})

var a = menu.getElementsByTagName('a');
for(var i = 0; i < a.length; i++){
	a[i].addEventListener('click', function(e){
		e.preventDefault();
		alert(this.innerText);
});
}