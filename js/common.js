/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/js/modules/common-global.js
if (!window.isTouchDevice) {
	window.isTouchDevice = () => {
		const touchClass = "is-touch";
		["load", "resize"].forEach((evt) =>
			window.addEventListener(evt, () => {
				let isTouch = false;
				if ((window.PointerEvent && "maxTouchPoints" in navigator) || (window.PointerEvent && "msMaxTouchPoints" in navigator)) {
					// if Pointer Events are supported, just check maxTouchPoints
					if (navigator.maxTouchPoints > 0) {
						isTouch = true;
					}
				} else {
					// no Pointer Events...
					if (window.matchMedia && window.matchMedia("(any-pointer:coarse)").matches) {
						// check for any-pointer:coarse which mostly means touchscreen
						isTouch = true;
					} else if (window.TouchEvent || "ontouchstart" in window) {
						// last resort - check for exposed touch events API / event handler
						isTouch = true;
					}
				}
				document.body.classList[isTouch ? "add" : "remove"](touchClass);
			})
		);
	};
}

;// CONCATENATED MODULE: ./src/js/modules/common.js
function stickyHeader() {
	const header = document.querySelector("header"),
		isOntopClass = "is-ontop",
		isStickyClass = "is-sticky",
		isHiddenClass = "is-hidden";

	if (!header) return;

	let lastScrollTop = 0;

	const handleScroll = () => {
		if (window.scrollY == 0) {
			header.classList.add(isOntopClass);
		}
		if (window.scrollY > 88) {
			if (window.scrollY > lastScrollTop || 0) {
				header.classList.remove(isOntopClass);
				header.classList.add(isHiddenClass);
			} else if (window.scrollY < lastScrollTop) {
				header.classList.add(isStickyClass);
				header.classList.remove(isHiddenClass);
			}
		}
		lastScrollTop = window.scrollY;
	};

	window.addEventListener("scroll", handleScroll);
}

function backgroundToggler() {
	const togglerButton = document.querySelector(".about__body-button"),
		backgroundBlock = document.querySelector(".about-bgr__toggle"),
		isActiveClass = "is-hovered";

	if (!togglerButton || !backgroundBlock) return;

	togglerButton.addEventListener("mouseenter", () => {
		backgroundBlock.classList.toggle(isActiveClass);
	});
	togglerButton.addEventListener("mouseleave", () => {
		backgroundBlock.classList.toggle(isActiveClass);
	});
}

;// CONCATENATED MODULE: ./src/js/common.js


// import { useDynamicAdapt } from "./modules/common-dynamicAdapt.js";
// import { fileInputInit } from "./modules/form-custom-file-input.js";
// import "./modules/form-custom-select.js";
// import * as form from "./modules/form-submit.js";
// import { globalForm } from "./modules/form-submit.js";
// import "./modules/common-cookies.js";

addEventListener("DOMContentLoaded", () => {
	isTouchDevice();
	stickyHeader();
	backgroundToggler();



// 	showHidden();
// 	setActive();
// 	catalogItemGalleriesInit();
// 	catalogItemGalleryHandler();
// 	useDynamicAdapt();
// 	setFavourites();
// 	loadMore();
// 	selectsInit();
// 	fileInputInit();
// 	tagsCollapseHandler();

// 	fn.stickyHeader();
// 	fn.hamburgerMenu();
// 	fn.submenuPostionOnOverflowNav();
// 	fn.modalHandler();
// 	fn.edgePopupHandler();
// 	fn.sectionClose();
// 	fn.collapseHandler();
// 	fn.collapseTargetHandler();
// 	fn.searchForm();
// 	fn.inputFetch();
// 	fn.inputQuickSearch();
// 	fn.accordion();
// 	fn.accordionFooter();
// 	fn.dropdownShow();
// 	fn.dropdownClose();
// 	fn.contentGalleryPopup();
// 	fn.changeAmount();
// 	fn.getContent();
// 	fn.clickAndDrag();
// 	fn.scrollToTop();

// 	form.submitPrevent();
// 	form.maskHandler();

// 	Object.assign(window, { globalForm });
// 	globalForm.validation();
});

/******/ })()
;