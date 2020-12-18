import React, { useState, useEffect } from 'react';
//import axios from 'axios';
import api from '../../../services/api';

import { 
    tsReadableDate
} from '../../../utils/datetimeTransform';

// RestoPizza Icons set
import Icon from '../../Icon';

//
// React Bootstrap
//
//import Container from 'react-bootstrap/Container';
//import Row from 'react-bootstrap/Row';
//import Col from 'react-bootstrap/Col';
//import Card from 'react-bootstrap/Card';
//import Button from 'react-bootstrap/Button';
//import Form from 'react-bootstrap/Form';
//import FormCheck from 'react-bootstrap/FormCheck';
//import Table from 'react-bootstrap/Table';
import Dropdown from 'react-bootstrap/Dropdown';

//
// Component styles
//
import './styles.scss';

//import axios from 'axios';

const ReviewsPage = () => {

    let [showsearch, setShowSearch] = useState(false);

    const handleShowSearch = (value) => {
        setShowSearch(!value);
    };

    const [reviews, setReviews] = useState({
        evaluations: [],
        page: 1,
        totalPages: null,
        loading: true
    });

    const getReviews = async () => {
        let reqParams = {
            restaurantUuid: "442ea04f-571b-4af6-8666-ea62bb63c1d8",
            page: 1,
            pageSize: 30,
            visible: true
        }

        let params = {
            filterJson: { toJSON: () => reqParams },
        }
        try {
            const response = await api.get(
                'https://wsloja.ifood.com.br/ifood-ws-v3/restaurant/evaluations/list',
                { headers: { 'access_key': '69f181d5-0046-4221-b7b2-deef62bd60d5', 'secret_key': '9ef4fb4f-7a1d-4e0d-a9b1-9b82873297d8' }, params }
            );
            setReviews({
                evaluations: response.data.data.evaluations,
                page: 1,
                totalPages: response.data.data.evaluations.length,
                loading: false
            });
        } catch (error) {
            alert("Ocorreu um erro ao buscar os items");
        }
    }

    useEffect(() => {
          getReviews();
    }, []);

    const { evaluations } = reviews;
    
    console.log(evaluations);

    const { loading } = reviews;

    if (loading)
        return (
            <>
                <div className="d-flex justfy-content-center align-items-center carregando">Carregando...</div>
            </>
        )

    return (
        <>
        <div className="row">
            <div className="col-lg-4">
                <div className="card card-stats">
                {/* Card body */}
                    <div className="card-body">
                        <div className="row">
                            <div className="col">
                                <h6 className="text-muted mb-1">Novas avaliações</h6>
                                <span className="h5 font-weight-bold mb-0">46</span>
                            </div>
                            <div className="col-auto">
                                <div className="icon bg-soft-success text-white rounded-circle icon-shape">
                                    <Icon color={"#36B37E"} size={22} icon={"social-group-people"} className="text-success" />
                                </div>
                            </div>
                        </div>
                        <div className="d-flex align-items-center mt-3 mb-0 text-sm">
                            <span className="badge badge-soft-success mr-2">
                                <Icon color={"#36B37E"} size={15} icon={"arrow-up"} className="text-success" />
                                25%
                            </span> 
                            <span className="text-nowrap">Na última semana</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="card card-stats">
                    {/* Card body */}
                    <div className="card-body">
                        <div className="row">
                            <div className="col">
                                <h6 className="text-muted mb-1">Origens ativas</h6>
                                <span className="h5 font-weight-bold mb-0">3</span>
                            </div>
                            <div className="col-auto">
                                <div className="icon bg-soft-warning text-white rounded-circle icon-shape">
                                    <Icon color={"#FFAB00"} size={15} icon={"chat-dots"} className="text-warning" />
                                </div>
                            </div>
                        </div>
                        <div className="d-flex align-items-center mt-3 mb-0 text-sm">
                            <span className="badge badge-soft-warning mr-2">redes</span>
                            <span className="text-nowrap">Produtos, Google, Tripadvisor</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="card card-stats">
                    {/* Card body */}
                    <div className="card-body">
                        <div className="row">
                            <div className="col">
                                <h6 className="text-muted mb-1">Total de avaliações</h6>
                                <span className="h5 font-weight-bold mb-0">789</span>
                            </div>
                            <div className="col-auto">
                                <div className="icon bg-soft-success text-white rounded-circle icon-shape">
                                    <Icon color={"#36B37E"} size={22} icon={"tiles-layout"} className="text-success" />
                                </div>
                            </div>
                        </div>
                        <div className="d-flex align-items-center mt-3 mb-0 text-sm">
                            <span className="h5 font-weight-bold mb-0">4.8</span>
                            <span className="badge badge-soft-secondary mr-2">
                            <Icon color={"#FFAB00"} size={15} icon={"star-full"} className="text-warning d-inline-flex mr-1" />
                            <Icon color={"#FFAB00"} size={15} icon={"star-full"} className="text-warning d-inline-flex mr-1" />
                            <Icon color={"#FFAB00"} size={15} icon={"star-full"} className="text-warning d-inline-flex mr-1" />
                            <Icon color={"#FFAB00"} size={15} icon={"star-full"} className="text-warning d-inline-flex mr-1" />
                            <Icon color={"#FFAB00"} size={15} icon={"star-full"} className="text-warning d-inline-flex mr-1" />
                            </span>
                            <span className="text-nowrap">Últimos 90 dias</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-12">
                <h6>{reviews.totalPages} avaliações encontradas</h6>
                <p className="text-sm">As avaliações serão automaticamente exibidas no site/aplicativo após 7 dias da data de criação.</p>
            </div>
        </div>

        {/* Reviews card */}
        <div className="card">
            <div className="card-header actions-toolbar border-0">

                <div className={!showsearch ? "actions-search" : "actions-search show"} id="actions-search">
                    <div className="input-group input-group-merge input-group-flush">
                        <div className="input-group-prepend">
                            <span className="input-group-text bg-transparent">
                                <Icon color={"#8492a6"} size={15} icon={"search"} className="fas" />
                            </span>
                        </div>
                        <input type="text" className="form-control form-control-flush" placeholder="Digite e tecle enter ..." />
                        <div className="input-group-append">
                            <div className="input-group-text bg-transparent">
                                <div className="action-item" onClick={()=> handleShowSearch(showsearch)} data-action="search-close" data-target="#actions-search">
                                    <Icon color={"#8492a6"} size={22} icon={"x"} className="fas" />
                                </div>    
                            </div> 
                        </div>
                    </div>
                </div>

                <div className="row justify-content-between align-items-center">
                    <div className="col">
                        <h6 className="d-inline-block mb-0">Recentes</h6>
                    </div>
                    <div className="col text-right">
                        <div className="actions">
                            <div className="action-item mr-3" onClick={()=> handleShowSearch(showsearch)} data-action="search-open" data-target="#actions-search">
                                <Icon color={"#8492a6"} size={15} icon={"search"} className="fas" />
                            </div>

                            <Dropdown className="mr-3">
                                <Dropdown.Toggle as={"a"} bsPrefix="action-item" role="button" id="reviews-filter-dropdown">
                                    <Icon color={"#8492a6"} size={15} icon={"filter-full"} className="fas" />
                                </Dropdown.Toggle>

                                <Dropdown.Menu className="dropdown-menu-right">
                                    <Dropdown.Item eventKey="filterNewest"><i className="far fa-sort-amount-down" />Recentes</Dropdown.Item>
                                    <Dropdown.Item eventKey="filterInverse"><i className="far fa-sort-alpha-down" />De A-Z</Dropdown.Item>
                                    <Dropdown.Item eventKey="filterAlphabetically"><i className="far fa-sort-alpha-up" />De Z-A</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>

                            <Dropdown data-toggle="dropdown">
                                <Dropdown.Toggle as={"a"} bsPrefix="action-item" role="button" id="dropdown-custom-components">
                                    <Icon color={"#8492a6"} size={15} icon={"menu-horizontal-dots"} className="fas" />
                                </Dropdown.Toggle>

                                <Dropdown.Menu className="dropdown-menu-right">
                                    <Dropdown.Item eventKey="1">Atualizar</Dropdown.Item>
                                    <Dropdown.Item eventKey="2">Arquivadas</Dropdown.Item>
                                    <Dropdown.Item eventKey="3" active>Ajustes</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </div>
                </div>
            </div>

            {/* Table */}
            <div className="table-responsive">
                <table className="table align-items-center">
                    <thead>
                        <tr>
                        <th scope="col" className="sort" data-sort="name">Avaliação</th>
                        <th scope="col" className="sort" data-sort="clientes">Clientes</th>
                        <th scope="col" className="sort" data-sort="data-avaliacao">Data</th>
                        <th scope="col" className="sort" data-sort="comment">Comentário</th>
                        <th scope="col" className="sort" data-sort="status">Status</th>
                        <th scope="col" />
                        </tr>
                    </thead>
                    <tbody className="list">
                    {evaluations && evaluations.map((review, index) => {

                        let reviewLabel = (review.status === 'ACE' || !review.status ) ? 'Publicadas' : 'Aguardando resposta';

                        let ratingInfo = review.evaluationItens;
                        let ratingScore = Number;
                        
                        ratingInfo
                        .filter(item => item.evaluationCriteria.type === '1-5')
                        .map((rating, index) => {
                            let ratingValue = rating.grade;
                            ratingScore = ratingValue;
                            //console.log(ratingValue)
                            return ratingValue;
                        })

                        return (
                            <React.Fragment key={index}>
                                <tr>
                                    <th scope="row">
                                        <div className="d-flex justify-content-start align-items-center">
                                            <a href="/" className="name mb-0 h6 text-sm">{ratingScore} <Icon color={"#fcbb00"} size={15} icon={"star-full"} className="fas" /></a>
                                        </div>
                                    </th>
                                    <td className="text-capitalize">{ review.customer.name.toLowerCase() }</td>
                                    <td className="data-avaliacao">{ tsReadableDate(review.commentDate, false) }</td>
                                    <td className="comment">{ review.comment ? review.comment : "-"}</td>
                                    <td>
                                        <span className="badge badge-dot mr-4">
                                            <i className={reviewLabel === "Publicadas" ? "bg-success" : "bg-warning"} />
                                            <span className="status">{ reviewLabel }</span>
                                        </span>
                                    </td>
                                    <td className="text-right">
                                        <a href="/" className="action-item text-brand" role="button">
                                            detalhes
                                        </a>
                                    </td>
                                </tr>
                            </React.Fragment>
                        );
                    })}
                    </tbody>
                </table>
            </div>
        </div>
        </>
    );

}

export default ReviewsPage;
