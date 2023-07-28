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


var theVideo = document.getElementById("myVideo");
  document.onkeydown = function(event) {
      switch (event.keyCode) {
         case 37:
              event.preventDefault();
              
              vid_currentTime = theVideo.currentTime;
              theVideo.currentTime = vid_currentTime - 5;
            break;
         
         case 39:
              event.preventDefault();
              
              vid_currentTime = theVideo.currentTime;
              theVideo.currentTime = vid_currentTime + 15;
            break;
         
      }
  };