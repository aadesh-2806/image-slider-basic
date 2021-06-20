let cont = document.querySelector(".cont");
let prev = document.querySelector(".prev");
let next = document.querySelector(".next");
let rad1 = document.querySelector(".rad1");
let rad2 = document.querySelector(".rad2");
let rad3 = document.querySelector(".rad3");
let no_text = document.querySelector(".no_text")
let i=0;
let img = ['1608801802537.jpg','1608801802547.jpeg','1608991736771.jpg'];

function changeColor(x) {
    switch(x){
        case 0:
            rad1.style.backgroundColor = 'ivory';
            rad2.style.backgroundColor = 'rgba(24, 24, 24, 0.425)';
            rad3.style.backgroundColor = 'rgba(24, 24, 24, 0.425)';
            break;
        case 1:
            rad2.style.backgroundColor = 'ivory';
            rad1.style.backgroundColor = 'rgba(24, 24, 24, 0.425)';
            rad3.style.backgroundColor = 'rgba(24, 24, 24, 0.425)';
            break;
        case 2:
            rad3.style.backgroundColor = 'ivory';
            rad2.style.backgroundColor = 'rgba(24, 24, 24, 0.425)';
            rad1.style.backgroundColor = 'rgba(24, 24, 24, 0.425)';
            break;
    }
}
function setImage(i) {
    setTimeout(()=>{
        cont.style.background = `url(${img[i]})`;
        no_text.innerText = `${i+1}/3`;
        changeColor(i);
        cont.style.backgroundSize = 'contain';
        cont.style.backgroundRepeat = 'no-repeat';
    },300);
}


next.addEventListener('click',function next(){
    i++;
    if(i<img.length){
        setImage(i);
    }
    else{
        i=2;
    }
})
prev.addEventListener('click',function previous(){
    i--;
    if(i>=0){
        setImage(i);
    }
    else{
        i=0;
    }
})
rad1.addEventListener('click', function radial() {
    setImage(0);
    i=0;
});
rad2.addEventListener('click', function radial() {
    setImage(1);
    i=1;
});
rad3.addEventListener('click', function radial() {
    setImage(2);
    i=2;
});