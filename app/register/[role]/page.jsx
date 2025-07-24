import React from 'react';
import { SignupForm } from '../_components/signup-form';
export default async function RegisterPage({ params }) {
	const awaitedParams = await params;
	const { role } = awaitedParams;
	return (
		<div className="w-full flex-col h-screen flex items-center justify-center">
			<div className="container">
				<SignupForm role={role} />
			</div>
		</div>
	);
}
