import Devicon from "./Devicon";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { ModeToggle } from "./ModeToggle";

const projects: {
    title: string;
    href: string;
    description: string;
    languages: string;
    icons: string[];
}[] = [
    {
        title: "React Pokedex",
        href: "https://github.com/bduckdev/react-pokedex",
        description: "Simple app that fetches data from pokedex",
        languages: "JS/JSX",
        icons: ["react", "javascript"],
    },
    {
        title: "Watermelon King",
        href: "https://github.com/bduckdev/watermelon-king",
        description: "Greatest video game of all time",
        languages: "JS/JSX",
        icons: ["react", "typescript"],
    },
];
function Header() {
    return (
        <header className="flex justify-center p-8 w-2/3 mx-auto">
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>Projects</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                                {projects.map((project) => {
                                    return (
                                        <li
                                            key={project.title}
                                            className="flex flex-col gap-3 items-between justify-between"
                                        >
                                            <div className="grid grid-cols-2 grid-rows-1">
                                                <div>
                                                    <p className="text-lg">
                                                        {project.title}
                                                    </p>
                                                    <p className="text-xs">
                                                        {project.description}
                                                    </p>
                                                </div>
                                                <ul>
                                                    {project.icons.map(
                                                        (icon) => {
                                                            return (
                                                                <li key={icon}>
                                                                    <Devicon
                                                                        icon={
                                                                            icon
                                                                        }
                                                                    />
                                                                </li>
                                                            );
                                                        }
                                                    )}
                                                </ul>
                                            </div>
                                            <a
                                                className="text"
                                                href={project.href}
                                            >
                                                Github Link
                                            </a>
                                        </li>
                                    );
                                })}
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </header>
    );
}

export default Header;
