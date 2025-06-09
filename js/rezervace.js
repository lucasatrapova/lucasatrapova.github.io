function vypocitejNociACenu() {
  const prijezd = new Date(document.getElementById('prijezd').value);
  const odjezd = new Date(document.getElementById('odjezd').value);
  const pocetOsob = parseInt(document.getElementById('pocet').value) || 0;
  const pokoj = document.getElementById('pokoj').value;

  const ceny = {
    'standard': 1500,
    'superior': 1800,
    'deluxe': 1799,
    'rodinny': 2500,
    'suite': 3200
  };

  let vysledekDiv = document.getElementById('vypocet-vysledek');
  let hiddenNoci = document.getElementById('pocet_noci');
  let hiddenCena = document.getElementById('cena_celkem');

  if (!isNaN(prijezd) && !isNaN(odjezd) && odjezd > prijezd && pocetOsob > 0) {
    const rozdil = (odjezd - prijezd) / (1000 * 60 * 60 * 24);
    const cenaZaNoc = ceny[pokoj] || 0;
    const celkovaCena = cenaZaNoc * rozdil * pocetOsob;

    vysledekDiv.innerText = `Počet nocí: ${rozdil}, Cena celkem: ${celkovaCena.toLocaleString('cs-CZ')} Kč`;
    hiddenNoci.value = rozdil;
    hiddenCena.value = celkovaCena;
  } else {
    vysledekDiv.innerText = "";
    hiddenNoci.value = "";
    hiddenCena.value = "";
  }
}



const form = document.getElementById('rezervacniForm');
  const potvrzeniDiv = document.getElementById('potvrzeni');

  form.addEventListener('submit', function(e) {
    e.preventDefault(); // Zabrání reloadu stránky

    potvrzeniDiv.textContent = 'Rezervace byla úspěšně odeslána. Děkujeme!';
    
    // form.reset();  -- zatím zakomentované, nech formulář beze změny
  });