// "use client";
// import React, { useState } from "react";

// export default function Cookies() {
// 	const [cookie, setCookie] = useState(
// 		localStorage.getItem("cookie") ?? false
// 	);

// 	return (
// 		<>
// 			{!cookie ? (
// 				<section className="fixed max-w-md p-4 mx-auto bg-white border border-gray-200 dark:bg-gray-800 left-12 bottom-16 dark:border-gray-700 rounded-2xl">
// 					<h2 className="font-semibold text-gray-800 dark:text-white">
// 						🍪 Cookie Notice
// 					</h2>

// 					<p className="mt-4 text-sm text-gray-600 dark:text-gray-300">
// 						We use cookies to ensure that we give you the best
// 						experience on our website.{" "}
// 						<a href="#" className="text-blue-500 hover:underline">
// 							Read cookies policies
// 						</a>
// 					</p>

// 					<div className="flex items-center justify-between mt-4 gap-x-4 shrink-0">
// 						<button className="text-xs text-gray-800 underline transition-colors duration-300 dark:text-white dark:hover:text-gray-400 hover:text-gray-600 focus:outline-none">
// 							Manage your preferences
// 						</button>

// 						<button
// 							onClick={(e) => {
// 								setCookie(true);
// 								localStorage.setItem("cookie", "true");
// 							}}
// 							className=" text-xs bg-gray-900 font-medium rounded-lg hover:bg-gray-700 text-white px-4 py-2.5 duration-300 transition-colors focus:outline-none"
// 						>
// 							Accept
// 						</button>
// 					</div>
// 				</section>
// 			) : (
// 				""
// 			)}
// 		</>
// 	);
// }
