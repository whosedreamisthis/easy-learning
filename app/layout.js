import './globals.css'; // Import global styles
import { ThemeProvider } from '../components/theme-provider'; // Assume theme-provider.jsx is in components
import { Toaster } from '../components/ui/sonner';
import { dbConnect } from '@/service/mongo';
// This is a placeholder for your font imports if you have any.
// For simplicity, we're omitting actual font imports here,
// but in a real Next.js app, you might have something like:
// import { Inter } from 'next/font/google';
// const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'Easy Learning',
	description: 'A basic Next.js app demonstrating a light theme.',
};

export default async function RootLayout({ children }) {
	const conn = await dbConnect();
	return (
		<html lang="en" suppressHydrationWarning>
			<body>
				{/*
          The ThemeProvider from next-themes manages the theme.
          - attribute="class": next-themes will add 'light' or 'dark' class to the <html> element.
          - defaultTheme="light": Sets the default theme to light.
          - enableSystem={false}: Crucially, this disables detection of the user's system theme preference.
                                  This ensures the app stays in 'light' mode regardless of OS settings.
          - disableTransitionOnChange: Prevents flashes during theme changes (though less critical here).
        */}
				<ThemeProvider
					attribute="class"
					defaultTheme="light"
					enableSystem={false} // Forces light theme, ignores system preference
					disableTransitionOnChange
				>
					{children}
					<Toaster richColors position="top-center" />
				</ThemeProvider>
			</body>
		</html>
	);
}
