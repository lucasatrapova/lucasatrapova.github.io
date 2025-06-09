

//---------------------------------------------------------------Sticky navigace scroll------------
 // Změna navbaru a loga při scrollu
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  const logo = document.getElementById("logo2");
  
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
    logo.src = "./img/logo.svg";  // bez středníku v řetězci!
  } else {
    navbar.classList.remove("scrolled");
    logo.src = "./img/logo-oposite.svg"; // původní logo
  }
});


window.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".hero-images .clickable-image");
  const hero = document.getElementById("hero");

  images.forEach(img => {
    img.addEventListener("click", () => {
      // Odebrat aktivní třídu všem obrázkům
      images.forEach(i => i.classList.remove("active"));
      // Přidat aktivní třídu kliknutému obrázku
      img.classList.add("active");

      // Změnit pozadí hero sekce podle data-bg atributu
      const bgUrl = img.getAttribute("data-bg");
      hero.style.backgroundImage = `url('${bgUrl}')`;
    });
  });
});

 document.addEventListener("DOMContentLoaded", function () {
    var navLinks = document.querySelectorAll(".nav-link");
    var navbarCollapse = document.getElementById("navbarNav");

    navLinks.forEach(function (link) {
      link.addEventListener("click", function () {
        if (window.innerWidth < 992) {
          var collapse = bootstrap.Collapse.getInstance(navbarCollapse);
          if (collapse) {
            collapse.hide();
          }
        }
      });
    });
  });
//--------------------------------------rezervace----------------------------

  const arrivalInput = document.getElementById('arrivalDate');
  const departureInput = document.getElementById('departureDate');

  arrivalInput.addEventListener('change', () => {
    const arrivalDate = arrivalInput.value;
    departureInput.min = arrivalDate;

    // Pokud uživatel měl dříve zvolený odjezd dřív, než nový příjezd
    if (departureInput.value && departureInput.value < arrivalDate) {
      departureInput.value = '';
    }
  });
//-------------------------------------------------------------------pokoje------------------------

const carousel = document.getElementById('roomsCarousel');
const cards = carousel.querySelectorAll('.room-card');
const cardWidth = cards[0].offsetWidth + 16; // šířka karty + margin (8px z každé strany)
const totalCards = cards.length;

let currentIndex = 0;

function scrollToIndex(index) {
  carousel.scrollTo({
    left: cardWidth * index,
    behavior: 'smooth'
  });
}

function prev() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = totalCards - 3; // protože vidíš 3 karty, tak index max = total-3
  }
  scrollToIndex(currentIndex);
}

function next() {
  currentIndex++;
  if (currentIndex > totalCards - 3) {
    currentIndex = 0;
  }
  scrollToIndex(currentIndex);
}

document.querySelector('.carousel-control-prev').addEventListener('click', prev);
document.querySelector('.carousel-control-next').addEventListener('click', next);



//-------------------------------------------------------------------------ZLEVNĚNÉ UBYTOVÁNÍ-----------

//--------------------------------------------------------------hotelovy servis---------------------
function openModal(service) {
  const modal = document.getElementById('modal');
  const img = document.getElementById('modal-img');
  const title = document.getElementById('modal-title');
  const desc = document.getElementById('modal-desc');

  switch (service) {
    case 'wellness':
      img.src = 'img/wellness2.jpg';
      title.textContent = 'Wellness & Relax';
      desc.innerHTML = `
        Naše wellness zóna je ideálním místem pro <strong>relaxaci a regeneraci</strong> těla i mysli.<br><br>
        Nabízíme několik typů saun – klasickou finskou saunu s vysokou teplotou pro hluboké prohřátí organismu, <em>bio saunu</em> s nižší teplotou a jemnou aromaterapií, a také infrasaunu, která šetrně ohřívá tělo a je vhodná i pro osoby s citlivější pokožkou nebo klouby.<br><br>
        Součástí wellness je i klidová místnost s pohodlnými lehátky a příjemnou atmosférou, kde si můžete odpočinout mezi jednotlivými procedurami.<br><br>
        V naší nabídce najdete také různé druhy masáží – od klasických relaxačních přes sportovní až po aromaterapeutické, které využívají přírodní esenciální oleje pro maximální uvolnění.<br><br>
        Masáže provádějí zkušení terapeuti, kteří se přizpůsobí vašim potřebám. Rezervaci na masáže si můžete jednoduše domluvit přímo na hotelové recepci nebo prostřednictvím online formuláře.<br><br>
        Dopřejte si zasloužený odpočinek a nechte se hýčkat v příjemném prostředí našeho wellness centra.
      `;
      break;

    case 'kurty':
      img.src = 'img/kurty.jpg';
      title.textContent = 'Sportovní kurty';
      desc.innerHTML = `
        Během pobytu u nás mají všichni hosté možnost zdarma využívat sportovní zázemí hotelu.<br><br>
        K dispozici jsou venkovní tenisové kurty a vnitřní prostory pro badminton, které jsou ideální jak pro rekreační hru, tak i pro aktivní trénink.<br><br>
        Rakety a míčky vám rádi zapůjčíme na recepci, takže si můžete hru užít i bez vlastního vybavení.<br><br>
        Sportovní aktivity si můžete zarezervovat dopředu, abyste měli jistotu volného termínu.<br><br>
        Po aktivním výkonu si pak můžete odpočinout ve wellness zóně nebo si vychutnat drink na hotelové terase.<br><br>
        Pobyt u nás tak není jen o relaxaci, ale i o pohybu a zábavě na čerstvém vzduchu.
      `;
      break;

    case 'restaurace':
      img.src = 'img/restaurace.jpg';
      title.textContent = 'Naše restaurace';
      desc.innerHTML = `
        Elegantní restaurace s výhledem na park nabízí tradiční i moderní českou kuchyni připravovanou z čerstvých a kvalitních surovin.<br><br>
        Naši kuchaři kladou důraz na poctivé domácí recepty i lehčí sezónní speciality, které potěší každého gurmána.<br><br>
        <strong>Snídaně</strong> se podávají formou bohatého bufetu každý den od 7:30 do 10:00 a zahrnují teplé i studené pokrmy, čerstvé pečivo, ovoce, domácí koláče, cereálie i výběr nápojů včetně kávy a čajů.<br><br>
        <strong>Obědy</strong> jsou k dispozici od 12:00 do 14:00 formou denního menu nebo výběrem z jídelního lístku. Nabízíme i vegetariánské varianty a lehká jídla vhodná po wellness či sportu.<br><br>
        <strong>Večeře</strong> si můžete vychutnat od 18:00 do 21:00 v klidné atmosféře restaurace nebo na venkovní terase s výhledem.<br><br>
        Nabízíme výběr specialit à la carte, degustační menu i doporučená vína od lokálních vinařů.<br><br>
        Na přání rádi připravíme jídla pro speciální diety či alergie – stačí nás předem informovat.
      `;
      break;

    case 'parkovani':
      img.src = 'img/parkovani.jpg';
      title.textContent = 'Parkování u hotelu';
      desc.innerHTML = `
        Pro hosty máme k dispozici prostorné a bezpečné parkoviště přímo před hotelem i kryté garáže, které ocení zejména v nepříznivém počasí.<br><br>
        Celý areál parkování je nepřetržitě monitorován kamerovým systémem, takže se nemusíte obávat o svůj vůz.<br><br>
        Parkování je pro všechny ubytované hosty zcela zdarma po celou dobu pobytu.<br><br>
        Pro elektromobily nabízíme navíc možnost dobíjení přímo v areálu hotelu.<br><br>
        Díky snadné dostupnosti parkovacích míst a přímému vstupu do hotelu si můžete užít pohodlný příjezd i odjezd bez zbytečného stresu.
      `;
      break;

    case 'bazen':
      img.src = 'img/bazen.jpg';
      title.textContent = 'Vyhřívaný bazén';
      desc.innerHTML = `
        Náš vyhřívaný bazén je ideálním místem pro relaxaci i aktivní odpočinek.<br><br>
        Ráno si v něm můžete dopřát osvěžující plavání, které nastartuje váš den, zatímco večer poslouží jako perfektní prostor pro zklidnění těla i mysli.<br><br>
        Teplota vody je udržována na příjemné úrovni po celý rok, takže si pobyt v bazénu užijete bez ohledu na počasí.<br><br>
        Součástí bazénové zóny jsou pohodlná lehátka k odpočinku a atmosféru dokresluje relaxační hudba a tlumené osvětlení.<br><br>
        Bazén je přístupný pouze hotelovým hostům, což zajišťuje klid a dostatek prostoru k nerušenému pobytu.<br><br>
        V letních měsících je navíc možné otevřít přímý vstup na sluneční terasu s výhledem do přírody.
      `;
      break;

    case 'wifi':
      img.src = 'img/relax.jpg';
      title.textContent = 'Wi-Fi zdarma';
      desc.innerHTML = `
        Nabízíme vám stabilní a rychlé Wi-Fi připojení dostupné ve všech pokojích i společných prostorách hotelu.<br><br>
        Ať už pracujete, surfujete po internetu nebo streamujete své oblíbené pořady, naše síť zajistí plynulé a spolehlivé připojení bez výpadků.<br><br>
        Navíc je přístup k internetu v ceně pobytu, takže se můžete kdykoliv snadno připojit bez dalších poplatků.
      `;
      break;
  }

  modal.style.display = 'block';
}

function closeModal() {
  document.getElementById('modal').style.display = 'none';

}

//----------------------------------------------------------------------RECENZE---------------------
document.addEventListener('DOMContentLoaded', function () {
  const showMoreBtn = document.getElementById('show-more-btn');

  showMoreBtn.addEventListener('click', function () {
    const hiddenReviews = document.querySelectorAll('.review-card.hidden');
    
    hiddenReviews.forEach(card => {
      card.classList.remove('hidden');
    });
  });
});


//---------------------------------------------------------------faq----------------------------


//---------------------------------------------------------------formular na rezervaci--------
