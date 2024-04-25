// core version + navigation, pagination modules:
import Swiper from "swiper";
import { Autoplay, Navigation, Pagination, Keyboard } from "swiper/modules";

if (!window.carouselsInit) {
	window.carouselsInit = (el = false) => {
		const swiperProject = new Swiper(".swiper.carousel-project", {
			modules: [Autoplay, Navigation, Pagination, Keyboard],
			slidesPerView: "auto",
			centeredSlides: true,
			spaceBetween: 0,
			autoplay: {
				delay: 2500,
				pauseOnMouseEnter: true,
			},
			pagination: {
				el: ".swiper-pagination",
				clickable: true,
			},
			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev",
			},
			keyboard: {
				enabled: true,
			},
			breakpoints: {
				768: {
					spaceBetween: -20,
				},
				1024: {
					spaceBetween: -60,
				},
			},
		});

		const swiperPartners = new Swiper(".swiper.carousel-partners", {
			modules: [Autoplay, Keyboard],
			slidesPerView: 2,
			spaceBetween: 15,
			autoplay: {
				delay: 2500,
				pauseOnMouseEnter: true,
			},
			keyboard: {
				enabled: true,
			},
			breakpoints: {
				577: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				768: {
					slidesPerView: 4,
				},
				1024: {
					slidesPerView: 5,
					spaceBetween: 30,
				},
				1200: {
					slidesPerView: 7,
				},
			},
		});
	};
}
