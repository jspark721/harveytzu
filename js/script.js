window.onscroll = function() {
  stickyFunction();
};

let navbar = document.getElementById("navbar");
let sticky = 767;

console.log(sticky);

function stickyFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
