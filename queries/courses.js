// queries/courses.js
import { dbConnect } from '@/service/mongo';
import { Course } from '@/models/course-model';
import { Category } from '@/models/category-model';
import { User } from '@/models/user-model';
import { Testimonial } from '@/models/testimonial-model';
import { Module } from '@/models/module-model';
import {
	replaceMongoIdInArray,
	replaceMongoIdInObject,
} from '@/lib/convertData';
export async function getCourseList() {
	await dbConnect(); // Crucial: Ensure connection is established
	try {
		const courses = await Course.find({})
			.select([
				'title',
				'subtitle',
				'thumbnail',
				'modules',
				'price',
				'category',
				'instructor',
			])
			.populate({
				path: 'category',
				model: Category,
			})
			.populate({
				path: 'instructor',
				model: User,
			})
			.populate({
				path: 'testimonials',
				model: Testimonial,
			})
			.populate({
				path: 'modules',
				model: Module,
			})
			.lean();
		// Serialize data for passing from server to client component if needed
		return replaceMongoIdInArray(courses); //JSON.parse(JSON.stringify(courses));
	} catch (error) {
		console.error('Error fetching courses:', error);
		return [];
	}
}

export async function getCourseDetails(id) {
	await dbConnect(); // Crucial: Ensure connection is established
	try {
		const course = await Course.findById(id)
			// .select([
			// 	'title',
			// 	'subtitle',
			// 	'thumbnail',
			// 	'modules',
			// 	'price',
			// 	'category',
			// 	'instructor',
			// ])
			.populate({
				path: 'category',
				model: Category,
			})
			.populate({
				path: 'instructor',
				model: User,
			})
			.populate({
				path: 'testimonials',
				model: Testimonial,
				populate: {
					path: 'user',
					model: User,
				},
			})
			.populate({
				path: 'modules',
				model: Module,
			})
			.lean();
		// Serialize data for passing from server to client component if needed
		return replaceMongoIdInObject(course); //JSON.parse(JSON.stringify(courses));
	} catch (error) {
		console.error('Error fetching courses:', error);
		return [];
	}
}
