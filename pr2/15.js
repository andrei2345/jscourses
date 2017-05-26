var video = document.getElementsByTagName('video')[0];
window.currentVideo=0;
window.videosAmount =0;

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

      window.currentVideo = k;
      console.log("Num: "+k);

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
          // console.log(min,sec)
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


    video.play();

   video.addEventListener("ended", function(){
        k = currentVideo;
        len= videosAmount;

        if (k!== len-1){
           video.setAttribute("src",data[k + 1].address);
          proigr(data, k+1, len);
        }
        else {
         video.setAttribute("src",data[k].address);
          proigr(data, 0, len);
        }
      })
}

var xhr = new XMLHttpRequest();
xhr.open("GET", 'video.json', true);

var  data = [];

xhr.onload = function(){
  data=JSON.parse(xhr.responseText);

console.log(data);
    videosAmount = data.length;
 

 for (var i = 0; i < data.length; i++) {

    var len = data.length;
    var li = document.createElement("li")
    var h3 = document.createElement("h3");
    var p = document.createElement("p");
    var p1 = document.createElement("p1");
    spisok.appendChild(li);
    li.innerHTML= "<img src =\"" + data[i].poster + "\"> ";
    h3.innerHTML= data[i].name;
    li.appendChild(h3)


    var sum=0; 
    var com = data[i].comments;

    for (var n = 0; n < com.length; n++) {
               var mark=com[n].marks 
                sum+=  mark;
    } 
      var rating = sum/com.length;
    console.log("Rating: "+rating); 
    p.innerHTML= "Рейтинг:"+rating;
    li.appendChild(p)
    

    var btn = document.createElement("button");
    li.appendChild(btn);
    li.setAttribute("value", i);
    li.style.listStyle= "none";
    btn.innerHTML = "►";
    btn.setAttribute("type", "button")

                       

    btn.addEventListener("click",function(){
     
             var k = this.parentNode.value;
              
            video.setAttribute("src",data[k].address)
            // video.play()
            proigr(data,k,len);

            spis_com.innerHTML=" ";
             var sum=0; 
            var com = data[k].comments;
           for (var n = 0; n < com.length; n++) {
                        var mark=com[n].marks 
                   sum+=  mark;
                   var li = document.createElement("li")
                    li.innerText= " ";
                   li.innerText+= "Комментарий :"+com[n].commtext + " Оценка:"+com[n].marks;
                   spis_com.appendChild(li) 
                   
            }
               var  rating = sum/com.length;
           console.log("Rating: "+ rating)
            p1.innerHTML= "Рейтинг:"+rating;
            li.appendChild(p1)

    })
 
  }
}
xhr.send()
