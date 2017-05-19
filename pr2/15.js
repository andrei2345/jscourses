var video = document.getElementsByTagName('video')[0];

var play= document.getElementById('play')
var stop = document.getElementById("stop")
var rew = document.getElementById("rew")
var fwd = document. getElementById("fwd")
var mut= document. getElementById('mut')
var volume= document.getElementById("range")
var tracker = document.getElementById("tracker")

var name = document.getElementById("video_name")
var spisok= document.getElementById("spisok")
var spis_com=document.getElementById("spis_com")

function proigr (data,k,len){

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
var curtime= document.getElementById("curtime");
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

  interval = setInterval(function(){
    var full = video.currentTime;
    var x = Math.floor(full/60);
    var sec = Math.floor(full%60)
    var min= Math.floor(x%60);
    var sec1= (":"+sec)
    var min1= (min)
    curtime.innerHTML= min+sec1;
  },1000)
})




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


video.addEventListener("ended", function(){
 
    if(k == len-1){
      video.setAttribute("src",data[k].address);
      proigr(data, 0, len);
    }
    else {
      video.setAttribute("src",data[k + 1].address);
      proigr(data, k+1, len);
    }
  })
}

var xhr = new XMLHttpRequest();
xhr.open("GET", 'video.json', true);

var  data = [];
var sum=0; var reyting=0
xhr.onload = function(){
  data=JSON.parse(xhr.responseText);
console.log(xhr.responseText);
 

 for (var i = 0; i < data.length; i++) {
    

    //   for ( var n=0; n< com.length; n++){
    //  var li = document.createElement("li")



    // spis_com.appendChild(li)
    var len = data.length;
    var li = document.createElement("li")
    var h3 = document.createElement("h3");
    var p = document.createElement("p");
    spisok.appendChild(li);
    li.innerHTML= "<img src =\"" + data[i].poster + "\"> ";
    h3.innerHTML= data[i].name;
    li.appendChild(h3)
    var btn = document.createElement("button");
    li.appendChild(btn);
    li.setAttribute("value", i);
    li.style.listStyle= "none"
    btn.innerHTML = "►";
    btn.setAttribute("type", "button")


    btn.addEventListener("click",function(){
     // spis_com.remoweChild(li);

       proigr(data,k,len); 
       var k = this.parentNode.value;
      console.log(k)
      video.setAttribute("src",data[k].address)
      video.play()
      
    var com = data[k].comments
   
     for (var n = 0; n < com.length; n++) {
           var mark=com[n].marks 
      sum+=  mark
     // reyting=sum/com.length
      console.log(sum)
       var li = document.createElement("li")
       li.innerHTML= "Отзыв:"+com[n].commtext+ "Оценка:"+com[n].marks;
     
       spis_com.appendChild(li)
         console.log(com)

     }

    })

  }
}
xhr.send()