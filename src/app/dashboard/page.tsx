import NavBar from "@/components/NavBar";
import { Button, Pagination} from "@nextui-org/react";
import { DashboardItem } from "./DashboardItem";
import dashboard from "../actions/partidas/dashboard";

export default async function Dashboard() {

  const dashboards: Dashboard[] = await dashboard();

  return (
    <main className="flex min-h-screen flex-col items-center"> 
      <section className="flex flex-col gap-2 bg-slate-900 min-w-[600px] mt-4 p-2 rounded text-white">
        <div className="flex justify-between">    
        <h2 className="text-2xl font-bold">Dashoard</h2>      
        </div>
            
            {dashboards.map(dashboard=>          
          <DashboardItem dashboard={dashboard}/>         
        )}

      </section>
      <Pagination isCompact showControls total={5} initialPage={1} className="mt-6" />

    </main>
  );
}
