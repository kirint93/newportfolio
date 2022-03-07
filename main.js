// Put the year in the footer

const theYear = new Date();
document.getElementById("year").innerHTML =`${theYear.getFullYear()}`;


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
<<<<<<< HEAD


function changeProjects() {

}
=======
>>>>>>> b39a5af8873a80c43fc93a7230e78750afc20e3e
