import React, { memo } from 'react';

import NavItem from './NavItem';
import NavItems from './NavItems';

import { SideMenuItems } from './styles'; // styled-component

//
// Sidenav menu component ( holds all menu nav items )
//
const SideNavMenu = ({ items, ...props }) => {

  return (
    <>
      {items.map((item, index) => (
        <SideMenuItems key={index}>
          <NavItem item={item} key={index} />
          {Array.isArray(item.subItems) ? (
            <NavItems subItems={item.subItems} key={item.subItems[index]} />
          ) : null}
        </SideMenuItems>
      ))}
    </>
  )
};

export default memo(SideNavMenu);
