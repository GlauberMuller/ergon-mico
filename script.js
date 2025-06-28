document.querySelectorAll('.option').forEach(btn => {
  btn.addEventListener('click', () => {
    const parent = btn.closest('.question');
    const all = parent.querySelectorAll('.option');
    all.forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
    const input = parent.querySelector('input[type="hidden"]');
    input.value = btn.dataset.value;
  });
});

const form = document.getElementById('checkin-form');
const confirmation = document.getElementById('confirmation');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const entries = Object.fromEntries(formData.entries());
  
  const csvContent = generateCSV(entries);
  downloadCSV(csvContent);

  confirmation.textContent = '✅ Check-in enviado com sucesso!';
  confirmation.classList.remove('hidden');
  form.reset();
  document.querySelectorAll('.selected').forEach(btn => btn.classList.remove('selected'));
});

function generateCSV(data) {
  let headers = Object.keys(data).join(',');
  let values = Object.values(data).map(v => `"${v}"`).join(',');
  return `${headers}\n${values}`;
}

function downloadCSV(content) {
  const blob = new Blob([content], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  link.setAttribute('href', URL.createObjectURL(blob));
  link.setAttribute('download', `checkin-${Date.now()}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
