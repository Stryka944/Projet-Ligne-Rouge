
document.addEventListener("DOMContentLoaded", () => {
    const listButtons = document.querySelectorAll("[data-list-action='add']");
    listButtons.forEach((btn) => {
        btn.addEventListener("click", () => {
            btn.textContent = "✔ Ajouté";
            btn.setAttribute("aria-label", "Retirer de Ma Liste");
            btn.disabled = true; // simple feedback pour l’instant
        });
    });

    const rowControls = document.querySelectorAll(".row-controls");
    rowControls.forEach((control) => {
        const prev = control.querySelector(".prev");
        const next = control.querySelector(".next");
        const listId = next.getAttribute("aria-controls");
        const list = document.getElementById(listId);

        if (list) {
            next.addEventListener("click", () => {
                list.scrollBy({ left: 300, behavior: "smooth" });
            });
            prev.addEventListener("click", () => {
                list.scrollBy({ left: -300, behavior: "smooth" });
            });
        }
    });

    const form = document.querySelector("#inscription form");
    if (form) {
        form.addEventListener("submit", (e) => {
            const pwd = form.querySelector("#password");
            const pwd2 = form.querySelector("#password2");

            if (pwd.value !== pwd2.value) {
                e.preventDefault();
                alert("Les mots de passe ne correspondent pas !");
                pwd2.focus();
            }
        });
    }
});
