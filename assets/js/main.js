import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)
import { CountUp } from 'countup.js/dist/countUp.min'
import Cleave from "cleave.js"
import 'cleave.js/dist/addons/cleave-phone.i18n'
import { sliderPartners, sliderProduction, sliderPacking, sliderNews } from "./sliders"
import Popup from "./_Popup"

gsap.config({
	nullTargetWarn: false,
})


window.addEventListener("load", () => {
	let links = document.querySelectorAll('[href*="#history"]')

	links.forEach(link => {
		link.addEventListener("click", () => {
			document.querySelector("#history")?.scrollIntoView({
				behavior: "smooth"
			})
			let btn = document.querySelector(".about-history")
			if (!btn.classList.contains("active")) {
				btn.click()
			}
		})
	})

	if (location.hash) {
		setTimeout(() => {
			if (location.hash = "#history") {
				links[0].click()
			}
		}, 0)
	}
})
function chooseSrc() {
	let video = document.querySelector(".block-video video")
	if (video) {
		let srcs = video.dataset.src.split(";")

		if (window.innerWidth > 1023) {
			video.setAttribute("src", srcs[0])
		} else {

			video.setAttribute("src", srcs[1])
		}
	}
}

document.addEventListener('DOMContentLoaded', () => {
	animationPage()
	window.popups = {};

	[...document.querySelectorAll("[data-popup]")].forEach((curr) => {
		window.popups[curr.dataset.popup] = new Popup(curr)
	})


	chooseSrc()

	accordeonHistory()
	sliderPartners()
	sliderProduction()
	sliderPacking()
	sliderNews()
	animationFieldForm()
	mobileMenu()
	autoHeightTextarea()
	// animNumberPartners();
	cookieNotification()
	initPhoneMask()
	// let vh = window.innerHeight * 0.01
	// Then we set the value in the --vh custom property to the root of the document
	// document.documentElement.style.setProperty('--vh', `${vh}px`)

	// We listen to the resize event
	// window.addEventListener('resize', () => {
	// 	// We execute the same script as before
	// 	let vh = window.innerHeight * 0.01
	// 	document.documentElement.style.setProperty('--vh', `${vh}px`)
	// })
	sectionPacking()
	sectionDevelopment()

})

function initPhoneMask() {
	document.querySelectorAll('input[type=tel]').forEach(input => {
		new Cleave(input, {
			phone: true,
			phoneRegionCode: "i18n",
			delimiter: "-",
			prefix: "+",
			noImmediatePrefix: true
		})
	})
}

function setCookie(name, value, options = {}) {

	options = {
		path: '/',
		// при необходимости добавьте другие значения по умолчанию
		...options
	}

	if (options.expires instanceof Date) {
		options.expires = options.expires.toUTCString()
	}

	let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value)

	for (let optionKey in options) {
		updatedCookie += "; " + optionKey
		let optionValue = options[optionKey]
		if (optionValue !== true) {
			updatedCookie += "=" + optionValue
		}
	}

	document.cookie = updatedCookie
}

function getCookie(name) {
	let matches = document.cookie.match(new RegExp(
		"(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
	))
	return matches ? decodeURIComponent(matches[1]) : undefined
}

function cookieNotification() {
	let node = document.querySelector(".cookie")

	if (node) {
		if (getCookie("cookie-notification-checked")) {
			node.remove()
		} else {
			node.classList.add("is-active")
			node.querySelectorAll(".cookie__agree, .cookie__close").forEach(closer => {
				closer.addEventListener("click", () => {
					setCookie("cookie-notification-checked", "true", {
						"max-age": node.dataset.maxAge
					})
					node.remove()
				})
			})
		}
	}
}

function accordeonHistory() {
	let btnAccordeon = document.querySelector('.about-history')
	let toggler = document.querySelector('.toggler-history')

	if (btnAccordeon) {
		btnAccordeon.addEventListener('click', function () {
			this.classList.toggle("active")

			// if (this.classList.contains('active')) {
			// 	this.innerHTML = 'Свернуть'
			// } else {
			// 	this.innerHTML = 'О нашей истории'
			// }

			if (toggler) {
				toggler.classList.toggle('active')
				let tl = gsap.timeline()
				tl.fromTo('.toggler-history', { opacity: 0 }, { opacity: 1, duration: 1.5, })

				if (toggler.style.maxHeight) {
					toggler.style.maxHeight = null
				} else {
					toggler.style.maxHeight = toggler.scrollHeight + "px"
				}
			}
		})
	}
}


function animationFieldForm() {
	let fields = document.querySelectorAll('.wrap-field')
	if (fields.length > 0) {
		fields.forEach(function (el) {
			let input = el.querySelector('.wrap-field__input')
			let label = el.querySelector('.wrap-field__name-field')

			if (input.value) {
				label.classList.add('top')
			}

			input.addEventListener('focus', function () {
				label.classList.add('top')
			})

			input.addEventListener('blur', function () {
				if (this.value != '') {
					return
				} else {
					label.classList.remove('top')
				}
			})
		})
	}
}

function mobileMenu() {
	let toggle = document.querySelector('.nav-toggle')
	let mobileMenu = document.querySelector('.wrap-mobile-menu')

	toggle.addEventListener('click', function (e) {
		this.classList.toggle('opened')
		mobileMenu.classList.toggle('opened')
	})

	let mobileLinks = document.querySelectorAll('.mobile-menu .block-menu__caption, .mobile-menu .block-menu__link')
	if (mobileLinks.length > 0) {
		mobileLinks.forEach(function (link) {
			link.addEventListener('click', function () {
				toggle.classList.remove('opened')
				mobileMenu.classList.remove('opened')
			})
		})
	}
}

function autoHeightTextarea() {
	document.querySelectorAll('textarea.autoheight').forEach(el => {
		el.style.height = el.setAttribute('style', 'height: ' + el.scrollHeight + 'px')
		el.classList.add('auto')
		el.addEventListener('input', e => {
			el.style.height = 'auto'
			el.style.height = (el.scrollHeight) + 'px'
		})
	})
}

function animNumberPartners() {
	new CountUp('partnersNum1', 250, { separator: ' ', startVal: 100 }).start()
	new CountUp('partnersNum2', 500, { separator: ' ', startVal: 100 }).start()
}

function animationPage() {

	const tlHeader = gsap.timeline()
	tlHeader.fromTo('.header', { y: '-100%' }, { y: 0, duration: 1, delay: 1 })

	gsap.fromTo('.section-company__title',
		{
			y: 80,
			opacity: 0,
		},
		{
			y: 0,
			opacity: 1,
			duration: 1,
			delay: 1,
		}
	)

	const features = gsap.timeline().fromTo('.features__item', { y: 50, opacity: 0 }, { y: 0, duration: .5, opacity: 1, stagger: .3 })

	ScrollTrigger.create({
		animation: features,
		trigger: '.section-about',
		endTrigger: '.section-about',
		start: "top 350px",
		end: 'bottom',
	})

	const tl = gsap.timeline()
	// tl.fromTo('.section-missions__title', {y: 150, opacity: 0}, {y: 0, duration: 1, opacity: 1});
	// tl.fromTo('.section-missions__descr', {y: 150, opacity: 0}, {y: 0, duration: 1, opacity: 1});

	ScrollTrigger.create({
		animation: tl,
		trigger: '.section-missions',
		endTrigger: '.section-missions',
		start: "-30% top",
		// end: () => document.querySelector('.section-missions').offsetHeight / 20,
		end: 'top top',
		toggleClass: "active",
		once: true,
		// scrub: true,
		// pin: true
	})

	const counter = gsap.timeline()
	ScrollTrigger.create({
		animation: counter,
		trigger: '.section-partners',
		endTrigger: '.section-partners',
		start: '-40% top',
		end: '-40% top',
		// scrub: true,
		// pin: true
		once: true,
		onEnter: self => animNumberPartners(),
	})

	const tl2 = gsap.timeline()
	tl2.fromTo('.section-production__title', { y: 150, opacity: 0 }, { y: 0, duration: 1, opacity: 1 })
	tl2.fromTo('.section-production__descr', { y: 150, opacity: 0 }, { y: 0, duration: 1, opacity: 1 })

	ScrollTrigger.create({
		animation: tl2,
		trigger: '.section-production',
		endTrigger: '.section-production',
		start: 'top 75%',
		end: 'bottom',
		// scrub: true,
		// pin: true
	})

	const tl3 = gsap.timeline()
	tl3.fromTo('.section-development__title', { y: 50, opacity: 0 }, { y: 0, duration: .5, opacity: 1 })
	tl3.fromTo('.section-development__descr', { y: 50, opacity: 0 }, { y: 0, duration: .5, opacity: 1 })

	ScrollTrigger.create({
		animation: tl3,
		trigger: '.section-development',
		endTrigger: '.section-development',
		start: 'top 75%',
		end: 'bottom',
		// scrub: true,
		// pin: true
	})

	// const contacts = gsap.timeline();
	// contacts.fromTo('.item-address', {y:50, opacity: 0}, {y: 0, duration: .5, opacity: 1, stagger: .3});
	//
	// ScrollTrigger.create({
	//     animation: contacts,
	//     trigger: '.section-contacts',
	//     endTrigger: '.section-contacts',
	//     start: "top top",
	//     end: 'bottom',
	// });
}

function sectionPacking() {

	const page1 = gsap.timeline()

	let btn1 = document.querySelector('.p1-p2')
	let btn2 = document.querySelector('.p1-p3')

	let btn3 = document.querySelector('.p2-p1')
	let btn4 = document.querySelector('.p2-p3')

	let btn5 = document.querySelector('.p3-p1')
	let btn6 = document.querySelector('.p3-p2')

	if (btn1) {
		btn1.addEventListener('click', function () {
			page1.to('.section-packing__page2', { x: '-200%', duration: .0, delay: 0 })
		})
	}

	if (btn2) {
		btn2.addEventListener('click', function () {
			page1.to('.section-packing__page3', { x: '-100%', duration: .0, delay: 0 })
		})
	}

	if (btn3) {
		btn3.addEventListener('click', function () {
			page1.to('.section-packing__page1', { x: '0%', duration: 0, delay: 0 })
			page1.to('.section-packing__page2', { x: '300%', duration: 0, delay: 0 })
		})
	}

	if (btn4) {
		btn4.addEventListener('click', function () {
			page1.to('.section-packing__page3', { x: '-100%', duration: 0, delay: 0 })
			page1.to('.section-packing__page2', { x: '300%', duration: 0, delay: 0 })
		})
	}

	if (btn5) {
		btn5.addEventListener('click', function () {
			page1.to('.section-packing__page1', { x: '0%', duration: 0, delay: 0 })
			page1.to('.section-packing__page2', { x: '300%', duration: 0, delay: 0 })
			page1.to('.section-packing__page3', { x: '200%', duration: 0, delay: 0 })
		})
	}

	if (btn6) {
		btn6.addEventListener('click', function () {
			page1.to('.section-packing__page2', { x: '-200%', duration: 0, delay: 0 })
			page1.to('.section-packing__page3', { x: '200%', duration: 0, delay: 0 })
		})
	}


}


function sectionDevelopment() {

	const page1 = gsap.timeline()

	let btn1 = document.querySelector('.pd1-pd2')
	let btn2 = document.querySelector('.pd1-pd3')

	let btn3 = document.querySelector('.pd2-pd1')
	let btn4 = document.querySelector('.pd2-pd3')

	let btn5 = document.querySelector('.pd3-pd1')
	let btn6 = document.querySelector('.pd3-pd2')

	if (btn1) {
		btn1.addEventListener('click', function () {
			page1.to('.section-development__page2', { x: '-100%', duration: .0, delay: 0 })
		})
	}

	if (btn2) {
		btn2.addEventListener('click', function () {
			page1.to('.section-development__page3', { x: '-200%', duration: .0, delay: 0 })
		})
	}

	if (btn3) {
		btn3.addEventListener('click', function () {
			page1.to('.section-development__page1', { x: '0%', duration: 0, delay: 0 })
			page1.to('.section-development__page2', { x: '200%', duration: 0, delay: 0 })
		})
	}

	if (btn4) {
		btn4.addEventListener('click', function () {
			page1.to('.section-development__page3', { x: '-200%', duration: 0, delay: 0 })
		})
	}

	if (btn5) {
		btn5.addEventListener('click', function () {
			page1.to('.section-development__page1', { x: '0%', duration: 0, delay: 0 })
			page1.to('.section-development__page2', { x: '200%', duration: 0, delay: 0 })
			page1.to('.section-development__page3', { x: '300%', duration: 0, delay: 0 })
		})
	}

	if (btn6) {
		btn6.addEventListener('click', function () {
			page1.to('.section-development__page2', { x: '-100%', duration: 0, delay: 0 })
			page1.to('.section-development__page3', { x: '300%', duration: 0, delay: 0 })
		})
	}


}
