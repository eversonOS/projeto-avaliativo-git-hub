document.addEventListener("DOMContentLoaded", function () {
  const calculateButton = document.getElementById("calculate");
  const resultElement = document.getElementById("result");

  calculateButton.addEventListener("click", function () {
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value);

    if (isNaN(weight) || isNaN(height) || height <= 0) {
      resultElement.textContent = "Por favor, insira valores válidos.";
    } else {
      const bmi = calculateBMI(weight, height);
      resultElement.textContent = `Seu IMC é ${bmi.toFixed(2)}.`;
    }
  });

  function calculateBMI(weight, height) {
    return weight / (height * height);
  }
});
