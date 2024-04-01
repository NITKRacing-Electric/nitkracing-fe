import { Link } from "react-router-dom"
import { useStateContext } from "../../context"
import { useLocation } from "react-router-dom/cjs/react-router-dom.min"

const MobileView = ()=>{
    const location = useLocation()
    const path = location.pathname
    const {handleOpenAndClose} = useStateContext()
    return (
        <div className=" mb-24 w-screen">
            <div className={`absolute top-[69px] bottom-0 ${path==="/" ? ('left-[-15px]') : ('left-[0px]')} right-0 z-50 text-white bg-black w-screen h-screen`}>
                <ul className="flex flex-col items-center gap-y-16 p-11 font-bold text-2xl">
                    <Link to="/"><li className="hover:text-red-500 ease-in duration-300" onClick={handleOpenAndClose}>Home</li></Link>
                    <Link to="/gallery"><li className="hover:text-red-500 ease-in duration-300" onClick={handleOpenAndClose}>Gallery</li></Link>
                    <Link to="/sponsors"><li className="hover:text-red-500 ease-in duration-300" onClick={handleOpenAndClose}>Sponsors</li></Link>
                    <Link to="/about"><li className="hover:text-red-500 ease-in duration-300" onClick={handleOpenAndClose}>About</li></Link>
                    <Link to="/fbharat"><li className="hover:text-red-500 ease-in duration-300" onClick={handleOpenAndClose}>Formula Bharat</li></Link>
                    <Link to="/crowdfunding"><li className="hover:text-red-500 ease-in duration-300" onClick={handleOpenAndClose}>Crowdfunding</li></Link>
                    <Link to="/achievements"><li className="hover:text-red-500 ease-in duration-300" onClick={handleOpenAndClose}>Achievements</li></Link>
                </ul>
            </div>

        </div>
    )
}

export default MobileView
