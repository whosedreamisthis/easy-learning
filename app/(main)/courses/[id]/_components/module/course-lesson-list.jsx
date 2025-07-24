import React from 'react';
import { Tv } from 'lucide-react';
import { StickyNote } from 'lucide-react';
import { cn } from '@/lib/utils';
import { getLesson } from '@/queries/lessons';
export default async function CourseLessonList({ lessonId }) {
	const lesson = await getLesson(lessonId);
	return (
		<div>
			<button
				type="button"
				className={cn(
					'flex items-center gap-x-2 text-slate-500 text-sm font-[500]  transition-all hover:text-slate-600  w-full'
				)}
			>
				<div className="flex items-center gap-x-2">
					<Tv size={16} className={cn('text-slate-500')} />
					{lesson?.title}
				</div>
			</button>
			{/* item ends */}
		</div>
	);
}
