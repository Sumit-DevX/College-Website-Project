document.getElementById('whatsappBtn').addEventListener('click', (e) => {
  e.preventDefault();
  window.open('https://wa.me/1234567890', '_blank');
});

document.getElementById('callBtn').addEventListener('click', (e) => {
  e.preventDefault();
  window.location.href = 'tel:+1234567890';
});
