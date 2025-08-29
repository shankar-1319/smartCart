// const bar =document.getElementById('bar');
// const nav = document.getElementById('navbar');
// if(bar){
//     bar.addEventListener('click', () =>{
//         nav.classList.add('active');
//     })
// }
// const x = document.getElementById('navbar');
// function fun1(){
//     x.style.right = "0px";
// }
var x = 0;
function fun1(){
    var bar = document.getElementById('bar');
    var right = document.getElementById('navbar');
    if(x==0){
        right.style.right = "0px";
        bar.style.backgroundColor="rgba(255, 255, 255, 1)";
        bar.style.boxShadow="0px 0px 5px 5px rgba(143, 143, 143, 0.51)";
        x=1;
    }
    else{
        right.style.right = "-400px";
        bar.style.backgroundColor="rgba(255, 255, 255, 0)";
        bar.style.boxShadow="0px 0px 5px 5px rgba(143, 143, 143, 0)";
        x=0;
    }
}