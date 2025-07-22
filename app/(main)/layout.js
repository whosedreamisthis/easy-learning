import Footer from '@/components/footer';
import MainNav from '@/components/main-nav';
import React from 'react';
const navLinks = [
	{
		id: 1,
		title: 'Features',
		href: '/#features',
	},
	{
		id: 2,
		title: 'Pricing',
		href: '/#pricing',
	},
	{
		id: 3,
		title: 'Blog',
		href: '/#blog',
	},
	{
		id: 4,
		title: 'Documentation',
		href: '/#documentation',
	},
];
export default function MainLayout({ children }) {
	return (
		<div className="flex min-8-screen flex-col">
			<header className="z-40 bg-background/60 backgdrop:blur-md fixed top-0 left-0 right-0 border-b">
				<div className="container flex h-20 items-center justify-between py-6">
					<MainNav items={navLinks} />
				</div>
			</header>
			<main className="flex-1 pt-20 flex flex-col">{children}</main>
			<Footer />
		</div>
	);
}
