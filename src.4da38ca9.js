parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"q5Rn":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var p=exports.default=[{preview:"https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg",description:"Hokkaido Flower"},{preview:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",description:"Container Haulage Freight"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",description:"Aerial Beach View"},{preview:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",original:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",description:"Flower Blooms"},{preview:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",original:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",description:"Alpine Mountains"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",description:"Mountain Lake Sailing"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",description:"Alpine Spring Meadows"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",description:"Nature Landscape"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",description:"Lighthouse Coast Sea"}];
},{}],"VyiV":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=exports.default={galleryContainer:document.querySelector(".js-gallery"),lightboxContainer:document.querySelector(".js-lightbox"),lightboxOverlay:document.querySelector(".js-lightbox div"),lightboxImageEl:document.querySelector(".js-lightbox img"),closeLightboxBtnEl:document.querySelector('[data-action="close-lightbox"]')};
},{}],"efvO":[function(require,module,exports) {
"use strict";function n(n){return n.map(function(n){var e=n.preview,a=n.original,r=n.description;return'\n    <li class="gallery__item">\n      <a\n        class="gallery__link"\n        href="'.concat(a,'"\n      >\n        <img\n          class="gallery__image"\n          src="').concat(e,'"\n          data-source="').concat(a,'"\n          alt="').concat(r,'"\n        />\n      </a>\n    </li>\n    ')}).join("")}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=n;
},{}],"bjhP":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=l;var r=require("./modal"),e=require("./on-gallery-click"),a=i(require("./refs"));function i(r){return r&&r.__esModule?r:{default:r}}function l(e){"Escape"===e.code?(0,r.onCloseModal)():"ArrowLeft"===e.code?t():"ArrowRight"===e.code&&c()}function t(){var r=e.imagesSrcArray.indexOf(a.default.lightboxImageEl.src);a.default.lightboxImageEl.src=0===r?e.imagesSrcArray[e.imagesSrcArray.length-1]:e.imagesSrcArray[r-1]}function c(){var r=e.imagesSrcArray.indexOf(a.default.lightboxImageEl.src);a.default.lightboxImageEl.src=r===e.imagesSrcArray.length-1?e.imagesSrcArray[0]:e.imagesSrcArray[r+1]}
},{"./modal":"RSqK","./on-gallery-click":"dOmj","./refs":"VyiV"}],"RSqK":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.onOpenModal=exports.onCloseModal=void 0;var e=t(require("./refs")),o=t(require("./on-key-press"));function t(e){return e&&e.__esModule?e:{default:e}}var n=exports.onOpenModal=function(){window.addEventListener("keydown",o.default),e.default.lightboxContainer.classList.add("is-open")},l=exports.onCloseModal=function(){window.removeEventListener("keydown",o.default),e.default.lightboxContainer.classList.remove("is-open"),e.default.lightboxImageEl.src="",e.default.lightboxImageEl.alt=""};
},{"./refs":"VyiV","./on-key-press":"bjhP"}],"dOmj":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.onGalleryContainerClick=exports.imagesSrcArray=void 0;var e=a(require("./refs")),r=require("./modal"),t=a(require("./gallery-items"));function a(e){return e&&e.__esModule?e:{default:e}}var l=exports.imagesSrcArray=[],o=exports.onGalleryContainerClick=function(a){if("IMG"===a.target.nodeName){a.preventDefault();var o=a.target.dataset.source,i=a.target.alt;e.default.lightboxImageEl.src=o,e.default.lightboxImageEl.alt=i,(0,r.onOpenModal)(),exports.imagesSrcArray=l=t.default.map(function(e){return e.original})}};
},{"./refs":"VyiV","./modal":"RSqK","./gallery-items":"q5Rn"}],"Focm":[function(require,module,exports) {
"use strict";var e=i(require("./js/gallery-items")),l=i(require("./js/refs")),r=i(require("./js/markup-creation")),a=require("./js/on-gallery-click"),t=require("./js/modal");function i(e){return e&&e.__esModule?e:{default:e}}l.default.galleryContainer.innerHTML=(0,r.default)(e.default),l.default.galleryContainer.addEventListener("click",a.onGalleryContainerClick),l.default.lightboxOverlay.addEventListener("click",t.onCloseModal),l.default.closeLightboxBtnEl.addEventListener("click",t.onCloseModal);
},{"./js/gallery-items":"q5Rn","./js/refs":"VyiV","./js/markup-creation":"efvO","./js/on-gallery-click":"dOmj","./js/modal":"RSqK"}]},{},["Focm"], null)
//# sourceMappingURL=/src.4da38ca9.js.map