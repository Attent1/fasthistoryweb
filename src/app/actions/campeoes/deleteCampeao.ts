'use server'
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

const deleteCampeao = async (idCampeao: number) =>{
    await new Promise(r => setTimeout(r, 2000));    

    const options = {
        method: 'DELETE'                
    }
    const resp = await fetch(`${process.env.API_BASE_URL}/campeao/${idCampeao}`,options);    

    if (resp.ok) {
        revalidateTag("campeoes")
        redirect('/campeoes');
    }
}
export default deleteCampeao;
