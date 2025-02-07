import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation , useNavigate} from 'react-router';

export const Navbar = () => {
    let location = useLocation();
    let history = useNavigate();
    const handleLogout=()=>{
        localStorage.removeItem('token');
       history('/login');
    }

    return (
        <div> 
            <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">AI Resume Builder</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{display:"flex"}}>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className={`nav-link${location.pathname==="/"?" active":""}`} aria-current="page" to="/">Home</Link>
                            </li>
                            {/* <li className="nav-item">
                                <Link className={`nav-link${location.pathname==="/login"?" active":""}`} to="/login">SignUp</Link>
                            </li> */}
                            <li className="nav-item">
                                <Link className={`nav-link${location.pathname==="/privacy"?" active":""}`} to="/privacy">T&C</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link${location.pathname==="/faq"?" active":""}`} to="/faq">FAQs</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link${location.pathname==="/suggestion"?" active":""}`} to="/suggestion">Suggestion</Link>
                            </li>
                        </ul>
                        {!localStorage.getItem('token')?
                        <form className="d-flex">
                            <div style={{display:"flex",justifyContent:"right"}}>
                            <div><Link className='btn btn-primary mx-1' role='button' to="/login">Login</Link></div>
                            <div><Link className='btn btn-primary mx-1' role='button' to="/signup">Sign Up</Link></div>
                            </div>
                        </form>:<button onClick={handleLogout} className='btn btn-primary'>Logout</button>}

                    </div>
                </div>
            </nav>
        </div>
    )
}
export default Navbar;