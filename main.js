// Put the year in the footer

const theYear = new Date();
document.getElementById("year").innerHTML =`${theYear.getFullYear()}`;

 const p = document.getElementById("pythonTitle")
 p.style.marginLeft
 p. style.font= "12px";


// scrollButton
const scrollButton = document.querySelector("#scrollButton");

scrollButton.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
});

document.getElementById("clickableTitle")
