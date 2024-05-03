'use server'

const getCampeao = async () =>{
    const resp = await fetch(process.env.API_BASE_URL + "/campeao", {next: {tags: ["campeoes"]}});    
    return await resp.json();
}

export default getCampeao;