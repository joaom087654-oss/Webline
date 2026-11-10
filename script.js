
const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", () => {
    const opened = mainNav.classList.toggle("open");
    menuToggle.textContent = opened ? "✕" : "☰";
    menuToggle.setAttribute("aria-expanded", String(opened));
  });
}

const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const assunto = document.getElementById("assunto").value.trim() || "Contacto pelo website";
    const mensagem = document.getElementById("mensagem").value.trim();

    const body = `Nome: ${nome}\nE-mail: ${email}\n\nMensagem:\n${mensagem}`;
    const mailto = `mailto:info@webline.ao?subject=${encodeURIComponent(assunto)}&body=${encodeURIComponent(body)}`;
    const status = document.getElementById("formMessage");
    if (status) status.textContent = "A abrir a aplicação de e-mail para enviar a sua mensagem...";
    window.location.href = mailto;
  });
}

const newsletterForm = document.getElementById("newsletterForm");
if (newsletterForm) {
  newsletterForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const message = document.getElementById("newsletterMessage");
    if (message) message.textContent = "Obrigado! A subscrição demonstrativa foi registada nesta página.";
    newsletterForm.reset();
  });
}
