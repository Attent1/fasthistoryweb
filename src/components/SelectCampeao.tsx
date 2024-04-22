'use client'

import { Select, SelectItem } from "@nextui-org/react";

interface CampeaoSelectProps  {
    campeoes: Array<Campeao>,
    
}

export function CampeaoSelect({campeoes}: CampeaoSelectProps) {

    return (
        <Select
            items={campeoes}
            label="Campeão"
            variant="bordered"
            name="campeao"
            className='w-44'    
            labelPlacement="outside"
        >
            {(campeoes) => 
                <SelectItem key={campeoes.id} >
                    {campeoes.nome}
                </SelectItem>
            }
        </Select>
    )
}