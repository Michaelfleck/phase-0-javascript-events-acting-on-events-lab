// Your code here



function moveDodgerRight() {
    const rightNumbers = dodger.style.left.replace("px", "");
    const right = parseInt(rightNumbers, 10);

    if (right < 360) {
        dodger.style.left = `${right + 1}px`;
    }
}

function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
    console.log(left)
    if (left > 0) {
        dodger.style.left = `${left - 1}px`;
        console.log("I am here...")
    }
}

document.addEventListener("keydown", function(e) {
    console.log(e.key);
    if (e.key === "ArrowRight") {
        moveDodgerRight();
    }
    else if (e.key === "ArrowLeft") {
        moveDodgerLeft();
    }
});
























