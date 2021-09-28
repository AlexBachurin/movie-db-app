import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <nav className="nav">
            <Link to="/">
                <div className="logo-container">

                    <img className="nav-logo" src="https://res.cloudinary.com/dljezd6qv/image/upload/v1619821176/main-logo-white-small.png" alt="bacha coding" />

                </div>
            </Link>

        </nav>
    )
}

export default Navbar