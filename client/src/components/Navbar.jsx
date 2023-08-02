import React, {useContext} from "react";
import { Link } from "react-router-dom";
import Logo from "../logo.png";
import { AuthContext } from "../context/authContext";

const Navbar = () => {

    const { currentUser,logout} = useContext(AuthContext);

    return (
        <div className="navbar">
            <div className="container">
                <div className="logo">
                    <Link to="/">
                        <img src={Logo} alt="" />
                    </Link>
                </div>
                <div className="links">
                    <Link className="link" to="/?cat=about">
                        <h6>About</h6>
                    </Link>
                    <Link className="link" to="/?cat=contactus">
                        <h6>Contact Us</h6>
                    </Link>
                  
                    <span>{ currentUser?.username }</span>
                    {currentUser?<span onClick={logout}>Logout</span>: <Link className="link" to="/login">Login</Link>}
                    <span className="write">
                        <Link to="/write">
                            Apply
                        </Link>
                    </span>


                </div>
            </div>
        </div>
    );
};

export default Navbar;