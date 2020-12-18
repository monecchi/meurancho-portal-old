import React from 'react';
import { Link } from 'react-router-dom';

import MainPage from '../MainPage';

const PageOrders = () => {

    return (
        <MainPage title="Pedidos">
            <main id="micro-frontend-home">
                <div className="active-restaurant-provider">
                    <div className="d-flex flex-column w-100 h-100 justify-content-center align-items-center">
                        <h1>Página Pedidos</h1>
                        <br></br>
                        <h5>Testando rotas dentro de componentes em páginas</h5>
                        <p className="d-block text-center" style={{ maxWidth: "700px" }}> O Link pra a rota <code>/avaliacoes</code> abaixo, quando fora da Sidenav, redireciona para outro componente, como configurado nas rotas do App.</p>
                        <br></br>
                        <Link className="d-block" to="/avaliacoes">Voltar pro início</Link>
                    </div>
                </div>
            </main>
        </MainPage>
    );

};

export default PageOrders;
