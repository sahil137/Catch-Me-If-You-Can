const box = document.querySelector('.catch-box');

var count = 0;

$('.catch-box').on('mouseover', catchMe);
$('.catch-box').on('click', youWin);


function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }


function catchMe() {
    count += 1;

    let centerX = box.offsetLeft + box.offsetWidth / 2;
    let centerY = box.offsetTop + box.offsetHeight / 2;

    let totalHeight = $('.container').height();
    let totalWidth = $('.container').width();

    let x = getRandomIntInclusive(0, totalWidth - centerX);
    let y = getRandomIntInclusive(0, totalHeight - centerY);

    box.style.left = x + 'px';
    box.style.top = y + 'px';
}

function youWin(){
    alert(`You Win after ${count} attempts`);
    count = 0;
}