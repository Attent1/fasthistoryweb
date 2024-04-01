import Link from "next/link";

interface NavBarProps {
    active: "dashboard" | "partidas" | "campeoes"
}

export default function NavBar(props: NavBarProps) {
    const {active} = props;
    const classActive = "border-pink-600 border-b-4";
    return(
        <nav className="w-full bg-indigo-800 justify-between items-center px-4 py-2">
        <div className="flex">
          <h1 className="text-4xl font-bold px-2 py-2">FastHistory</h1>
          <div className="flex w-14 h-14 rounded-full overflow-hidden">
            <img src="https://i.pravatar.cc/300" alt="avatar do usuário" />
          </div>
        </div>        
        <ul className="mt-2">
          <li><Link className={active == "campeoes" ? classActive: ""} href="/campeoes">Campeões</Link></li>
          <li className="mt-2"><Link className={active == "partidas" ? classActive: ""} href="/partidas">Partidas</Link></li>
          <li className="mt-2"><Link className={active == "dashboard" ? classActive: ""} href="/">Dashboard</Link></li>
        </ul>        
      </nav>
    )
}