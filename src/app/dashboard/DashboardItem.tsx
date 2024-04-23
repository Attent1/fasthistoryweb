'use client'

export async function DashboardItem() {
    return(
        <div className="flex justify-between p-2">
          <div className="flex items-center gap-5">                                                   
            <div className="flex gap-5">
              <span>Campeão: jorge</span>    
              <span>KDA: 10 </span>    
              <span>Win Rate: </span>
              {/* <span>KDA: {partida.kda.toPrecision(3)}</span>  */}
            </div>   
         </div>          
        </div>
    )
}