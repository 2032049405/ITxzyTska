var dodges;
//声明 一个全局变量。
//以供后面使用。
var a=document.getElementsByClassName("a");
 //获取元素a的文本节点。
 //声明 变量a等于 通过名字获取a元素的文本节点。
function start(){
    dodges = setInterval(button,200);
    console.log(setInterval())
} //函数 start的参数为
  //dodges等于设置时间间隔（方法，间隔时间）
function stop() {
    clearInterval(dodges);
    gerrn()
}
// 函数 stop的参数为
//解除定时器参数为dodges。//gerrn，参数为 for循环 声明 q为0 小于a的数量时 q加1，a的参数为q，a的参数q的属性为蓝色。
// a的总数为9，q小于就是执行q+1 循环到q下一次等于9时停止循环，设置q的颜色为蓝色。循环从0开始，到8停止。
function gerrn(){
    for (var q = 0; q < a.length; q++)
        a[q].style.background= "blue"
}
function button(){
    var m=[];
    gerrn();
    for (var i = 0; i < 3; i++) {
        m[i] = Math.floor(Math.random()*a.length)
    }
    for (var w = 0; w < m.length; w++){
        a[m[w]].style.background= getcolor();
    }
}
//设置函数button 参数为。
//声明一个变量m 吊调用函数gerrn m 的数组为0，1，2执行 随机取数在0，1，2中各执行一次，执行3次后停止。
//声明一个变量 w  w
function getcolor(){
    var r =Math.floor(Math.random()*256);
    var g =Math.floor(Math.random()*256);
    var b =Math.floor(Math.random()*256);
    return "rgb("+ r + ','+ g +','+ b +")"
}