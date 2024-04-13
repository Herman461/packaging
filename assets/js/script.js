

let sliders = document.querySelectorAll(".swiper");
if (sliders) {
	for (let index = 0; index < sliders.length; index++) {
		let slider = sliders[index];
		if (!slider.classList.contains('swiper-build')) {
			let slider_items = slider.children;
			if (slider_items) {
				for (let index = 0; index < slider_items.length; index++) {
					let el = slider_items[index];
					el.classList.add('swiper-slide');
				}
			}
			let slider_content = slider.innerHTML;
			let slider_wrapper = document.createElement("div");
			slider_wrapper.classList.add('swiper-wrapper');
			slider_wrapper.innerHTML = slider_content;
			slider.innerHTML = "";
			slider.appendChild(slider_wrapper);
			slider.classList.add('swiper-build');
		}
		if (slider.classList.contains('_gallery')) {
			//slider.data('lightGallery').destroy(true);
		}
	}
	sliders_build_callback();
}

function sliders_build_callback() { }



function ibg() {

	let ibg = document.querySelectorAll(".ibg");

	for (let index = 0; index < ibg.length; index++) {
		if (ibg[index].querySelector('img')) {
			ibg[index].style.backgroundImage = 'url(' + ibg[index].querySelector('img').getAttribute('src') + ')';
		}
	}
}

ibg();






document.addEventListener('DOMContentLoaded', function() {
	function DynamicAdapt(type) {
		this.type = type;
	}

	DynamicAdapt.prototype.init = function () {
		const _this = this;
		// массив объектов
		this.оbjects = [];
		this.daClassname = "_dynamic_adapt_";
		// массив DOM-элементов
		this.nodes = document.querySelectorAll("[data-da]");

		// наполнение оbjects объктами
		for (let i = 0; i < this.nodes.length; i++) {
			const node = this.nodes[i];
			const data = node.dataset.da.trim();
			const dataArray = data.split(",");
			const оbject = {};
			оbject.element = node;
			оbject.parent = node.parentNode;
			оbject.destination = document.querySelector(dataArray[0].trim());
			оbject.breakpoint = dataArray[1] ? dataArray[1].trim() : "767";
			оbject.place = dataArray[2] ? dataArray[2].trim() : "last";
			оbject.index = this.indexInParent(оbject.parent, оbject.element);
			this.оbjects.push(оbject);
		}

		this.arraySort(this.оbjects);

		// массив уникальных медиа-запросов
		this.mediaQueries = Array.prototype.map.call(this.оbjects, function (item) {
			return '(' + this.type + "-width: " + item.breakpoint + "px)," + item.breakpoint;
		}, this);
		this.mediaQueries = Array.prototype.filter.call(this.mediaQueries, function (item, index, self) {
			return Array.prototype.indexOf.call(self, item) === index;
		});

		// навешивание слушателя на медиа-запрос
		// и вызов обработчика при первом запуске
		for (let i = 0; i < this.mediaQueries.length; i++) {
			const media = this.mediaQueries[i];
			const mediaSplit = String.prototype.split.call(media, ',');
			const matchMedia = window.matchMedia(mediaSplit[0]);
			const mediaBreakpoint = mediaSplit[1];

			// массив объектов с подходящим брейкпоинтом
			const оbjectsFilter = Array.prototype.filter.call(this.оbjects, function (item) {
				return item.breakpoint === mediaBreakpoint;
			});
			matchMedia.addListener(function () {
				_this.mediaHandler(matchMedia, оbjectsFilter);
			});
			this.mediaHandler(matchMedia, оbjectsFilter);
		}
	};

	DynamicAdapt.prototype.mediaHandler = function (matchMedia, оbjects) {
		if (matchMedia.matches) {
			for (let i = 0; i < оbjects.length; i++) {
				const оbject = оbjects[i];
				оbject.index = this.indexInParent(оbject.parent, оbject.element);
				this.moveTo(оbject.place, оbject.element, оbject.destination);
			}
		} else {
			for (let i = 0; i < оbjects.length; i++) {
				const оbject = оbjects[i];
				if (оbject.element.classList.contains(this.daClassname)) {
					this.moveBack(оbject.parent, оbject.element, оbject.index);
				}
			}
		}
	};

	// Функция перемещения
	DynamicAdapt.prototype.moveTo = function (place, element, destination) {
		element.classList.add(this.daClassname);
		if (place === 'last' || place >= destination.children.length) {
			destination.insertAdjacentElement('beforeend', element);
			return;
		}
		if (place === 'first') {
			destination.insertAdjacentElement('afterbegin', element);
			return;
		}
		destination.children[place].insertAdjacentElement('beforebegin', element);
	}

	// Функция возврата
	DynamicAdapt.prototype.moveBack = function (parent, element, index) {
		element.classList.remove(this.daClassname);
		if (parent.children[index] !== undefined) {
			parent.children[index].insertAdjacentElement('beforebegin', element);
		} else {
			parent.insertAdjacentElement('beforeend', element);
		}
	}

	// Функция получения индекса внутри родителя
	DynamicAdapt.prototype.indexInParent = function (parent, element) {
		const array = Array.prototype.slice.call(parent.children);
		return Array.prototype.indexOf.call(array, element);
	};

	// Функция сортировки массива по breakpoint и place
	// по возрастанию для this.type = min
	// по убыванию для this.type = max
	DynamicAdapt.prototype.arraySort = function (arr) {
		if (this.type === "min") {
			Array.prototype.sort.call(arr, function (a, b) {
				if (a.breakpoint === b.breakpoint) {
					if (a.place === b.place) {
						return 0;
					}

					if (a.place === "first" || b.place === "last") {
						return -1;
					}

					if (a.place === "last" || b.place === "first") {
						return 1;
					}

					return a.place - b.place;
				}

				return a.breakpoint - b.breakpoint;
			});
		} else {
			Array.prototype.sort.call(arr, function (a, b) {
				if (a.breakpoint === b.breakpoint) {
					if (a.place === b.place) {
						return 0;
					}

					if (a.place === "first" || b.place === "last") {
						return 1;
					}

					if (a.place === "last" || b.place === "first") {
						return -1;
					}

					return b.place - a.place;
				}

				return b.breakpoint - a.breakpoint;
			});
			return;
		}
	};

	const da = new DynamicAdapt("max");
	da.init();


})


// Табы
const tabLinks = document.querySelectorAll("[data-tab-title]");
const tabContent = document.querySelectorAll("[data-tab-content]");


if (tabContent.length > 0)  {
	tabLinks.forEach(function(el) {
		el.addEventListener("click", openTabs);
	});

}
// Модальные окна
window.addEventListener('click', function(e) {
	if (e.target.closest('[data-modal-link]')) {
		const link = e.target.closest('[data-modal-link]')
		e.preventDefault()
		const scrollWidth = window.innerWidth - document.body.clientWidth

		const modalTitle = '#' + link.dataset.modalLink

		document.querySelector(modalTitle).classList.add('active')

		document.body.classList.add('lock')

		document.body.style.paddingRight = scrollWidth + 'px'
	}

	if (e.target.closest('[data-modal-close]')) {
		e.preventDefault()
		const closeButton = e.target.closest('[data-modal-close]')
		closeButton.closest('.modal').classList.remove('active')
		if (closeButton.closest('.modal').querySelector('video')) {
			closeButton.closest('.modal').querySelector('video').pause()
			closeButton.closest('.modal').querySelector('video').currentTime = 0
		}
		closeButton.closest('.modal').classList.remove('active')
		document.body.classList.remove('lock')
		setTimeout(() => {

			document.body.style.paddingRight = 0
		}, 300)
	}

	if (e.target.closest('.modal')) {
		if (!e.target.closest('.modal__content')) {
			e.target.closest('.modal').classList.remove('active')

			setTimeout(() => {
				document.body.classList.remove('lock')
				document.body.style.paddingRight = 0
			}, 400)
		}
	}
})

function openTabs(el) {
	el.preventDefault()
	const btnTarget = el.currentTarget;
	const title = btnTarget.dataset.tabTitle;
	const category = btnTarget.dataset.tabCategory

	const tabContent = document.querySelectorAll(`[data-tab-content][data-tab-category="${category}"]`);
	const tabLinks = document.querySelectorAll(`[data-tab-title][data-tab-category="${category}"]`);

	tabContent.forEach(function(el) {
		el.classList.remove("active");
	});

	tabLinks.forEach(function(el) {
		el.classList.remove("active");
	});

	const activeContent = document.querySelectorAll(`[data-tab-content="${title}"][data-tab-category="${category}"]`)

	activeContent.forEach(function(el) {
		el.classList.add('active')
	})
	document.querySelector(`[data-tab-content="${title}"]`).classList.add("active");

	btnTarget.classList.add("active");

}


// Select
const select = document.querySelectorAll('.base-select')
let activeSelect
if (select.length > 0) {
	for (let index = 0; index < select.length; ++index) {
		const item = select[index]

		const selectOption = item.querySelectorAll('option')

		const selectOptionLength = selectOption.length

		let selectedOption = item.querySelector('option[selected]')

		if (!selectedOption) {
			selectedOption = item.querySelector('option')
		}

		if (item.classList.contains('base-select_sort')) {
			const queryParam = getParameterByName('sort')
			if (queryParam) {
				selectedOption = item.querySelector('option[value="?sort=' + queryParam + '"]')
				if (selectedOption) {
					selectedOption.setAttribute('selected', 'selected')
				} else {
					selectedOption = item.querySelector('option')
				}

			}

		}

		if (item.classList.contains('base-select_per-page')) {
			const queryParam = getParameterByName('per-page')
			if (queryParam) {
				selectedOption = item.querySelector('option[value="?per-page=' + queryParam + '"]')

				if (selectedOption) {
					selectedOption.setAttribute('selected', 'selected')
				} else {
					selectedOption = item.querySelector('option')
				}

			}

		}

		const baseHeadText = item.dataset.head
		const duration = 400

		item.querySelector('select').hidden = true

		const head = document.createElement('div')
		const text = document.createElement('span')

		head.classList.add('base-select__head')

		text.textContent = baseHeadText ? baseHeadText : selectedOption.textContent

		head.append(text)
		item.append(head)

		// Добавление иконки
		const icon = item.querySelector('.base-select__icon')

		if (icon) {
			head.append(icon)
		}

		// Создание списка
		const selectList = document.createElement('ul')
		selectList.classList.add('base-select__list')

		item.append(selectList)

		// if (!disabledOption) {
		// 	const newOption = document.createElement('li')
		// 	newOption.textContent = selectedOption ? selectedOption.textContent : selectOption[0].textContent
		// 	newOption.classList.add('base-select__item')
		// 	newOption.dataset.value = selectedOption ? selectedOption.value : selectOption[0].textContent
		// 	selectList.append(newOption)
		// }
		for (let index = 0; index < selectOptionLength; index++) {
			const newOption = document.createElement('li')
			newOption.textContent = selectOption[index].textContent
			newOption.classList.add('base-select__item')
			newOption.dataset.value = selectOption[index].value
			selectList.append(newOption)

			if (selectOption[index].hasAttribute('selected')) {
				newOption.classList.add('active')
			}
		}

		selectList.hidden = true
		head.addEventListener('click', function(e) {
			if (e.target.closest('.base-select_h')) return;
			if (!document.querySelector('.base-select__list.slide') && e.target.closest('.base-select__head')) {
				if (activeSelect && !e.target.closest('.base-select__head').nextElementSibling.isEqualNode(activeSelect)) {
					slideUp(activeSelect)
					activeSelect.closest('.base-select').querySelector('.base-select__head').classList.remove('active')


				}
				activeSelect = e.target.closest('.base-select__head').nextElementSibling
				e.currentTarget.classList.toggle('active')
				slideToggle(selectList)
			}
		})
		selectList.addEventListener('click', function(e) {
			if (e.target.closest('.base-select__item')) {
				const target = e.target.closest('.base-select__item')

				const value = target.dataset.value
				let newSelectedEl = item.querySelector(`option[value="${value}"]`)
				const oldSelectedEl = item.querySelector('option[selected]')
				if (!newSelectedEl) {
					for (let index = 1; index < selectOptionLength; index++) {
						const option = selectOption[index]
						if (option.textContent === value) {
							newSelectedEl = option
						}
					}
				}

				if (oldSelectedEl) {
					oldSelectedEl.removeAttribute('selected')
				}
				if (newSelectedEl) {
					newSelectedEl.setAttribute('selected', 'selected')
					text.textContent = newSelectedEl.textContent
				}
				head.classList.remove('active')
				activeSelect = null

				if (document.querySelector('.base-select__item.active')) {
					document.querySelector('.base-select__item.active').classList.remove('active')
				}


				target.classList.add('active')
				e.target.closest('.base-select').querySelector('select').dispatchEvent(new Event('change'))

				if (e.target.closest('.base-select_h')) {
					slideUp(e.target.closest('.base-select__wrapper'))
				} else {
					slideUp(selectList)
				}

			}
		})
	}
}


window.addEventListener('click', function(e) {

	if (
		document.querySelector('.base-select__head.active')
		&& !e.target.closest('.base-select')
		&& !document.querySelector('.base-select__list.slide')
	) {
		if (activeSelect) {
			activeSelect.closest('.base-select').querySelector('.base-select__head').classList.remove('active')
			slideUp(activeSelect)
			activeSelect = null
		}

	}
})

