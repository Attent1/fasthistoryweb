'use server'

const getPartida = async () =>{
    const resp = await fetch(process.env.API_BASE_URL + "/partida", {next: {revalidate: 0}});
    return await resp.json();
}

export default getPartida;