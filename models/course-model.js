import mongoose, { Schema } from 'mongoose';

const CourseSchema = new Schema({
	title: {
		required: true,
		type: String,
	},
	subtitle: {
		required: true,
		type: String,
	},
	description: {
		required: true,
		type: String,
	},
	thumbnail: {
		required: true,
		type: String,
	},
	modules: {
		required: true,
		type: [Schema.ObjectId],
	},
	price: {
		required: true,
		type: Number,
	},
	active: {
		required: true,
		type: Boolean,
	},
	thumbnail: {
		required: true,
		type: String,
	},
	category: {
		type: Schema.ObjectId,
		ref: 'Category',
	},
	instructor: {
		type: Schema.ObjectId,
		ref: 'User',
	},
	testimonials: [
		{
			type: Schema.ObjectId,
			ref: 'Testimonial',
		},
	],
	quizSet: {
		required: true,
		type: Schema.ObjectId,
	},
	learning: {
		required: true,
		type: [String],
	},
	modifiedOn: {
		required: true,
		type: Date,
	},
	createdOn: {
		required: true,
		type: Date,
	},
});
console.log('models', mongoose.models);
export const Course =
	mongoose.models.Course ?? mongoose.model('Course', CourseSchema);
