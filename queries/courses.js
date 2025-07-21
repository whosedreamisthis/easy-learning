// queries/courses.js
import { dbConnect } from '@/service/mongo';
import { Course } from '@/models/course-model';

export async function getCourses() {
	await dbConnect(); // Crucial: Ensure connection is established
	try {
		const courses = await Course.find({});
		// Serialize data for passing from server to client component if needed
		return JSON.parse(JSON.stringify(courses));
	} catch (error) {
		console.error('Error fetching courses:', error);
		return [];
	}
}
