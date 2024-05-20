const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

nameInput.addEventListener('input', () => {
  const content = nameInput.value.trim() || 'Anonymous';
  nameOutput.textContent = content;
});
