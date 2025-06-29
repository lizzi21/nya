const hoverCircle = document.getElementById("hoverCircle");
const mainBook = document.getElementById("bookClick");
const viewer = document.getElementById("bookViewer");
const closeViewer = document.getElementById("closeViewer");

mainBook.addEventListener("mouseenter", () => {
  hoverCircle.style.opacity = 1;
});

mainBook.addEventListener("mouseleave", () => {
  hoverCircle.style.opacity = 0;
});

mainBook.addEventListener("mousemove", e => {
  hoverCircle.style.top = e.clientY + 15 + "px";
  hoverCircle.style.left = e.clientX + 15 + "px";
});

mainBook.addEventListener("click", () => {
  viewer.style.display = "flex";
});

closeViewer.addEventListener("click", () => {
  viewer.style.display = "none";
});






const totalPages = 36;
let currentPage = 1;

const bookPage = document.getElementById("bookPage");
const pageInfo = document.getElementById("pageInfo");
const prevPage = document.getElementById("prevPage");
const nextPage = document.getElementById("nextPage");

function updatePage() {
  bookPage.src = `img/pages/page${currentPage}.jpg`;
  pageInfo.textContent = `${currentPage} / ${totalPages}`;
}

prevPage.addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    updatePage();
  }
});

nextPage.addEventListener("click", () => {
  if (currentPage < totalPages) {
    currentPage++;
    updatePage();
  }
});

closeViewer.addEventListener("click", () => {
  document.getElementById("bookViewer").style.display = "none";
});


updatePage();
mainBook.addEventListener("click", () => {
    viewer.style.display = "flex";
    updatePage(); // Показать страницу
  });