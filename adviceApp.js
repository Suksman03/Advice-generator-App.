
function loader(){
const quotes = document.getElementById("quotes");
const button = document.getElementById("circle");
const counterElement = document.getElementById("counter");
let counter = 1;

button.addEventListener("click", () => {
  fetch('https://api.adviceslip.com/advice')
    .then(response => response.json())
    .then(data => {
      const quote = data.slip.advice;
      quotes.innerHTML = `<p><h3>"${quote}"<h3></p>`;
    });
  
  counter++;
  counterElement.innerHTML = counter;
});
};
