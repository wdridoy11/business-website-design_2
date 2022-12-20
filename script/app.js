/*------------------------------ Navbar ------------------------------*/
const body = document.querySelector("body");
const navbar = document.querySelector(".navbar-item");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");
menuBtn.onclick = () => {
  navbar.classList.add("show");
  menuBtn.classList.add("hide");
  body.classList.add("disabled");
};
cancelBtn.onclick = () => {
  body.classList.remove("disabled");
  navbar.classList.remove("show");
  menuBtn.classList.remove("hide");
};
window.onscroll = () => {
  this.scrollY > 20
    ? navbar.classList.add("sticky")
    : navbar.classList.remove("sticky");
};
/*------------------------------ Read more btn ------------------------------*/

function myFunction(dot, text, btn) {
  var dots = document.getElementById(dot);
  var moreText = document.getElementById(text);
  var btnText = document.getElementById(btn);

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = 'Read more <i class="fa-solid fa-angles-right"></i>';
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = 'Read less <i class="fa-solid fa-angles-left"></i>';
    moreText.style.display = "inline";
  }
}
