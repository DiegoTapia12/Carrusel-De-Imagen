let imgs = document.getElementById('imgs');
let btnLeft = document.getElementById('left');
let btnRight = document.getElementById('right');

let img = document.querySelectorAll('#imgs img')
let idx = 0;

const run = () =>{
    idx++;
    changeImg();
}

let interval = setInterval(run, 2000);

const changeImg = () => {
    if(idx > img.length - 1){
        idx = 0;
    }else if(idx < 0){
        idx = img.length -1;
    }

    imgs.style.transform = `translatex(${-idx * 500 }px)`
}

const resetInternal = () => {
    clearInterval(interval);
    interval = setInterval(run,2000);
}

btnLeft.addEventListener('click', () => {
    idx--;
    changeImg();
    resetInternal();
});

btnRight.addEventListener('click', () => {
    idx++;
    changeImg();
    resetInternal();
});