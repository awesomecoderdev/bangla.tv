import Image from "next/image";
import { Inter } from "@next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const revalidate = 60; // revalidate this page every 60 seconds

async function getPosts() {
	const res = await fetch(
		`https://banglatv.tv/wp-json/wp/v2/posts/?_embed&per_page=12`
	);
	const posts = await res.json();
	const headers = await res.headers;
	const pages = headers.get("x-wp-totalpages");
	const next = headers.get("link");
	// console.log("next", next);
	// console.log("pages", pages);
	return { posts };
}

export async function generateStaticParams() {
	const { posts } = await getPosts();
	return posts.map((post) => ({
		id: post.id,
	}));
}

export default async function Home() {
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
										<div class="flex items-center justify-center w-full h-full animate-pulse">
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

			<section class="container flex flex-col px-6 py-4 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
				<div class="flex flex-col items-center w-full lg:flex-row lg:w-1/2">
					<div class="flex justify-center order-2 mt-6 lg:mt-0 lg:space-y-3 lg:flex-col">
						<button class="w-3 h-3 mx-2 bg-blue-500 rounded-full lg:mx-0 focus:outline-none"></button>
						<button class="w-3 h-3 mx-2 bg-gray-300 rounded-full lg:mx-0 focus:outline-none hover:bg-blue-500"></button>
						<button class="w-3 h-3 mx-2 bg-gray-300 rounded-full lg:mx-0 focus:outline-none hover:bg-blue-500"></button>
						<button class="w-3 h-3 mx-2 bg-gray-300 rounded-full lg:mx-0 focus:outline-none hover:bg-blue-500"></button>
					</div>

					<div class="max-w-lg lg:mx-12 lg:order-2">
						<h1 class="text-3xl font-semibold tracking-wide text-gray-800 dark:text-white lg:text-4xl">
							The best TV Watch now
						</h1>
						<p class="mt-4 text-gray-600 dark:text-gray-300">
							Lorem ipsum, dolor sit amet consectetur adipisicing
							elit. Aut quia asperiores alias vero magnam
							recusandae adipisci ad vitae laudantium quod rem
							voluptatem eos accusantium cumque.
						</p>
						<div class="mt-6">
							<Link
								href="https://youtube.com/@awesomecoder.dev"
								class="px-6 py-2.5 mt-6 text-sm font-medium leading-5 text-center text-white capitalize bg-blue-600 rounded-lg hover:bg-blue-500 lg:mx-0 lg:w-auto focus:outline-none"
							>
								Watch Now
							</Link>
						</div>
					</div>
				</div>

				<div class="flex items-center justify-center w-full h-96 lg:w-1/2">
					<div class="relative object-cover w-full h-full max-w-2xl rounded-xl overflow-hidden  bg-gray-300 dark:bg-gray-600">
						<Image
							src="/tv.png"
							fill={true}
							alt={process.env.APP_NAME}
							priority="true"
							sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw,33vw"
							className="z-10"
						/>
						<div class="flex items-center justify-center w-full h-full animate-pulse">
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
				</div>
			</section>

			<footer class="bg-white dark:bg-gray-900">
				<div class="container px-6 pt-12 mx-auto">
					<div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
						<div>
							<div class="text-xs font-medium text-gray-400 uppercase">
								Getting Started
							</div>

							<a
								href="#"
								class="block mt-5 text-sm font-medium text-gray-500 duration-700 dark:text-gray-300 hover:text-gray-400 dark:hover:text-gray-200 hover:underline"
							>
								Installation
							</a>
							<a
								href="#"
								class="block mt-3 text-sm font-medium text-gray-500 duration-700 dark:text-gray-300 hover:text-gray-400 dark:hover:text-gray-200 hover:underline"
							>
								Release Notes
							</a>
							<a
								href="#"
								class="block mt-3 text-sm font-medium text-gray-500 duration-700 dark:text-gray-300 hover:text-gray-400 dark:hover:text-gray-200 hover:underline"
							>
								Upgrade Guide
							</a>
							<a
								href="#"
								class="block mt-3 text-sm font-medium text-gray-500 duration-700 dark:text-gray-300 hover:text-gray-400 dark:hover:text-gray-200 hover:underline"
							>
								Using with Preprocessors
							</a>
							<a
								href="#"
								class="block mt-3 text-sm font-medium text-gray-500 duration-700 dark:text-gray-300 hover:text-gray-400 dark:hover:text-gray-200 hover:underline"
							>
								Optimizing for Production
							</a>
							<a
								href="#"
								class="block mt-3 text-sm font-medium text-gray-500 duration-700 dark:text-gray-300 hover:text-gray-400 dark:hover:text-gray-200 hover:underline"
							>
								Browser Support
							</a>
							<a
								href="#"
								class="block mt-3 text-sm font-medium text-gray-500 duration-700 dark:text-gray-300 hover:text-gray-400 dark:hover:text-gray-200 hover:underline"
							>
								IntelliSense
							</a>
						</div>

						<div>
							<div class="text-xs font-medium text-gray-400 uppercase">
								Getting Started
							</div>

							<a
								href="#"
								class="block mt-5 text-sm font-medium text-gray-500 duration-700 dark:text-gray-300 hover:text-gray-400 dark:hover:text-gray-200 hover:underline"
							>
								Installation
							</a>
							<a
								href="#"
								class="block mt-3 text-sm font-medium text-gray-500 duration-700 dark:text-gray-300 hover:text-gray-400 dark:hover:text-gray-200 hover:underline"
							>
								Release Notes
							</a>
							<a
								href="#"
								class="block mt-3 text-sm font-medium text-gray-500 duration-700 dark:text-gray-300 hover:text-gray-400 dark:hover:text-gray-200 hover:underline"
							>
								Upgrade Guide
							</a>
							<a
								href="#"
								class="block mt-3 text-sm font-medium text-gray-500 duration-700 dark:text-gray-300 hover:text-gray-400 dark:hover:text-gray-200 hover:underline"
							>
								Using with Preprocessors
							</a>
							<a
								href="#"
								class="block mt-3 text-sm font-medium text-gray-500 duration-700 dark:text-gray-300 hover:text-gray-400 dark:hover:text-gray-200 hover:underline"
							>
								Optimizing for Production
							</a>
							<a
								href="#"
								class="block mt-3 text-sm font-medium text-gray-500 duration-700 dark:text-gray-300 hover:text-gray-400 dark:hover:text-gray-200 hover:underline"
							>
								Browser Support
							</a>
							<a
								href="#"
								class="block mt-3 text-sm font-medium text-gray-500 duration-700 dark:text-gray-300 hover:text-gray-400 dark:hover:text-gray-200 hover:underline"
							>
								IntelliSense
							</a>
						</div>

						<div>
							<div class="text-xs font-medium text-gray-400 uppercase">
								Getting Started
							</div>

							<a
								href="#"
								class="block mt-5 text-sm font-medium text-gray-500 duration-700 dark:text-gray-300 hover:text-gray-400 dark:hover:text-gray-200 hover:underline"
							>
								Installation
							</a>
							<a
								href="#"
								class="block mt-3 text-sm font-medium text-gray-500 duration-700 dark:text-gray-300 hover:text-gray-400 dark:hover:text-gray-200 hover:underline"
							>
								Release Notes
							</a>
							<a
								href="#"
								class="block mt-3 text-sm font-medium text-gray-500 duration-700 dark:text-gray-300 hover:text-gray-400 dark:hover:text-gray-200 hover:underline"
							>
								Upgrade Guide
							</a>
							<a
								href="#"
								class="block mt-3 text-sm font-medium text-gray-500 duration-700 dark:text-gray-300 hover:text-gray-400 dark:hover:text-gray-200 hover:underline"
							>
								Using with Preprocessors
							</a>
							<a
								href="#"
								class="block mt-3 text-sm font-medium text-gray-500 duration-700 dark:text-gray-300 hover:text-gray-400 dark:hover:text-gray-200 hover:underline"
							>
								Optimizing for Production
							</a>
							<a
								href="#"
								class="block mt-3 text-sm font-medium text-gray-500 duration-700 dark:text-gray-300 hover:text-gray-400 dark:hover:text-gray-200 hover:underline"
							>
								Browser Support
							</a>
							<a
								href="#"
								class="block mt-3 text-sm font-medium text-gray-500 duration-700 dark:text-gray-300 hover:text-gray-400 dark:hover:text-gray-200 hover:underline"
							>
								IntelliSense
							</a>
						</div>

						<div>
							<div class="text-xs font-medium text-gray-400 uppercase">
								Getting Started
							</div>

							<a
								href="#"
								class="block mt-5 text-sm font-medium text-gray-500 duration-700 dark:text-gray-300 hover:text-gray-400 dark:hover:text-gray-200 hover:underline"
							>
								Installation
							</a>
							<a
								href="#"
								class="block mt-3 text-sm font-medium text-gray-500 duration-700 dark:text-gray-300 hover:text-gray-400 dark:hover:text-gray-200 hover:underline"
							>
								Release Notes
							</a>
							<a
								href="#"
								class="block mt-3 text-sm font-medium text-gray-500 duration-700 dark:text-gray-300 hover:text-gray-400 dark:hover:text-gray-200 hover:underline"
							>
								Upgrade Guide
							</a>
							<a
								href="#"
								class="block mt-3 text-sm font-medium text-gray-500 duration-700 dark:text-gray-300 hover:text-gray-400 dark:hover:text-gray-200 hover:underline"
							>
								Using with Preprocessors
							</a>
							<a
								href="#"
								class="block mt-3 text-sm font-medium text-gray-500 duration-700 dark:text-gray-300 hover:text-gray-400 dark:hover:text-gray-200 hover:underline"
							>
								Optimizing for Production
							</a>
							<a
								href="#"
								class="block mt-3 text-sm font-medium text-gray-500 duration-700 dark:text-gray-300 hover:text-gray-400 dark:hover:text-gray-200 hover:underline"
							>
								Browser Support
							</a>
							<a
								href="#"
								class="block mt-3 text-sm font-medium text-gray-500 duration-700 dark:text-gray-300 hover:text-gray-400 dark:hover:text-gray-200 hover:underline"
							>
								IntelliSense
							</a>
						</div>
					</div>
				</div>
			</footer>
		</>
	);
}
