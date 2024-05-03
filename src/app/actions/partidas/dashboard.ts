'use server'

const dashboard = async () =>{
    const resp = await fetch(`${process.env.API_BASE_URL}/partida/todos-kda-campeao/`, {next: {revalidate: 0}});
    // const resp = await fetch(process.env.API_BASE_URL + "/partida", {next: {revalidate: 0}});
    debugger;
    const json = await resp.json();
    return json
}

export default dashboard;