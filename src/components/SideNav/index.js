import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';
import SideNavMenu from './Menu';
import RestaurantStatus from './RestaurantStatus';

//import { Switch } from '@adobe/react-spectrum';

// Logo
import Logo from '../../assets/images/logo/meurancho-logo-red.min.svg';

// SideNav styles
import './styles.scss';

// Primise function
export const navigationItems = async () => {
    let itemsArray = [];
    try {
        let itemsNav = [
            {
                id: 0,
                name: "home-section",
                label: "",
                subItems: [
                    { id: 1, name: "home", url: "/home", label: "Home", badge: "", icon: "home" },
                    { id: 2, name: "pedidos", url: "/pedidos", label: "Pedidos", badge: "", icon: "receipt-bill-history" },
                    { id: 3, name: "cardápio", url: "/cardapio", label: "Cardápio", badge: "", icon: "receipt-bank-note" },
                    { id: 4, name: "avaliacoes", url: "/avaliacoes", label: "Avaliações", badge: "", icon: "star-full" },
                    { id: 5, name: "financeiro", url: "/financeiro", label: "Financeiro", badge: "", icon: "real-currency" }
                ]
            },
            {
                id: 1,
                name: "management-section",
                label: "",
                subItems: [
                    { id: 6, name: "horarios", url: "/horarios", label: "Horários", badge: "", icon: "hour-clock" },
                    { id: 7, name: "areas-entrega", url: "/areas-entrega", label: "Áreas de Entrega", badge: "", icon: "map-marker-location" },
                    { id: 8, name: "formas-pagamento", url: "/formas-de-pagamento", label: "Meios de Pagamento", badge: "", icon: "credit-card-blank" },
                    { id: 9, name: "promocoes", url: "/promocoes", label: "Promoções", badge: "", icon: "offer" },
                    { id: 10, name: "cupons", url: "/cupons", label: "Cupons", badge: "", icon: "gift-card" }
                ]
            },
            {
                id: 2,
                name: "financeiro-section",
                label: "",
                subItems: [
                    { id: 11, name: "servicos", label: "Serviços", url: "/servicos", badge: "Novo!", icon: "ordering-settings" },
                    { id: 12, name: "perfil", label: "Perfil", url: "/perfil-restaurante", badge: "", icon: "shopfront" },
                    { id: 13, name: "desempenho", label: "Desempenho", url: "/desempenho", badge: "", icon: "notebook-display" }
                ]
            },
            {
                id: 3,
                name: "servicos-section",
                label: "",
                subItems: [
                    { id: 14, name: "reservas", label: "Reservas", url: "/reservas", badge: "", icon: "table-reservation" },
                    { id: 15, name: "relatorios", label: "Relatórios", url: "/relatorios", badge: "", icon: "wallet" }
                ]
            },
            {
                id: 4,
                name: "logout",
                label: "Sair",
                url: "/sair",
                badge: "",
                icon: "user-male-circle",
                subItems: []
            },
            { id: 6, name: "ungrouped", label: "Ungrouped Item", badge: "", url: "/some-page", icon: "home", subItems: [] },
        ];
        itemsArray = Object.values(itemsNav); // converts object to array
        console.log(itemsArray);
        return itemsArray;
    } catch (e) {
        console.log(JSON.stringify(e));
    }
};


//
// Sidenav Menu grouped
// https://dev.to/jsmanifest/create-a-modern-dynamic-sidebar-menu-in-react-using-recursion-36eo?signin=true
//

//
// Sidenav Component
//
const SideNav = (props) => {

    const node = useRef();

    const { isMobile } = props;

    const [toggled, setToggled] = useState(false);

    const [storeOpen, setStoreOpen] = useState(true);

    const [navItems, setNav] = useState([]);

    const [restaurant, setRestaurant] = useState({
        data: [],
        loading: true,
        isOpen: true
    });

    const handleRestaurantIsOpen = (storeOpen) => {
        setStoreOpen(!storeOpen);
        setRestaurant({
            isOpen: storeOpen,
            ...restaurant
        });
    }

    // Set toggled state on menu toggle click
    const toggleSideNav = (toggled) => {
        setToggled(!toggled);
        console.log('SideNav toggled: ' + toggled);
    }

    // Add, Remove div.main div.sidebar css classes according to toogled State
    const toggleContainer = (value) => {
        if (!value) {
            document.getElementsByClassName("main")[0].classList.remove("main--locked"); 
            //
            //main__sidebar main__sidebar--no-top-bar main__sidebar--no-sidebar-scroll
        } else {
            document.getElementsByClassName("main")[0].classList.add("main--locked");
        }
    }

    useLayoutEffect(()=>{
        toggleContainer(toggled);
    }, [toggled]);

    const handleClickOutside = e => {
        if (node.current.contains(e.target)) {
            // inside click
            return;
        }
        // outside click
        setToggled(false);
    };

    useEffect(() => {

        navigationItems().then(res => {
            //console.log(res); // expects array()
            setNav(res);
        }).catch(e => console.log(e));

        setRestaurant({
            data: [{ restaurant: { name: "Pizzaria Meu Rancho" } }],
            loading: false,
            isOpen: storeOpen,
            statusLabel: !storeOpen ? "Loja fechada" : "Loja aberta",
            statusReason: !storeOpen ? "Fora do horário programado" : "Dentro do horário programado",
        });

        console.log('Restaurante aberto? : ' + storeOpen.toString())
        //setTimeout(() => {

        //}, 1500);

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [storeOpen]);

    return (
        <>
            <div id="sidebar" className={(!isMobile ? "sidebar main__sidebar main__sidebar--no-top-bar main__sidebar--no-sidebar-scroll" : "sidebar")} ref={node}>

                <button onClick={() => handleRestaurantIsOpen(storeOpen)} className={storeOpen ? 'toggle-is-open opened' : 'toggle-is-open' }><span>Abrir / Fechar</span></button>

                <a className="sidebar-meurancho-logo" href="/home">
                    <img alt="logo" title="logo" src={Logo} className="sidebar-meurancho-logo__image" />
                </a>

                <RestaurantStatus restaurant={restaurant} />

                {/* Sidenav navigation items */}
                <div className="sidebar__groups-container" style={{ overflow: "hidden" }}>
                    <ul className="menu-list">
                        <SideNavMenu items={navItems} />
                    </ul>
                </div>

            </div>
        </>
    )
};

export default SideNav;