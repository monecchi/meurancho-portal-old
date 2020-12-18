import React from 'react';
import { Link } from 'react-router-dom';

// React ProSidebar
// https://github.com/azouaoui-med/react-pro-sidebar/tree/master/demo
import {
    ProSidebar,
    Menu,
    MenuItem,
    SubMenu,
    SidebarHeader,
    SidebarFooter,
    SidebarContent,
} from 'react-pro-sidebar';

// RestoPizza Icons set
import Icon from '../Icon';

// Sidebar styles
import './styles.scss';

// Logo
import Logo from '../../assets/images/logo/meurancho-logo-red.min.svg';

const SideBar = () => {
    return (
        <ProSidebar>
            <SidebarHeader className="sidebar-header-dark">
                <div
                    style={{
                        padding: '0 24px',
                        textTransform: 'none',
                        fontWeight: 'bold',
                        fontSize: 14,
                        letterSpacing: '1px',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                    }}
                >
                    <div className="restaurant-logo">
                        <img src={Logo} className="app-logo" alt="Pizzaria Meu Rancho" />
                    </div>

                </div>
            </SidebarHeader>

            <SidebarContent>
                <Menu iconShape="square">
                    <MenuItem icon={<Icon color="#fafafa" size={100} icon="home" />}>Início <Link to="/" /></MenuItem>
                    <MenuItem icon={<Icon color="#fafafa" size={100} icon="receipt" />}>Pedidos <Link to="/pedidos" /></MenuItem>
                    <MenuItem icon={<Icon color="#fafafa" size={100} icon="star-full" />}>Avaliações <Link to="/avaliacoes" /></MenuItem>
                    <MenuItem icon={<Icon color="#fafafa" size={100} icon="food-menu" />}>Cardápios <Link to="/cardapios" /></MenuItem>
                </Menu>
                <Menu iconShape="square">
                    <MenuItem icon={<Icon color="#fafafa" size={100} icon="real-currency" />}>Financeiro <Link to="/financeiro" /></MenuItem>
                    <MenuItem icon={<Icon color="#fafafa" size={100} icon="offer" />}>Promoções <Link to="/promocoes" /></MenuItem>
                    <MenuItem icon={<Icon color="#fafafa" size={100} icon="hour-clock" />}>Horários <Link to="/horarios" /></MenuItem>
                    <MenuItem icon={<Icon color="#fafafa" size={100} icon="map-marker-location" />}>Áreas de entrega <Link to="/delivery-area" /></MenuItem>
                    <MenuItem icon={<Icon color="#fafafa" size={100} icon="credit-card-blank" />}>Meios de pagamento <Link to="/meios-de-pagamento" /></MenuItem>
                </Menu>
                <Menu iconShape="square">
                    <MenuItem icon={<Icon color="#fafafa" size={100} icon="shopfront" />}>Perfil <Link to="/perfil" /></MenuItem>
                    <MenuItem icon={<Icon color="#fafafa" size={100} icon="male-support" />}>Ajuda e Suporte <Link to="/promocoes" /></MenuItem>
                    <SubMenu title="Serviços" icon={<Icon color="#fafafa" size={100} icon="settings-gear" />}>
                        <MenuItem>Ativar serviços <Link to="/cardapios" /></MenuItem>
                        <MenuItem>Ajuda <Link to="/pedidos" /></MenuItem>
                    </SubMenu>
                </Menu>
            </SidebarContent>

            <SidebarFooter>
                {/**
                *  You can add a footer for the sidebar ex: copyright
                */}
            </SidebarFooter>
        </ProSidebar>
    );
};

export default SideBar;
