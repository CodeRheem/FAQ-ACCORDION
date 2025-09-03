const faqQuestions = document.querySelectorAll(".addition");

faqQuestions.forEach((question) => {
  question.addEventListener("click", () => {
    question.classList.toggle("active");
    question.nextElementSibling.classList.toggle("show");
    if (question.lastElementChild.innerText === "+") {
      question.lastElementChild.innerText = "-";
      question.lastElementChild.classList.add("bg-purple-950");
      question.lastElementChild.classList.remove("bg-purple-600");
    } else {
      question.lastElementChild.innerText = "+";
      question.lastElementChild.classList.add("bg-purple-600");
      question.lastElementChild.classList.remove("bg-purple-950");
    }
  });
});


