// for active link of the profile section

  // 
  document.addEventListener("DOMContentLoaded", function () {
    const activePage = window.location.pathname;
    const pageLinks = document.querySelectorAll('.orders a');
    pageLinks.forEach(link => {
      if (link.href.includes(`${activePage}`)) {
        link.querySelector('.profile').classList.add('active');
      }
    });
  });
// sign up page pop
setTimeout(() => {
  document.getElementById('form-containers').style.display ='-webkit-box';
}, 3000);
// close the sign up page
const closePop = document.getElementById('cross');
closePop.addEventListener('click', () => {
  document.getElementById('form-containers').style.display = 'none';
});
// get the menu bar and close button
const menuIcon = document.getElementById("btn");
const closeIcon = document.getElementById("cancel");
const navList = document.querySelector(".navbar ul");
console.log(navList);

menuIcon.addEventListener("click", function () {
  navList.classList.toggle("active");
  menuIcon.style.display = "none";
  closeIcon.style.display = "block";
});

closeIcon.addEventListener("click", function () {
  navList.classList.remove("active");
  menuIcon.style.display = "block";
  closeIcon.style.display = "none";
});
// redirect the otp page
function sendEmailVerification(){
  window.location.href ="otp.html"
}
// redirect the otp page
function sendPhoneVerification(){
  window.location.href ="otp.html"
}

function resetPassword(){
  window.location.href ="resert.html"
}
// account details
const account = document.querySelector('.shop');

account.addEventListener('click', () => {
  window.location.href = "My_order.html";
});
// about section
document.addEventListener("DOMContentLoaded", function () {
  const activePage = window.location.pathname;
  const pageLinks = document.querySelectorAll('#menu li');
  pageLinks.forEach(link => {
    if (link.href.includes(`${activePage}`)) {
      link.querySelector('.link').classList.add('active');
    }
  });
});

// arrow
const arrowDrop = document.querySelector('#tal');

arrowDrop.addEventListener('click', () => {
  window.location.href = "FQA.html";
});