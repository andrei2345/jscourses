var N = prompt ("Vvedite kol-vo elementov N");
var X = prompt ("Vvedite X");
var sum=0;
var arr = new Array (N);

for (var i = 0; i < arr.length; i++) {
	N[i]=prompt("Vvedite znachenie a");
	sum+=arr[i]*(Math.pow(X,N));
}
alert(sum);