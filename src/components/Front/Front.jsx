import { Link } from "react-router-dom"

function Front(){
    return(
        <Link to="/">
            <div className="flex flex-col justify-center items-center h-screen gap-[60px] sm:gap-[90px] md:gap-[120px] lg:gap-[150px]">
                <Link to="/player">
                    <div className="bg-[#ffc103] px-8 py-4 font-medium text-xs rounded-xl cursor-pointer text-gray-600 ease-in duration-300 hover:scale-150 active:shadow-lg active:shadow-gray-500 active:duration-0 active:bg-yellow-100 md:px-12 md:text-xl sm:px-10 sm:text-lg lg:px-14 lg:text-5xl">
                        <h1>Play with a player 👱</h1>
                    </div>
                </Link>
                <Link to="/computer">
                    <div className="bg-[#ffc103] px-8 py-4 font-medium text-xs rounded-xl cursor-pointer text-gray-600 ease-in duration-300 hover:scale-150 active:shadow-lg active:shadow-gray-500 active:duration-0 active:bg-yellow-100 md:px-12 md:text-xl sm:px-10 sm:text-lg lg:px-14 lg:text-5xl">
                        <h1>Play with computer 🤖</h1>
                    </div>
                </Link>
            </div>
        </Link>
    )
}
export default Front