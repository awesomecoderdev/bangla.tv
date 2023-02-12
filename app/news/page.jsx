import Image from "next/image";
import Link from "next/link";
import React from "react";

export const revalidate = 60; // revalidate this page every 60 seconds

export const metadata = {
	title: "News",
};

async function getPosts() {
	const res = await fetch(
		`https://banglatv.tv/wp-json/wp/v2/posts/?_embed&per_page=12`
	);

	// const headers = await res.headers;
	// const pages = headers.get("x-wp-totalpages") ?? 100;
	// const page = Math.round(Math.random() * (pages - 1) + 1);

	// const response = await fetch(
	// 	`https://banglatv.tv/wp-json/wp/v2/posts/?_embed&per_page=12&page=${page}`
	// );

	// const posts = await response.json();
	const posts = await res.json();
	return { posts };
}

export default async function News() {
	const { posts } = await getPosts();

	return (
		<>
			<section className="bg-white dark:bg-gray-900">
				<div className="container px-6  mx-auto">
					<div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2 xl:grid-cols-3">
						{posts.map((post) => (
							<Link
								href={`news/${post.id}`}
								key={post.id}
								className="relative group"
							>
								<article className="relative">
									<div className="relative overflow-hidden object-cover object-center w-full h-52 rounded-lg lg:h-64 bg-gray-300 dark:bg-gray-600">
										<Image
											src={
												post.jetpack_featured_media_url
											}
											fill={true}
											className="z-10"
											alt={post.title.rendered}
											priority="true"
											sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw,33vw"
										/>
										<div class="flex items-center justify-center w-full h-full animate-pulse ">
											<svg
												class="w-12 h-12 text-gray-200"
												xmlns="http://www.w3.org/2000/svg"
												aria-hidden="true"
												fill="currentColor"
												viewBox="0 0 640 512"
											>
												<path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
											</svg>
										</div>
									</div>

									<div className="absolute opacity-0 group-hover:opacity-100 bottom-0 flex p-3 bg-white dark:bg-gray-900 ">
										<img
											className="object-cover object-center w-10 h-10 rounded-full"
											src={
												post.jetpack_featured_media_url
											}
											priority="true"
											alt={post._embedded.author[0].name}
										/>

										<div className="mx-4">
											<h1 className="text-sm text-gray-700 dark:text-gray-200">
												{post._embedded.author[0].name}
											</h1>
											<p className="text-sm text-gray-500 dark:text-gray-400">
												Creative Director
											</p>
										</div>
									</div>
								</article>

								<h1 className="mt-6 text-xl font-semibold text-gray-800 dark:text-white truncate ">
									{post.title.rendered}
								</h1>

								<p className="text-sm text-gray-500 dark:text-gray-400">
									{post.excerpt.rendered
										.replace(/<[^>]*>/g, "")
										.substring(0, 180)}
									..
								</p>
							</Link>
						))}
					</div>
				</div>
			</section>
		</>
	);
}
