"use client";

import Link from "next/link";

export default function Error({ error, reset }) {
	return (
		<div className="min-h-[60vh]  px-4 py-16 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8">
			<div className="mx-auto max-w-max">
				<div className="sm:flex items-center">
					<p className="text-4xl font-bold tracking-tight text-indigo-600 sm:text-5xl">
						404
					</p>
					<div className="sm:ml-6">
						<div className="sm:border-l sm:border-gray-200 sm:pl-6">
							<h1 className="text-4xl font-bold tracking-tight  sm:text-5xl">
								Page not found
							</h1>
							<p className="mt-1 text-base text-gray-500">
								Please check the URL in the address bar and try
								again.
							</p>
						</div>
					</div>
				</div>

				<div className="mt-10 flex justify-center space-x-3 sm:border-l sm:border-transparent sm:pl-6">
					<a
						href="#"
						className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
					>
						Go back home
					</a>
					<Link
						href="/"
						className="inline-flex items-center rounded-md border border-transparent bg-indigo-100 px-4 py-2 text-sm font-medium text-indigo-700 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
					>
						Contact support
					</Link>
				</div>
			</div>
		</div>
	);
}
