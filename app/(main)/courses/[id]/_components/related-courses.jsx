import React from 'react';
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel';
import { SectionTitle } from '@/components/section-title';
import { Button, buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';

import { BookOpen } from 'lucide-react';
import { ArrowRight } from 'lucide-react';
import { formatPrice } from '@/lib/formatPrice';
export default function RelatedCourses({ courses }) {
	return (
		<section className="">
			<div className="container">
				<SectionTitle className="mb-6">Related Courses</SectionTitle>
				<Carousel
					// opts={{
					// 	align: 'start',
					// }}
					className="max-2xl:w-[90%] w-full mx-auto"
				>
					<CarouselPrevious />
					<CarouselNext />
					<CarouselContent>
						{courses.map((course) => (
							<CarouselItem
								key={course.id}
								className="md:basis-1/2 lg:basis-1/3"
							>
								<Link href={`/courses/${course.id}`}>
									<div className="group hover:shadow-sm transition overflow-hidden border rounded-lg p-3 h-full">
										<div className="relative w-full aspect-video rounded-md overflow-hidden">
											<Image
												src="/assets/images/courses/course_1.png"
												alt={'course'}
												className="object-cover"
												fill
											/>
										</div>
										<div className="flex flex-col pt-2">
											<div className="text-lg md:text-base font-medium group-hover:text-sky-700 line-clamp-2">
												Reactive Accelerator
											</div>
											<p className="text-xs text-muted-foreground">
												Development
											</p>
											<div className="my-3 flex items-center gap-x-2 text-sm md:text-xs">
												<div className="flex items-center gap-x-1 text-slate-500">
													<div>
														<BookOpen className="w-4" />
													</div>
													<span>4 Chapters</span>
												</div>
											</div>

											<div className="flex items-center justify-between mt-4">
												<p className="text-md md:text-sm font-medium text-slate-700">
													{formatPrice(49)}
												</p>

												<Button
													variant="ghost"
													className="text-xs text-sky-700 h-7 gap-1"
												>
													Enroll
													<ArrowRight className="w-3" />
												</Button>
											</div>
										</div>
									</div>
								</Link>
							</CarouselItem>
						))}
					</CarouselContent>
				</Carousel>
			</div>
		</section>
	);
}
