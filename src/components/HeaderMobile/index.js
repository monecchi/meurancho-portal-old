import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/images/logo/meurancho-logo-red.min.svg';
import ToggleIcon from '../../assets/images/UI/menu.svg';

// Component styles
import './styles.scss';

// 
// Header - Main Header on Mobile > Tablet
//
const HeaderMobile = (props) => {

    const { onClick } = props;
    return (
        <div className="header main__header">
            <div className="header__toggle">
                <button onClick={onClick}><img src={ToggleIcon} alt="Menu" className="header_toggle-image" width="24" height="16" /></button>
            </div>
            <Link to="/home" alt="Voltar pro início">
                <div className="header__logo">
                    <img src={Logo} alt="" className="meurancho-logo header__image" />
                </div>
            </Link>
        </div>
    );
};

export default HeaderMobile;
