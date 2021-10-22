import React,{FC} from 'react'
import BarContainer from '../Components/BarContainer'
import NavBar from '../Components/NavBar'

const Home : FC= () => {
    return (
        <div className="min-h-full">
            <NavBar/>
            <main className="bg-blue-40 my-2">
         
                <div className="container mx-auto">
                    <div className="flex flex-row flex-wrap py-4">
                        <div className="w-full sm:w-2/3 md:w-3/4 pt-1 px-2" >
                          <BarContainer/>
                        </div>
                        <div className="w-full sm:w-1/3 md:w-1/4  px-2" >
                            hello2
                        </div>
                       
                    </div>
                       
                </div>

            </main>
        </div>
    )
}

export default Home
