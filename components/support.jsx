import React from 'react';

export default function Support() {
	return (
		<div className="bg-darkBlue text-black py-5 px-4 md:px-16 border-b border-gray-700">
			<div className="max-w-7xl mx-auto flex-flex-col md:flex-row items-center space-y-12 md:space.-y-0 md:space-x-8">
				<div className="flex-1">
					<p className="mt-5 text-3xl font-bold leading-tight text-gray-900 sm:leading-tight sm:text-5xl lg:leading-tight">
						<span className="relative inline-flex sm:inline">
							<span className="bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] blur-lg filter opacity-30 w-full h-full absolute inset-0"></span>
							<span className="relative">
								Let us know if you need support.
							</span>
						</span>
					</p>
				</div>
			</div>
		</div>
	);
}
