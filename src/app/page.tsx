import NavBar from "@/components/NavBar"
import Dashboard from "./dashboard/page";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <NavBar active="dashboard"/>
      <Dashboard/>
    </main>
  );
}
