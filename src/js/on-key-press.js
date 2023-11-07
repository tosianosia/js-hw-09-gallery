import { onCloseModal } from './modal';
import { imagesSrcArray } from './on-gallery-click';
import refs from './refs';

export default function onKeyPress(evt) {
  const ESC_KEY_CODE = 'Escape';
  const LEFT_KEY_CODE = 'ArrowLeft';
  const RIGHT_KEY_CODE = 'ArrowRight';

  if (evt.code === ESC_KEY_CODE) {
    onCloseModal();
  } else if (evt.code === LEFT_KEY_CODE) {
    onLeftKeyPress();
  } else if (evt.code === RIGHT_KEY_CODE) {
    onRightKeyPress();
  }
}

function onLeftKeyPress() {
  const indexOfCurrentImg = imagesSrcArray.indexOf(refs.lightboxImageEl.src);

  refs.lightboxImageEl.src =
    indexOfCurrentImg === 0
      ? imagesSrcArray[imagesSrcArray.length - 1]
      : imagesSrcArray[indexOfCurrentImg - 1];
}

function onRightKeyPress() {
  const indexOfCurrentImg = imagesSrcArray.indexOf(refs.lightboxImageEl.src);

  refs.lightboxImageEl.src =
    indexOfCurrentImg === imagesSrcArray.length - 1
      ? imagesSrcArray[0]
      : imagesSrcArray[indexOfCurrentImg + 1];
}
