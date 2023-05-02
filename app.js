// setting date

const date = (document.getElementById(
    "date"
  ).innerHTML = new Date().getFullYear());
  

//  adding toogle

  const navBtn = document.getElementById("btn-toggle");
  const links = document.getElementById("nav-links");

  navBtn.addEventListener("click", () => {
    links.classList.toggle("show-links");
  });
  
