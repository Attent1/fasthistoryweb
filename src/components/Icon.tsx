import { Pencil, Trash2 } from "lucide-react";

type iconProps = {
    name:string
}

const icons = [
    {name: "Delete", icon: <Trash2/>},
    {name: "Edit", icon: <Pencil/>}
]

export function Icon({name}:iconProps) {
    return(
        icons.find(icon => icon.name == name)?.icon
    )
}