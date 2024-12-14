import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";
import { NAVIGATION, PROJECTS } from "@/constant";
import Image from "next/image";
import Link from "next/link";

export default function ProjectPage() {
	return (
		<main>
			<h1 className="pt-2 ~text-5xl/6xl text-center font-bold px-3">
				./{NAVIGATION[2].name}
			</h1>
			<p className="text-center ~text-base/lg">{NAVIGATION[2].description}</p>
			<section className="grid grid-cols-2 max-lg:grid-cols-1 gap-6 p-10">
				{PROJECTS.map((project) => (
					<Card key={project.id}>
						<CardHeader className="relative h-96">
							<Image
								className="rounded-t-lg flex bg-bottom object-top"
								src={project.image}
								alt={project.imageAlt}
								fill={true}
								objectFit="cover"
							/>
						</CardHeader>
						<Separator />
						<CardContent className="space-y-3">
							<CardTitle className="pt-2">{project.title}</CardTitle>
							<CardDescription>{project.description}</CardDescription>
							<span>{project.startDate} -- </span>
							{<span>{project.endDate ? project.endDate : "Present"}</span>}
						</CardContent>
						<CardFooter className="grid gap-y-2">
							<DropdownMenu>
								<DropdownMenuTrigger asChild={true}>
									<Button variant="outline">See More</Button>
								</DropdownMenuTrigger>
								<DropdownMenuContent>
									{project?.drop_down.map((item) => (
										<Link href={item.link} key={item.id}>
											<DropdownMenuItem>{item.name}</DropdownMenuItem>
										</Link>
									))}
								</DropdownMenuContent>
							</DropdownMenu>
							<div className="space-x-2">
								{project.tech_stack.map((tech) => (
									<Badge key={tech.id} className="w-fit">
										{tech.name}
									</Badge>
								))}
							</div>
						</CardFooter>
					</Card>
				))}
			</section>
		</main>
	);
}
