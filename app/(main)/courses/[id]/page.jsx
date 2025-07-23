import CourseDetailsIntro from './_components/course-details-intro';
import CourseDetails from './_components/course-details';
import Testimonials from './_components/testimonials';
import RelatedCourses from './_components/related-courses';
import { getCourseDetails } from '@/queries/courses';
import { replaceMongoIdInArray } from '@/lib/convertData';

const courses = [
	{
		id: 1,
		title: 'Design',
		thumbnail: '/assets/images/categories/design.jpg',
	},

	{
		id: 3,
		title: 'Development',
		thumbnail: '/assets/images/categories/development.jpg',
	},
	{
		id: 4,
		title: 'Marketing',
		thumbnail: '/assets/images/categories/marketing.jpg',
	},
	{
		id: 5,
		title: 'IT & Software',
		thumbnail: '/assets/images/categories/it_software.jpg',
	},
	{
		id: 6,
		title: 'Personal Development',
		thumbnail: '/assets/images/categories/personal_development.jpg',
	},
	{
		id: 7,
		title: 'Business',
		thumbnail: '/assets/images/categories/business.jpg',
	},
	{
		id: 8,
		title: 'Photography',
		thumbnail: '/assets/images/categories/photography.jpg',
	},
	{
		id: 9,
		title: 'Music',
		thumbnail: '/assets/images/categories/music.jpg',
	},
];

const SingleCoursePage = async ({ params: { id } }) => {
	const course = await getCourseDetails(id);
	return (
		<div className="ml-5">
			<CourseDetailsIntro
				title={course?.title}
				subtitle={course?.subtitle}
				thumbnail={course?.thumbnail}
			/>
			<CourseDetails
				title={course?.title}
				subtitle={course?.subtitle}
				instructor={course.instructor}
			/>
			{course?.testimonials && (
				<Testimonials
					testimonials={replaceMongoIdInArray(course?.testimonials)}
				/>
			)}

			<RelatedCourses courses={courses} />
		</div>
	);
};
export default SingleCoursePage;
