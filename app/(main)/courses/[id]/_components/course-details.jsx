import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Presentation } from 'lucide-react';
import { UsersRound } from 'lucide-react';
import { Star } from 'lucide-react';
import { MessageSquare } from 'lucide-react';
import { BookCheck } from 'lucide-react';
import { Clock10 } from 'lucide-react';
import { Radio } from 'lucide-react';
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';
import { Video } from 'lucide-react';
import { NotepadText } from 'lucide-react';
import { FileQuestion } from 'lucide-react';
import { PlayCircle } from 'lucide-react';
import { SquarePlay } from 'lucide-react';
import { Tv } from 'lucide-react';
import { StickyNote } from 'lucide-react';
import CourseOverview from './course-overview';
import { cn } from '@/lib/utils';
import CourseCurriculum from './course-curriculum';
import CourseInstructor from './course-instructor';

export default function CourseDetails({ title, subtitle, instructor }) {
	return (
		<section className="py-8 md:py-12 lg:py-24">
			<div className="container">
				<span className="bg-green-500 px-4 py-0.5 rounded-full text-xs font-medium text-white inline-block">
					Development
				</span>
				<h3 className="text-2xl md:text-3xl lg:text-4xl font-bold 2xl:text-5xl mt-3">
					{title}
				</h3>
				<p className="mt-3 text-gray-600 text-sm">{subtitle}</p>
				{/*  */}
				<div className="flex sm:items-center gap-5 flex-col sm:flex-row sm:gap-6 md:gap-20 mt-6">
					<div className="flex items-center gap-2">
						<img
							className="w-[40px] h-[40px] rounded-full"
							src="https://avatars.githubusercontent.com/u/47516621?v=4"
							alt="Ariyan"
						/>
						<p className="font-bold">
							{instructor.firstName} {instructor.lastName}
						</p>
					</div>
					<div className="flex items-center gap-2 text-sm">
						<span className="text-success font-semibold">
							Last Updated:{' '}
						</span>
						<span>Feb 22, 2022</span>
					</div>
				</div>

				{/* Tab */}
				<div className="my-6">
					<Tabs defaultValue="overview" className="w-full">
						<TabsList className="grid w-full grid-cols-3 my-6 max-w-[768px]">
							<TabsTrigger value="overview">Overview</TabsTrigger>
							<TabsTrigger value="curriculum">
								Curriculum
							</TabsTrigger>
							<TabsTrigger value="instructor">
								Instructor
							</TabsTrigger>
							{/* <TabsTrigger value="reviews">Reviews</TabsTrigger> */}
						</TabsList>
						<TabsContent value="overview">
							<CourseOverview />
							{/* each tab content can be independent component */}
						</TabsContent>
						<TabsContent value="curriculum">
							{/* each tab content can be independent component */}
							<CourseCurriculum />
							{/* contents end */}
						</TabsContent>

						<TabsContent value="instructor">
							{/* each tab content can be independent component */}
							<CourseInstructor />
						</TabsContent>
					</Tabs>
				</div>
			</div>
		</section>
	);
}
