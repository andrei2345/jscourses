var Opis = new Object();
Opis =  {
  flag : "Flag.png",
  name: "Nazvaniye gosudarstv",
  population: "Naselenye .chel",
  code: "Kod telefona" 
} 

var Belarus = new Object();
Belarus =  {
  flag : "1.png",
  name: "Belarus",
  population: "9 500 000 ",
  code: "+375" 
} 

var Russia = new Object();
Russia ={
  flag : "2.png",
  name: "Russia",
  population: "146 544 710",
  code: "+7" 
} 
var Ukraina = new Object();
Ukraina ={
  flag : "3.png",
  name: "Ukraina",
  population: "42 414 900",
  code: "+380" 
} 

var Litva = new Object();
Litva ={
  flag : "4.png",
  name: "Litva",
  population: " 2 854 649",
  code: "+370" 
} 

var France = new Object();
France ={
  flag : "5.png",
  name: "France",
  population: "66 736 000",
  code: "+33" 
} 
var Polsha = new Object();
Polsha ={
  flag : "6.png",
  name: "Polsha",
  population: "38 627 070",
  code: "+48" 
} 
var Germany = new Object();

Germany =  {
  flag : "7.png",
  name: "Germany",
  population: "82 175 684 ",
  code: "+49" 
} 

var China = new Object();
China ={
  flag : "8.png",
  name: "China",
  population: "1 380 083 000",
  code: "+86" 
} 
var Japan = new Object();
Japan ={
  flag : "9.png",
  name: "Japan",
  population: "126 958 000",
  code: "+81" 
} 

var Romania = new Object();
Romania ={
  flag : "10.png",
  name: "Romania",
  population: "19 942 642",
  code: "+40" 
} 

var Slovakia = new Object();
Slovakia ={
  flag : "11.png",
  name: "Slovakia",
  population: "5 400 536",
  code: "+421" 
} 
var Chekhiya = new Object();
Chekhiya ={
  flag : "12.png",
  name: "Chekhiya",
  population: "10 538 275",
  code: "+420" 
} 
var arr= new Array();
arr =[Opis,Belarus,Russia,Ukraina,Litva,France,Polsha,Germany,China,Japan,Romania,Slovakia,Chekhiya];    
var el = document.getElementById("table");
var table= document.createElement("table");
var tbody = document.createElement("tbody");
table.appendChild(tbody);

for (var i = 0; i < arr.length; i++) {
   tr =document.createElement('tr');  
   tbody.appendChild(tr);

 td= document.createElement('td');
     td.innerHTML = "<img src =\"img/" + arr[i].flag + "\">";;
     tr.appendChild(td);  


  	td= document.createElement('td');
     td.innerHTML= arr[i].name;
     tr.appendChild(td);  

     td= document.createElement('td');
     td.innerHTML= arr[i].population;
     tr.appendChild(td);  


     td= document.createElement('td');
     td.innerHTML= arr[i].code;
     tr.appendChild(td);  


   	}
 el.appendChild(table);
   

