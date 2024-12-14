export const PROJECTS = [
	{
		id: 1,
		image: "/images/projects/cms-rapier.jpg",
		imageAlt: "Project 1 Landing Page Rapier",
		title: "Landing Page Rapier",
		startDate: "16 July 2024",
		endDate: "20 November 2024",
		description:
			"The Rapier Company Profile website showcases the company's identity, values, and services. Built for a strong online presence, it features an intuitive design, responsive layout, and key business information.",
		drop_down: [
			{
				id: 1,
				name: "LinkedIn",
				link: "https://www.linkedin.com/posts/abdulazizmishbahudin_i-am-thankful-that-during-my-internship-in-activity-7219160893928919042-J0-M?utm_source=share&utm_medium=member_desktop",
			},
		],
		tech_stack: [
			{ id: 1, name: "React" },
			{ id: 2, name: "Next.Js (JavaScript)" },
			{ id: 3, name: "Tailwind CSS" },
			{ id: 4, name: "Git" },
		],
	},
	{
		id: 2,
		image: "/images/projects/cms-rapier.jpg",
		imageAlt: "Project 2 CMS Rapier",
		title: "CMS Rapier",
		startDate: "01 August 2024",
		endDate: "20 November 2024",
		description:
			"The Rapier CMS is a tailored content management system that empowers seamless content updates and management, providing flexibility, control, and a user-friendly interface for efficient website maintenance.",
		drop_down: [
			{
				id: 1,
				name: "LinkedIn",
				link: "https://www.linkedin.com/posts/abdulazizmishbahudin_i-am-thankful-that-during-my-internship-in-activity-7219160893928919042-J0-M?utm_source=share&utm_medium=member_desktop",
			},
		],
		tech_stack: [
			{ id: 1, name: "React" },
			{ id: 2, name: "Next.Js (JavaScript)" },
			{ id: 3, name: "Tailwind CSS" },
			{ id: 4, name: "Git" },
		],
	},
	{
		id: 3,
		image: "/images/projects/dodemy.png",
		imageAlt: "Project 3 Dodemy (Platform Belajar Online Dodemy)",
		title: "Dodemy",
		startDate: "16 August 2024",
		endDate: "10 September 2024",
		description: "Platform Belajar Online Dodemy",
		drop_down: [
			{ id: 1, name: "Github", link: "https://github.com/jhokam/Dodemy" },
		],
		tech_stack: [
			{ id: 1, name: "HTML" },
			{ id: 2, name: "Tailwind CSS" },
			{ id: 3, name: "JavaScript" },
			{ id: 4, name: "Git" },
		],
	},
	{
		id: 4,
		image: "/images/projects/wms-lobo.jpg",
		imageAlt: "Project 4 WMS LOBO",
		title: "WMS LOBO",
		startDate: "12 October 2024",
		endDate: "16 November 2024",
		description: "Warehouse Management System LOBO",
		drop_down: [
			{
				id: 1,
				name: "LinkedIn",
				link: "https://www.linkedin.com/posts/abdulazizmishbahudin_im-happy-to-share-this-warehouse-management-activity-7255141979481673729-v669?utm_source=share&utm_medium=member_desktop",
			},
		],
		tech_stack: [
			{ id: 1, name: "React + Vite" },
			{ id: 2, name: "Tailwind CSS" },
			{ id: 3, name: "Git" },
		],
	},
	{
		id: 5,
		image: "/images/projects/portfolio-website.png",
		imageAlt: "Project 5 Portofolio Website",
		title: "Portofolio Website V1",
		startDate: "05 November 2024",
		endDate: "16 November 2024",
		description: "My Portofolio Website V1",
		drop_down: [{ id: 1, name: "Github", link: "/#" }],
		tech_stack: [
			{ id: 1, name: "React" },
			{ id: 2, name: "Next.Js (Typescript)" },
			{ id: 3, name: "Tailwind CSS" },
			{ id: 4, name: "ShadCN/UI" },
			{ id: 5, name: "Git" },
		],
	},
];

export const SKILLS = [
	{
		id: 1,
		image: "/icons/skills/html.svg",
		imageAlt: "HTML Logo",
		title: "HTML",
		description:
			"HTML is the standard markup language used to structure content on the web, forming the backbone of web pages with elements like text, images, links, and more.",
		project: [
			{ id: 1, name: "WMS - LOBO" },
			{ id: 2, name: "Dodemy" },
		],
	},
	{
		id: 2,
		image: "/icons/skills/css.svg",
		imageAlt: "CSS Logo",
		title: "CSS",
		description:
			"CSS is a styling language used to design and layout web pages, enabling customization of colors, fonts, spacing, and responsiveness for visually appealing interfaces.",
		project: [],
	},
	{
		id: 3,
		image: "/icons/skills/javascript.svg",
		imageAlt: "JavaScript Logo",
		title: "Javascript",
		description:
			"JavaScript is a versatile programming language that enables interactive and dynamic content on web pages, making it essential for building engaging, user-friendly applications.",
		project: [
			{ id: 1, name: "WMS - LOBO" },
			{ id: 2, name: "Dodemy" },
		],
	},
	{
		id: 4,
		image: "/icons/skills/git.svg",
		imageAlt: "Git Logo",
		title: "Git",
		description:
			"Git is a version control system that tracks code changes, enabling collaboration, efficient workflows, and the ability to revert or branch out in projects seamlessly.",
		project: [
			{ id: 1, name: "LP - Rapier" },
			{ id: 2, name: "CMS - Rapier" },
			{ id: 3, name: "Dodemy" },
			{ id: 4, name: "WMS - LOBO" },
			{ id: 5, name: "Portofolio Website" },
		],
	},
	{
		id: 5,
		image: "/icons/skills/tailwind-css.svg",
		imageAlt: "Tailwind CSS Logo",
		title: "Tailwind CSS",
		description:
			"Tailwind CSS is a utility-first CSS framework that lets you build modern, responsive designs quickly using pre-built classes directly in your HTML. It offers flexibility and eliminates the need to write custom CSS, making styling fast and consistent.",
		project: [
			{ id: 1, name: "LP - Rapier" },
			{ id: 2, name: "CMS - Rapier" },
			{ id: 3, name: "Dodemy" },
			{ id: 4, name: "WMS - LOBO" },
			{ id: 5, name: "Portofolio Website" },
		],
	},
	{
		id: 6,
		image: "/icons/skills/react.svg",
		imageAlt: "React Logo",
		title: "React",
		description:
			"React is a JavaScript library for building interactive user interfaces using reusable components, enabling fast, efficient updates and rendering for modern web applications.",
		project: [
			{ id: 1, name: "LP - Rapier" },
			{ id: 2, name: "CMS - Rapier" },
			{ id: 3, name: "WMS - LOBO" },
			{ id: 4, name: "Portofolio Website" },
		],
	},
	{
		id: 7,
		image: "/icons/skills/next-js.svg",
		imageAlt: "Next.js Logo",
		title: "Next.js",
		description:
			"Next.js is a React framework that simplifies building fast, scalable web applications with features like server-side rendering, static site generation, and built-in routing.",
		project: [
			{ id: 1, name: "LP - Rapier" },
			{ id: 2, name: "CMS - Rapier" },
			{ id: 3, name: "Portofolio Website" },
		],
	},
	{
		id: 8,
		image: "/icons/skills/shadcn.png",
		imageAlt: "ShadCN/UI logo",
		title: "ShadCN/UI",
		description:
			"ShadCN/UI is a component library for React that provides a set of customizable, accessible, and modern UI components, making it easy to build clean and responsive web interfaces.",
		project: [{ id: 1, name: "Portofolio Website" }],
	},
];

export const NAVIGATION = [
	{
		id: 1,
		name: "Introduction",
		href: "/",
		description: "Introduction about me",
	},
	{
		id: 2,
		name: "Skills",
		href: "/skills",
		description: "My Technology that i use in my project",
	},
	{
		id: 3,
		name: "Projects",
		href: "/projects",
		description: "Project that i was working on",
	},
];

export const SOCIAL_MEDIA = [
	{
		id: 1,
		name: "LinkedIn",
		icon: "/icons/social-media/linkedin.svg",
		href: "https://www.linkedin.com/in/abdulazizmishbahudin/",
	},
	{
		id: 2,
		name: "Github",
		icon: "/icons/social-media/github.svg",
		href: "https://github.com/jhokam",
	},
	{
		id: 3,
		name: "Instagram",
		icon: "/icons/social-media/instagram.svg",
		href: "https://www.instagram.com/abazmi_",
	},
];
