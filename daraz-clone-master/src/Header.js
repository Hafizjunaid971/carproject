import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {IconButton,Button} from "@material-ui/core";
import { useStateValue } from './StateProvider';
import userEvent from '@testing-library/user-event';


function Header() {
   
    const [{user},dispatch] = useStateValue();
    return (
        <div className="header">
            
                <img src="https://media-exp1.licdn.com/dms/image/C4D0BAQFaepiKp7XB_g/company-logo_200_200/0/1593773251707?e=2159024400&v=beta&t=Cm-Nhj2kn9VNMnx8BUiaAEZXH1l1p2E4L0TQNHxLji0" alt=""/>
                
            <div class="header__search">
            <input  type="text" className="header__searchInput" placeholder="Search in daraz By tech Empire"/>
            <SearchIcon className="header__searchIcon"/>
            </div>

            <div className="header__center">
                <p>Hello! {user.displayName}</p>
                </div>
                <div className="header__right">
                <p>Download App</p>
               <div className="headerRight__img">
                   <img src="data:image/png;base64,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" alt=""/>
                <img src="data:image/png;base64,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" alt="" />
               </div>
                
            </div>
            <IconButton>
            <ShoppingCartIcon className="header__cart" fontSize="large" />
            </IconButton>
        </div>
    )
}

export default Header;
