
  const countdownEl = document.getElementById("countdown");
  const targetDate = new Date("2025-06-19T09:35:00").getTime();

  function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance <= 0) {
      countdownEl.textContent = "Nabídka vypršela.";
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdownEl.textContent = `Nabídka platí ještě: ${days}d ${hours}h ${minutes}m ${seconds}s`;
  }

  updateCountdown(); // první zavolání hned
  setInterval(updateCountdown, 1000); // každou sekundu
