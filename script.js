document.getElementById('checkin-form').addEventListener('submit', function (e) {
  e.preventDefault();
  const mood = document.getElementById('mood').value;
  const stress = document.getElementById('stress').value;
  const sleep = document.getElementById('sleep').value;
  const pain = document.getElementById('pain').checked;
  const notes = document.getElementById('notes').value;

  console.log("Dados do check-in:", { mood, stress, sleep, pain, notes });

  document.getElementById('confirmation').classList.remove('hidden');
});
