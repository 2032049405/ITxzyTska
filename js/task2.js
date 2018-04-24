var dodge;

function start() {
    clearInterval("dodge");
    dodge = setInterval(select, 1000);
}

function stop() {
    clearInterval(dodge);
    gerrn();
}
 var a=document.getElementsByClassName("a");

function gerrn() {
    for (var q = 0; q < a.length; q++) {
        a[q].style.background = "yellow";
    }
}

function select() {
    gerrn();
    var m = [];
    console.log(m);
    for (var i = 0; i < 3; i++) {
           m[i] = Math.floor(Math.random() * a.length);
    }

    for (var v = 0; v < m.length; v++)
    {
        a[m[v]].style.background = getcolor();
    }
}
console.log('rgb');
function getcolor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb("+r+','+ g +','+ b +")";
}