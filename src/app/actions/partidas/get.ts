'use server'

const getById = async (id: number) =>{
    const resp = await fetch(`${process.env.API_BASE_URL}/partida/${id}`, {next: {revalidate: 0}});

    if (!resp.ok) {
        throw new Error("Partida não encontrado!")
    }

    return await resp.json();
}

export default getById;