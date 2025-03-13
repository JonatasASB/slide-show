let sliderWidth = document.querySelector('.slider--width')
let sliderItems = document.querySelectorAll('.slider--item').length;

let controlLeft = 0;
let controlRight = 0;

sliderWidth.style.width = `calc(${sliderItems * 100}vw)`

function sliderMarginLeft() {
    controlLeft++;
    if (controlLeft < sliderItems) {
        sliderWidth.style.marginLeft = `-${controlLeft * 100}vw`
        setInterval(sliderMarginLeft, 1000)
    }
}
function slideMarginRight() {

}
sliderMarginLeft