import { icons } from "lucide-react";

function Icon({
    name,
    color,
    size,
}: {
    name: string;
    color: string;
    size: number;
}) {
    const LucideIcon = icons[name as keyof typeof icons];

    return <LucideIcon color={color} size={size} />;
}

export default Icon;
