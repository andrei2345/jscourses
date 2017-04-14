var Framework = {
append : function(target,what){
target.appendChild(what);
},

prepend : function (target,what) {
var parentDiv=target.childNodes[0];
target.insertBefore(what,parentDiv);
},

replace : function(target,what){
var parentDiv= document.getElementById('div1');
parentDiv.parentNode.replaceChild(what,target);
},
remove : function(target){
	target.remove()

},
create : function(s){
	return document.createElement(s);
},
event : function(target,event,func){

	if (typeof target.attachEvent == "function"){

		target.attachEvent("on" + event,func)}
	
	else{
		target.addEventListener(event,func);
	}
	},
	
unevent : function(target,event,func){
	if (typeof target.detachEvent == "function"){
		target.detachEvent("on" + event,func)

	}

	else{
		target.removeEventListener(event,func);
	}
	},

dispatch: function(target,eT){
		
var event = new Event(eT)
		func=function(){
			alert("Hi");
		}

	if(typeof target.attachEvent == "function")	
	{
		target.attachEvent('on'+eT+func);
		target.dispatchEvent(event);

	}	
else{
	target.addEventListener(eT,func);

		target.dispatchEvent(event);
	}

	}


	}
	


div1 = document.getElementById("div1");
div2 = document.getElementById("div2");
//Framework.append(div1,div2);
//Framework.prepend(div2,div1);
//Framework.replace(div1,div2);
//Framework.remove(div1);
//var  el = Framework.create("div");
// var btn = document.getElementById("btn"); var func = function(){alert('Hi')};   Framework.unevent(btn,"click",func)
//var btn = document.getElementById("btn"); var func = function(){alert('Hi')};   Framework.event(btn,"click",func)

Framework.dispatch(btn,"click");

