import PhotoProfile from "@/../public/images/photo-profile.png";
import { NAVIGATION } from "@/constant";
import Image from "next/image";

export default function Home() {
	return (
		<main>
			<section className="h-fit">
				<h1 className="pt-2 ~text-5xl/6xl text-center font-bold px-3">
					./{NAVIGATION[0].name}
				</h1>
				<p className="text-center ~text-base/lg animate-in">
					{NAVIGATION[0].description}
				</p>
				<div className="grid pt-10 grid-flow-col max-md:flex max-md:flex-col max-md:justify-evenly items-center justify-between px-10">
					<Image
						src={PhotoProfile}
						className="~w-72/96"
						alt="Photo Profile Abdul Aziz"
					/>
					<div>
						<h1 className="font-bold text-center ~text-5xl/8xl animate-fade">
							Abdul Aziz
						</h1>
						<p className="~text-base/2xl">
							Junior Front End Developer | Student | Tech Enthusiast
						</p>
					</div>
				</div>
			</section>
			<section className="grid h-screen grid-flow-col max-md:flex max-md:flex-col-reverse max-md:justify-evenly items-center justify-between px-10">
				<div>
					<h3 className="font-bold pb-3 ~text-2xl/4xl">
						Vocational High School
					</h3>
					<p className="~text-base/xl">SMKN 8 Semarang</p>
					<p className="~text-sm/lg">July 2022 -- Present</p>
				</div>
				<h2 className="font-bold ~text-5xl/8xl">Education</h2>
			</section>
		</main>
	);
}
