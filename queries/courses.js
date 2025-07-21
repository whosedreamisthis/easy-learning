// queries/courses.js
import { dbConnect } from '@/service/mongo';
import { Course } from '@/models/course-model';
import { Category } from '@/models/category-model';
import { User } from '@/models/user-model';
import { Testimonial } from '@/models/testimonial-model';
import { Module } from '@/models/module-model';
export async function getCourses() {
	await dbConnect(); // Crucial: Ensure connection is established
	try {
		const courses = await Course.find({})
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
			});
		// Serialize data for passing from server to client component if needed
		return JSON.parse(JSON.stringify(courses));
	} catch (error) {
		console.error('Error fetching courses:', error);
		return [];
	}
}
