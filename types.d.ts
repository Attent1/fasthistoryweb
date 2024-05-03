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
    dataInclusao: string
    campeao: Campeao
}
interface Dashboard {
    campeao: string,
    kda:number,
    win:number,
    winRate:number,
}
