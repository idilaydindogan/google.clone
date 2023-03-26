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
				className=" flex w-full mt-5 mx-auto max-w-[90%] border border-gray-200 px-5 py-3 rounded-full hover:shadow-md focus-within:shadow-md transition-shadow sm:max-w-xl lg:max-w-2xl"
			>
				<AiOutlineSearch className="mr-2 text-xl text-gray-500" />
				<input
					type="text"
					className="flex-grow text-gray-700 focus:outline-none"
					onChange={(e) => setInput(e.target.value)}
					value={input}
				/>
				<BsFillMicFill className="text-lg" />
			</form>
			<div className="flex flex-col items-center justify-center mt-8 space-y-2 sm:space-y-0 sm:space-x-4 sm:flex-row ">
				<button className="btn" onClick={handleSubmit}>
					Google Search
				</button>
				<button
					onClick={randomSearch}
					className="flex items-center justify-center btn"
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
