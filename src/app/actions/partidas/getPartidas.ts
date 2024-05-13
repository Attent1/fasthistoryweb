'use server'

const getPartida = async () =>{
    const resp = await fetch(process.env.API_BASE_URL + "/partida", {next: {revalidate: 0}});
    const json = await resp.json();
    return json._embedded.partidaList
}

export default getPartida;