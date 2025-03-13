let sliderWidth = document.querySelector('.slider--width');
let sliderItems = document.querySelectorAll('.slider--item').length;

let controlIndex = 0;
let direction = 1;

sliderWidth.style.width = `calc(${sliderItems * 100}vw)`;

function sliderToggle() {
    controlIndex += direction;

    if (controlIndex === sliderItems - 1 || controlIndex === 0) {
        direction *= -1;
    }

    sliderWidth.style.marginLeft = `-${controlIndex * 100}vw`;
    console.log('ControlIndex = ' + controlIndex);
    console.log('Direction = ' + direction);
}

setInterval(sliderToggle, 3000);

