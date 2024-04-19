'use server'

const getIdCampeao = async (nomeCampeao?: string) =>{
    const resp = await fetch(`${process.env.API_BASE_URL}/campeao/nome/${nomeCampeao}`, {next: {revalidate: 0}});
    if (!resp.ok) {
        throw new Error("Campeão não encontrado!")
    }

    return await resp.text();
}

export default getIdCampeao;