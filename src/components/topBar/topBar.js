import React, { useContext, Fragment } from 'react'
import { NavLink } from 'react-router-dom';
import { CurrentUserContext } from '../../context/currentUser';


const TopBar = () => {
    const [currentUserState] = useContext(CurrentUserContext)
    console.log(currentUserState)
    return (
        <nav className='navbar navbar-light'>
            <div className="container">
                <NavLink to='/' className='navbar-brand'>
                  YA-YA-YA-COCOJAMBO
                </NavLink>
                <ul className="nav navbar-nav pull-xs-right">
                    <li className='nav-item'>
                        <NavLink exact to='/' className='nav-link'>
                            Home
                        </NavLink>
                    </li> 
                    {currentUserState.isLoggedIn === false && (
                    
                 <Fragment>
                        <li className='nav-item'>
                            <NavLink to='/login' className='nav-link'>
                                Sign in
                            </NavLink>
                        </li>
                        <li className='nav-item'>
                             <NavLink to='/register' className='nav-link'>
                                Sign up
                            </NavLink>
                        </li>
                 </Fragment>
                    )}
                    {currentUserState.isLoggedIn && (
                        <Fragment>
                            <li className="nav-item">
                              <NavLink to='/articles/new' className='nav-link'>
                                  <i className='ion-compose'/>
                                  &nbsp; New Post
                              </NavLink>  
                            </li>
                            <li className="nav-item">
                              <NavLink to={`/profiles/${currentUserState.currentUser.username}`} className='nav-link'>
                                <img className='user-pic' src={currentUserState.currentUser.image} alt=""/>
                                &nbsp; {currentUserState.currentUser.username}
                              </NavLink>  
                            </li>
                        </Fragment>
                    )}
                </ul>
            </div>
        </nav>
    ) 
}

export default TopBar;