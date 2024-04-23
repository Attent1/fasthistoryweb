'use client'
import { Pencil, Trash2 } from "lucide-react";
import {  Link } from "@nextui-org/react";
// import deletePartida from "../actions/partidas/deletePartida";
// import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import deletePartida from "../actions/partidas/deletePartida";
    
type PartidaItemProps = {
    partida: Partida,
}


export async function PartidaItem(props:PartidaItemProps) {
  const handleDelete = () =>{    
    toast.promise(
      deletePartida(partida.id),
       {
         loading: 'Apagando...',
         success: "Apagado com sucesso",
         error: "Erro ao apagar",
       }
     );
  }

    const {partida} = props;
    const router = useRouter();

    return(
        <div className="flex justify-between p-2">
          <div className="flex items-center gap-5">
            <div className="flex gap-2 items-center">
              <span>Campeão: {partida.campeao.nome}</span>              
            </div>                                        
            <div className="flex gap-5">
              <span>Kills: {partida.kill}</span>            
              <span>Deaths: {partida.death}</span>         
              <span>Assists: {partida.assist}</span>    
              <span>Inclusão: {partida.dataInclusao}</span>    
              <span>Resultado: {partida.resultado}</span>
            </div>   
         </div>
            <div className="flex gap-4 items-center">
              <Link >
                <Pencil  onClick={() => router.push(`/partidas/${partida.id}`)} className="ml-2" color="white"/>
              </Link>
              <Link>
                <Trash2 onClick={() => handleDelete()} color="red"/> 
              </Link>                        
            
          </div>
        </div>
    )
}