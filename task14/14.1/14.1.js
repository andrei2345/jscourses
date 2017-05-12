

function clockPainting() {
        var now = new Date();
        var sec = now.getSeconds();
        var min = now.getMinutes();
        var hr = now.getHours();

        var canvas = document.querySelector('canvas');
        var ctx = canvas.getContext("2d");
        ctx.save();

        ctx.clearRect(0,0,550,550);
        ctx.translate(175, 175);
      
        ctx.rotate(-Math.PI/2);

        ctx.strokeStyle = "black";
        ctx.fillStyle = "black";
        ctx.lineWidth = 8;
        ctx.lineCap = "round";

        ctx.save();
        ctx.beginPath();

        ctx.arc(0,0,130,0,2*Math.PI,true)
      
        ctx.stroke()
        ctx.font="22px Arial";
        ctx.textAlign= "center";
        ctx.rotate(45*Math.PI/2)
        ctx.fillText("12",0,-100)
        ctx.fillText("3",110,0)
        ctx.fillText("6",-110,0)
        ctx.fillText("9",0,120)
        
        ctx.stroke();
        ctx.restore();

        ctx.save();
      
        ctx.rotate((Math.PI/6)*hr +
            (Math.PI/360)*min +
            (Math.PI/21600)*sec);
        ctx.lineWidth = 12;

        ctx.beginPath();
        ctx.moveTo(-20,0);
        ctx.lineTo(80,0);
        ctx.stroke();
        ctx.restore();

        ctx.save();

        ctx.rotate((Math.PI/30*min) +
            (Math.PI/1800)*sec);
        ctx.lineWidth = 10;

        ctx.beginPath();
        ctx.moveTo(-28,0);
        ctx.lineTo(112,0);
        ctx.stroke();
        ctx.restore();

        ctx.save();

        
        ctx.rotate(sec * Math.PI/30);
        ctx.strokeStyle = "#D40000";
        ctx.fillStyle = "#D40000";
        ctx.lineWidth = 6;

        ctx.beginPath();
        ctx.moveTo(-30,0);
        ctx.lineTo(83,0);
        ctx.stroke();
        ctx.restore();

        ctx.restore();
    }
    window.onload = function() {
        setInterval(clockPainting, 1000);
    }
