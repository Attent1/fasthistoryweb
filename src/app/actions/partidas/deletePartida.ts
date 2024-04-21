'use server'
import { redirect } from "next/navigation";

const deletePartida = async (idPartida: number) =>{
    await new Promise(r => setTimeout(r, 2000));    

    const options = {
        method: 'DELETE'                
    }
    const resp = await fetch(`${process.env.API_BASE_URL}/partida/${idPartida}`,options);    
    redirect('/partidas');
}
export default deletePartida;
