'use server'
import { redirect } from "next/navigation";

const create = async (formData: FormData) =>{
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
    redirect('/campeoes');
}
export default create;
