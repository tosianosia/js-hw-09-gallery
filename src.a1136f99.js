parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"q5Rn":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var p=exports.default=[{preview:"https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg",description:"Hokkaido Flower"},{preview:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",description:"Container Haulage Freight"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",description:"Aerial Beach View"},{preview:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",original:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",description:"Flower Blooms"},{preview:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",original:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",description:"Alpine Mountains"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",description:"Mountain Lake Sailing"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",description:"Alpine Spring Meadows"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",description:"Nature Landscape"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",description:"Lighthouse Coast Sea"}];
},{}],"Focm":[function(require,module,exports) {
"use strict";var e=t(require("./js/gallery-items"));function t(e){return e&&e.__esModule?e:{default:e}}console.log(e.default);var n={galleryContainer:document.querySelector(".js-gallery"),lightboxContainer:document.querySelector(".js-lightbox"),lightboxOverlay:document.querySelector(".js-lightbox div"),lightboxImageEl:document.querySelector(".js-lightbox img"),closeLightboxBtnEl:document.querySelector('[data-action="close-lightbox"]')},l=[];function o(e){return e.map(function(e){var t=e.preview,n=e.original,l=e.description;return'\n    <li class="gallery__item">\n      <a\n        class="gallery__link"\n        href="'.concat(n,'"\n      >\n        <img\n          class="gallery__image"\n          src="').concat(t,'"\n          data-source="').concat(n,'"\n          alt="').concat(l,'"\n        />\n      </a>\n    </li>\n    ')}).join("")}function i(t){if("IMG"===t.target.nodeName){t.preventDefault();var o=t.target.dataset.source,i=t.target.alt;n.lightboxImageEl.src=o,n.lightboxImageEl.alt=i,a(),l=e.default.map(function(e){return e.original})}}function a(){window.addEventListener("keydown",c),n.lightboxContainer.classList.add("is-open")}function r(){window.removeEventListener("keydown",c),n.lightboxContainer.classList.remove("is-open"),n.lightboxImageEl.src="",n.lightboxImageEl.alt=""}function c(e){"Escape"===e.code?r():"ArrowLeft"===e.code?g():"ArrowRight"===e.code&&s()}function g(){var e=l.indexOf(n.lightboxImageEl.src);n.lightboxImageEl.src=0===e?l[l.length-1]:l[e-1]}function s(){var e=l.indexOf(n.lightboxImageEl.src);n.lightboxImageEl.src=e===l.length-1?l[0]:l[e+1]}n.galleryContainer.innerHTML=o(e.default),n.galleryContainer.addEventListener("click",i),n.lightboxOverlay.addEventListener("click",r),n.closeLightboxBtnEl.addEventListener("click",r);
},{"./js/gallery-items":"q5Rn"}]},{},["Focm"], null)
//# sourceMappingURL=/src.a1136f99.js.map