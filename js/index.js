// MAIN SLIDER

const mainArrow = document.getElementById('main-arrow');

const mainPages = Array.from(document.getElementsByClassName('home-page'));

const mainBg = document.querySelector('.home');

const mainContainer = document.querySelector('.home-container');

let index = 1;

mainArrow.addEventListener('click', mainSlide);

function mainSlide(){
	if (index >= mainPages.length) {
		index = 1;
	}else{
		index++
	}

		console.log(index)
	mainPages.forEach((element) => {
		element.classList.remove('active');
	})

	mainContainer.style.background = 'rgba(13, 59, 102, 1)';

	setTimeout(() => {
		mainBg.classList.remove(mainBg.classList.item(1));
		mainBg.classList.add(`index-${index}`)
		document.querySelector(`[data-index="${index}"]`).classList.add('active');
		mainContainer.style.background = 'rgba(13, 59, 102, 0.5)';
		console.log(mainBg.style.background)
	}, '700')
	
}

//  MAIN SLIDER END

// SERVICES SLIDER

var swiper = new Swiper(".services-slider", {
      spaceBetween: 30,
      navigation: {
	      nextEl: ".services-next",
	      prevEl: ".services-prev",
	  },
	  breakpoints: {
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        950: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
      },
});

// Nav show

let scrollIndex = window.pageYOffset;

let nav = document.querySelector('#navbar');

window.addEventListener('scroll', () =>{

	let newScrollIndex = window.pageYOffset;

	if(scrollIndex >= newScrollIndex){
		nav.style.top = "0px";
	}else {
		nav.style.top = "-100px"
	}
	scrollIndex = newScrollIndex;

	if(scrollIndex == 0){
		nav.classList.remove('nav-down');
	}else {
		nav.classList.add('nav-down');
	}
})