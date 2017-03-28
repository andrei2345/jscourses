var N = +prompt ("Vvedite kol-vo elementov N");
var S = +prompt ("Vvedite S");
var P = +prompt ("Vvedite P");
var X = S*P/100;
var max= S+X;
var min= S-X;
var sum =0;

var arr = new Array (parseInt(N));

for (var i = 0; i < arr.length; i++) {
	 arr[i]= parseFloat(Math.random()*(max-min)+min);
	 
	sum+=arr[i];
     	console.log(arr[i]);
}
arr.sort(function(a,b) {
	return a-b;
});
console.log(arr.join(','));

console.log(sum/N);
