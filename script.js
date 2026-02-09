const startBtn = document.getElementById("startBtn");
const welcomePage = document.getElementById("welcome-page");
const forecastPage = document.getElementById("forecast-page");

startBtn.addEventListener("click", () => {
  welcomePage.style.display = "none";
  forecastPage.style.display = "block";
});