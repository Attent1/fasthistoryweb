import { ChevronDown, Pencil, Trash2, TreePine } from "lucide-react";
import { Icon } from "@/components/Icon";
import DropdownRotas from "@/components/DropdownRotas";
    
type CampeaoItemProps = {
    campeao : {
        id: number,
        rota:string,
        nome:string,
        funcao:string
    }    
}

export function CampeaoItem(props:CampeaoItemProps) {
    const {campeao} =  props;

    return(
        <div className="flex justify-between p-2">
          <div className="flex items-center gap-5">
            <div className="flex gap-2 items-center">
              {/* <span>Rota:</span> */}
              <DropdownRotas />   
            </div>                 
            <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full overflow-hidden">
                <img src="https://i.pravatar.cc/300" alt="avatar do usuário" />
            </div>
            </div>
            <span className="flex gap-2">{campeao.nome}<TreePine />{campeao.funcao}</span>            
         </div>
            <div className="flex gap-2 items-center">
            <Pencil />
            <Trash2 />
          </div>
        </div>
    )
}