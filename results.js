const startBtn = document.querySelector("#heroBtn");
const hero = document.querySelector(".hero-section ");
const form = document.querySelector(".quiz-container");

startBtn.addEventListener("click", () => {
  hero.classList.remove("show");
  form.classList.add("show");
});

//  Start Quiz
let currentStep = 1;

function nextStep(e) {
  e.preventDefault();
  const currentStepElement = document.getElementById(`step${currentStep}`);
  currentStepElement.style.display = "none";

  currentStep++;
  const nextStepElement = document.getElementById(`step${currentStep}`);
  if (nextStepElement) {
    nextStepElement.style.display = "block";
  } else {
    alert("End of quiz");
  }
}

function submitQuiz(e) {
  e.preventDefault();
  //  Something happens

  window.location.href = "shop.html";
}
