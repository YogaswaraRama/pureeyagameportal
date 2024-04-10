// Active sidebar class JS
//Default homoe active
const defaultMenu = document.getElementById("menu-home");
defaultMenu.classList.add("sidebar-active");
//Select sidebar menu
const menus = document.querySelectorAll("ul li a");
//Looping thru each menu, remove class, and give
menus.forEach((menu) => {
  menu.addEventListener("click", (event) => {
    menus.forEach((menu) => {
      menu.classList.remove("sidebar-active");
    });
    menu.classList.add("sidebar-active");
    if (menu !== defaultMenu) {
      defaultMenu.classList.remove("sidebar-active");
    }
  });
});

// Show section
const menuAvailable = document.querySelectorAll(".menu"); //get every .menu
menuAvailable.forEach((menu) => {
  menu.addEventListener("click", () => {
    console.log(menu.textContent + " clicked!");
    console.log(menu.id);
    const sectionId = menu.id.replace("menu-", "") + "-section";
    const sectionElement = document.getElementById(sectionId);

    const sections = document.querySelectorAll(".section");
    sections.forEach((section) => {
      section.classList.remove("section-active");
      section.style.display = "block";
      if (sectionElement == section) {
        section.classList.add("section-active");
      } else {
        section.style.display = "none";
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  //Select profile
  const profile = document.querySelector(".profile");
  const accountPage = document.getElementById("account-section");
  profile.addEventListener("click", () => {
    console.log("profile clicked");
    const sections = document.querySelectorAll(".section");
    sections.forEach((section) => {
      section.classList.remove("section-active");
      if (section === accountPage) {
        accountPage.style.display = "block";
      } else {
        section.style.display = "none";
      }
    });
  });

  //Home default
  const sections = document.querySelectorAll(".section");
  const homeSection = document.getElementById("home-section");
  sections.forEach((section) => {
    if (section !== homeSection) {
      section.style.display = "none";
    } else {
      section.classList.add("section-active");
    }
  });
});

//Clock
updateDate = () => {
  const todayDefault = new Date();
  const dateSettings = {
    weekday: "long",
    month: "long",
    day: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false, // Use 24-hour format
  };
  const todayNew = todayDefault.toLocaleString("en-US", dateSettings);
  document.getElementById("date").innerHTML = todayNew;
};
setInterval(updateDate, 1000);

//2. Card game di home + game page

//3. local storage simpan + update profile

//4. sidebar minimize
const hamburger = document.getElementById("hamburger");
const sidebar = document.querySelector(".sidebar");
const logoContainer = document.querySelector(".logo");
const logoFull = document.querySelector(".logo-image");
const logoMinimize = document.querySelector(".logo-minimize");

hamburger.addEventListener("click", () => {
  console.log("hamburger clicked");
  const sidebarMinimized = sidebar.classList.toggle("sidebar-minimize");
  if (sidebarMinimized) {
    logoFull.style.display = "none";
    logoMinimize.style.display = "block";
    logoContainer.style.width = "auto";
  } else {
    logoFull.style.display = "block";
    logoMinimize.style.display = "none";
    logoContainer.style.width = "216px";
  }
  console.log(sidebarMinimized);
});

//5. responsive
