import NavBar from "@/components/NavBar";
import getPartidas from "../actions/partidas/getPartidas";
import { Plus, Filter } from "lucide-react";
import { Button, Pagination} from "@nextui-org/react";
import Link from "next/link";
import { PartidaItem } from "./PartidaItem";
import getCampeao from "../actions/campeoes/getCampeoes";
import { CampeaoSelect } from "@/components/SelectCampeao";

export default async function Partidas() {

  const partidas: Array<Partida> = await getPartidas();
  const campeoes: Array<Campeao> = await getCampeao();

  return (
    <main className="flex min-h-screen flex-col items-center">
      <NavBar active="partidas" />      
      <section className="flex flex-col gap-2 bg-slate-900 min-w-[600px] mt-4 p-2 rounded text-white">
        <div className="flex justify-between">
          <h2 className="text-2xl font-bold">Partidas registradas</h2>
          <Link href='/partidas/new'>
            <Button color="primary" startContent={<Plus />}>Registrar partida</Button>
          </Link>
        </div>
        <div className="flex gap-4 items-center border-1 border-white/10 p-4 rounded">          
          <CampeaoSelect campeoes={campeoes} ></CampeaoSelect>
        </div>
        {partidas.map(partida =>
          <PartidaItem partida={partida} />
        )}
      </section>
      <Pagination isCompact showControls total={5} initialPage={1} className="mt-6" />

    </main>
  );
}
