// Seleting required elements

const about = document.querySelector(".about");
const tabBtns = document.querySelectorAll(".tab-btn");
const tabContent = document.querySelectorAll(".content");

about.addEventListener("click", function (e) {
  const clicked = e.target.closest(".tab-btn");

  // Guard Clause
  if (!clicked) return;

  // remove active class
  tabBtns.forEach((t) => t.classList.remove("active"));

  tabContent.forEach((t) => t.classList.remove("active"));

  // activate class
  clicked.classList.add("active");

  //   console.log(`${clicked.dataset.id}`);
  document.querySelector(`#${clicked.dataset.id}`).classList.add("active");
});
