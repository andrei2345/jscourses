var doc = document.getElementById("div");
var start = document.getElementById("start")
var B = document.getElementById("B");
var I = document.getElementById("I");
var U = document.getElementById("U");
var size = document.getElementById("num");
var add = document.getElementById("add");
var font=document.getElementById("font")
var color = document.getElementById("color")
var addcol= document.getElementById("addcol")
var backcolor= document.getElementById("baccol")
var center = document.getElementById("center");
var left = document.getElementById("left");
var right = document.getElementById("right");
var indent = document.getElementById("indent");
var oudent = document.getElementById("oudent");
var list = document.getElementById("list")
var link = document.getElementById("link");
var img = document.getElementById("img");
var close = document.getElementById("close")


start.addEventListener("click", function(){
    this.classList.toggle('click');
doc.contentEditable= true
})
B.addEventListener("click", function(){
    this.classList.toggle('click');
    document.execCommand("bold",false, null);
})
I.addEventListener("click", function(){
    this.classList.toggle('click');
    document.execCommand("italic",false,null);
})
U.addEventListener("click", function(){
    this.classList.toggle('click');
    document.execCommand("underline",false, null);
})
font.addEventListener("click",function(){
    this.classList.toggle('click');
    document.execCommand("fontname",false,prompt("Введите шрифт:"))
})

add.addEventListener("click",function(){
   this.classList.toggle('click');
    document.execCommand("fontsize",false, size.value)
})
addcol.addEventListener("click",function(){
    this.classList.toggle('click');
 document.execCommand("forecolor",false,color.value)
})

backcolor.addEventListener("click",function(){
    this.classList.toggle('click');
    document.execCommand("backcolor",false,color.value);
})

list.addEventListener("click", function(){
    this.classList.toggle('click');
    document.execCommand("insertorderedList",false,null)
})

center.addEventListener("click", function(){
    this.classList.toggle('click');
document.execCommand("justifycenter",false,null)
})

left.addEventListener("click", function(){
    this.classList.toggle('click');
document.execCommand("justifyleft",false,null)
})

right.addEventListener("click", function(){
    this.classList.toggle('click');
    document.execCommand("justifyright",false,null)
})
 
indent.addEventListener("click", function(){
    this.classList.toggle('click');
    document.execCommand("indent",false,null)
})

oudent.addEventListener("click", function(){
    this.classList.toggle('click');
    document.execCommand("outdent",false,null)
})
link.addEventListener("click", function(){
    this.classList.toggle('click');
    document.execCommand("createlink",false,prompt("Введите ссылку:"))
})

img.addEventListener("click",function(){
    this.classList.toggle('click');
      document.execCommand("insertimage",false,prompt("Введите ссылку:"))
})

close.addEventListener("click",function(){
    this.classList.toggle('click');
    doc.contentEditable= false
})
