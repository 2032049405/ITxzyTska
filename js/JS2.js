var entranceNum = document.getElementById('entrance');
var slideNum = document.getElementById('slide');

slideNum.onchange = function () {
    entranceNum.value = slideNum.value;
};

entranceNum.onchange = function () {
    if (entranceNum.value >3 && entranceNum.value<19){
        entranceNum.value = slideNum.value;
    }else{
        alert('请输入正确的人数')
    }
};
var left = document.getElementById('left');
left.onclick = function () {
    if (entranceNum.value > 4){
        entranceNum.value--;
        slideNum.value = entranceNum.value;
    }  else {
        alert('人太少了');
    }
};
var right = document.getElementById('right');
right.onclick = function () {
    if (entranceNum.value < 18){
        entranceNum.value++;
        slideNum.value = entranceNum.value;
    }  else {
        alert('人太多了');
    }
};
document.getElementsByClassName('go')[0].addEventListener('click',function () {
    if (document.getElementsByClassName('add-flat').length<2){
        alert('请分配好人数')
    }else{
        window.location.href='./JS3.html'
    }
});


var slayer="<li class='add-slayer'>殺手1人</li>";

var rolm="<li class='add-flat'>水民1人</li>";

setting.onclick = function () {
    var entrance = [];
      var str ="";
    entrance.length = entranceNum.value;
    var slayer = Math.floor(entranceNum.value/3);
var out=[];
while(out.length<slayer){
    var stochastic= Math.floor(Math.random()*entranceNum.value);
    if(out.indexOf(stochastic)<0){
        out.push(stochastic);
    }
    // console.log(out);
}
 for (i =0; i<out.length; i++){
     entrance[out[i]] ='<li class="add-slayer">'+'杀手'+'</li>';
     // console.log(i);
     // console.log(out)
     // console.log(entrance)
}
for (i=0; i<entrance.length; i++){
    if(entrance[i] !=='<li class="add-slayer">' + '杀手' + '</li>'){
        entrance[i] ='<li class="add-flat">'+'平民'+'</li>';
    }
    // console.log(entrance.length)
    // console.log(i)
}

console.log(entrance);
for (var i=0;i<entrance.length;i++){
     str +=entrance[i];

}



 document.getElementById('info').innerHTML = str;
sessionStorage.setItem('dog',JSON.stringify(entrance))
};
console.log(entrance);
