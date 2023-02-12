import Image from "next/image";
import Link from "next/link";

export const revalidate = false;

async function getPost(id) {
	const res = await fetch(
		`https://banglatv.tv/wp-json/wp/v2/posts/${id}/?_embed`
	);
	const post = await res.json();

	// const cat_id = post._embedded["wp:term"][0][0].id ?? 1;
	// const categories = await fetch(
	// 	`https://banglatv.tv/wp-json/wp/v2/posts/?_embed&categories=${cat_id}&per_page=6`
	// );
	// const cats = await categories.json();
	const cats = [];

	return { post, cats };
}

export async function generateMetadata({ params, searchParams }) {
	// console.log("params", params);
	// console.log("searchParams", searchParams);
	if (params?.id) {
		const { post } = await getPost(params.id);
		return { title: post?.title.rendered ?? "Unknown" };
	} else {
		return { title: "Unknown" };
	}
	// return { title: "Hello world" };
}

export default async function Page({ params }) {
	const { post, cats } = await getPost(params.id);

	return (
		<>
			<article className="relative">
				<div className="container px-6 py-10 mx-auto">
					<div className="lg:flex lg:-mx-6">
						<div className="lg:w-3/4 lg:px-6">
							<div className="relative object-cover object-center w-full h-80 xl:h-[28rem] rounded-xl overflow-hidden bg-gray-300  dark:bg-gray-600">
								<Image
									src={post.jetpack_featured_media_url}
									fill={true}
									alt={post.title?.rendered}
									className="z-10"
								/>
								<div className="flex items-center justify-center w-full h-full animate-pulse">
									<svg
										className="w-16 h-16 text-gray-200"
										xmlns="http://www.w3.org/2000/svg"
										aria-hidden="true"
										fill="currentColor"
										viewBox="0 0 640 512"
									>
										<path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
									</svg>
								</div>
							</div>

							<div>
								{/* <p className="mt-6 text-sm text-blue-500 uppercase">
									Want to know
								</p> */}

								<h1 className="max-w-lg mt-4 text-2xl font-semibold leading-tight text-gray-800 dark:text-white">
									{post.title?.rendered}
								</h1>

								<div className="flex items-center mt-6">
									<div className="relative object-cover object-center w-10 h-10 rounded-full overflow-hidden  bg-gray-300  dark:bg-gray-600">
										<Image
											src={
												post.jetpack_featured_media_url
											}
											fill={true}
											alt={
												post._embedded?.author[0]
													?.name ??
												post.title?.rendered
											}
											className="z-10"
										/>
										<div className="flex items-center justify-center w-full h-full animate-pulse">
											<svg
												className="w-4 h-4 text-gray-200"
												xmlns="http://www.w3.org/2000/svg"
												aria-hidden="true"
												fill="currentColor"
												viewBox="0 0 640 512"
											>
												<path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
											</svg>
										</div>
									</div>

									<div className="mx-4">
										<h1 className="text-sm text-gray-700 dark:text-gray-200">
											{post._embedded?.author[0]?.name}
										</h1>
										<p className="text-sm text-gray-500 dark:text-gray-400">
											Reporter
										</p>
									</div>
								</div>
								<div
									className="relative py-6"
									id="content"
									dangerouslySetInnerHTML={{
										__html:
											post.content?.rendered ??
											"<span>Hello no data</span>",
									}}
								></div>
							</div>
						</div>

						<div className="mt-8 lg:w-1/4 lg:mt-0 lg:px-6 space-y-5 flex flex-col">
							{cats.map((cat) => (
								<>
									{post.id != cat.id ? (
										<Link
											href={`news/${cat.id}`}
											key={cat.id}
											className="relative "
										>
											<div className="relative object-cover object-center w-full h-30 xl:h-40 rounded-xl overflow-hidden  bg-gray-300  dark:bg-gray-600">
												<Image
													src={
														cat._embedded[
															"wp:featuredmedia"
														][0].source_url
													}
													fill={true}
													alt={cat.title?.rendered}
													className="z-10"
												/>
												<div className="flex items-center justify-center w-full h-full animate-pulse">
													<svg
														className="w-12 h-12 text-gray-200"
														xmlns="http://www.w3.org/2000/svg"
														aria-hidden="true"
														fill="currentColor"
														viewBox="0 0 640 512"
													>
														<path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
													</svg>
												</div>
											</div>
											<h2 className="mt-3 text-sm font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-lg truncate">
												{cat.title?.rendered}
											</h2>
										</Link>
									) : (
										""
									)}
								</>
							))}
						</div>
					</div>
				</div>
			</article>
		</>
	);
}
