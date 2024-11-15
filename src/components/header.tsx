import { NAVIGATION } from "@/constant";
import Link from "next/link";

export default function Header() {
	return (
		<header className="bg-white sticky z-10 top-0 mx-10 rounded-b-xl border-b-2 border-x-2 border-gray-300">
			<nav>
				<ul className="grid grid-flow-col justify-around hover:~py-5/10 duration-500 ~py-2/4">
					{NAVIGATION.map((nav) => (
						<li key={nav.id}>
							<Link
								href={nav.href}
								className="~text-lg/xl animate-fade animate-infinite"
							>
								{nav.name}
							</Link>
						</li>
					))}
				</ul>
			</nav>
		</header>
	);
}
