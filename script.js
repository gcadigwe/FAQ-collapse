const buttons = document.querySelectorAll(".fa-toggle");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    button.parentNode.classList.toggle("active");
  });
});
