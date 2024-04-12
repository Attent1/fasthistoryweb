"use client"
import create from '@/app/actions/campeoes/create';
import DropdownRotas from '@/components/DropdownRotas';
import NavBar from '@/components/NavBar';
import SubmitButton from '@/components/SubmitButton';
import { Button } from '@nextui-org/button';
import { Input } from '@nextui-org/react';
import Link from 'next/link';
import { useFormState } from 'react-dom';

const initialState = {
    message: '',
}

export default function CadastrarCampeao(){
    
    const [state, formAction] = useFormState(create, initialState);

    return(
        <main className='flex min-h-screen flex-col items-center'>
            <NavBar active='campeoes'/>

            <form action={formAction} className='flex flex-col gap-3 m-6 bg-slate-900 rounded p-6 min-w-[500px]'>
                <h2 className='text-2xl font-bold'>Novo Campeão</h2>
                <DropdownRotas/>
                <Input
                    key='nome'
                    label='Nome'
                    name='nome'
                    labelPlacement={'outside'}
                    isInvalid={state?.message != ''}
                    errorMessage={state?.message}
                />
                <Input
                    key='funcao'
                    label='Função'
                    name='funcao'
                    labelPlacement={'outside'}
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