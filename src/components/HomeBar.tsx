
export default function HomeBar() {    
    return(
     <div className="w-full bg-gray-900 justify-between items-center px-4 py-2">
          <div className="flex items-center">
            <h1 className="text-4xl font-bold py-2">FastHistory</h1>
            <div className="ml-auto">
              <div className="w-14 h-14 rounded-full overflow-hidden">
                <img src="https://i.pravatar.cc/300" alt="avatar do usuário" />
              </div>
            </div>
          </div>         
      </div>
    )
}