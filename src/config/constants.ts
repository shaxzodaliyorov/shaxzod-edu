import { AiOutlineCompass, AiOutlineUnorderedList } from 'react-icons/ai';
import { FaInfo, FaNodeJs, FaQuestion, FaUsers } from 'react-icons/fa';
import { GrReactjs } from 'react-icons/gr';
import { ImBooks } from 'react-icons/im';
import { MdContactPhone } from 'react-icons/md';
import { SiNestjs, SiNextdotjs } from 'react-icons/si';
import { EngIcon, RusIcon, TurkIcon, UzbIcon } from '../icons';
import { FormCourseInittionValueType } from '../interfaces/courses';
export const Languages = [
	{
		icon: EngIcon,
		label: 'English',
		type: 'en',
	},
	{
		icon: UzbIcon,
		label: 'Uzbek',
		type: 'uz',
	},
	{
		icon: RusIcon,
		label: 'РУССКИЙ',
		type: 'ru',
	},
	{
		icon: TurkIcon,
		label: 'Türkçe',
		type: 'tr',
	},
];

export const navigation = [
	{
		title: 'layout_general',
		nav: [
			{
				route: '/',
				label: 'layout_home',
				icon: AiOutlineCompass,
			},
			{
				route: '/courses',
				label: 'layout_courses',
				icon: AiOutlineUnorderedList,
			},
			{
				route: '/books',
				label: 'layout_books',
				icon: ImBooks,
			},
		],
	},
	{
		title: 'layout_pages',
		nav: [
			{
				route: '/about',
				label: 'layout_about',
				icon: FaInfo,
			},
			{
				route: '/faq',
				label: 'layout_faq',
				icon: FaQuestion,
			},
			{
				route: '/contact',
				label: 'layout_contact',
				icon: MdContactPhone,
			},
		],
	},
];

export const technology = [
	{
		title: 'React JS',
		subtitle: 'react_tech_disc',
		icon: GrReactjs,
	},
	{
		title: 'Node JS',
		subtitle: 'node_tech_disc',
		icon: FaNodeJs,
	},
	{
		title: 'Next JS',
		subtitle: 'next_tech_disc',
		icon: SiNextdotjs,
	},
	{
		title: 'Nest JS',
		subtitle: 'nest_tech_disc',
		icon: SiNestjs,
	},
];

export const Books = [
	{
		name: 'JavaScript - Design Pattern',
		image: 'https://ucarecdn.com/01292099-b782-4b74-a05e-f902be3feecd/',
		category: 'programming',
		price: 10,
	},
	{
		name: 'Proffessional ReactJS',
		image:
			'https://e1.pxfuel.com/desktop-wallpaper/595/427/desktop-wallpaper-js-posted-by-samantha-johnson-reactjs.jpg',
		category: 'programming',
		price: 40,
	},
	{
		name: 'HTML CSS - Web',
		image:
			'https://t3.ftcdn.net/jpg/04/86/60/44/360_F_486604480_EKKklldKqiwmvAunlEeF4QdI0dfjDojA.jpg',
		category: 'programming',
		price: 15,
	},
	{
		name: 'Backend Programming',
		image: 'http://wbsimms.com/wp-content/uploads/2016/07/NodeJsBackground.png',
		category: 'programming',
		price: 30,
	},

	{
		name: 'Proffessional Photoshop',
		image: 'https://wallpaperaccess.com/full/1533478.jpg',
		category: 'design',
		price: 90,
	},
	{
		name: 'Illustrator',
		image: 'https://images5.alphacoders.com/114/1147598.png',
		category: 'design',
		price: 20,
	},
	{
		name: 'Premier Pro',
		image: 'https://wallpaperaccess.com/full/3539123.jpg',
		category: 'design',
		price: 15,
	},

	{
		name: 'Startup',
		image: 'https://img.freepik.com/free-vector/illustration-startup-business_53876-18154.jpg',
		category: 'business',
		price: 30,
	},
	{
		name: 'Business idea',
		image:
			'https://c0.wallpaperflare.com/preview/931/296/849/business-idea-planning-board-business-plan-thumbnail.jpg',
		category: 'business',
		price: 24,
	},
	{
		name: 'Growth your plan',
		image:
			'https://online.stanford.edu/sites/default/files/styles/figure_default/public/you-have-a-business-idea-webinar-hero-image.jpg?itok=OaDnVEt0',
		category: 'business',
		price: 15,
	},

	{
		name: 'The History Of Website',
		image:
			'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2ViJTIwd2FsbHBhcGVyfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
		category: 'history',
		price: 30,
	},
	{
		name: 'Internet',
		image: 'https://wallpapercave.com/wp/G2c4FdC.jpg',
		category: 'history',
		price: 54,
	},
	{
		name: 'Difference Web And Web-app',
		image: 'https://wallpapercave.com/wp/wp4312426.jpg',
		category: 'history',
		price: 12,
	},

	{
		name: 'Writing An Essay',
		image:
			'https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d3JpdGluZyUyMGhhbmR8ZW58MHx8MHx8&w=1000&q=80',
		category: 'writing',
		price: 54,
	},
	{
		name: 'Professional Essay',
		image: 'https://wallpapercave.com/wp/wp7110644.jpg',
		category: 'writing',
		price: 12,
	},
];

export const AmdinNavigation = [
	{
		route: '/users',
		label: 'Users',
		icon: FaUsers,
	},
	{
		route: '/courses',
		label: 'Courses',
		icon: FaQuestion,
	},
	{
		route: '/lessons',
		label: 'Lessons',
		icon: MdContactPhone,
	},
];

export const FormCourseInittionValue: FormCourseInittionValueType = {
	title: '',
	price: 0,
	dagree: '',
	language: '',
	tech: '',
	discription: '',
	tutorial: '',
};

export const CourseSelectlanguages = [
	{ value: "O'zbek Tili", label: "O'zbek Tili" },
	{ value: 'Rus Tili', label: 'Rus Tili' },
	{ value: 'Englis tili', label: 'Englis tili' },
];

export const CourseSelectDagrees = [
	{ value: 'Junior', label: 'Junior' },
	{ value: 'Middile', label: 'Middile' },
	{ value: 'Senior', label: 'Senior' },
];
