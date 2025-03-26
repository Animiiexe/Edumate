const btnNavEl = document.querySelector(".search-college");
const headerEl = document.querySelector(".search-js");
btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("search-list");
});


document.querySelector(".menu-toggle").addEventListener("click", function() {
  document.querySelector(".main-nav").classList.toggle("active");
  });
