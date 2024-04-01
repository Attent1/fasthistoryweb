import Link from "next/link";

interface NavBarProps {
    active: "dashboard" | "partidas" | "campeoes"
}

export default function NavBar(props: NavBarProps) {
    const {active} = props;
    const classActive = "border-pink-600 border-b-4";
    return(
     <nav className="h-screen bg-indigo-800 px-4 py-2">      
        <ul>
          <li><Link className={active == "campeoes" ? classActive: ""} href="/campeoes">Campeões</Link></li>
          <li className="mt-2"><Link className={active == "partidas" ? classActive: ""} href="/partidas">Partidas</Link></li>
          <li className="mt-2"><Link className={active == "dashboard" ? classActive: ""} href="/">Dashboard</Link></li>
        </ul>              
      </nav>
    )
}