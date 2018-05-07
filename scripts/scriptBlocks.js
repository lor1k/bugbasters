function ad(v) { return(document.getElementById(v)); }
function agent(v) { return(Math.max(navigator.userAgent.toLowerCase().indexOf(v),0)); }
function xy(e,v) { return(v?(agent('msie')?event.clientY+document.body.scrollTop:e.pageY):(agent('msie')?event.clientX+document.body.scrollTop:e.pageX)); }

function dragOBJ(d,e) {

    function drag(e) { if(!stop) { d.style.top=(tX=xy(e,1)+oY-eY+'px'); d.style.left=(tY=xy(e)+oX-eX+'px'); } }

    var oX=parseInt(d.style.left),oY=parseInt(d.style.top),eX=xy(e),eY=xy(e,1),tX,tY,stop;

    document.onmousemove=drag; document.onmouseup=function(){ stop=1; document.onmousemove=''; document.onmouseup=''; };

}

function quest1(){
  var general = document.getElementById('general-quest1').getBoundingClientRect()
  var bl1 = document.getElementById('quest-block1').getBoundingClientRect()
  var bl2 = document.getElementById('quest-block2').getBoundingClientRect()
  var bl3 = document.getElementById('quest-block3').getBoundingClientRect()
  var bl4 = document.getElementById('quest-block4').getBoundingClientRect()
  var bl5 = document.getElementById('quest-block5').getBoundingClientRect()
  var bl6 = document.getElementById('quest-block6').getBoundingClientRect()
  var bl7 = document.getElementById('quest-block7').getBoundingClientRect()
  var bl8 = document.getElementById('quest-block8').getBoundingClientRect()
  var bl9 = document.getElementById('quest-block9').getBoundingClientRect()
  	if (((general.top+150) > (bl1.top+40)) && (general.top < bl1.top+0) && ((general.top+150) > (bl2.top+40)) && (general.top < bl2.top+0) && ((general.top+150) > (bl3.top+40)) && (general.top < bl3.top+0) && ((general.top+150) > (bl4.top+40)) && (general.top < bl4.top+0) && ((general.top+150) > (bl5.top+40)) && (general.top < bl5.top+0) && ((general.top+150) > (bl6.top+40)) && (general.top < bl6.top+0)) {
  		if ((general.top+150) < (bl7.top+40) && (general.top+150) < (bl8.top+40) && (general.top+150) < (bl9.top+40)) {
         document.getElementById('general-quest1').style.background = "#dfd";
         $(".ButtonOfQuest1").prop('disabled',false);
         $(".ButtonOfQuest1").addClass('btn-primary');
         $(".ButtonOfQuest1").removeClass('btn-danger');
         
        // location.href = "../Labirint/Labirint/labirint.html";
  		} else {document.getElementById('general-quest1').style.background = "#fdd";
    $(".ButtonOfQuest1").prop('disabled',true); 
    $(".ButtonOfQuest1").addClass('btn-danger');
    $(".ButtonOfQuest1").removeClass('btn-primary');
  }
	}
}

