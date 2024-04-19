interface Campeao {
    id: number,
    rota: string,
    nome: string,
    funcao: string
}
type Partida = {
    id: number,    
    kill:number,
    death:number,
    assist:number,
    kda:number,
    resultado: string,
    campeao: Campeao
}