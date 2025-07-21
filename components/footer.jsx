import React from 'react';
import Logo from './logo';

export default function Footer() {
	return (
		<footer>
			<div className="container flex flex-col items-center just gap-4 py-10 md:h-24 md:flex-row md:py-0">
				<div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
					<Logo />
					<p className="text-center text-sm leading-loose md:text-left">
						built by @easy-learning and @whosedreamisthis, 2025
					</p>
				</div>
			</div>
		</footer>
	);
}
