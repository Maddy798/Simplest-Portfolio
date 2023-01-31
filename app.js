const MenuBtn = document.getElementById("menuBtn");
const Menu = document.querySelector("ul");
const cursorCircle = document.getElementById("cursor-circle");
const listItem1 = document.querySelector(".list-items1");
const listItem2 = document.querySelector(".list-items2");
const listItem3 = document.querySelector(".list-items3");
const brand = document.querySelector(".brand");
const HomeContainer = document.getElementById("home-container");
const AboutMeSection = document.getElementById("about-me");
const ContactInformation = document.getElementById("contact-information");
const ImageContainer = document.getElementById("image-container");
const LanguageContainer = document.getElementById("languages-container");

MenuBtn.addEventListener("click", () => {
  if (Menu.style.top == "-70%") {
    Menu.style.top = "6%";
    MenuBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
  } else {
    Menu.style.top = "-70%";
    MenuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
  }
});

window.addEventListener("scroll", function () {
  console.log(pageYOffset);
  if (window.pageYOffset > 500) {
    HomeContainer.style.left = "-100%";
  } else if (window.pageYOffset < 500) {
    HomeContainer.style.left = "0%";
  }
  if (window.pageYOffset < 500) {
    AboutMeSection.style.left = "-100%";
    ContactInformation.style.right = "-100%";
  } else if (window.pageYOffset > 500) {
    AboutMeSection.style.left = "0%";
    ContactInformation.style.right = "0%";
  }
  if (window.pageYOffset < 1500) {
    ImageContainer.style.left = "-100%";
    LanguageContainer.style.right = "-100%";
  } else if (window.pageYOffset > 1000) {
    ImageContainer.style.left = "0%";
    LanguageContainer.style.right = "0%";
    AboutMeSection.style.left = "-100%";
    ContactInformation.style.right = "-100%";
  }
});
