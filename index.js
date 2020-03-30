// Your code here
let dodger = document.getElementById('dodger');

function moveDodgerLeft() {
    let leftPosition = dodger.style.left.replace("px", "");
    let left = parseInt(leftPosition, 10);

    if (left > 0) {
        dodger.style.left = `${left - 1}px`;
    }
}

function moveDodgerRight() {
    let rightPosition = dodger.style.left.replace("px", "");
    let right = parseInt(rightPosition, 10);

    if (right < 360) {
        dodger.style.left = `${right + 1}px`;
    }
}

document.addEventListener("keydown", function(event) {
    if (event.key === "ArrowLeft") {
        moveDodgerLeft();
    }

    if (event.key === "ArrowRight") {
        moveDodgerRight();
    }
});