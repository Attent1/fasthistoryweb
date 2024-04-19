const consistir = (prevState: any, formData: FormData) =>{

    debugger;
    if (formData.get('nomeCampeao')?.toString() == '') {
        return  {
            message: "Selecione um campeão"
        }
    }
    if (formData.get('kill')?.toString() == '') {
        return  {
            message: "Kill não informada"
        }
    }
    if (formData.get('death')?.toString() == '') {
        return  {
            message: "Death não informada"
        }
    }
    if (formData.get('assist')?.toString() == '') {
        return  {
            message: "Assist não informada"
        }
    }
    if (formData.get('resultado')?.toString() == '') {
        return  {
            message: "Resultado não informado"
        }
    }
} 
export default consistir;
