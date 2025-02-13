const surpriseButton = document.getElementById('surpriseButton');
const surpriseMessage = document.getElementById('surpriseMessage');

surpriseButton.addEventListener('click', () => {
  surpriseMessage.classList.remove('hidden');
  surpriseButton.textContent = 'Surprise! 🎉';
});