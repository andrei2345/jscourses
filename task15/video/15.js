var video = document.getElementsByTagName('video')[0];

 var play= document.getElementById('play')
 var stop = document.getElementById("stop")
 var rew = document.getElementById("rew")
 var fwd = document. getElementById("fwd")
 var mut= document. getElementById('mut')
 var volume= document.getElementById("range")
var tracker = document.getElementById("tracker")

 play.addEventListener("click",function() {
  if (video.paused==false){
  	video.pause();
  	this.classList.toggle("pause")
     }
  else{
  	video.play()
  	this.classList.toggle("pause")
    
  	 }
    });

 stop.addEventListener("click",function() {
      video.pause();
      video.currentTime = 0.0;
      video.play()
    });

fwd.addEventListener("click",function() {
      video.playbackRate=1*1.25;
    });

rew.addEventListener("click",function(){
	  video.playbackRate= 1/1.25
})

mut.addEventListener("click",function(){
 if (video.muted==false){
 	video.muted=true
 	this.classList.toggle("mut")
 } 
 else {
 	this.classList.toggle("mut")
  	video.muted=false}
 	})

video.volume=0.1
 volume.addEventListener('input',function(){
 	video.volume=volume.value/100
 })



var time= document.getElementById("full")
video.addEventListener('loadedmetadata',function(){
	var full = video.duration;
	var x = Math.floor(full/60);
    var sec = Math.floor(full%60)
    var min= Math.floor(x%60);
    console.log(min,sec)
    var sec1= (":"+sec)
    var min1= (min)
    time.innerHTML=" / "+ min+sec1;
})
var curtime= document.getElementById("curtime")
video.addEventListener('loadedmetadata',function(){
	interval = setInterval(function(){
	var full = video.currentTime;
	var x = Math.floor(full/60);
    var sec = Math.floor(full%60)
    var min= Math.floor(x%60);
    var sec1= (":"+sec)
    var min1= (min)
    curtime.innerHTML= min+sec1;
})
	}, 1000)

video.addEventListener("play",function(){
	var progress= document.getElementById("progress")
	var interval = setInterval(function(){
	var time = video.currentTime*100/video.duration;
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
	video.currentTime = video.duration * percent;
 })