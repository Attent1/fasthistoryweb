'use server'

const dashboard = async () =>{
    const resp = await fetch(`${process.env.API_BASE_URL}/partida/todos-kda-campeao`, {next: {revalidate: 0}});

    if (!resp.ok) {
        throw new Error("Dashboard não encontrado!")
    }
    return await resp.json();

}

export default dashboard;