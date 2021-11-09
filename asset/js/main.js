const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
      nav = document.getElementById(navId);
  
    if (toggle && nav) {
      toggle.addEventListener("click", () => {
        nav.classList.toggle("show");
      });
    }
  };
  showMenu("nav-toggle", "main-center");
  
  const navLink = document.querySelectorAll(".nav__link");
  
  function linkAction() {
    navLink.forEach((n) => n.classList.remove("active"));
    this.classList.add("active");
  
    const navMenu = document.getElementById("nav-menu");
    navMenu.classList.remove("show");
  }
  navLink.forEach((n) => n.addEventListener("click", linkAction));
  
  const srLeft = ScrollReveal({
    origin: "left",
    distance: "80px",
    duration: 2000,
    reset: true,
  });
  
  srLeft.reveal(".home_title", { delay: 300 });
  srLeft.reveal(".home_social", { delay: 400 });
  srLeft.reveal(".bg_line1", { delay: 700 });
  srLeft.reveal(".line", { delay: 500 });
  srLeft.reveal(".about_img", { delay: 200 });
  srLeft.reveal(".skills_text", { delay: 200 });
  srLeft.reveal(".works_text", { delay: 200 });
  
  const srRight = ScrollReveal({
    origin: "right",
    distance: "80px",
    duration: 2000,
    reset: true,
  });
  
  srRight.reveal(".home_img", { delay: 300 });
  srRight.reveal(".bg_line2", { delay: 700 });
  srRight.reveal(".about_text", { delay: 200 });
  srRight.reveal(".sk1", { delay: 200 });
  srRight.reveal(".sk2", { delay: 300 });
  srRight.reveal(".sk3", { delay: 400 });
  srRight.reveal(".sk4", { delay: 500 });
  
  const srTop = ScrollReveal({
    origin: "top",
    distance: "80px",
    duration: 2000,
    reset: false,
  });
  
  srTop.reveal(".down_arrow", { delay: 300 });
  
  const srTopF = ScrollReveal({
    origin: "top",
    distance: "80px",
    duration: 2000,
    reset: true,
  });
  srTopF.reveal(".img1", { delay: 200 });
  srTopF.reveal(".img2", { delay: 250 });
  srTopF.reveal(".img3", { delay: 300 });
  srTopF.reveal(".img4", { delay: 350 });
  srTopF.reveal(".img5", { delay: 400 });
  srTopF.reveal(".img6", { delay: 450 });
  srTopF.reveal(".contact_text", { delay: 400 });
  srTopF.reveal(".form1", { delay: 500 });
  srTopF.reveal(".form2", { delay: 550 });
  srTopF.reveal(".form3", { delay: 600 });