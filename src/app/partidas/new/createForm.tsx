"use client"

import create from '@/app/actions/partidas/create';
import SubmitButton from '@/components/SubmitButton';
import { Button } from '@nextui-org/button';
import { Autocomplete, AutocompleteItem, Input, Select, SelectItem } from '@nextui-org/react';
import Link from 'next/link';
import { useFormState } from 'react-dom';
import resultados from '@/app/utils/Resultados';
import { CampeaoSelect } from '@/components/SelectCampeao';

const initialState = {
    messageCampeao: '',
    messageKill: '',
    messageDeath: '',
    messageAssist: '',
    messageResultado: '',
}

export default function CadastrarPartidaForm({campeoes}: {campeoes: Campeao[]}) {

    const [state, formAction] = useFormState(create, initialState);
    
    return (
        <main className='flex min-h-screen flex-col items-center'>
            <form action={formAction} className='flex flex-col gap-3 m-6 bg-slate-900 rounded p-6 min-w-[500px]'>
                <h2 className='text-2xl font-bold'>Nova Partida</h2>                        
                <CampeaoSelect campeoes={campeoes}></CampeaoSelect>              
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
                />                
                <Autocomplete
                    label='Resultado'
                    name='resultado'
                    labelPlacement={'outside'}
                    className="w-40"
                    isInvalid={state?.messageResultado != ''}
                    errorMessage={state?.messageResultado}                             
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