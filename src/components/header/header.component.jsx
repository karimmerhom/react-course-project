import React, { Fragment } from 'react';
import { Outlet , Link} from 'react-router-dom';
import {ReactComponent as CrownLogo} from '../../assets/crown.svg';
import './header.styles.scss';

const Header = () => (

    <Fragment>
        <div className='navigation'>
            <Link className='nav-link' to='/'>
                <CrownLogo className='logo-container'/>
            </Link>
            <div className='nav-links-container'>
                <Link className='nav-link' to='/atuh'>
                    SHOP
                </Link>
                <Link className='nav-link' to='/auth'>
                    SIGN IN
                </Link>
            </div>
        </div>
        <Outlet/>
    </Fragment>

);

export default Header;