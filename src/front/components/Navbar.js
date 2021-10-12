import React, {Fragment} from 'react'
import { NavLink } from 'react-router-dom'


const Navbar = () => {
    return (
        <Fragment>
        <nav className="navbar navbar-dark bg-dark">
            <div className="container-fluid">
                <NavLink exact to='/' className='navbar-brand' activeClassName='active'>Home</NavLink>
                <div className="navbarNav">
                    <NavLink to='/items'  activeClassName='active'>Items</NavLink>
                </div>
            </div>
        </nav>
        </Fragment>
        /*
        <nav>
            <ul>
                <li><NavLink activeClassName='active' exact to='/items'>Items</NavLink></li>
                <li><NavLink activeClassName='active' exact to='/'>Home</NavLink></li>
            </ul>
        </nav>*/
    )
}

export default Navbar
