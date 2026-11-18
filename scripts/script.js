'use strict';

// Прекод не предоставлен: обработчики сохраняют принятые в нём классы.
const cards = document.querySelectorAll('.card');
cards.forEach((card) => {
  const iconButton = card.querySelector('.card__icon-button');
  const likeButton = card.querySelector('.card__like-button');
  const icon = card.querySelector('.like-icon');
  const text = likeButton.querySelector('.button_text');
  const title = card.querySelector('.card__title').textContent;

  function toggleLike() {
    const liked = icon.classList.toggle('is-liked');
    iconButton.setAttribute('aria-pressed', String(liked));
    likeButton.setAttribute('aria-pressed', String(liked));
    iconButton.setAttribute('aria-label', `${liked ? 'Убрать лайк' : 'Поставить лайк'}: ${title}`);
    text.textContent = liked ? 'Unlike' : 'Like';
  }

  iconButton.addEventListener('click', toggleLike);
  likeButton.addEventListener('click', toggleLike);
});

const saveButton = document.querySelector('.save-button');
const dialog = document.querySelector('.dialog');
saveButton.addEventListener('click', () => dialog.showModal());
dialog.addEventListener('close', () => saveButton.focus());
