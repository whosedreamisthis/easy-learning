// app/page.js
// This file is now a Server Component (no 'use client' at the top)
import { getCourses } from '@/queries/courses';
import HomeClient from '@/components/home-client'; // Import the new client component

export default async function Home() {
	const courses = await getCourses(); // Data fetched on the server
	console.log('Courses in server component:', courses);

	return (
		// Pass the fetched courses to the client component
		<HomeClient courses={courses} />
	);
}
