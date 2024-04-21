
import NavBar from '@/components/NavBar';
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';
import getById from '@/app/actions/partidas/get';
import EditarPartidaForm from './EditForm';
import getCampeao from '@/app/actions/campeoes/getCampeoes';

export default async function EditarPartida({params}: Params) {
    const {id} = params
    debugger;
    const partida = await getById(id);
    const campeoes = await getCampeao();
    return (
        <main className='flex min-h-screen flex-col items-center'>
            <NavBar active='campeoes'></NavBar>
            <EditarPartidaForm partida={partida} campeoes={campeoes} />
        </main>
    )

}