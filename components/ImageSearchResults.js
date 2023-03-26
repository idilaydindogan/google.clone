import React from "react";
import Link from "next/link";
import PaginationButtons from "./PaginationButtons";

const ImageSearchResults = ({ results }) => {
	return (
		<div className="pb-40 mt-4 sm:pb-24">
			<div className="grid grid-cols-1 gap-3 px-6 mb-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
				{results.items.map((result) => (
					<div key={result.link} className="group">
						<div className="flex items-center justify-center bg-gray-100 rounded-xl hover:shadow-xl">
							<Link href={result.image.contextLink} target="_blank">
								<img
									src={result.link}
									alt={result.title}
									className="h-60 rounded-xl"
								/>
							</Link>
						</div>
						<div className="py-2 pl-2 hover:underline hover:decoration-1">
							<Link href={result.image.contextLink} target="_blank">
								<h2 className="text-gray-600 truncate">{result.title}</h2>
							</Link>
							<Link href={result.image.contextLink} target="_blank">
								<p className="text-gray-700">{result.displayLink}</p>
							</Link>
						</div>
					</div>
				))}
			</div>
			<div className="mb-10 ml-8">
				<PaginationButtons />
			</div>
		</div>
	);
};

export default ImageSearchResults;
