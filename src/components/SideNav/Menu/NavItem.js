import React, { useState, memo } from 'react';
import { Link, useLocation } from "react-router-dom";

// RestoPizza Icons set
import Icon from '../../Icon';

//
// Sidenav single nav item
//
const NavItem = (props) => {
    const { item } = props;

    let { pathname } = useLocation();

    const [activeClass, setClass] = useState({ pathLink: pathname, activeLink: null });

    const handleIsActive = (name) => {
        setClass({ pathLink: pathname, activeLink: name });
    };

    const { pathLink, activeLink } = activeClass;

    //console.log(pathLink)


    return (
        <>
            {item.label && (
                <li className="menu-list-item" key={item.id}>
                    <Link
                        id={item.name}
                        onClick={() => handleIsActive(item.name)}
                        className={(activeLink === item.name && pathLink === item.url ? "sidebar-internal-link sidebar-internal-link--active" : "sidebar-internal-link")}
                        to={item.url && item.url}
                    >
                        {item.icon && item.icon ? (
                            <div className="sidebar-icon">
                                {/*<img alt={item.icon} src={item.icon} className="sidebar-icon__image sidebar-icon__image--DEFAULT" />*/}
                                <Icon color="#3e3e3e" size={20} icon={item.icon} className="sidebar-icon__image sidebar-icon__image--DEFAULT" />
                            </div>
                        ) : (
                            <React.Fragment></React.Fragment>
                        )}
                        <span className="sidebar-internal-link__label">{item.label}</span>
                    </Link>
                </li>
            )}
        </>
    );

};

NavItem.displayName = `NavItem`;

export default memo(NavItem);
