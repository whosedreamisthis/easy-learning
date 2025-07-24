import { dbConnect } from '@/service/mongo';
import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { User } from '@/models/user-model';

export const POST = async (request) => {
	const { first_name, last_name, email, password, userRole } =
		await request.json();
	await dbConnect();
	const hashedPassword = await bcrypt.hash(password, 5);
	const newUser = {
		first_name,
		last_name,
		email,
		password: hashedPassword,
		role: userRole,
	};

	console.log(newUser);
	try {
		await User.create(newUser);
		return new NextResponse('User has been created', { status: 201 });
	} catch (error) {
		console.log('ERROR', error.message);
		return new NextResponse(error.message, { status: 500 });
	}
};
