'use strict';
document.querySelector('.dice').classList.add('hidden');

const player002 = document.getElementById('score--1');
const player001 = document.getElementById('score--0');
player001.textContent = 0;
player002.textContent = 0;

const player001Active = document.querySelector('.player--0');
const player002Active = document.querySelector('.player--1');

let currentScorePlayer = 0;
let switchPlayer = 1;
document.querySelector('.btn--roll').addEventListener('click', function () {
  const diceNumber = Math.floor(Math.random() * 6) + 1;
  let imageUrl = 'dice-' + diceNumber + '.png';
  document.querySelector('.dice').src = imageUrl;
  document.querySelector('.dice').classList.remove('hidden');

  if (switchPlayer % 2 === 1) {
    if (diceNumber === 1) {
      document.getElementById('current--0').textContent = 0;
      player001Active.classList.toggle('player--active');
      player002Active.classList.toggle('player--active');
      currentScorePlayer = 0;
      switchPlayer++;
    } else {
      currentScorePlayer = currentScorePlayer + diceNumber;
      document.getElementById('current--0').textContent = currentScorePlayer;
    }
  } else {
    if (diceNumber === 1) {
      document.getElementById('current--1').textContent = 0;
      player001Active.classList.toggle('player--active');
      player002Active.classList.toggle('player--active');
      currentScorePlayer = 0;
      switchPlayer++;
    } else {
      currentScorePlayer = currentScorePlayer + diceNumber;
      document.getElementById('current--1').textContent = currentScorePlayer;
    }
  }
});

document.querySelector('.btn--hold').addEventListener('click', function () {
  if (switchPlayer % 2 === 1) {
    player001Active.classList.toggle('player--active');
    player002Active.classList.toggle('player--active');
    player001.textContent = Number(player001.textContent) + currentScorePlayer;
    document.getElementById('current--0').textContent = 0;
  } else {
    player002.textContent = Number(player002.textContent) + currentScorePlayer;
    document.getElementById('current--1').textContent = 0;
  }
  currentScorePlayer = 0;
  switchPlayer++;
});
