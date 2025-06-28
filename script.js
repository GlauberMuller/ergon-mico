document.getElementById('checkin-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const formData = new FormData(this);
  const data = {};
  formData.forEach((value, key) => data[key] = value);

  fetch("SUA_WEBHOOK_URL_AQUI", {
    method: "POST",
    body: new URLSearchParams(data),
  })
  .then(response => response.text())
  .then(message => {
    document.getElementById('confirmation').textContent = message;
    document.getElementById('confirmation').classList.remove('hidden');
    this.reset();
  })
  .catch(error => {
    console.error("Erro ao enviar:", error);
    document.getElementById('confirmation').textContent = "Erro ao enviar check-in.";
    document.getElementById('confirmation').classList.remove('hidden');
  });
});
