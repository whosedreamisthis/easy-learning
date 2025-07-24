import mongoose, { Schema } from 'mongoose';

const UserSchema = new Schema({
	first_name: {
		required: true,
		type: String,
	},
	last_name: {
		required: true,
		type: String,
	},
	password: {
		required: true,
		type: String,
	},
	email: {
		required: true,
		type: String,
	},

	role: {
		required: true,
		type: String,
	},
	phone: {
		required: false,
		type: String,
	},
	bio: {
		required: false,
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
