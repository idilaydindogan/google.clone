import React from "react";
import Image from "next/image";
import Link from "next/link";
import SearchBox from "./SearchBox";
import { RiSettings3Line } from "react-icons/ri";
import { TbGridDots } from "react-icons/tb";
import SearchHeaderOptions from "./SearchHeaderOptions";

const SearchHeader = () => {
	return (
		<header className="sticky top-0 bg-white">
			<div className="flex items-center justify-between w-full p-6">
				<Link href={"/"}>
					<Image
						src={"/Google.png"}
						width={120}
						height="40"
						alt="google logo"
					/>
				</Link>
				<div className="hidden sm:inline-block sm:flex-1">
					<SearchBox />
				</div>

				<div className="hidden space-x-2 text-gray-600 md:inline-flex">
					<RiSettings3Line className="header-icon" />
					<TbGridDots className="header-icon" />
				</div>
				<Link href={"https://accounts.google.com"} target="_blank">
					<button className="px-3 py-2 ml-2 text-sm text-white transition-all bg-blue-500 rounded-md sm:text-medium sm:px-6 hover:brightness-105 hover:shadow-md">
						Sign In
					</button>
				</Link>
			</div>
			<div className="mb-6 sm:hidden">
				<SearchBox />
			</div>
			<SearchHeaderOptions />
		</header>
	);
};

export default SearchHeader;
