import React, { Fragment, useContext } from 'react';
import { Outlet , Link} from 'react-router-dom';
import {UserContext} from '../../contexts/user.contexts'
import {CartContext} from '../../contexts/cart.contexts'
import {ReactComponent as CrownLogo} from '../../assets/crown.svg';
import {signOutUser} from '../../utils/firebase/firebase.utils'
import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'
import './header.styles.scss';

const Header = () => {

    const {currentUser} = useContext(UserContext);
    const {isCartOpen} = useContext(CartContext);


    return (
    <Fragment>
        <div className='navigation'>
            <Link className='nav-link' to='/'>
                <CrownLogo className='logo-container'/>
            </Link>
            <div className='nav-links-container'>
                <Link className='nav-link' to='/shop'>
                    SHOP
                </Link>
                {
                    currentUser ?
                    <span className='nav-link' onClick={signOutUser}> SIGN OUT</span>
                :
                <Link className='nav-link' to='/auth'>
                SIGN IN
            </Link>
                }
                <CartIcon/>
            </div>
            {isCartOpen && <CartDropdown/>}
        </div>
        <Outlet/>
    </Fragment>
    );
    };

export default Header;