"use client";
import React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillMicFill } from "react-icons/bs";

const HomeSearch = () => {
	const [input, setInput] = useState("");
	const router = useRouter();
	const [randomLoading, setRandomLoading] = useState(false);

	function handleSubmit(e) {
		e.preventDefault();
		if (!input.trim()) return;
		router.push(`/search/web?searchTerm=${input}`);
	}
	async function randomSearch() {
		setRandomLoading(true);
		const response = await fetch(`https://random-word-api.herokuapp.com/word`)
			.then((res) => res.json())
			.then((data) => data[0]);
		if (!response) return;
		router.push(`/search/web?searchTerm=${response}`);
		setRandomLoading(false);
	}

	return (
		<>
			<form
				onSubmit={handleSubmit}
				className=" flex w-full mt-5 mx-auto max-w-[90%] border border-gray-200 px-5 py-3 rounded-full hover:shadow-md transition-shadow focus-within:shadow-md sm:max-w-xl lg:max-w-2xl"
			>
				<AiOutlineSearch className="text-xl text-gray-500 mr-2" />
				<input
					type="text"
					className="flex-grow focus:outline-none text-gray-700"
					onChange={(e) => setInput(e.target.value)}
					value={input}
				/>
				<BsFillMicFill className="text-lg" />
			</form>
			<div className="mt-8 mb-3 flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 justify-center">
				<button className="btn" onClick={handleSubmit}>
					Google Search
				</button>
				<button
					onClick={randomSearch}
					className="btn flex items-center justify-center"
					disabled={randomLoading}
				>
					{randomLoading ? (
						<img
							src="/spinner.svg"
							alt="loading..."
							className="h-6 text-center"
						/>
					) : (
						`I'm Feeling Lucky`
					)}
				</button>
			</div>
		</>
	);
};

export default HomeSearch;
