// Kontakt formasi yuborish
document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name && email && message) {
        alert(`Rahmat, ${name}! Sizning xabaringiz qabul qilindi.`);
        document.getElementById("contactForm").reset();
    } else {
        alert("Iltimos, barcha maydonlarni to‘ldiring.");
    }
});
