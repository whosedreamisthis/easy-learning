'use client'; // This component needs to be a Client Component to use hooks like useState/useEffect

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes'; // Import useTheme hook
import { Button } from '@/components/ui/button';
export default function Home() {
	const { theme, setTheme, resolvedTheme } = useTheme(); // Get theme state and setter
	const [mounted, setMounted] = useState(false); // State to track if component is mounted on client

	// useEffect runs only on the client side after hydration.
	// This ensures that we only interact with the theme system when the component is fully mounted.
	useEffect(() => {
		setMounted(true);
		// You could optionally call setTheme('light') here if you wanted to explicitly
		// set it on the client, but with enableSystem={false} and defaultTheme="light"
		// in layout.js, it's often not strictly necessary for a fixed light theme.
		// However, including it can ensure consistency if local storage was previously set to 'dark'.
		setTheme('light'); // Explicitly set theme to light on client mount
	}, []); // Add setTheme to dependency array

	// If the component is not yet mounted, return null or a loading state.
	// This prevents hydration mismatches where the server might render one thing
	// and the client another before next-themes has initialized.
	if (!mounted) {
		return null;
	}

	return (
		<div className="min-h-screen flex items-center justify-center bg-background text-foreground">
			<h1 className="text-3xl font-bold underline">Hello world!</h1>
			<Button
				onClick={() => {
					setTheme('dark');
					setMounted(true);
					console.log('button click');
					if (theme === 'light') {
						setTheme('dark');
					} else {
						setTheme('light');
					}
				}}
			>
				Change theme
			</Button>
			<p className="mt-4 text-lg">
				Current theme: <span className="font-semibold">{theme}</span>{' '}
				(Resolved:{' '}
				<span className="font-semibold">{resolvedTheme}</span>)
			</p>
		</div>
	);
}
