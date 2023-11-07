import refs from './refs';
import onKeyPress from './on-key-press';

export const onOpenModal = function () {
  window.addEventListener('keydown', onKeyPress);
  refs.lightboxContainer.classList.add('is-open');
};

export const onCloseModal = function () {
  window.removeEventListener('keydown', onKeyPress);
  refs.lightboxContainer.classList.remove('is-open');

  refs.lightboxImageEl.src = '';
  refs.lightboxImageEl.alt = '';
};
