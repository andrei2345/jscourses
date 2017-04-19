

var width = 768;
var count = 1;
var carousel = document.getElementById("carousel");
var list = carousel.querySelector("ul");
var listElem = carousel.querySelectorAll("li");
var position = 0; 
var left= document.getElementById("left");
var right = document.getElementById("right")

 left.addEventListener("click",function() {
    
      position = Math.min(position + width * count, 0)
      list.style.marginLeft = position + 'px';
    });

right.addEventListener("click", function(){
position = Math.max(position-width*count,-width*(listElem.length-count));
  list.style.marginLeft = position + 'px';
})

var nav= document.getElementById("navigator");

var lis=document.querySelectorAll("li");
var h=lis.length;

var li =new Array()
for (var i = 0; i < h; i++) {

   li[i]=document.createElement("li"); 
  li[i].setAttribute("id",i)
nav.appendChild(li[i]);
 
}






