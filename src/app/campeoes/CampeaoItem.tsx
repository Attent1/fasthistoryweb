'use client'
import { Pencil, Trash2 } from "lucide-react";
import {  Link } from "@nextui-org/react";
import deleteCampeao from "../actions/campeoes/deleteCampeao";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
    
type CampeaoItemProps = {
    campeao: Campeao
}

export function CampeaoItem(props:CampeaoItemProps) {
  const handleDelete = () =>{    
    toast.promise(
      deleteCampeao(campeao.id),
       {
         loading: 'Apagando...',
         success: "Apagado com sucesso",
         error: "Erro ao apagar",
       }
     );
  }

    const {campeao} =  props;

    const router = useRouter();
    return(
        <div className="flex justify-between p-2">
          <div className="flex items-center gap-5">
            <div className="flex gap-2 items-center">
              <span className="min-w-[110px]">Rota: {campeao.rota}</span>              
            </div>                 
            <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full overflow-hidden">
                <img src="https://i.pravatar.cc/300" alt="avatar do usuário" />
            </div>
            </div>
            <div className="flex gap-5">
              <span className="min-w-[160px]">Nome: {campeao.nome}</span>            
              <span className="min-w-[150px]">Função: {campeao.funcao}</span>         
            </div>   
         </div>
            <div className="flex gap-4 items-center">
              <Link>
                <Pencil  onClick={() => router.push(`/campeoes/${campeao.id}`)} className="ml-2" color="white"/>
              </Link>
              <Link>
                <Trash2 onClick={() => handleDelete()} color="red"/> 
              </Link>                        
            
          </div>
        </div>
    )
}