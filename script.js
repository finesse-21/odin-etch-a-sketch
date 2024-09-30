
function createGrid(number) {
    let container = document.querySelector("#container");
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    for (let i = 0; i < number * number; i++) {
        let block = document.createElement("div");
        block.classList.add("block");
        block.style.cssText = `height: calc(100%/${number}); width: calc(100%/${number})`
        container.append(block);
    }
}
const button = document.querySelector(".change");
button.addEventListener("click", () => {
    let number = prompt("Type a number of squares per side");
    if (number > 100) alert("Type number not more than 100");
    else createGrid(number);
  });