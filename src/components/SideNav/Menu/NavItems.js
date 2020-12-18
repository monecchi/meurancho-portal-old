import React, { memo } from 'react';
import { NavLink } from "react-router-dom";

// RestoPizza Icons set
import Icon from '../../Icon';

//
// Sidenav multiple nav items (grouped)
//
const NavItems = (props) => {
    const { subItems } = props;

    return (
        <>
            {Array.isArray(subItems) ? (
                <div className="sidebar-group">
                    {subItems.map((subitem, i) => (
                        <React.Fragment key={i}>
                            <li className="menu-list-item">
                                <NavLink
                                    id={subitem.name}
                                    className="sidebar-internal-link"
                                    activeClassName="sidebar-internal-link--active"
                                    to={subitem.url && subitem.url}
                                >
                                    {subitem.icon && (
                                        <div className="sidebar-icon">
                                            {/*<img alt={item.icon} src={item.icon} className="sidebar-icon__image sidebar-icon__image--DEFAULT" />*/}
                                            <Icon color="#3e3e3e" size={20} icon={subitem.icon} className="sidebar-icon__image sidebar-icon__image--DEFAULT" />
                                        </div>
                                    )}

                                    <span className="sidebar-internal-link__label">{subitem.label}</span>
                                    
                                    {subitem.badge && (
                                        <div className="sidebar-badge-warn"><span className="sidebar-badge-warn__content">{subitem.badge}</span></div>
                                    )}
                                </NavLink>
                            </li>
                        </React.Fragment>
                    ))}
                </div>
            ) : 
                <></>
            }
        </>
    );

};

NavItems.displayName = `NavItems`;

export default memo(NavItems);
