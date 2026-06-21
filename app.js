const modal = document.getElementById("myModal");
const openBtn = document.getElementById("openBtn");
const closeBtn = document.querySelector(".close-btn");
const innerCloseBtn = document.getElementById("innerCloseBtn");

function modalFoniniOzgartir() {
  const r = Math.floor(Math.random() * 150);
  const g = Math.floor(Math.random() * 150);
  const b = Math.floor(Math.random() * 150);

  modal.style.backgroundColor = `rgba(${r}, ${g}, ${b}, 0.65)`;
}

openBtn.onclick = function () {
  modalFoniniOzgartir();
  modal.style.display = "block";
};

function modalniYopish() {
  modal.style.display = "none";
}

closeBtn.onclick = modalniYopish;
innerCloseBtn.onclick = modalniYopish;

window.onclick = function (event) {
  if (event.target == modal) {
    modalniYopish();
  }
};
