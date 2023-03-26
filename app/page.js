import Image from "next/image";
import { Inter } from "next/font/google";
import HomeHeader from "@/components/HomeHeader";
import HomeSearch from "@/components/HomeSearch";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<main>
			<HomeHeader />
			<div className="flex flex-col items-center mt-24">
				<Image
					src={"/Google.png"}
					width={300}
					height={100}
					alt="google image"
				/>
			</div>
			<HomeSearch />
		</main>
	);
}
