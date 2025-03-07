const loginBtn = document.getElementById("login-btn");
const signupBtn = document.getElementById("signup-btn");
const slider = document.querySelector(".slider");

signupBtn.addEventListener("click", function () {
    slider.style.transform = "translateX(0%)";
    slider.style.backgroundColor = "#ffffff"; // Blue for signup
    signupBtn.classList.add("active");
    loginBtn.classList.remove("active");
});

loginBtn.addEventListener("click", function () {
    slider.style.transform = "translateX(100%)";
    slider.style.backgroundColor = "#ffffff"; // Green for login
    loginBtn.classList.add("active");
    signupBtn.classList.remove("active");
});
