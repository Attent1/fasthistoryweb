'use server'
import { redirect } from "next/navigation";
import messages from "@/app/utils/Mensagens";

const update = async (prevState: any, formData: FormData) =>{
    await new Promise(r => setTimeout(r, 1000));
    const id = formData.get("id");
    
    const data = {        
        kill: formData.get('kill'),
        death: formData.get('death'),
        assist: formData.get('assist'),
        resultado: formData.get('resultado'),
        dataInclusao: formData.get('dataInclusao'),
        campeao: {
            id:formData.get('campeao')
        }
    }

    const options = {
        method: 'PUT',
        body:JSON.stringify(data),
        headers: {
            'Content-type': 'application/json'
        }
    }

    const resp = await fetch(`${process.env.API_BASE_URL}/partida/${id}` , options);

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
export default update;
