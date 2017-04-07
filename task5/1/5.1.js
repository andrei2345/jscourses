var N=+prompt ("Vvedi chislo N");
var M=+prompt ("Vvedi chislo M");
var el = document.getElementById("table");

var table= document.createElement("table");
var tbody = document.createElement("tbody");
table.appendChild(tbody);

for (var i = 0; i < N; i++) {
   tr =document.createElement('tr');
   for (var j = 0; j <M; j++) {
   	td= document.createElement('td');
     tr.appendChild(td);
     td.innerHTML= Math.floor(Math.random()*100+1);
     var s =+ td.innerHTML;

   	if ((i==j))  {
   td.setAttribute("class","classs")
   	}
   	}

   	tbody.appendChild(tr);

 }
 el.appendChild(table);

