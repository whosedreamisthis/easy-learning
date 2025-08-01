'use client';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useRouter } from 'next/navigation';
export function SignupForm({ role }) {
	const router = useRouter();
	async function onSubmit(event) {
		event.preventDefault();

		try {
			const formData = new FormData(event.currentTarget);
			const firstName = formData.get('first-name');
			const lastName = formData.get('last-name');
			const email = formData.get('email');
			const password = formData.get('password');

			const userRole =
				role === 'student' || role === 'instructor' ? role : 'student';
			const response = await fetch('/api/register', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					first_name: firstName,
					last_name: lastName,
					email,
					password,
					userRole,
				}),
			});

			response.status === 201 && router.push('/login');
		} catch (error) {
			console.log(error.message);
		}
	}
	return (
		<Card className="mx-auto max-w-sm">
			<CardHeader>
				<CardTitle className="text-xl">
					<p className="mt-5 text-3xl font-bold leading-tight text-gray-900 sm:leading-tight sm:text-5xl lg:text-3xl lg:leading-tight font-pj">
						<span className="relative inline-flex sm:inline">
							<span className="bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] blur-lg filter opacity-30 w-full h-full absolute inset-0"></span>
							<span className="relative">Sign Up</span>
						</span>
					</p>
				</CardTitle>
				<CardDescription>
					Enter your information to create an account
				</CardDescription>
			</CardHeader>
			<CardContent>
				<form onSubmit={onSubmit}>
					<div className="grid gap-4">
						<div className="grid grid-cols-2 gap-4">
							<div className="grid gap-2">
								<Label htmlFor="first-name">First name</Label>
								<Input
									id="first-name"
									name="first-name"
									placeholder="Max"
									required
								/>
							</div>
							<div className="grid gap-2">
								<Label htmlFor="last-name">Last name</Label>
								<Input
									id="last-name"
									name="last-name"
									placeholder="Robinson"
									required
								/>
							</div>
						</div>
						<div className="grid gap-2">
							<Label htmlFor="email">Email</Label>
							<Input
								id="email"
								name="email"
								type="email"
								placeholder="m@example.com"
								required
							/>
						</div>
						<div className="grid gap-2">
							<Label htmlFor="password">Password</Label>
							<Input
								id="password"
								name="password"
								type="password"
							/>
						</div>
						<div className="grid gap-2">
							<Label htmlFor="confirmPassword">
								Confirm Password
							</Label>
							<Input
								id="confirmPassword"
								type="password"
								name="confirmPassword"
							/>
						</div>
						<Button type="submit" className="w-full">
							Create an account
						</Button>
					</div>
					<div className="mt-4 text-center text-sm">
						Already have an account?{' '}
						<Link href="/login" className="underline">
							Sign in
						</Link>
					</div>
				</form>
			</CardContent>
		</Card>
	);
}
