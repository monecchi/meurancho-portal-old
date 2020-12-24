import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect, useLocation } from "react-router-dom";

import App from './App';

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
import PageLogin from './Login';
//import PrivateRoute from "./PrivateRoute";
import CardapiosPage from './components/Pages/Cardapios';
import PageOrders from './components/Pages/Orders';
import ReviewsPage from './components/Pages/Reviews';
import PaymentMethodsPage from './components/Pages/PaymentMethods';

import { fakeAuth } from './Login';

// Preloader
//import Preloader from './components/Preloader';

// Main Styles
import "./App.scss";

export const LoginPage = () => {

  return (
    <>
      <PageLogin />
    </>
  )
}

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
    path: "/login",
    exact: true,
    sidebar: () => <></>,
    main: () => fakeAuth.isAuthenticated ? (<MainPage title={''} children={DashHome()} />) : (<LoginPage />)
  },
  {
    path: "/home",
    exact: true,
    sidebar: () => <></>,
    main: () => <MainPage title={''} children={DashHome()} />
  },
  {
    path: "/pedidos",
    sidebar: () => <></>,
    main: () => <MainPage title="" children={PageOrders()} />
  },
  {
    path: "/cardapio",
    sidebar: () => <></>,
    main: () => <MainPage title="Cardápio" subtitle="Gerencie seus Cardápio no site." children={DashCardapios()} />
  },
  {
    path: "/avaliacoes",
    exact: true,
    sidebar: () => <></>, // an additional sidebar can be rendered here, such as on an email app view
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
    sidebar: () => <></>,
    main: () => <Redirect to="/home" />
  }
];

export const DashOrders = () => {
  return (
    <div>
      <SideNav />
      <div className="d-flex w-100 h-100 justify-content-center align-items-center">
        <h1>Pagina Pedidos</h1>
      </div>
    </div>
  )

}

export const DashReviews = () => {
  return (
    <div>
      <SideNav />
      <div className="d-flex w-100 h-100 justify-content-center align-items-center">
        <h1>Pagina Avaliações</h1>
      </div>
    </div>
  )

}

const AppRouter = ({ children, ...rest }) => {
  const location = useLocation()
  return (
    <Router>

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
          />
        ))}
      </Switch>

      <Switch>
        {routes.map((route, index) => (
          // Render more <Route>s with the same paths as
          // above, but different components this time.
          <>
            {fakeAuth.isAuthenticated === true ?
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                children={<route.main />}
              />
              :
              <>
                <Route>
                  <Redirect to={{ pathname: "/login", state: { from: location } }} />
                </Route>
              </>
            }
          </>
        ))}
      </Switch>

      {children}
    </Router>
  )
}

export default AppRouter;
