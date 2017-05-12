var img = document.getElementById('1');

var canvas = document.querySelector('canvas');
var ctx = canvas.getContext("2d");
var img= document.getElementById("1");
ctx.drawImage(img,0,0)
var image =ctx.getImageData(0,0,400,450)
var imageFiltered=sepia(image);
ctx.putImageData(imageFiltered,0,0)


 function sepia (imageData){
var pixels = imageData.data;
for (var i = 0; i < pixels.length; i += 4) {
var r = pixels[i];
var g = pixels[i + 1];
var b = pixels[i + 2];
pixels[i]     = (r * 0.393)+(g * 0.769)+(b * 0.189); 
pixels[i + 1] = (r * 0.349)+(g * 0.686)+(b * 0.168); 
pixels[i + 2] = (r * 0.272)+(g * 0.534)+(b * 0.131); 
}
return imageData;
};


