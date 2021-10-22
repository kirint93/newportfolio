// Put the year in the footer

const theYear = new Date();
document.getElementById("year").innerHTML =`${theYear.getFullYear()}`;

 const elm = document.getElementById("card-description1").offsetWidth;
console.log(elm);

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
