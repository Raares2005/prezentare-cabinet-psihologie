

// window.onload = function () {
//     const slides = document.querySelectorAll(".slide");

//     // loop through slides and set each slides translateX property to index * 100% 
//     slides.forEach((slide, indx) => {
//         slide.style.transform = `translateX(${indx * 100}%)`;
//     });
//     let curSlide = 1;

//     // select next slide button
//     const nextSlide = document.querySelector(".btn-next");


//     // add event listener and next slide functionality
//     if (nextSlide) {
//         nextSlide.addEventListener("click", function () {
//             curSlide++;

//             slides.forEach((slide, indx) => {
//                 slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
//             });
//         });
//     }

//     let maxSlide = slides.length - 1;


//     // add event listener and navigation functionality
//     if (nextSlide) {
//         nextSlide.addEventListener("click", swapper, false)
//     }
//     nextSlide.addEventListener("click", function () {
//         // check if current slide is the last and reset current slide
//         if (curSlide === maxSlide) {
//             curSlide = 0;
//         } else {
//             curSlide--;
//         }

//         //   move slide by -100%
//         slides.forEach((slide, indx) => {
//             slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
//         });
//     });






//     // select prev slide button
//     const prevSlide = document.querySelector(".btn-prev");

//     // add event listener and navigation functionality
//     prevSlide.addEventListener("click", function () {
//         // check if current slide is the first and reset current slide to last
//         if (curSlide === 0) {
//             curSlide = maxSlide;
//         } else {
//             curSlide--;
//         }

//         //   move slide by 100%
//         slides.forEach((slide, indx) => {
//             slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
//         });
//     });
// }



//  SECOND EXEMPLE

// var currentIndex = 0;
// displaySlides(currentIndex);


// function setSlides(num) {
//     displaySlides(currentIndex += num);
// }

// function displaySlides(num) {
//     var x;
//     var slides = document.getElementsByClassName("slide");
//     if (num > slides.length) { currentIndex = 1 }
//     if (num < 1 ) { currentIndex = slides.length }
//     for (x = 0; x < slides.length; x++) {
//         slides[x].style.display = "none";
//     }
//     slides[currentIndex - 1].style.display = "block";
// }
// nextBtn.addEventListener("click", function () {
//     currentImage++;
//     if (currentImage > images.length - 1) {
//       currentImage = 0;
//     }
//     showImage(currentImage);
//   });

//   // the prev button function
//   prevBtn.addEventListener("click", function () {
//     currentImage--;
//     if (currentImage < 0) {
//       currentImage = images.length - 1;
//     }
//     showImage(currentImage);
//   });


// THIRD EXEMPLE

// the variables of the image slider

// window.onload=function(){
// const image = document.querySelector(".slide-image");
// const prevBtn = document.querySelector(".btn btn-prev");
// const nextBtn = document.querySelector(".btn btn-next");

// // the image array
// const images = [
//   "./img/01-living-room-blue-theme.jpg",
//   "./img/02-living-room-couch.jpg",
//   "./img/03-living-room-red-theme.jpg",
//   "./img/04-modern-kitchen.jpg",
// ];

// // the index of the image on page load
// let currentImage = 0;

// // the image details that shows when the webpage loads
// window.addEventListener("DOMContentLoaded", showImage);

// // function to select and change the image details
// function showImage() {
//   image.src = images[currentImage];
// }

// // the next button function
// nextBtn.addEventListener("click", function () {
//     currentImage++;
//     if (currentImage > images.length - 1) {
//       currentImage = 0;
//     }
//     showImage(currentImage);
//   });

//   // the prev button function
//   prevBtn.addEventListener("click", function () {
//     currentImage--;
//     if (currentImage < 0) {
//       currentImage = images.length - 1;
//     }
//     showImage(currentImage);
//   });
// } 

$(document).ready(function(){
	// options
	var speed = 1000; //transition speed - fade
	var autoswitch = true; //auto slider options
	var autoswitch_speed = 15000; //auto slider speed
	
	// add first initial active class
	$(".slide").first().addClass("active");
	
	// hide all slides
	$(".slide").hide;
	
	// show only active class slide
	$(".active").show();
	
	// Next Event Handler
	$('#next').on('click', nextSlide);// call function nextSlide
	
	// Prev Event Handler
	$('#prev').on('click', prevSlide);// call function prevSlide
	
	// Auto Slider Handler
	if(autoswitch == true){
		setInterval(nextSlide,autoswitch_speed);// call function and value 4000
	}
	
	// Switch to next slide
	function nextSlide(){
		$('.active').removeClass('active').addClass('oldActive');
		if($('.oldActive').is(':last-child')){
			$('.slide').first().addClass('active');
		} else {
			$('.oldActive').next().addClass('active');
		}
		$('.oldActive').removeClass('oldActive');
		$('.slide').fadeOut(speed);
		$('.active').fadeIn(speed);
	}
	
	// Switch to prev slide
	function prevSlide(){
		$('.active').removeClass('active').addClass('oldActive');
		if($('.oldActive').is(':first-child')){
			$('.slide').last().addClass('active');
		} else {
			$('.oldActive').prev().addClass('active');
		}
		$('.oldActive').removeClass('oldActive');
		$('.slide').fadeOut(speed);
		$('.active').fadeIn(speed);
	}
});