'use server'
import { redirect } from "next/navigation";

const create = async (prevState: any, formData: FormData) =>{
    await new Promise(r => setTimeout(r, 1000));
    const data = {
        idCampeao: formData.get('idCampeao'),
        kill: formData.get('kill'),
        death: formData.get('death'),
        assist: formData.get('assist'),
        kda: formData.get('kda'),
        resultado: formData.get('resultado'),
    }

    const options = {
        method: 'POST',
        body:JSON.stringify(data),
        headers: {
            'Content-type': 'application/json'
        }
    }
    const resp = await fetch(process.env.API_BASE_URL + '/partida',options);

    if(resp.ok){
        redirect('/partidas');
    }   

    if(resp.status == 400){
        return {
            message: "Erro de validação"
        }
    }   
}
export default create;
