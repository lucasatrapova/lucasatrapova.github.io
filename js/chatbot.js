const chatbotToggle = document.getElementById("chatbot-toggle");
const chatbotBox = document.getElementById("chatbot-box");
const chatbotForm = document.getElementById("chatbot-form");
const chatbotInput = document.getElementById("chatbot-input");
const chatbotMessages = document.getElementById("chatbot-messages");
const chatOptions = document.querySelectorAll(".chat-option");

chatbotToggle.addEventListener("click", () => {
  chatbotBox.classList.toggle("hidden");
});

const replies = {
  "ubytování": "Naše ubytování nabízí komfortní pokoje včetně Deluxe apartmánů s výhledem a wellness.",
  "wellness": "Wellness centrum zahrnuje vířivku, saunu a masáže. Otevřeno denně od 10:00 do 22:00.",
  "check-in": "Check-in je možný od 14:00, check-out do 10:00.",
  "check-in / check-out": "Check-in je od 14:00, check-out do 10:00.",
  "lokalita": "Náš hotel se nachází v Senohrabech, jen 20 minut od Prahy, s krásným výhledem a přírodou.",
  "doprava": "Doprava je možná autem nebo vlakem. Parkování je zdarma u hotelu."
};

function appendMessage(text, sender) {
  const msg = document.createElement("div");
  msg.className = "message " + sender;
  msg.innerText = text;
  chatbotMessages.appendChild(msg);
  chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

chatOptions.forEach(btn => {
  btn.addEventListener("click", () => {
    const question = btn.innerText.toLowerCase();
    appendMessage(question, "user");
    for (let key in replies) {
      if (question.includes(key)) {
        setTimeout(() => appendMessage(replies[key], "bot"), 500);
        return;
      }
    }
    setTimeout(() => appendMessage("Omlouvám se, tomu úplně nerozumím.", "bot"), 500);
  });
});

chatbotForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const msg = chatbotInput.value.trim();
  if (!msg) return;
  appendMessage(msg, "user");
  chatbotInput.value = "";

  // Odpověď podle obsahu webu
  const key = Object.keys(replies).find(k => msg.toLowerCase().includes(k));
  if (key) {
    setTimeout(() => appendMessage(replies[key], "bot"), 500);
  } else {
    setTimeout(() => appendMessage("Odpověď zatím nemám, zkuste jiný dotaz nebo nám napište přes formulář.", "bot"), 600);
  }
});