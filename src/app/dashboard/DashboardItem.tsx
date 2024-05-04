'use client'

type DashboardItemProps = {
  dashboard: Dashboard
}

export function DashboardItem(props: DashboardItemProps) {

  debugger;
    const {dashboard} = props;

    return(
        <div className="flex justify-between p-2">
          <div className="flex items-center gap-5">                                                   
            <div className="flex gap-5">
              <span>Campeão: {dashboard.campeao}</span>    
              <span>KDA: {dashboard.kda.toPrecision(3)} </span>    
              <span>Win Rate: {dashboard.winRate}%</span>
              <span>Vitórias: {dashboard.win }</span>
              {/* <span>KDA: {partida.kda.toPrecision(3)}</span>  */}
            </div>   
         </div>          
        </div>
    )
}