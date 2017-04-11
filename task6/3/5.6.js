
var imena = new Array("Marin","Platon","Varlaam","Nektariy","Nikifor","Boguslav","Patrikiy","German","Iona","Vladislav","Filaret",
  "Kirill","Paramon","Gonorat","Uar","Pitirim","Feodot","Karl","Vasiliy","Akundin","Vitaliy","Ignatiy","Germogen","Petroniy",
  "Alfred","Askold","Akila","Lipat","Rufinian","Bahramey","Valentin","Ahilla");

var goroda = new Array( "Bobruisk","Baranovichi","Borisov","Beloozersk","Bykhov","Buda-Koshelevo","Brest",
  "Braslav","Berezovka","Berezino","Bereza","Grodno","Gorodok","Gorki","Gomel ","Glubokoe ","Gantsevichi",
  "Liakhovichi","Liuban","Luninets","Logoisk ","Lida","Lepel","Minsk","Mikashevichi","Marina-Gorka ");

var goods = []

goods[0]= {

  img:"25.jpg",
  name:"Styl"

}

goods[1]= {

  img:"26.jpg",
  name:"Stol"
}
goods[2]={

  img:"27.jpg",
  name:"TV"

}
goods[3]={

  img:"28.jpg",
  name:"Telefon"
}
goods[4]={

  img:"29.jpg",
  name:"Mouse"
}

function chislo(min,max){
  return Math.floor(Math.random()*(max-min)+min);
}
 
var el = document.getElementById("table");
var table= document.createElement("table");
var tbody = document.createElement("tbody");
table.appendChild(tbody);

var time=chislo(2700,4500);

var interval = setInterval(function(){


var i= imena[chislo(0,imena.length)];
var j= goroda[chislo(0,goroda.length)]; 
var g=chislo(0,goods.length);

var c= chislo(1,10)

  tr =document.createElement('tr');
    td= document.createElement('td');
    td1 =document.createElement("td");
    td.innerHTML= "<img src =\"img/" + goods[g].img + "\">";
    td1.innerHTML+=i+" iz goroda "+ j + " kypil " + c + " ed. tovara: " + goods[g].name; 
    btn= document.createElement('button');
    
     td2 =document.createElement("td");
    btn.setAttribute("type","button") ;
    btn.innerHTML=('X');

     tr.appendChild(td);
     tr.appendChild(td1);
     tr.appendChild(td2);
     td2.appendChild(btn);
     tbody.appendChild(tr);

     btn.addEventListener("click",function(){
      this.parentNode.parentNode.remove();  
     })
   },time) 
 el.appendChild(table);
   

