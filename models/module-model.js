import mongoose, { Schema } from 'mongoose';

const ModuleSchema = new Schema({
	title: {
		required: true,
		type: String,
	},
	description: {
		required: true,
		type: String,
	},
	status: {
		required: true,
		type: String,
	},
	slug: {
		required: true,
		type: String,
	},
	course: {
		required: true,
		type: String,
	},
	lessonIds: {
		required: true,
		type: [String],
	},
	duration: {
		required: true,
		type: Number,
	},
});
export const Module =
	mongoose.models.Module ?? mongoose.model('Module', ModuleSchema);
