const openButton = document.getElementById("trigger-modal");
const closeButton = document.getElementById("close-modal");

function toggleModal() {
  const modalDiv = document.querySelector(".popup-modal");
  const backdrop = document.querySelector(".backdrop");
  modalDiv.classList.remove("hide");
  backdrop.classList.remove("hide");
  modalDiv.classList.toggle("show");
  backdrop.classList.toggle("show");
}

function closeModal() {
  const modalDiv = document.querySelector(".popup-modal");
  const backdrop = document.querySelector(".backdrop");
  modalDiv.classList.remove("show");
  backdrop.classList.remove("show");
  modalDiv.classList.toggle("hide");
  backdrop.classList.toggle("hide");
}

openButton.addEventListener("click", toggleModal);
closeButton.addEventListener("click", closeModal);

