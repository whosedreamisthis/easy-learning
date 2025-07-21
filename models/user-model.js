import mongoose, { Schema } from 'mongoose';

const UserSchema = new Schema({
	firstName: {
		required: true,
		type: String,
	},
	lastName: {
		required: true,
		type: String,
	},
	password: {
		required: false,
		type: String,
	},
	email: {
		required: true,
		type: String,
	},

	phone: {
		required: true,
		type: String,
	},
	role: {
		type: String,
	},
	bio: {
		required: true,
		type: String,
	},

	socialMedia: {
		required: false,
		type: Object,
	},
	profilePicture: {
		required: false,
		type: String,
	},
	designation: {
		required: false,
		type: String,
	},
});
export const User = mongoose.models.User ?? mongoose.model('User', UserSchema);
