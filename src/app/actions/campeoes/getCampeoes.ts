'use server'

const getCampeao = async () =>{
    const resp = await fetch(process.env.API_BASE_URL + "/campeao", {next: {revalidate: 0}});
    return await resp.json();
}

export default getCampeao;