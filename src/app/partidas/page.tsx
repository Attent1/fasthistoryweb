import NavBar from "@/components/NavBar";
import getPartidas from "../actions/partidas/getPartidas";
import { Plus } from "lucide-react";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import { PartidaItem } from "./PartidaItem";
import getNomeCampeao from "../actions/campeoes/getNomeCampeao";

export default async function Partidas() {
  
  debugger;
  const partidas: Partida[] = await getPartidas();
  let nomeCampeao: string = '';
  
  partidas.forEach(async partida => {
    nomeCampeao = await getNomeCampeao(partida.idCampeao);
    console.log(nomeCampeao);
    partida.nomeCampeao = nomeCampeao;
  });

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
        {partidas.map(partida =>
          <PartidaItem partida={partida} />
        )}
      </section>

    </main>
  );
}
