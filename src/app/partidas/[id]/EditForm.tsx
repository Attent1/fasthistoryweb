"use client"

import SubmitButton from '@/components/SubmitButton';
import { Button } from '@nextui-org/button';
import { Autocomplete, AutocompleteItem, Input, Select, SelectItem } from '@nextui-org/react';
import Link from 'next/link';
import { useFormState } from 'react-dom';
import resultados from '@/app/utils/Resultados';
import update from '@/app/actions/partidas/update';
import { useState } from 'react';

const initialState = {
    messageCampeao: '',
    messageKill: '',
    messageDeath: '',
    messageAssist: '',
    messageResultado: '',
}

export default function EditarPartidaForm({partida, campeoes}:{ partida:Partida; campeoes: Campeao[];}) {

    
    const [state, formAction] = useFormState(update, initialState);
    const [campeao, setCampeao] = useState(partida.campeao);
    const [kill, setKill] = useState(partida.kill);
    const [death, setDeath] = useState(partida.death);
    const [assist, setAssist] = useState(partida.assist);    
    const [resultado, setResultado] = useState(partida.resultado);
    
    const handleKillChange = (value: string) => {
        const numericValue = parseInt(value); 
        setKill(numericValue);
    };

    const handleDeathChange = (value: string) => {
        const numericValue = parseInt(value);
        setDeath(numericValue);
    };
    
    const handleAssistChange = (value: string) => {
        const numericValue = parseInt(value);
        setAssist(numericValue);
    };
    return (
        <main className='flex min-h-screen flex-col items-center'>
            <form action={formAction} className='flex flex-col gap-3 m-6 bg-slate-900 rounded p-6 min-w-[500px]'>
                <h2 className='text-2xl font-bold'>Nova Partida</h2>
                <input type='hidden' name='id' value={partida.id} className=''></input>
                <input type="hidden" name="campeao" value={campeao.id} />
                <Autocomplete
                    label='Campeão'
                    name='campeao'
                    labelPlacement={'outside'}
                    className="w-36"
                    isInvalid={state?.messageCampeao != ''}
                    errorMessage={state?.messageCampeao}
                    // onInputChange={setCampeao.toString} //consertar
                    inputValue={campeao.nome}   
                    isDisabled    
                >
                    {campeoes.map((campeoes) => (
                        <AutocompleteItem  key={campeoes.id} value={campeoes.id}>
                            {campeoes.nome}
                        </AutocompleteItem >
                    ))}
                </Autocomplete>
                <Input
                    key='kill'
                    label='Kill'
                    name='kill'
                    className="w-64"
                    labelPlacement={'outside'}
                    isInvalid={state?.messageKill != ''}
                    errorMessage={state?.messageKill}
                    type='number'
                    min='0'
                    onValueChange={handleKillChange}
                    value={kill.toString()}
                /> 
                <Input
                    key='death'
                    label='Death'
                    name='death'
                    className="w-64"
                    labelPlacement={'outside'}
                    isInvalid={state?.messageDeath != ''}
                    errorMessage={state?.messageDeath}
                    type='number'
                    min='0'
                    onValueChange={handleDeathChange}
                    value={death.toString()}
                /> 
                <Input
                    key='assist'
                    label='Assist'
                    name='assist'
                    className="w-64"
                    labelPlacement={'outside'}
                    isInvalid={state?.messageAssist != ''}
                    errorMessage={state?.messageAssist}
                    type='number'
                    min='0'
                    onValueChange={handleAssistChange}
                    value={assist.toString()}
                />                
                <Autocomplete
                    label='Resultado'
                    name='resultado'
                    labelPlacement={'outside'}
                    className="w-40"
                    isInvalid={state?.messageResultado != ''}
                    errorMessage={state?.messageResultado}
                    inputValue={resultado}   
                    onInputChange={setResultado}                          
                >
                    {resultados.map((resultados) => (
                        <AutocompleteItem key={resultados.nome} value={resultados.nome}>
                            {resultados.nome}
                        </AutocompleteItem>
                    ))}
                </Autocomplete>
                <div className='flex justify-around mt-4'>
                    <Link href={'/partidas'}>
                        <Button variant='bordered'>Cancelar</Button>
                    </Link>
                    <SubmitButton></SubmitButton>
                </div>
            </form>
        </main>
    )

}