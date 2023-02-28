/*
Документация по работе в шаблоне: 
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper, { Navigation, Pagination } from 'swiper';
/*
Основниые модули слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

// Стили Swiper
// Базовые стили
import "../../scss/base/swiper.scss";
// Полный набор стилей из scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Полный набор стилей из node_modules
// import 'swiper/css';

// Добавление классов слайдерам
// swiper главному блоку, swiper-wrapper оболочке, swiper-slide для слайдов
function bildSliders() {
	//BildSlider
	let sliders = document.querySelectorAll('[class*="__swiper"]:not(.swiper-wrapper)');
	if (sliders) {
		sliders.forEach(slider => {
			slider.parentElement.classList.add('swiper');
			slider.classList.add('swiper-wrapper');
			for (const slide of slider.children) {
				slide.classList.add('swiper-slide');
			}
		});
	}
}
// Инициализация слайдеров
function initSliders() {
	// Добавление классов слайдера
	// при необходимости отключить
	bildSliders();

	// Перечень слайдеров
	if (document.querySelector('.sale__slider')) {
		new Swiper('.sale__slider', {
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Pagination],
			/*
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/
         // scrollbarDraggable: true,
         // scrollbar: '.swiper-scrollbar',
         // scrollbarHide: true,
         // OSEdgeSwipeDetection: true,

        // mousewheel: false,

			observer: true,
			observeParents: true,
			slidesPerView: 4,
			spaceBetween: 20,
			autoHeight: true,
			speed: 800,
			// touchRatio: 5,
         // touchMoveStopPropagation: false,
			// simulateTouch: true,
         // touchStartForcePreventDefault: true,
			// loop: true,
			//preloadImages: false,
			//lazy: true,

			// Dotts
			pagination: {
			   el: '.slider-quality__pagging',
			   clickable: true,
            type: 'bullets',
            // dynamicBullets: true,
			},
        //  nested: true,
			// Arrows
         /*
			navigation: {
				nextEl: '.about__more .more__item_next',
				prevEl: '.about__more .more__item_prev',
			},
			*/
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 0,
					autoHeight: true,
				},
				472: {
					slidesPerView: 1.5,
					spaceBetween: 20,
				},
            596: {
					slidesPerView: 2.5,
					spaceBetween: 20,
				},
				768: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1347: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			},
			
			on: {
            
            touchStart: function () {
               
               
             },

			}
         
		});
      

	}

	if (document.querySelector('.rpg__slider')) {
		new Swiper('.rpg__slider', {
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Pagination],
			/*
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/
			observer: true,
			observeParents: true,
			slidesPerView: 3,
			spaceBetween: 33,
			autoHeight: true,
			speed: 800,
			//touchRatio: 0,
			//simulateTouch: false,
			//loop: true,
			//preloadImages: false,
			//lazy: true,
			// Dotts
			pagination: {
			   el: '.slider-rpg-quality__pagging',
			   // clickable: true,
            type: 'progressbar',
            // dynamicBullets: true,
            // clickable: true,
            //type: 'bullets',
			},
			// Arrows
         /*
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
         */
			/*
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 0,
					autoHeight: true,
				},
				472: {
					slidesPerView: 1.5,
					spaceBetween: 20,
				},
            596: {
					slidesPerView: 2.5,
					spaceBetween: 20,
				},
				768: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1347: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			},
         */
			
			on: {

			}
		});
	}

}
// Скролл на базе слайдера (по классу swiper_scroll для оболочки слайдера)
function initSlidersScroll() {
	// Добавление классов слайдера
	// при необходимости отключить
	bildSliders();

	let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
	if (sliderScrollItems.length > 0) {
		for (let index = 0; index < sliderScrollItems.length; index++) {
			const sliderScrollItem = sliderScrollItems[index];
			const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
			const sliderScroll = new Swiper(sliderScrollItem, {
				observer: true,
				observeParents: true,
				direction: 'vertical',
				slidesPerView: 'auto',
				freeMode: {
					enabled: true,
				},
				scrollbar: {
					el: sliderScrollBar,
					draggable: true,
					snapOnRelease: false
				},
				mousewheel: {
					releaseOnEdges: true,
				},
			});
			sliderScroll.scrollbar.updateSize();
		}
	}
}

window.addEventListener("load", function (e) {
	// Запуск инициализации слайдеров
	initSliders();
	// Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
	//initSlidersScroll();
});


/*
import Swiper, { Navigation, Pagination, Keyboard, Mousewheel } from 'swiper';

const swiper = new Swiper('.swiper', {

   modules: [Navigation, Pagination, Keyboard, Mousewheel],
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
    keyboard: {
      enabled: true,
    },

    autoHeight: true,
    slidesPerView: 1,
    spaceBetween: 30,
    centeredSlides: true,
    initialSlide: 3,
    loop: true,

 });

 */