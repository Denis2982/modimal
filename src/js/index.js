// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle'

// import styles bundle
import 'swiper/css/bundle'

const swiper = new Swiper('.swiper', {
	slidesPerView: 2,
	spaceBetween: 16,
	loop: true,
	breakpoints: {
		768: {
			slidesPerView: 3,
			spaceBetween: 24,
		},
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
})

//Аккордион для моб. навигации
import accordion from './modules/accordion.js'
accordion()

// Мобильная навигация
import mobileNav from './modules/mobile-nav.js'
mobileNav()

// Получаем текущую дату
const currentDate = new Date()

// Получаем элемент с идентификатором "footer"
const footer = document.querySelector('.footer__copyright p')

// Устанавливаем содержимое элемента "footer" равным текущей дате
footer.innerHTML +=
	'Copyright &copy; ' +
	currentDate.getFullYear() +
	' Modimal. All right reserved.'
