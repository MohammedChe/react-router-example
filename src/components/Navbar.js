import { Link } from 'react-router-dom'; 

const Navbar = () => {
    return (
        <div>
           <Link to={"/"}>Home</Link> |
           <Link to={"/about"}>About</Link> |
           <Link to='/contact'>Contact</Link> |
           <Link to='/projects'>Projects</Link>
        </div>
    );
};

export default Navbar;