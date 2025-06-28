document.getElementById("checkin-form").addEventListener("submit", function(event) {
  event.preventDefault();

  const formData = new FormData(event.target);
  const entries = Object.fromEntries(formData.entries());

  // Converte checkbox manualmente
  entries["dor"] = formData.get("dor") ? "Sim" : "Não";

  const row = Object.values(entries);

  google.script.run.withSuccessHandler(() => {
    const confirmation = document.getElementById("confirmation");
    confirmation.textContent = "✅ Check-in enviado com sucesso!";
    confirmation.classList.remove("hidden");
    confirmation.classList.add("success");
    document.getElementById("checkin-form").reset();
  }).appendRowToSheet(row);
});
