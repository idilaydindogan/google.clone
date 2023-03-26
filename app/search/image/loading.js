import React from "react";

const loading = () => {
	return (
		<div className="flex flex-col space-x-4 sm:flex-row">
			<div className="p-10 animate-pulse">
				<div className="w-48 h-48 mb-4 bg-gray-200 rounded-xl"></div>
				<div className="bg-gray-200 rounded-xl mb-2.5 h-2 w-48"></div>
				<div className="bg-gray-200 rounded-xl mb-2.5 h-2 w-44"></div>
			</div>
			<div className="pl-10 sm:p-10 animate-pulse">
				<div className="w-48 h-48 mb-4 bg-gray-200 rounded-xl"></div>
				<div className="bg-gray-200 rounded-xl mb-2.5 h-2 w-48"></div>
				<div className="bg-gray-200 rounded-xl mb-2.5 h-2 w-44"></div>
			</div>
			<div className="pt-10 pl-10 sm:p-10 animate-pulse">
				<div className="w-48 h-48 mb-4 bg-gray-200 rounded-xl"></div>
				<div className="bg-gray-200 rounded-xl mb-2.5 h-2 w-48"></div>
				<div className="bg-gray-200 rounded-xl mb-2.5 h-2 w-44"></div>
			</div>
		</div>
	);
};

export default loading;
