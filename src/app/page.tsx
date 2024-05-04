'use client'
import NavBar from "@/components/NavBar"
import Dashboard from "./dashboard/page";
import BarChartCampeoes from "@/components/BarCharts";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <NavBar active="dashboard"/>
      {/* <Dashboard/> */}
      <BarChartCampeoes/>
    </main>
  );
}
