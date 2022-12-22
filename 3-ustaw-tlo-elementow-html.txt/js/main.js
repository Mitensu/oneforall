console.log("TEST");
const setBackground = () => {
    let p1 = document.querySelector(".first");
    let p2 = document.querySelector(".second");
    p1.style.backgroundColor = "red";
    p2.style.backgroundColor = "yellow"
}

let btn = document.getElementById("btn");

btn.addEventListener("click", setBackground);