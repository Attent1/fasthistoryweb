import NavBar from '@/components/NavBar';
import getCampeao from '@/app/actions/campeoes/getCampeoes';
import CadastrarPartidaForm from './createForm';


const initialState = {
    message: ''
}

export default async function CadastrarPartida() {
    const campeoes: Campeao[] = await getCampeao();
    return (
        <main className='flex min-h-screen flex-col items-center'>
            <NavBar active='partidas' />
            <CadastrarPartidaForm campeoes={campeoes}/>                      
        </main>
    )

}