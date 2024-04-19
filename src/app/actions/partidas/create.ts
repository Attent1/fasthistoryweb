'use server'
import { redirect } from "next/navigation";
import consistir from "../consistir";
import messages from "@/app/utils/Mensagens";

const create = async (prevState: any, formData: FormData) =>{
    await new Promise(r => setTimeout(r, 1000));
    
    debugger;
    // const messageConsistencia = consistir(prevState, formData);
    // if (messageConsistencia != null) {
    //     return messageConsistencia;
    // }
            
    const data = {        
        kill: formData.get('kill'),
        death: formData.get('death'),
        assist: formData.get('assist'),
        resultado: formData.get('resultado'),
        campeao: {
            id:formData.get('campeao')
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
        // const messages = await resp.json()

        return {
            
            messageCampeao: messages.find( (m: any) => m.campo == "campeao")?.mensagem || '',
            messageKill: messages.find( (m: any) => m.campo == "kill")?.mensagem || '',
            messageDeath: messages.find( (m: any) => m.campo == "death")?.mensagem || '',
            messageAssist: messages.find( (m: any) => m.campo == "assist")?.mensagem || '',
            messageResultado: messages.find( (m: any) => m.campo == "resultado")?.mensagem || '',
        }
    }   
}
export default create;
