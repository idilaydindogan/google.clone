export const dynamic = "force-dynamic";

import React from "react";
import Link from "next/link";
import ImageSearchResults from "components/ImageSearchResults";

const ImageSearcgPage = async ({ searchParams }) => {
	const startIndex = searchParams.start || 1;
	const response = await fetch(
		`https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchParams.searchTerm}&searchType=image&start=${startIndex}`
	);

	const data = await response.json();
	const results = data.items;

	if (!response.ok) {
		throw new Error("Something went wrong!");
	}

	if (!results) {
		return (
			<div className="flex flex-col items-center justify-center pt-10">
				<h1 className="mb-4 text-3xl">No Results Found</h1>
				<p className="text-lg">
					Try searching something else or go back to homepage{" "}
					<Link className="text-blue-500" href="/">
						Home
					</Link>
				</p>
			</div>
		);
	}
	return <>{results && <ImageSearchResults results={data} />}</>;
};

export default ImageSearcgPage;
