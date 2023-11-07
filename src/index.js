import galleryItems from './js/gallery-items';
import refs from './js/refs';
import createGalleryItemsMarkup from './js/markup-creation';
import { onGalleryContainerClick } from './js/on-gallery-click';
import { onCloseModal } from './js/modal';

refs.galleryContainer.innerHTML = createGalleryItemsMarkup(galleryItems);

refs.galleryContainer.addEventListener('click', onGalleryContainerClick);
refs.lightboxOverlay.addEventListener('click', onCloseModal);
refs.closeLightboxBtnEl.addEventListener('click', onCloseModal);
