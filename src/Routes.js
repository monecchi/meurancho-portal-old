import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";

import App from './App';
import SideNav from './components/SideNav';
//import MainPage from './components/Pages/MainPage';
//import HomeDashboard from './components/Pages/Home';

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

const AppRouter = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact={true} component={App} />
                <Route path="/pedidos" component={DashOrders} />
                <Route path="/pedidos/:id" component={App} />
                <Route path="/cardapio" component={App} />
                <Route path="/avaliacoes" component={DashReviews} />
                <Route path="/avaliacoes/:id" component={App} />
                <Route path="/funcionamento" component={App} />
                <Route path="/servicos" component={App} />
                <Route path="/meios-de-pagamento" component={App} />
                <Route path="/ofertas" component={App} />
                <Route path="/servicos" component={App} />
                <Route path="/perfil" component={App} />
                <Route path="*">
                    <Redirect to="/" />
                </Route>
            </Switch>
        </Router>
    )
}

export default AppRouter;
