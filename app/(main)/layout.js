import Footer from '@/components/footer';
import React from 'react';

export default function MainLayout({ children }) {
	return (
		<div>
			<main>{children}</main>
			<Footer />
		</div>
	);
}
