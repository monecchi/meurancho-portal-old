import React, { useState, useEffect, useCallback, useRef } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";

import { useMediaQuery } from 'beautiful-react-hooks';
import useOnClickOutside from './hooks/useOnClickOutside';

//
// Layout Components
//
//import SideBar from './components/SideBar'; // Sidebar using ProSidebar React

// Main Page Layout Component (Wrapper for Dashboard Pages)
import MainPage from './components/Pages/MainPage';

// Default SideNav
import SideNav from './components/SideNav';

// Default SideNav on scrollable Drawer
import SideNavOnDrawer from './components/SideNavDrawer';

// Header Mobile
import HeaderMobile from './components/HeaderMobile';

//
// Dashboard Pages Components
//
import CardapiosPage from './components/Pages/Cardapios';
import PageOrders from './components/Pages/Orders';
import ReviewsPage from './components/Pages/Reviews';
import PaymentMethodsPage from './components/Pages/PaymentMethods';

// Preloader
//import Preloader from './components/Preloader';

// Main Styles
import "./App.scss";

export const DashHome = () => {
  return (
    <div className="d-flex flex-lg-column flex-md-row flex-sm-row w-100 h-100 justify-content-center align-items-center">
      <h1>Página Inicial</h1>
    </div>
  )

}

export const DashAvaliacoes = () => {
  return (
    <>
    <ReviewsPage />
    </>
  )

}

export const DashCardapios = () => {
  return (
    <>
    <CardapiosPage />
    </>
  )

}

export const DashTermos = () => {
  return (
    <div className="d-flex flex-column w-100 h-100 justify-content-center align-items-center">
      <h1>Página Termos</h1>
    </div>
  )
}

export const DashFinanceiro = () => {
  return (
    <div className="d-flex flex-column w-100">
      <h6>Testando rotas dentro de componentes em páginas</h6>
      <p className="d-block" style={{ maxWidth: "700px" }}> O Link pra a rota <code>/home</code> abaixo, quando fora da Sidenav, redireciona para outro componente, como configurado nas rotas do App.</p>
      <br></br>
      <PaymentMethodsPage />
      <br></br>
      <Link className="d-block" to="/home">Voltar pro início</Link>
    </div>
  )

}

// Each logical "route" has two components, one for
// the sidebar and one for the main area. We want to
// render both of them in different places when the
// path matches the current URL.

// We are going to use this route config in 2
// spots: once for the sidebar and once in the main
// content section. All routes are in the same
// order they would appear in a <Switch>.
const routes = [
  {
    path: "/home",
    exact: true,
    sidebar: () => <MainPage title={''} children={DashHome()} />,
    main: () => <></>
  },
  {
    path: "/pedidos",
    sidebar: () => <MainPage title="" children={PageOrders()} />,
    main: () => <></>
  },
  {
    path: "/cardapio",
    sidebar: () => <></>,
    main: () => <MainPage title="Cardápio" subtitle="Gerencie seus Cardápio no site." children={DashCardapios()} />
  },
  {
    path: "/avaliacoes",
    exact: true,
    sidebar: () => <></>,
    main: () => <MainPage title="Avaliações" subtitle="Feedback e avaliações de clientes." children={DashAvaliacoes()} />
  },
  {
    path: "/financeiro",
    exact: true,
    sidebar: () => <></>,
    main: () => <MainPage title="Financeiro" subtitle="Acompanhe o desempenho de vendas no site." children={DashFinanceiro()} />
  },
  {
    path: "/formas-de-pagamento",
    exact: true,
    sidebar: () => <></>,
    main: () => <MainPage title="Formas de Pagamento" subtitle="Escolha quais formas de pagamento seus clientes poderão usar." children={DashFinanceiro()} />
  },
  {
    path: "*",
    sidebar: () => <Redirect to="/home" />,
    main: () => <Redirect to="/home" />
  }
];

// App 
const App = (props) => {

  const sidenavRef = useRef();

  const [showSideNav, setShowSideNav] = useState(false);

  useOnClickOutside(sidenavRef, () => setShowSideNav(false));
  
  const isMobile = useMediaQuery('(max-width: 569px)');

  // Set toggled state on menu toggle click with useCallback
  const toggleSideNav = useCallback(() => setShowSideNav(value => !value), []);
  console.log('SideNav toggled?: ' + showSideNav);

  // Set toggled state on menu toggle click
  // const toggleSideNav = () => {
  //   setShowSideNav(!showSideNav);
  // }

  // const toggleDrawer = useCallback(value => {
  //   if (!value) {
  //     document.getElementsByClassName("main")[0].classList.remove("main--locked");
  //   } else {
  //     // cleanup on unmount, remove css class
  //     document.getElementsByClassName("main")[0].classList.add("main--locked");
  //   }
  // }, [])

  // Add, Remove div.main div.sidebar css classes according to toogled State
  // const toggleContainer = (value) => {
  //     if (!value) {
  //         document.getElementsByClassName("main")[0].classList.remove("main--locked"); 
  //         //
  //         //main__sidebar main__sidebar--no-top-bar main__sidebar--no-sidebar-scroll
  //     } else {
  //         document.getElementsByClassName("main")[0].classList.add("main--locked");
  //     }
  // }

  const onChangeRouteHideSideNav = () => {
    console.log('Current URL: ' + window.location.pathname);
  }

  useEffect(() => {
    if (!showSideNav) {
      document.getElementsByClassName("main")[0].classList.remove("main--locked");
    }
    // cleanup on unmount, remove css class
    return () => {
      document.getElementsByClassName("main")[0].classList.add("main--locked");
    };
  }, [showSideNav]);

  return (
    <Router>
    <div className="app">
      <div>
        <div className="main main--no-sidebar-scroll">
          {isMobile && (<HeaderMobile onClick={toggleSideNav} showSideNav={showSideNav}  />)}
          {isMobile && (<div className="clickoutsidebondary" ref={sidenavRef}><SideNavOnDrawer isMobile={isMobile} toggleSideNav={toggleSideNav} /></div>)}
          <div className="main__body">
              {/*<SideBar />*/}
              {!isMobile && (<SideNav isMobile={isMobile} />)}
              <Switch>
                {routes.map((route, index) => (
                  // You can render a <Route> in as many places
                  // as you want in your app. It will render along
                  // with any other <Route>s that also match the URL.
                  // So, a sidebar or breadcrumbs or anything else
                  // that requires you to render multiple things
                  // in multiple places at the same URL is nothing
                  // more than multiple <Route>s.
                  <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    children={<route.sidebar />}
                    onUpdate={()=>onChangeRouteHideSideNav}
                  />
                ))}
              </Switch>

              <Switch>
                {routes.map((route, index) => (
                  // Render more <Route>s with the same paths as
                  // above, but different components this time.
                  <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    children={<route.main />}
                  />
                ))}
              </Switch>
          </div>
        </div>
      </div>
    </div>
    </Router>
  );
}

export default App;
