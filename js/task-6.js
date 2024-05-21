function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controls = document.getElementById('controls');
const input = controls.querySelector('input');
const createButton = controls.querySelector('button[data-create]');
const destroyButton = controls.querySelector('button[data-destroy]');
const container = document.getElementById('boxes');

function createBoxes(amount) {
  const fragment = document.createDocumentFragment();
  let size = 30;

  for (let i = 0; i < amount; i++) {
    const div = document.createElement('div');
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    div.style.backgroundColor = getRandomHexColor();
    div.setAttribute('class', 'box');
    fragment.appendChild(div);
    size += 10;
  }

  container.appendChild(fragment);
}

function destroyBoxes() {
  container.innerHTML = '';
}

function onCreate() {
  const amount = parseInt(input.value);

  if (amount >= 1 && amount <= 100) {
    destroyBoxes();
    createBoxes(amount);
    input.value = '';
  }
}

function onDestroy() {
  destroyBoxes();
}

createButton.addEventListener('click', onCreate);
destroyButton.addEventListener('click', onDestroy);
