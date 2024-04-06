import NavBar from "@/components/NavBar";
import { CampeaoItem } from "./CampeaoItem";
import { Button } from "@nextui-org/button";

export default function Campeoes() {

  const campeoes = [
    {
      id: 1,
      nome: "Zed",
      rota: "Mid",
      funcao:"Assassino"
    },
    {
      id: 2,
      nome: "Jinx",
      rota: "Bot",
      funcao:"Atirador"
    },
    {
      id: 3,
      nome: "Lulu",
      rota: "Bot",
      funcao:"Suporte"
    }
  ]

  return (
    <main className="flex min-h-screen flex-col items-center">
      <NavBar active="campeoes"/>

      <section className="flex flex-col gap-2 bg-slate-900 min-w-[600px] mt-4 p-2 rounded text-white">

        <h2 className="text-2xl font-bold">Campeões Cadastrados</h2>
        <Button>Adicionar campeão</Button>

        {campeoes.map(campeao=>          
          <CampeaoItem campeao={campeao}/>         
        )}

      </section>
      
    </main>
  );
}
