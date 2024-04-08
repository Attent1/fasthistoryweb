import NavBar from "@/components/NavBar";
import { CampeaoItem } from "./CampeaoItem";
import { Button } from "@nextui-org/button";
import { Plus } from "lucide-react";
import getCampeao from "../actions/campeoes/getCampeoes";
import Link from "next/link";

type Campeao = {
  id: number,
  rota:string,
  nome:string,
  funcao:string
}

export default async function Campeoes() {
  
  const campeoes: Campeao[] = await getCampeao();
  
  return (
    <main className="flex min-h-screen flex-col items-center">
      <NavBar active="campeoes"/>

      <section className="flex flex-col gap-2 bg-slate-900 min-w-[600px] mt-4 p-2 rounded text-white">
        <div className="flex justify-between">
          <h2 className="text-2xl font-bold">Campeões Cadastrados</h2>
          <Link href='/campeoes/new'>
          <Button color="primary" startContent={<Plus/>}>Adicionar campeão</Button>
          </Link>
          
        </div>
        <div className="flex gap-20 ml-6 p-2">
          <div className="relative top-10 md:top-32 lg:top-[10px] left-10 md:left-auto lg:left-30">Rota</div>
          <div className="relative top-20 md:top-36 lg:top-[10px] left-10 md:left-[24px] lg:left-30">Nome</div>
          <div className="relative top-30 md:top-40 lg:top-[10px] left-10 md:left-[-5px] lg:left-30">Função</div>
        </div>
        {campeoes.map(campeao=>          
          <CampeaoItem campeao={campeao}/>         
        )}

      </section>
      
    </main>
  );
}
