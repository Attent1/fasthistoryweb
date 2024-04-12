import create from '@/app/actions/campeoes/create';
import NavBar from '@/components/NavBar';
import SubmitButton from '@/components/SubmitButton';
import { Button } from '@nextui-org/button';
import { Input } from '@nextui-org/react';
import Link from 'next/link';

export default function CadastrarCampeao(){
    
    return(
        <main className='flex min-h-screen flex-col items-center'>
            <NavBar active='campeoes'/>

            <form action={create} className='flex flex-col gap-3 m-6 bg-slate-900 rounded p-6 min-w-[500px]'>
                <h2 className='text-2xl font-bold'>Alterar Campeão</h2>
                <Input
                    key='nome'
                    label='Nome'
                    name='nome'
                    labelPlacement={'outside'}
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