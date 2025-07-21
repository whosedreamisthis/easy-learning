// components/home-client.jsx
'use client'; // This component needs to be a Client Component

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

export default function HomeClient({ courses }) {
	// You can now safely use hooks here
	const { theme, setTheme, resolvedTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
		setTheme('light'); // Explicitly set theme to light on client mount
	}, [setTheme]); // Depend on setTheme

	if (!mounted) {
		return null;
	}

	const handleClick = (mode) => {
		mode ? toast.success('Test Success') : toast.error('test error');
	};

	return (
		<div className="min-h-screen flex items-center justify-center bg-background text-foreground">
			<Button onClick={() => handleClick(true)}>Click</Button>
			{/* You can display courses data here */}
			{/* <div>
                <h2>Our Courses:</h2>
                <ul>
                    {courses.map(course => (
                        <li key={course._id}>{course.title}</li>
                    ))}
                </ul>
            </div> */}
		</div>
	);
}
