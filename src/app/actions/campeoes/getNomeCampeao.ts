'use server'

const getNomeCampeao = async (id: number) =>{
    const resp = await fetch(`${process.env.API_BASE_URL}/campeao/nome/${id}`, {next: {revalidate: 0}});
    if (!resp.ok) {
        throw new Error("Campeão não encontrado!")
    }

    return await resp.text();
}

export default getNomeCampeao;