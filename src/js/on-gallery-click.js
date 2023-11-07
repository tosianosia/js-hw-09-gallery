import refs from './refs';
import { onOpenModal } from './modal';
import galleryItems from './gallery-items';

export let imagesSrcArray = [];

export const onGalleryContainerClick = function (evt) {
  if (evt.target.nodeName !== 'IMG') {
    return;
  }

  evt.preventDefault();
  const lightboxImageSrc = evt.target.dataset.source;
  const lightboxImageDescr = evt.target.alt;

  refs.lightboxImageEl.src = lightboxImageSrc;
  refs.lightboxImageEl.alt = lightboxImageDescr;
  onOpenModal();
  imagesSrcArray = galleryItems.map(image => image.original);
};
