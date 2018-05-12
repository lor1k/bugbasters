
function GetResult(){
    $('#pre-res').css("display", "none");
    $('#res').css("display", "block");
    var ex1 = document.getElementById('formaZNO').exersice1.value;
    var ex2 = document.getElementById('formaZNO').exersice2.value;
    var ex3 = document.getElementById('formaZNO').exersice3.value;
    var ex4 = document.getElementById('formaZNO').exersice4.value;
    var Res = 80;
    if (ex1 == 4){
        Res += 5;
    }
    if (ex2 == 4){
        Res += 5;
    }
    if (ex3 == 3){
        Res += 5;
    }
    if (ex4 == 1){
        Res += 5;
    }
var
                  score      = Res,
                  canvas     = document.getElementById('canvas'),
                  num        = document.getElementById('num');
var               ctx        = canvas.getContext("2d"),
                  start      = -Math.PI/2,
                  rads       = start+(Math.PI/2)*(score/25);

ctx.lineWidth = 5;
ctx.strokeStyle = "red";

function ress(){
        var i = 0;
        var t = setInterval(function() {
            i++;
            if(i<=score){

            rads   = start+(Math.PI/2)*(i/25);
                num.innerHTML = i;
             console.log(i + "  " + rads);
                ctx.beginPath();
                ctx.arc(152,76,70, start, rads, false);

                ctx.stroke();
                ctx.closePath();

            } else{
                 clearInterval(t);
             }
         }, 10);
         ctx.closePath();
         }
ress();
if(score > 99){$('#num').css("left", "120px");}
}
