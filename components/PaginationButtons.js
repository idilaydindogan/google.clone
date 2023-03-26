"use client";
import React from "react";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";

const PaginationButtons = () => {
	const pathname = usePathname();
	const searchParams = useSearchParams();
	const searchTerm = searchParams.get("searchTerm");
	const startIndex = +searchParams.get("start") || 1;

	return (
		<div className="flex justify-center pb-10 text-xl text-blue-700 sm:justify-start space-x-14">
			{startIndex >= 10 && (
				<Link
					href={`${pathname}?searchTerm=${searchTerm}&start=${startIndex - 10}`}
				>
					<div className="flex items-center space-x-4 cursor-pointer hover:underline">
						<p>Previous</p>
						<BsChevronLeft />
					</div>
				</Link>
			)}
			{startIndex <= 90 && (
				<Link
					href={`${pathname}?searchTerm=${searchTerm}&start=${startIndex + 10}`}
				>
					<div className="flex items-center space-x-4 cursor-pointer hover:underline">
						<BsChevronRight />
						<p>Next</p>
					</div>
				</Link>
			)}
		</div>
	);
};

export default PaginationButtons;
