import mongoose, { Schema } from 'mongoose';

const EnrollmentSchema = new Schema({
	enrollment_date: {
		required: true,
		type: Date,
	},
	status: {
		required: true,
		type: Number,
	},
	completion_date: {
		required: true,

		type: Date,
	},
	method: {
		required: true,

		type: String,
	},
	completion_date: {
		required: true,
		type: Date,
	},
	course: {
		type: Schema.ObjectId,
		ref: 'course',
	},
	student: {
		type: Schema.ObjectId,
		ref: 'User',
	},
});
export const Enrollment =
	mongoose.models.Enrollment ??
	mongoose.model('Enrollment', EnrollmentSchema);
