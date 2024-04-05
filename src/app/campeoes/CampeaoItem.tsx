import { ChevronDown, Pencil, Trash2 } from "lucide-react";
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
          <div className="flex gap-2 items-center">
              <span>Rota:</span>
              <DropdownRotas />   
            </div>                 
            <span>FotoCampeao</span>
            <span>Nome: {campeao.nome}</span>
            <div className="flex gap-2">
            <Pencil />
            <Trash2 />
            {/* <Icon name="Edit"/> */}
          </div>
        </div>
    )
}