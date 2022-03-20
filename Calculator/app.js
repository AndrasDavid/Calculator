
//selector
const output = document.querySelector(".output");
const result = document.querySelector(".result");
const keys = document.querySelectorAll("button");

//event listener
keys.forEach(key => {
    key.addEventListener("click", onClick)
});

function onClick(event) {
    let buttonText = event.target.innerText;
    switch (buttonText) {
        case "AC":
            output.innerText = "";
            result.innerText = "0";
            break;
        case "DEL":
            output.textContent = output.textContent.substring(0, output.textContent.length - 1);
            break;
        case "=":
            result.innerText = eval(output.innerText);
            output.innerText = result.innerText;
            break;
        default:
            output.textContent += buttonText;
    }
}
