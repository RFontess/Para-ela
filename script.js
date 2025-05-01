// Altere para a data de início do relacionamento
const startDate = new Date(2024, 9, 23, 20, 6, 0); 

function updateTimer() {
  const now = new Date();
  let diff = now - startDate;

  const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
  diff -= years * 1000 * 60 * 60 * 24 * 365.25;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  diff -= days * 1000 * 60 * 60 * 24;

  const hours = Math.floor(diff / (1000 * 60 * 60));
  diff -= hours * 1000 * 60 * 60;

  const minutes = Math.floor(diff / (1000 * 60));
  diff -= minutes * 1000 * 60;

  const seconds = Math.floor(diff / 1000);

  document.getElementById("timer").innerHTML =
    `<span class="highlight">${years}</span> anos,
     <span class="highlight">${days}</span> dias,
     <span class="highlight">${hours}</span>h
     <span class="highlight">${minutes}</span>min
     <span class="highlight">${seconds}</span>s`;
}

updateTimer();
setInterval(updateTimer, 1000);
