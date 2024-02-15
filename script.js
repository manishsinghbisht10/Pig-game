'use strict';
document.querySelector('.dice').classList.add('hidden');

const player002 = document.getElementById('score--1');
const player001 = document.getElementById('score--0');
player001.textContent = 0;
player002.textContent = 0;

let currentScorePlayer = 0;

document.querySelector('.btn--roll').addEventListener('click', function () {
  const diceNumber = Math.floor(Math.random() * 6) + 1;
  let imageUrl = 'dice-' + diceNumber + '.png';
  document.querySelector('.dice').src = imageUrl;
  document.querySelector('.dice').classList.remove('hidden');

  if (diceNumber === 1) {
    currentScorePlayer == 0;
    document.getElementById('current--0').textContent = 0;
  } else {
    currentScorePlayer = currentScorePlayer + diceNumber;
    document.getElementById('current--0').textContent = currentScorePlayer;
  }
});

document.querySelector('.btn--hold').addEventListener('click', function () {
  player001.textContent = Number(player001.textContent) + currentScorePlayer;
  currentScorePlayer = 0;
  document.getElementById('current--0').textContent = 0;
});
