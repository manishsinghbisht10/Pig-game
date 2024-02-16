'use strict';
document.querySelector('.dice').classList.add('hidden');

const player002 = document.getElementById('score--1');
const player001 = document.getElementById('score--0');
player001.textContent = 0;
player002.textContent = 0;

const player001Active = document.querySelector('.player--0');
const player002Active = document.querySelector('.player--1');
let isPlaying = true;
let currentScorePlayer = 0;
let switchPlayer = 1;
document.querySelector('.btn--roll').addEventListener('click', function () {
  if (isPlaying) {
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
  }
});

document.querySelector('.btn--hold').addEventListener('click', function () {
  if (isPlaying) {
    if (switchPlayer % 2 === 1) {
      player001Active.classList.toggle('player--active');
      player002Active.classList.toggle('player--active');
      player001.textContent =
        Number(player001.textContent) + currentScorePlayer;
      document.getElementById('current--0').textContent = 0;
      if (Number(player001.textContent) >= 100) {
        player001Active.classList.add('player--winner');
        player001Active.classList.remove('player--active');
        player002Active.classList.remove('player--active');
        isPlaying = false;
        document.querySelector('.dice').classList.add('hidden');
      }
    } else {
      player001Active.classList.toggle('player--active');
      player002Active.classList.toggle('player--active');
      player002.textContent =
        Number(player002.textContent) + currentScorePlayer;
      document.getElementById('current--1').textContent = 0;
      if (Number(player002.textContent) >= 100) {
        player002Active.classList.add('player--winner');
        player002Active.classList.remove('player--active');
        player001Active.classList.remove('player--active');
        isPlaying = false;
        document.querySelector('.dice').classList.add('hidden');
      }
    }
    currentScorePlayer = 0;
    switchPlayer++;
  }
});

document.querySelector('.btn--new').addEventListener('click', function () {
  console.log('hello');
  player001.textContent = 0;
  player002.textContent = 0;
  document.getElementById('current--0').textContent = 0;
  document.getElementById('current--1').textContent = 0;
  if (player002Active.classList.contains('player--active'))
    player002Active.classList.remove('player--active');
  if (!player001Active.classList.contains('player--active'))
    player001Active.classList.add('player--active');
  document.querySelector('.dice').classList.add('hidden');
  player001Active.classList.remove('player--winner');
  player002Active.classList.remove('player--winner');
  currentScorePlayer = 0;
  switchPlayer = 1;
  isPlaying = true;
});
