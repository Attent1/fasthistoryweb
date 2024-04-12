"use client"
import create from '@/app/actions/campeoes/create';
import NavBar from '@/components/NavBar';
import SubmitButton from '@/components/SubmitButton';
import { Button } from '@nextui-org/button';
import { Input } from '@nextui-org/react';
import Link from 'next/link';
import { useFormState } from 'react-dom';

type Campeao = {
    campeao: {
    id: number,
    rota:string,
    nome:string,
    funcao:string
    }
}

const initialState = {
    message: '',
}

export default function EditarCampeao({campeao}: Campeao){
    const [state, formAction] = useFormState(create, initialState);
    return(
        <main className='flex min-h-screen flex-col items-center'>
            <NavBar active='campeoes'/>

            <form action={formAction} className='flex flex-col gap-3 m-6 bg-slate-900 rounded p-6 min-w-[500px]'>
                <h2 className='text-2xl font-bold'>Alterar Campeão</h2>
                <Input
                    key='nome'
                    label='Nome'
                    name='nome'
                    labelPlacement={'outside'}
                    value={campeao.nome}
                />
                <Input
                    key='funcao'
                    label='Função'
                    name='funcao'
                    labelPlacement={'outside'}
                    value={campeao.funcao}
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