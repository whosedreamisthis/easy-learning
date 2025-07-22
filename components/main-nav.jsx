import React from 'react';
import Link from 'next/link';
import Logo from './logo';
import { cn } from '@/lib/utils';
export default function MainNav({ items, children }) {
	console.log('ITEMS', items);
	return (
		<>
			<div className="flex gap-6 lg:gap-10 transition">
				<Link href="/">
					<Logo />
				</Link>

				{
					<nav className=" hidden gap-6 lg:flex">
						{items?.map((item, index) => {
							return (
								<Link
									key={index}
									href={item.disabled ? '#' : item.href}
									className={cn(
										'flex items-center text-lg text-black font-medium transition-colors hover:text-foreground/80 sm:text-sm'
									)}
								>
									{item.title}
								</Link>
							);
						})}
					</nav>
				}
			</div>
		</>
		// <div className="flex flex-col sm:flex-row gap-4 mb-10 mt-4 ml-2">
		// 	<Logo />
		// 	<div className="flex flex-row justify-start gap-4">
		// 		{items.map((item) => {
		// 			console.log(item);
		// 			return (
		// 				<Link key={item.id} href={item.href}>
		// 					<h1>{item.title}</h1>
		// 				</Link>
		// 			);
		// 		})}
		// 	</div>
		// </div>
	);
}
