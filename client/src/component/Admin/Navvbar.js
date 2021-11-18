import React,{Fragment,useState,useEffect} from 'react';
import { NavLink,useHistory,useLocation } from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {logout} from '../../actions/index';
import logo from '../../images/logo.png';
import {useDispatch} from 'react-redux';


const Navvbar = ({auth:{isAuthenticated, loading},logout}) => {
const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')) || JSON.parse(localStorage.getItem('adminToken')));
const history = useHistory();
const dispatch = useDispatch();
const location = useLocation();


// ---------- SET ACTION FOR LOGOUT -----------------
const Userlogout = () => {
    dispatch({type:'LOGOUT'});
   
    setUser(null)
    alert("Successfully logged out")
    }

useEffect(() =>{
    const token = user?.token;

    setUser(JSON.parse(localStorage.getItem('profile')) || JSON.parse(localStorage.getItem('adminToken')));

},[location])


// ---------------- AFTER LOGIN NAVBAR-------------------------
    const authLink = (
     <>
        
        <li className="nav-item">
            <NavLink className="nav-link" onClick={Userlogout} to="/" >Logout</NavLink>
         </li>
         
     </>
    )

//  ---------------------- BEFORE LOGIN NAVBAR-------------------------
  const guestLink = (
      <>
   
    <li className="nav-item">
    <NavLink className="nav-link" to="/login">Login</NavLink>
    </li>
    <li className="nav-item">
    <NavLink className="nav-link" to="/register">Register</NavLink>
    </li>
    </>
  )

    return (
        <>

            <nav className="navbar navbar-expand-lg sticky-top  navbar-light ">
            <div className="container">
            <NavLink class="navbar-brand" to="/">
      <img src={logo} alt="" width="50" height="50" />Blogs
    </NavLink>

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                 </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto">
                   

                    {!loading && (<Fragment>{user||isAuthenticated ?authLink : guestLink}</Fragment>)}
                   
                </ul>
                </div>
                <div> <h3></h3></div>
            </div>
        </nav>
        </>
    )
}

Navvbar.prototype = {
    logout: PropTypes.func.isRequired,
    auth:PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth:state.auth
})


export default connect(mapStateToProps,{logout})(Navvbar)
