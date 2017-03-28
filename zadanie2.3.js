var N =+ prompt ("Vvedite kol-vo elementov N");
var X =+ prompt ("Vvedite X");
var sum=0;
var arr = new Array (N);

for (var i = 0; i < arr.length; i++) {
	arr[i]=+prompt("Vvedite znachenie a");
	sum+=arr[i]*(Math.pow(X,i));
}
alert("massiv: "+arr+ " summa: " +sum);
