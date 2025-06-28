document.getElementById('checkin-form').addEventListener('submit', function (e) {
  e.preventDefault();

  // Pega os dados do formulário
  const formData = new FormData(this);
  const data = {};
  formData.forEach((value, key) => {
    data[key] = value;
  });

  console.log("Dados enviados:", data); // Para debug

  // Simula envio
  setTimeout(() => {
    document.getElementById('confirmation').classList.remove('hidden');
    this.reset();
  }, 800);

  // ⚠️ Para integração real, substitua o bloco acima por fetch() para Google App Script
  // Ex:
  // fetch("https://script.google.com/macros/s/SEU_WEBHOOK_URL/exec", {
  //   method: "POST",
  //   body: new URLSearchParams(data),
  // })
});
