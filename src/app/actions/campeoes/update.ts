"use server"

import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export async function update(prevState:any, formData: FormData) {
    const id = formData.get("id")

    const data = {
        nome: formData.get('nome'),
        funcao: formData.get('funcao'),
        rota: formData.get('rota'),
    }

    const options = {
        method: 'PUT',
        body:JSON.stringify(data),
        headers: {
            'Content-type': 'application/json'
        }
    }
    const resp = await fetch(`${process.env.API_BASE_URL}/campeao/${id}` , options);

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