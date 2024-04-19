'use server'
import { redirect } from "next/navigation";
import getIdCampeao from "../campeoes/getIdCampeao";
import consistir from "../consistir";

const create = async (prevState: any, formData: FormData) =>{
    await new Promise(r => setTimeout(r, 1000));
    
    debugger;
    const messageConsistencia = consistir(prevState, formData);
    if (messageConsistencia != null) {
        return messageConsistencia;
    }

    if (formData.get('nomeCampeao')?.toString() == '') {
        return  {
            message: "Selecione um campeão"
        }
    }
    const lintIdCampeao = await getIdCampeao(formData.get('nomeCampeao')?.toString());
        
    const data = {        
        kill: formData.get('kill'),
        death: formData.get('death'),
        assist: formData.get('assist'),
        resultado: formData.get('resultado'),
        campeao: {
            id:formData.get('idCampeao')
        }
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
