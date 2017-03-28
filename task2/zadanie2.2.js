var a = new Date; 
var b = new Date;
var min=0,y=0,x=0,hours=0,sec=0;
b = b.setHours(24,0, 0, 0);
var d=((b-a)/1000);

sec=Math.floor(d%60);
min= Math.floor(d/60);
y= Math.floor(min%60);
x=Math.floor(min/60);
hours=Math.floor(x%24);
console.log("Hours="+hours, "Minute="+y,"Secund"+sec );