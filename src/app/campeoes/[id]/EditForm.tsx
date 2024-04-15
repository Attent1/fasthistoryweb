"use client"

import { update } from '@/app/actions/campeoes/update';
import SubmitButton from '@/components/SubmitButton';
import { Button } from '@nextui-org/button';
import { Autocomplete, AutocompleteItem, Input } from '@nextui-org/react';
import Link from 'next/link';
import { useState } from 'react';
import { useFormState } from "react-dom";
import rotas from '@/app/utils/Rotas';

const initialState = {
    message: '',
}

export default function EditForm(campeao: Campeao) {

    const [state, formAction] = useFormState(update, initialState);
    const [nome, setNome] = useState(campeao.nome);
    const [funcao, setFuncao] = useState(campeao.funcao);
    const [rota, setRota] = useState(campeao.rota);

    return (
        <main className='flex min-h-screen flex-col items-center'>

            <form action={formAction} className='flex flex-col gap-3 m-6 bg-slate-900 rounded p-6 min-w-[500px]'>
                <h2 className='text-2xl font-bold'>Editar Campeão </h2>
                <input type='hidden' name='id' value={campeao.id} className=''></input>
                <Autocomplete
                    label='Rota'
                    name='rota'
                    labelPlacement={'outside'}
                    className="w-36"
                    inputValue={rota}
                    onInputChange={setRota} 
                >
                    {rotas.map((rotas) => (
                        <AutocompleteItem key={rotas.nome} value={rotas.nome}>
                            {rotas.nome}
                        </AutocompleteItem>
                    ))}
                </Autocomplete>
                <Input
                    key='nome'
                    label='Nome'
                    name='nome'
                    labelPlacement={'outside'}
                    isInvalid={state?.message != ''}
                    errorMessage={state?.message}
                    onValueChange={setNome}
                    value={nome}
                />
                <Input
                    key='funcao'
                    label='Função'
                    name='funcao'
                    labelPlacement={'outside'}
                    onValueChange={setFuncao}
                    value={funcao}
                />
                <div className='flex justify-around mt-4'>
                    <Link href={'/campeoes'}>
                        <Button variant='bordered'>Cancelar</Button>
                    </Link>
                    <SubmitButton></SubmitButton>
                </div>
            </form>
        </main>
    )
}