import getById from '@/app/actions/campeoes/getById';
import NavBar from '@/components/NavBar';
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';
import EditForm from './EditForm';

export default async function EditarCampeao({params}: Params) {
    const {id} = params
    const campeao = await getById(id);

    return (
        <main className='flex min-h-screen flex-col items-center'>
            <NavBar active='campeoes'></NavBar>
            <EditForm {...campeao}/>
        </main>
    )

}