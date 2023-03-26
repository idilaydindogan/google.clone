import React from "react";
import CountryLookUp from "./CountryLookUp";
import Link from "next/link";

const Footer = () => {
	return (
		<footer className="absolute bottom-0 text-sm text-gray-500 bg-[#f2f2f2] w-full">
			<div className="border-b px-10 py-3 ">
				<CountryLookUp />
			</div>
			<div className="flex flex-col sm:flex-row sm:justify-around items-center py-3 space-y-5">
				<div className="space-x-6 items-center">
					<Link href={"/"} className="link">
						About
					</Link>
					<Link href={"/"} className="link">
						Advertising
					</Link>
					<Link href={"/"} className="link">
						Business
					</Link>
					<Link href={"/"} className="link">
						How Search Works
					</Link>
				</div>
				<div className="space-x-6 items-center">
					<Link href={"/"} className="link">
						Privacy
					</Link>
					<Link href={"/"} className="link">
						Terms
					</Link>
					<Link href={"/"} className="link">
						Settings
					</Link>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
