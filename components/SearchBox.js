"use client";
import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { BsFillMicFill } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import { useSearchParams, useRouter } from "next/navigation";

const SearchBox = () => {
	const searchParams = useSearchParams();
	const searchTerm = searchParams.get("searchTerm");
	const [term, setTerm] = useState(searchTerm || "");
	const router = useRouter();

	function handleSubmit(e) {
		e.preventDefault();
		if (!term.trim()) return;
		router.push(`/search/web?searchTerm=${term}`);
	}
	return (
		<form
			className="flex items-center flex-grow max-w-3xl px-6 py-3 ml-10 mr-5 border border-gray-200 rounded-full sshadow-lg"
			onSubmit={handleSubmit}
		>
			<input
				type="text"
				className="w-full focus:outline-none"
				value={term}
				onChange={(e) => setTerm(e.target.value)}
			/>
			<RxCross2
				className="text-2xl text-gray-500 cursor-pointer sm:mr-2"
				onClick={() => setTerm("")}
			/>
			<BsFillMicFill className="hidden pl-4 mx-3 text-4xl text-blue-400 border-l-2 border-gray-300 sm:inline-flex" />
			<AiOutlineSearch
				className="hidden text-2xl text-blue-500 cursor-pointer sm:inline-flex"
				onClick={handleSubmit}
			/>
		</form>
	);
};

export default SearchBox;
