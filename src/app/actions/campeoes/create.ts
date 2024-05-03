'use server'
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

const create = async (prevState: any, formData: FormData) =>{
    await new Promise(r => setTimeout(r, 1000));
    const data = {
        nome: formData.get('nome'),
        funcao: formData.get('funcao'),
        rota: formData.get('rota'),
    }

    const options = {
        method: 'POST',
        body:JSON.stringify(data),
        headers: {
            'Content-type': 'application/json'
        }
    }
    const resp = await fetch(process.env.API_BASE_URL + '/campeao',options);

    if(resp.ok){
        revalidateTag("campeoes")
        redirect('/campeoes');
    }   

    if(resp.status == 400){
        return {
            message: "Erro de validação"
        }
    }   
}
export default create;
