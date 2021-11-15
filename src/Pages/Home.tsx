import React,{FC} from 'react'
import BarContainer from '../Components/BarContainer'
import MenuContainer from '../Components/MenuContainer'
import NavBar from '../Components/NavBar'

const Home : FC= () => {
    return (
        <div className="flex flex-col h-screen">
            <NavBar/>
            <main className="bg-blue-400 flex flex-grow p-20">
                <div className="mx-auto container grid grid-cols-3 gap-4  bg-red-800 h-full">
                    <div className="col-span-2">
                        <BarContainer/>
                    </div>
                    <div >
                        world
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Home
