export interface createCourseType {
	title: string;
	price: number;
	dagree: string;
	language: string;
	tech: string;
	techimg: string;
	discription: string;
	tutorial: string;
	courseImg: string;
}

export interface lessonFormType {
	title: string;
	videolink: string;
	hours: string;
	minutus: string;
	seconds: string;
	id?: string;
}
