import { Badge } from "@/components/ui/badge";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { NAVIGATION, SKILLS } from "@/constant";
import Image from "next/image";

export default function SkillsPage() {
	return (
		<main>
			<h1 className="pt-2 ~text-5xl/6xl text-center font-bold px-3">
				./{NAVIGATION[1].name}
			</h1>
			<p className="text-center ~text-base/lg animate-in">
				{NAVIGATION[1].description}
			</p>
			<section className="grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-6 p-10">
				{SKILLS.map((skill) => (
					<Card key={skill.id} className="grid">
						<CardHeader className="grid justify-center">
							<Image
								src={skill.image}
								alt={skill.imageAlt}
								width={100}
								height={100}
							/>
						</CardHeader>
						<Separator />
						<CardContent className="space-y-3">
							<CardTitle className="pt-2">{skill.title}</CardTitle>
							<CardDescription>{skill.description}</CardDescription>
						</CardContent>
						<CardFooter className="grid gap-x-3 justify-center grid-cols-3 gap-y-2">
							{skill.project.map((project) => (
								<Badge key={project.id} className="w-fit">
									{project.name}
								</Badge>
							))}
						</CardFooter>
					</Card>
				))}
			</section>
		</main>
	);
}
