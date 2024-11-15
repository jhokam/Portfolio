import { SOCIAL_MEDIA } from "@/constant";
import Image from "next/image";

export default function Footer() {
	return (
		<footer className="text-center py-3">
			<div className="grid grid-flow-col justify-center gap-x-5">
				{SOCIAL_MEDIA.map((social) => (
					<a
						key={social.id}
						href={social.href}
						target="_blank"
						rel="noreferrer"
						className="hover:opacity-80 duration-200"
					>
						<Image
							width={40}
							height={40}
							className="~size-8/10"
							src={social.icon}
							alt={social.name}
						/>
					</a>
				))}
			</div>
			<p className="italic ~text-sm/base">Updated at 16/11/2024</p>
		</footer>
	);
}
