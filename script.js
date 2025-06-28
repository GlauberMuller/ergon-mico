document.getElementById("checkin-form").addEventListener("submit", function(event) {
  event.preventDefault();

  const formData = new FormData(event.target);
  const entries = Object.fromEntries(formData.entries());

  entries["dor"] = formData.get("dor") ? "Sim" : "Não";

  const row = [
    entries.humor,
    entries.estresse,
    entries.sono,
    entries.dor,
    entries.alimentacao,
    entries.atividade,
    entries.rede_apoio,
    entries.inclusao,
    entries.energia,
    entries.motivacao,
    entries.produtividade,
    entries.observacoes
  ];

  google.script.run.withSuccessHandler(() => {
    const confirmation = document.getElementById("confirmation");
    confirmation.textContent = "✅ Check-in enviado com sucesso!";
    confirmation.classList.remove("hidden");
    confirmation.classList.add("success");
    document.getElementById("checkin-form").reset();
  }).appendRowToSheet(row);
});
