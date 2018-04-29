var dodges;

var a=document.getElementsByClassName("a");

function buuton() {
    yellow();
   var m=[];
    for (var i=0;i<3;i++) {
        m[i] = Math.floor(Math.random() * a.length);
    }
  for (var w=0; w<m.length;w++){
        a[m[w]].style.background=getcolor();
  }
}
function start() {
    clearInterval(dodges);
    dodges = setInterval(buuton,500);
}
function stop() {
    clearInterval(dodges);
}
function yellow() {
    for (var e=0;e<a.length;e++)
    a[e].style.background="yellow"
}
function getcolor() {
    var r=Math.floor(Math.random()*256);
    var g=Math.floor(Math.random()*256);
    var b=Math.floor(Math.random()*256);
    return "rgb("+ r +','+g +','+b+")"
}