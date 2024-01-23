const heading = document.getElementById("heading");
const btn = document.getElementById("myBtn");
const box1 = document.getElementById("box1");

// btn.addEventListener("click", () => {
//     box1.style.backgroundColor = "red";
//     box1.style.padding = "30px";
//     box1.style.color = "white";
// })

btn.addEventListener("click",() => {
    box1.classList.add("classforDiv");
})

btn.addEventListener("contextmenu", (e) => {
    e.preventDefault();
     btn.style.backgroundColor = "purple";
})

box1.addEventListener("mouseover", () => {
    btn.style.transform = "scale(1.1)";
    heading.style.backgroundColor = "pink";
})

box1.addEventListener("mouseout", () => {
    heading.style.backgroundColor = "";
    btn.style.transform = "";
})

addEventListener("contextmenu", (e) => {
    e.preventDefault();
    btn.style.filter = "blur(10px)";
})

// addEventListener("click", (e) => {
//     console.log(e.clientX);
//     console.log(e.clientY);
// })

box1.addEventListener("dblclick", () => {
    document.body.style.backgroundColor = "rgb(50,50,50)";
})

box1.addEventListener("click", () => {
    document.body.style.backgroundColor = "#fff";
})