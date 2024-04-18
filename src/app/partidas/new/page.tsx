"use client"

import create from '@/app/actions/partidas/create';
import NavBar from '@/components/NavBar';
import SubmitButton from '@/components/SubmitButton';
import { Button } from '@nextui-org/button';
import { Autocomplete, AutocompleteItem, Input } from '@nextui-org/react';
import Link from 'next/link';
import { useFormState } from 'react-dom';

const initialState = {
    message: '',
}

type resultados = {
    nome: string
}

const resultadosOptions: resultados[] = [
    { nome: 'VITÓRIA' },
    { nome: 'DERROTA' }
];

export default function CadastrarPartida() {

    const [state, formAction] = useFormState(create, initialState);

    return (
        <main className='flex min-h-screen flex-col items-center'>
            <NavBar active='partidas' />

            <form action={formAction} className='flex flex-col gap-3 m-6 bg-slate-900 rounded p-6 min-w-[500px]'>
                <h2 className='text-2xl font-bold'>Nova Partida</h2>
                {/* <Autocomplete
                    label='Rota'
                    name='rota'
                    labelPlacement={'outside'}
                    className="w-36"
                    
                >
                    {rotas.map((rotas) => (
                        <AutocompleteItem key={rotas.nome} value={rotas.nome}>
                            {rotas.nome}
                        </AutocompleteItem>
                    ))}
                </Autocomplete>                 */}
                <Input
                    key='kill'
                    label='Kill'
                    name='kill'
                    className="w-64"
                    labelPlacement={'outside'}
                    isInvalid={state?.message != ''}
                    errorMessage={state?.message}
                    type='number'
                    min='0'
                />
                <Input
                    key='assist'
                    label='Assist'
                    name='assist'
                    className="w-64"
                    labelPlacement={'outside'}
                    isInvalid={state?.message != ''}
                    errorMessage={state?.message}
                    type='number'
                    min='0'
                />
                <Input
                    key='death'
                    label='Death'
                    name='death'
                    className="w-64"
                    labelPlacement={'outside'}
                    isInvalid={state?.message != ''}
                    errorMessage={state?.message}
                    type='number'
                    min='0'
                />
                <Autocomplete
                    label='Resultado'
                    name='resultado'
                    labelPlacement={'outside'}
                    className="w-40"                    
                >
                    {resultadosOptions.map((resultadosOptions) => (
                        <AutocompleteItem key={resultadosOptions.nome} value={resultadosOptions.nome}>
                            {resultadosOptions.nome}
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