let menu = document.querySelector("#menu-btn");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
	menu.classList.toggle("fa-times");
	navbar.classList.toggle("active");
};

window.onscroll = () => {
	menu.classList.remove("fa-times");
	navbar.classList.remove("active");
};
let tween = gsap.to(".title", {
	rotation: 0,
	y: 0,
	duration: 2,
	opacity: 1,
	startAt: { y: -300, opacity: 0 },
	ease: "bounce.out",
});

// smoothscroll used from : https://github.com/darkroomengineering/lenis

const lenis = new Lenis();

lenis.on("scroll", (e) => {
	console.log(e);
});

function raf(time) {
	lenis.raf(time);
	requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

// end

document.addEventListener("DOMContentLoaded", function () {
	const mm = gsap.matchMedia();

	mm.add("(min-width: 990px)", () => {
		// Animations for entry1 and entry2
		gsap.to(".entry1", {
			startAt: { y: -200, opacity: 0 },
			y: 0,
			x: 0,
			duration: 2,
			opacity: 1,
		});
		gsap.to(".entry2", {
			startAt: { y: 200, opacity: 0 },
			y: 0,
			x: 0,
			duration: 2,
			opacity: 1,
		});

		// Animations for heading sections
		gsap.to(".headingentry-section2", {
			scrollTrigger: ".headingentry-section2",
			startAt: { x: -200, opacity: 0 },
			x: 0,
			duration: 1,
			opacity: 1,
		});
		gsap.to(".headingentry-section3", {
			scrollTrigger: ".headingentry-section3",
			startAt: { x: -200, opacity: 0 },
			x: 0,
			duration: 1,
			opacity: 1,
		});
		gsap.to(".headingentry-section4", {
			scrollTrigger: ".headingentry-section4",
			startAt: { x: -200, opacity: 0 },
			x: 0,
			duration: 1,
			opacity: 1,
		});

		// Animations for reveal-on-scroll elements
		gsap.to(".reveal-on-scroll", {
			scrollTrigger: ".reveal-on-scroll",
			startAt: { x: 0, opacity: 0 },
			x: 0,
			duration: 3,
			opacity: 1,
		});
		gsap.to(".reveal-on-scroll-2", {
			scrollTrigger: ".reveal-on-scroll-1",
			startAt: { x: 0, opacity: 0 },
			x: 0,
			duration: 4,
			opacity: 1,
		});

		// Animations for section3
		gsap.to(".section3-box1", {
			scrollTrigger: ".section3-box1",
			startAt: { x: -500, opacity: 0 },
			x: 0,
			duration: 2,
			opacity: 1,
		});

		gsap.to(".section3-box2", {
			scrollTrigger: ".section3-box2",
			startAt: { x: 500, opacity: 0 },
			x: 0,
			duration: 2,
			opacity: 1,
		});

		// Animations for section4
		gsap.to(".section4-box1", {
			scrollTrigger: ".section4-box2",
			startAt: { x: -500, opacity: 0 },
			x: 0,
			duration: 4,
			opacity: 1,
		});
		gsap.to(".section4-box2", {
			scrollTrigger: ".section4-box2",
			startAt: { x: -500, opacity: 0 },
			x: 0,
			duration: 3,
			opacity: 1,
		});
		gsap.to(".section4-box3", {
			scrollTrigger: ".section4-box3",
			startAt: { x: -500, opacity: 0 },
			x: 0,
			duration: 2,
			opacity: 1,
		});
		gsap.to(".section4-box4", {
			scrollTrigger: ".section4-box4",
			startAt: { x: -500, opacity: 0 },
			x: 0,
			duration: 1,
			opacity: 1,
		});

		// Animation for stagger1 in section5
		gsap.to(".stagger1", {
			startAt: { y: +100, opacity: 0 },
			scrollTrigger: ".stagger1",
			duration: 1,
			scale: 1,
			y: 0,
			ease: "power1.inOut",
			stagger: {
				grid: [20, 15],
				from: "random",
				amount: 1,
			},
			opacity: 1,
		});
	});
});
