import { Link } from "react-router-dom"

function Home()
{
    return (
        <>
            <div>
                <button >
                   <Link to="/login">
                        Login
                   </Link> 
                </button>
            </div>
        </>
    )
}

export default Home