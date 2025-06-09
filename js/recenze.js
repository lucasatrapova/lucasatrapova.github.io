document.addEventListener("DOMContentLoaded", function () {
  const showMoreBtn = document.getElementById("show-more-btn");
  const hiddenReviews = document.querySelectorAll(".review-card.hidden");
  const allReviews = document.querySelectorAll(".review-card");
  const totalReviewsCount = document.getElementById("total-reviews-count");
  const averageRating = document.getElementById("average-rating");
  const averageStars = document.getElementById("average-stars");
  const userReviewsCount = document.getElementById("user-reviews-count");
  const reviewForm = document.getElementById("review-form");

  let userReviewCounter = 0;
  let ratings = [];

  // Inicializace - skryj vše kromě prvních 3 recenzí
  function showInitialReviews() {
    allReviews.forEach((review, index) => {
      review.classList.toggle("hidden", index >= 3);
    });
    showMoreBtn.textContent = "Zobrazit více";
  }

  showInitialReviews();

  showMoreBtn.addEventListener("click", () => {
    const isExpanded = showMoreBtn.textContent === "Skrýt recenze";
    if (isExpanded) {
      showInitialReviews();
    } else {
      allReviews.forEach((r) => r.classList.remove("hidden"));
      showMoreBtn.textContent = "Skrýt recenze";
    }
  });

  reviewForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const ratingValue = parseInt(document.getElementById("rating").value);
    const comment = document.getElementById("comment").value;

    const newCard = document.createElement("div");
    newCard.className = "review-card";

    newCard.innerHTML = `
      <h4>${name}</h4>
      <p class="stars">${"⭐".repeat(ratingValue)}</p>
      <p>${comment}</p>
    `;

    document.querySelector(".reviews-grid").appendChild(newCard);

    // aktualizace počtů a průměru
    ratings.push(ratingValue);
    const allRatings = [...document.querySelectorAll(".review-card .stars")].map((el) => el.textContent.length);
    const avg = allRatings.reduce((a, b) => a + b, 0) / allRatings.length;

    totalReviewsCount.textContent = allRatings.length;
    userReviewCounter++;
    userReviewsCount.textContent = userReviewCounter;
    averageRating.textContent = avg.toFixed(1);
    averageStars.textContent = "⭐".repeat(Math.round(avg));

    reviewForm.reset();
  });
});
