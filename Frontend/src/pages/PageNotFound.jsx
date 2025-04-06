import { useNavigate } from 'react-router-dom'
import { IoChevronBackOutline } from "react-icons/io5"

const PageNotFound = () => {

    const navigate = useNavigate()

    return (
        <div className="min-h-screen w-full flex justify-center items-center flex-col bg-green-200">
            <div className="text-green-800 flex flex-col justify-center items-center font-bold mb-10">
                <h1 className="text-8xl">404</h1>
                <h2 className="text-4xl">Page not found</h2>
            </div>
            <button onClick={() => navigate(-1)} className="px-5 py-2 bg-green-700 text-white font-semibold flex gap-4 items-center rounded-full hover:bg-green-600">
                <IoChevronBackOutline />
                <p>Go back</p>
            </button>
        </div>
    )
}

export default PageNotFound