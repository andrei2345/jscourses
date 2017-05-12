var audio= new Audio("1.mp3")

 var play= document.getElementById('play')
 var stop = document.getElementById("stop")
 var rew = document.getElementById("rew")
 var fwd = document. getElementById("fwd")
 var mut= document. getElementById('mut')
 var volume= document.getElementById("range")
var tracker = document.getElementById("tracker")

 play.addEventListener("click",function() {
  if (audio.paused==false){
  	audio.pause();
  	this.classList.toggle("pause")
     }
  else{
  	audio.play()
  	this.classList.toggle("pause")
    
  	 }
    });

 stop.addEventListener("click",function() {
      audio.pause();
      audio.currentTime = 0.0;
      audio.play()
    });

fwd.addEventListener("click",function() {
      audio.playbackRate=1*1.25;
    });

rew.addEventListener("click",function(){
	  audio.playbackRate= 1/1.25
})

mut.addEventListener("click",function(){
 if (audio.muted==false){
 	audio.muted=true
 	this.classList.toggle("mut")
 } 
 else {
 	this.classList.toggle("mut")
  	audio.muted=false}
 	})

audio.volume=0.1
 volume.addEventListener('input',function(){
 	audio.volume=volume.value/100
 })



var time= document.getElementById("full")
audio.addEventListener('loadedmetadata',function(){
	var full = audio.duration;
	var x = Math.floor(full/60);
    var sec = Math.floor(full%60)
    var min= Math.floor(x%60);
    console.log(min,sec)
    var sec1= (":"+sec)
    var min1= (min)
    time.innerHTML=" / "+ min+sec1;
})
var curtime= document.getElementById("curtime")
audio.addEventListener('loadedmetadata',function(){
	interval = setInterval(function(){
	var full = audio.currentTime;
	var x = Math.floor(full/60);
    var sec = Math.floor(full%60)
    var min= Math.floor(x%60);
    var sec1= (":"+sec)
    var min1= (min)
    curtime.innerHTML= min+sec1;
})
	}, 1000)

audio.addEventListener("play",function(){
	var progress= document.getElementById("progress")
	var interval = setInterval(function(){
	var time = audio.currentTime*100/audio.duration;
		progress.style.width = time *3+'px';
}, 1000);
})

var player = document.getElementById("player")
var prog = document.getElementById("progressBar")
var progress = document.getElementById('progress')

prog.addEventListener("click",function(e){
   var widthProgressBar = progressBar.clientWidth;
   var left =progressBar.getBoundingClientRect().left;
	var percent = (e.clientX-left )/widthProgressBar;
	audio.currentTime = audio.duration * percent;
 })