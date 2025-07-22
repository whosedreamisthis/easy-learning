'use client';

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';

import { formatPrice } from '@/lib/formatPrice';

import { ArrowRight } from 'lucide-react';
import { BookOpen } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import SearchCourse from './_components/search-course';
import { X } from 'lucide-react';

import { Checkbox } from '@/components/ui/checkbox';
import FilterCourseMobile from './_components/filter-course-mobile';

const CATEGORY_OPTIONS = [
	{
		id: 1,
		label: 'Design',
		value: 'design',
	},

	{
		id: 3,
		label: 'Development',
		value: 'development',
	},
	{
		id: 4,
		label: 'Marketing',
		value: 'marketing',
	},
	{
		id: 5,
		label: 'IT & Software',
		value: 'it-software',
	},
	{
		id: 6,
		label: 'Personal Development',
		value: 'personal-development',
	},
	{
		id: 7,
		label: 'Business',
		value: 'business',
	},
	{
		id: 8,
		label: 'Photography',
		value: 'photography',
	},
	{
		id: 9,
		label: 'Music',
		value: 'music',
	},
];
const courses = [
	{
		id: 1,
		title: 'Design',
		thumbnail: '/assets/images/categories/design.jpg',
	},

	{
		id: 3,
		title: 'Development',
		thumbnail: '/assets/images/categories/development.jpg',
	},
	{
		id: 4,
		title: 'Marketing',
		thumbnail: '/assets/images/categories/marketing.jpg',
	},
	{
		id: 5,
		title: 'IT & Software',
		thumbnail: '/assets/images/categories/it_software.jpg',
	},
	{
		id: 6,
		title: 'Personal Development',
		thumbnail: '/assets/images/categories/personal_development.jpg',
	},
	{
		id: 7,
		title: 'Business',
		thumbnail: '/assets/images/categories/business.jpg',
	},
	{
		id: 8,
		title: 'Photography',
		thumbnail: '/assets/images/categories/photography.jpg',
	},
	{
		id: 9,
		title: 'Music',
		thumbnail: '/assets/images/categories/music.jpg',
	},
];
const PRICE_OPTIONS = [
	{ label: 'Free', value: 'free' },
	{ label: 'Paid', value: 'paid' },
];
const CoursesPage = () => {
	const [filter, setFilter] = useState({
		categories: ['development'],
		price: ['free'],
		sort: '',
	});

	//   apply checkbox filter
	const applyArrayFilter = ({ type, value }) => {
		const isFilterApplied = filter[type].includes(value);

		if (isFilterApplied) {
			setFilter((prev) => ({
				...prev,
				[type]: prev[type].filter((v) => v !== value),
			}));
		} else {
			setFilter((prev) => ({
				...prev,
				[type]: [...prev[type], value],
			}));
		}
	};

	return (
		<section
			id="courses"
			className="container space-y-6   dark:bg-transparent py-6  ml-8"
		>
			{/* <h2 className="text-xl md:text-2xl font-medium">All Courses</h2> */}
			{/* header */}
			<div className="flex items-baseline justify-between  border-gray-200 border-b pb-6 flex-col gap-4 lg:flex-row">
				<SearchCourse />

				<FilterCourseMobile />
			</div>
			{/* header ends */}
			{/* active filters */}
			<div className="flex items-center gap-2 flex-wrap">
				{/* active categories */}
				{filter.categories.length > 0 &&
					filter.categories.map((category) => (
						<Button
							key={category}
							variant="ghost"
							className="text-xs h-7 bg-muted rounded-full gap-1 text-sky-700"
							onClick={() =>
								applyArrayFilter({
									type: 'categories',
									value: category,
								})
							}
						>
							{category}
							<X className="w-3" />
						</Button>
					))}
				{/* active prices */}
				{filter.price.length > 0 &&
					filter.price.map((price) => (
						<Button
							key={price}
							variant="ghost"
							className="text-xs h-7 bg-muted rounded-full gap-1 text-sky-700"
							onClick={() =>
								applyArrayFilter({
									type: 'price',
									value: price,
								})
							}
						>
							{price}
							<X className="w-3" />
						</Button>
					))}
			</div>
			<section className="pb-24 pt-6">
				<div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
					{/* Filters */}
					{/* these component can be re use for mobile also */}
					<div className="hidden lg:block">
						<Accordion
							defaultValue={['categories']}
							type="multiple"
						>
							{/* Categories filter */}
							<AccordionItem value="categories">
								<AccordionTrigger className="py-3 text-sm text-gray-400 hover:text-gray-500">
									<span className="font-medium text-gray-900">
										Categories
									</span>
								</AccordionTrigger>

								<AccordionContent className="pt-6 animate-none">
									<ul className="space-y-4">
										{CATEGORY_OPTIONS.map(
											(option, optionIdx) => (
												<li
													key={option.value}
													className="flex items-center"
												>
													<Checkbox
														type="checkbox"
														id={`category-${optionIdx}`}
														onCheckedChange={() => {
															applyArrayFilter({
																type: 'categories',
																value: option.value,
															});
														}}
														checked={filter.categories.includes(
															option.value
														)}
													/>
													<label
														htmlFor={`category-${optionIdx}`}
														className="ml-3 text-sm text-gray-600 cursor-pointer"
													>
														{option.label}
													</label>
												</li>
											)
										)}
									</ul>
								</AccordionContent>
							</AccordionItem>
							{/* Price filter */}
							<AccordionItem value="price">
								<AccordionTrigger className="py-3 text-sm text-gray-400 hover:text-gray-500">
									<span className="font-medium text-gray-900">
										Price
									</span>
								</AccordionTrigger>

								<AccordionContent className="pt-6 animate-none">
									<ul className="space-y-4">
										{PRICE_OPTIONS.map(
											(option, optionIdx) => (
												<li
													key={option.value}
													className="flex items-center"
												>
													<Checkbox
														type="checkbox"
														id={`price-${optionIdx}`}
														onCheckedChange={() => {
															applyArrayFilter({
																type: 'price',
																value: option.value,
															});
														}}
														checked={filter.price.includes(
															option.value
														)}
													/>
													<label
														htmlFor={`price-${optionIdx}`}
														className="ml-3 text-sm text-gray-600 cursor-pointer"
													>
														{option.label}
													</label>
												</li>
											)
										)}
									</ul>
								</AccordionContent>
							</AccordionItem>
						</Accordion>
					</div>
					{/* Course grid */}
					<div className="lg:col-span-3 grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
						{courses.map((category) => {
							return (
								<Link
									key={category.id}
									href={`/courses/${category.id}`}
								>
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

											{/* <CourseProgress
												size="sm"
												value={80}
												variant={
													110 === 100 ? 'success' : ''
												}
											/> */}

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
							);
						})}
					</div>
				</div>
			</section>
		</section>
	);
};
export default CoursesPage;
