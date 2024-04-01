import NavBar from "@/components/NavBar"
import HomeBar from "@/components/homeBar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <HomeBar/>
      <NavBar active="dashboard"/>
      <h1>Dashboard</h1>
    </main>
  );
}
