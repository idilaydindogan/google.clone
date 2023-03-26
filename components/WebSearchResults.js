import React from "react";
import Link from "next/link";
import parse from "html-react-parser";
import PaginationButtons from "./PaginationButtons";

const WebSearchResults = ({ results }) => {
	return (
		<div>
			<div className="w-full px-3 pb-24 pl-10 mx-auto">
				<p className="mt-3 mb-5 text-sm text-gray-600">
					About {results.searchInformation?.formattedTotalResults} results (
					{results.searchInformation?.formattedSearchTime} seconds)
				</p>
				{results.items?.map((result) => (
					<div key={result.cacheId} className="max-w-xl mb-8 space-y-1">
						<div className="text-sm text-gray-700">
							<Link href={result.link} className="truncate" target="_blank">
								{result.formattedUrl}
							</Link>
						</div>
						<div className="text-xl font-semibold text-blue-800 truncate hover:underline hover:decoration-2">
							<Link href={result.link} target="_blank">
								{result.title}
							</Link>
						</div>
						<div className="text-base">
							<p>{parse(result.htmlSnippet)}</p>
						</div>
					</div>
				))}
				<div className="mb-10">
					<PaginationButtons />
				</div>
			</div>
		</div>
	);
};

export default WebSearchResults;
