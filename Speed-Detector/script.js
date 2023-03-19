//integrating speedLimitChecker function

function speedLimitChecker() {
  const speedCheck = document.getElementById("speedCheck").value;
  const speedLimit = 70;
  const kmPerDemeritPoint = 5;
  let demeritPoints = 0;
  let resultDiv = document.getElementById("resultDiv");

  if (speedCheck < speedLimit + kmPerDemeritPoint) {
    resultDiv.innerHTML = "Ok";
  } else {
    demeritPoints = Math.floor((speedCheck - speedLimit) / kmPerDemeritPoint);
    if (demeritPoints > 12) {
      resultDiv.innerHTML = "License suspended";
      resultDiv.style.color = "red";
    } else {
      resultDiv.innerHTML = "Points: " + demeritPoints;
    }
  }
}