let tour = new Shepherd.Tour({
	useModalOverlay: true,
	defaultStepOptions: {
		exitOnEsc: true,
		cancelIcon: {
			enabled: true,
		},
	},
});

tour.addStep({
	id: "step1",
	title: "👋 Welcome to DoctoBuddy",
	text: "DoctoBuddy is your one-stop platform for managing your healthcare journey 🏥",
	attachTo: {
		element: ".header",
		on: "bottom",
	},
	buttons: [
		{
			text: "Next",
			action() {
				return this.next();
			},
		},
	],
});

tour.addStep({
	id: "step2",
	title: "📅 Schedule Appointments",
	text: "Book appointments online with just a few clicks. Skip the wait times and manage your schedule conveniently.",
	attachTo: {
		element: ".section1 .container2 .btn.entry1",
		on: "top",
	},
	buttons: [
		{
			text: "Back",
			action() {
				return this.back();
			},
		},
		{
			text: "Next",
			action() {
				return this.next();
			},
		},
	],
});

tour.addStep({
	id: "step3",
	title: "🚀 Track Your Application",
	text: "Stay updated on the status of your healthcare service applications. Know exactly where you are in the process.",
	scrollTo: {
		behavior: "smooth",
		block: "center",
	},
	attachTo: {
		element: ".section1 .container2 .btn.entry3",
		on: "left",
	},
	buttons: [
		{
			text: "Back",
			action() {
				return this.back();
			},
		},
		{
			text: "Next",
			action() {
				return this.next();
			},
		},
	],
});

tour.addStep({
	id: "step4",
	title: "⏳ Track Your Turn",
	text: "Avoid long waiting times by keeping track of your queue position. Get notified when it's your turn.",
	attachTo: {
		element: ".section1 .container2 .btn.entry2",
		on: "bottom",
	},
	buttons: [
		{
			text: "Back",
			action() {
				return this.back();
			},
		},
		{
			text: "Next",
			action() {
				return this.next();
			},
		},
	],
});

tour.addStep({
	id: "step5",
	title: "🔍 We Offer a Range of Services",
	text: "From online appointment booking to 24/7 ambulance services, DoctoBuddy caters to your various healthcare needs.",
	scrollTo: {
		behavior: "smooth",
		block: "center",
	},
	attachTo: {
		element: "#services",
		on: "top",
	},
	buttons: [
		{
			text: "Back",
			action() {
				return this.back();
			},
		},
		{
			text: "Next",
			action() {
				return this.next();
			},
		},
	],
});

tour.addStep({
	id: "step6",
	title: "👨‍⚕️ Connect with Qualified Doctors",
	text: "DoctoBuddy helps you find highly-rated doctors in your area. Search by specialty and schedule consultations effortlessly.",
	scrollTo: {
		behavior: "smooth",
		block: "center",
	},
	attachTo: {
		element: ".section2 .box:nth-child(3) .btn",
		on: "top",
	},
	buttons: [
		{
			text: "Back",
			action() {
				return this.back();
			},
		},
		{
			text: "Next",
			action() {
				return this.next();
			},
		},
	],
});

tour.addStep({
	id: "step7",
	title: "💊 Keep Track of Your Medications",
	text: "While we can't dispense medications directly, DoctoBuddy can connect you with trusted pharmacies or provide helpful information on prescriptions.",
	scrollTo: {
		behavior: "smooth",
		block: "center",
	},
	attachTo: {
		element: ".section2 .box:nth-child(4) .btn",
		on: "top",
	},
	buttons: [
		{
			text: "Back",
			action() {
				return this.back();
			},
		},
		{
			text: "Next",
			action() {
				return this.next();
			},
		},
	],
});

tour.addStep({
	id: "step8",
	title: "🌟 Our Trusted Network of Doctors",
	text: "Browse through our directory of experienced doctors across various specializations.",
	scrollTo: {
		behavior: "smooth",
		block: "center",
	},
	attachTo: {
		element: "#doctors",
		on: "top",
	},
	buttons: [
		{
			text: "Back",
			action() {
				return this.back();
			},
		},
		{
			text: "Next",
			action() {
				return this.next();
			},
		},
	],
});

tour.addStep({
	id: "step9",
	title: "🗣️ See What Others Say",
	text: "Gain valuable insights by reading patient reviews about their experiences with DoctoBuddy and our doctors.",
	scrollTo: {
		behavior: "smooth",
		block: "center",
	},
	attachTo: {
		element: "#review",
		on: "top",
	},
	buttons: [
		{
			text: "Back",
			action() {
				return this.back();
			},
		},
		{
			text: "Next",
			action() {
				return this.next();
			},
		},
	],
});

tour.addStep({
	id: "step10",
	title: "📞 We're Here to Help",
	text: "Have any questions? Feel free to contact us through our various channels.",
	scrollTo: {
		behavior: "smooth",
		block: "center",
	},
	attachTo: {
		element: ".footer .box:nth-child(3)",
		on: "top",
	},
	buttons: [
		{
			text: "Next",
			action() {
				return this.next();
			},
		},
	],
});

tour.addStep({
	id: "step11",
	title: "🚀 Let's Get You Started!",
	text: "Book your first appointment or explore our services to experience the DoctoBuddy advantage.",
	scrollTo: {
		behavior: "smooth",
		block: "center",
	},
	attachTo: {
		element: ".section1 .container2 .btn.entry1",
		on: "top",
	},
	buttons: [
		{
			text: "Complete",
			action() {
				return this.next();
			},
		},
	],
});

tour.start();
