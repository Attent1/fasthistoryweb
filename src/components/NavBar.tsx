import Link from "next/link";

interface NavBarProps {
    active: "dashboard" | "partidas" | "campeoes"
}

export default function NavBar(props: NavBarProps) {
    const {active} = props;
    const classActive = "border-pink-600 border-b-4";

    return(    
        <nav className="flex w-full justify-between items-center px-4 py-2 bg-slate-900 text-white">
            <h1 className="text-4xl font-bold"><Link href="/">FastHistory</Link></h1>
            <ul className="flex gap-16 text-lg">
                <li className={active == "dashboard" ? classActive: ""}><Link href="/">Dashboard</Link></li>
                <li className={active == "campeoes" ? classActive: ""}><Link href="/campeoes">Campeões</Link></li>
                <li className={active == "partidas" ? classActive: ""}><Link href="/partidas">Partidas</Link></li>
            </ul>
            <div className="w-14 h-14 rounded-full overflow-hidden">
                <img src="https://i.pravatar.cc/300" alt="avatar do usuário" />
            </div>
        </nav>
    )
}