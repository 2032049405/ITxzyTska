var glint;
function start() {
    clearInterval(glint);
    glint = setInterval(select, 1000);
    //设置随机选择盒子1000毫秒激活一次
}
//onclick激活函数
function stop() {
    clearInterval(glint);//清除
    orange();//设置盒子底色
}//onclick激活函数
var box = document.getElementsByClassName('box');
function orange() {
    for(var i = 0; i < box.length; i++) {
        box[i].style.background = "orange";
    }
}
function select() {
    orange();
    var num=[];
    var temp=[];
    for (var a=0;a<3;a++){
        do{
                num[a]=Math.floor(Math.random()*box.length);
        }while(temp.indexOf(num[a])>=0);
        //检查数组中存不存在num[a]如果存在则循环
        temp.push(num[a]);
        //把（num[a]）放到一个空数组中去
    }
    box[num[0]].style.background = color();
    box[num[1]].style.background = color();
    box[num[2]].style.background = color();
    //给随机的三个盒子复色
}
function  color() {
    var r = Math.floor(Math.random()*256);
    var g = Math.floor(Math.random()*256);
    var b = Math.floor(Math.random()*256);
    //随机获取一种不等于橙色的颜色
    return "rgb(" + r + ',' + g + ',' + b + ')';
}