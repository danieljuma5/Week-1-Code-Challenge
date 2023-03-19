//Simple program that returns code
function calculateGrade() {
  //Get input element
  const scoreInput = document.getElementById("score");
  //Get value of input element
  const score = scoreInput.value;
  
  //Grade determination
  let grade;
  if (score > 79) {
    grade = "A";
  } else if (score >59) {
    grade = "B";
  } else if (score > 49) {
    grade = "C";
  } else if (score >= 40) {
    grade = "D";
  } else {
    grade = "E";
  }
  
  // Output the grade
  const resultElement = document.getElementById("result");
  resultElement.innerHTML = `The student's grade is ${grade}.`;
}