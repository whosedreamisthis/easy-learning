import mongoose, { Schema } from 'mongoose';

const LessonSchema = new Schema({
	title: {
		required: true,
		type: String,
	},
	description: {
		required: true,
		type: String,
	},
});
export const Lesson =
	mongoose.models.Lesson ?? mongoose.model('Lesson', LessonSchema);
