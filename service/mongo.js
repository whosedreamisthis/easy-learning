import mongoose from 'mongoose';
// Check if MONGODB_CONNECTION_STRING is defined
const MONGODB_URI = process.env.MONGODB_CONNECTION_STRING;
if (!MONGODB_URI) {
	throw new Error(
		'Please define the MONGODB_CONNECTION_STRING environment variable inside .env.local'
	);
}

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */
let cached = global.mongoose;

if (!cached) {
	cached = global.mongoose = { conn: null, promise: null };
}

export async function dbConnect() {
	if (cached.conn) {
		console.log('Using cached MongoDB connection');
		return cached.conn;
	}

	if (!cached.promise) {
		const opts = {
			bufferCommands: false, // Recommended for serverless environments
			// You can add other options here if needed, e.g., useNewUrlParser: true, useUnifiedTopology: true
		};

		cached.promise = mongoose
			.connect(MONGODB_URI, opts)
			.then((mongooseInstance) => {
				console.log('MongoDB connected successfully!');
				return mongooseInstance;
			})
			.catch((error) => {
				console.error('MongoDB connection error:', error);
				cached.promise = null; // Reset promise on error so next attempt can try again
				throw error; // Re-throw the error so calling functions know it failed
			});
	}

	cached.conn = await cached.promise;
	return cached.conn;
}
