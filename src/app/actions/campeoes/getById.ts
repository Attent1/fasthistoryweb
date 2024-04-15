'use server'

const getById = async (id: number) =>{
    const resp = await fetch(`${process.env.API_BASE_URL}/campeao/${id}`, {next: {revalidate: 0}});

    if (!resp.ok) {
        throw new Error("Campeão não encontrado!")
    }

    return await resp.json();
}

export default getById;