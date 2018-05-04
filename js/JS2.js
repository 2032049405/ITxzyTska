var importNum = document.getElementById('import');
var slideNum = document.getElementById('slide');

slideNum.onchange = function () {
    importNum.value = slideNum.value;
};

importNum.onchange = function () {
    if (importNum.value >3 && importNum.value<19){
        importNum.value = slideNum.value;
    }else{
        alert('请输入正确的人数')
    }
};
var left = document.getElementById('left');
left.onclick = function () {
    if (importNum.value > 4){
        importNum.value--;
        slideNum.value = importNum.value;
    }  else {
        alert('人太少了多找几个人来吧')
    }
};
var right = document.getElementById('right');
right.onclick = function () {
    if (importNum.value < 18){
        importNum.value++;
        slideNum.value = importNum.value;
    }  else {
        alert('人太多了')
    }
};
document.getElementsByClassName('go').addEventListener('click',function () {
    if (importNum.value!=document.getElementsByClassName('li').length){
        alert('请分配好人数');
    }
    else{
        window.location.href='./task5.html'
    }
});


