import mongoose, { Schema } from 'mongoose';

const TestimonialSchema = new Schema({
	content: {
		required: true,
		type: String,
	},
	rating: {
		required: true,
		type: Number,
	},
	courseId: {
		type: Schema.ObjectId,
		ref: 'Course',
	},
	user: {
		type: Schema.ObjectId,
		ref: 'User',
	},
});
console.log('models', mongoose.models);
export const Testimonial =
	mongoose.models.Testimonial ??
	mongoose.model('Testimonial', TestimonialSchema);
