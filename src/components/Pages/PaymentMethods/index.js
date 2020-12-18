import React, { useState, useEffect } from 'react';
import { paymentmethods } from '../../../data/mockData';

// RestoPizza Icons set
import Icon from '../../Icon';

// SVG Icons
import IconDin from '../../../assets/images/icons/pay-chash.svg';

import { toChunkArray } from '../../../utils/transformArray.js';

//
// React Bootstrap
//
//import Container from 'react-bootstrap/Container';
//import Row from 'react-bootstrap/Row';
//import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormCheck from 'react-bootstrap/FormCheck';

//
// Component styles
//
import './styles.scss';

//import axios from 'axios';

const PaymentMethodsPage = () => {

    let [checked, setChecked] = useState(true);

    const [payments, setPayments] = useState({
        paymentMethods: [],
        recommendations: [],
        isLoading: true
    });

    const handleChecked = (event) => {
        setChecked(!event.target.checked);
        console.log("checked: ", event.target.checked);
    };

    const isChecked = (value) => {
        setChecked(!value);
        console.log("checked: ", value);
    };

    const getPaymentMethods = async (items) => {

        const response = new Promise((resolve, reject) => {
            try {
                setTimeout(() => {
                    resolve(items);
                }, 1000)
            } catch (e) {
                reject(e);
            }
        });

        const request = await response.then(result => {
            console.log(result)
            return result;
        }).catch(e => console.log(e));

        return request;
    };

    useEffect(() => {

        getPaymentMethods(paymentmethods).then(res => {
            setPayments({
                paymentMethods: res[0],
                recommendations: res[0].recommendations,
                isLoading: false
            });

        });

    }, []);

    const { paymentMethods, recommendations } = payments;

    //console.log(recommendations);


    // helper function to split array in chuncks
    // https://stackoverflow.com/a/50110834/1152876
    // const toChunkArray = (myArray, chunkSize) => {
    //     const results = myArray.map((e,i) => {
    //         return i % chunkSize === 0 ? myArray.slice(i, i + chunkSize) : null; 
    //     }).filter(e => { return e; });
    //     return results;
    // }

    let recommendedMethodsGroups = toChunkArray(recommendations, 3); //toChunkArray(recommendations, 3);
    console.log(recommendedMethodsGroups);

    const { isLoading } = payments;

    const loadingItems = toChunkArray([0,1,2,3,4], 3); // Fake chuncked loadingItems array

    if(isLoading)
    return (
        <>
            <Card border={"white"} style={{ width: '100%' }} className="shadow-xs">
                <Card.Body>
                    <Card.Title as="h6" className="recommendation-payment-methods-card__title">
                        <Icon color={"#FC0E36"} size={20} icon={"credit-card-blank"} className="recommendation-payment-methods-card__flash" />
                        Tenha diversas opções de pagamento para vender mais
                    </Card.Title>
                    <Card.Text as="div" className="mb-3">
                        <div className="text-md-loading-placeholder placeholder--loading" style={{width: "50%"}}></div>
                    </Card.Text>
                    <div className="payment-methods-group">
                        <Form className="payment-methods-form" autoComplete="off">
                            <div className="payment-methods-groups__body">
                                {  
                                    loadingItems.map((groups, index) =>
                                    <div className="recommendation-group" key={index.toString()}>

                                        {groups && groups.map((item, index) => {
                                            return (
                                                <div className="payment-method-group mb-3 text-md-loading-placeholder placeholder--loading" style={{width: "302px"}} key={index}></div>
                                            )
                                        })}
                                    </div>
                                )}
                            </div>
                        </Form>
                    </div>
                </Card.Body>
            </Card>

        </>
    )

    return (
        <>
            <Card border={"white"} style={{ width: '100%' }} className="shadow-xs">
                <Card.Body>
                    <Card.Title as="h6" className="recommendation-payment-methods-card__title">
                        <Icon color={"#FC0E36"} size={20} icon={"credit-card-blank"} className="recommendation-payment-methods-card__flash" />
                        Tenha diversas opções de pagamento para vender mais
                    </Card.Title>
                    <Card.Text as="div" className="mb-3">
                        Estas formas de pagamento são geralmente utilizadas nas lojas Meu Rancho:
                    </Card.Text>
                    <div className="payment-methods-group">
                        <Form className="payment-methods-form" autoComplete="off">
                            <div className="payment-methods-groups__body">
                                {recommendedMethodsGroups && recommendedMethodsGroups.map((recommendations, index) =>
                                    <div className="recommendation-group" key={index.toString()}>

                                        {recommendations && recommendations.map((paymethod, index, array) => {

                                            let checkboxID = "recommendations-" + paymethod.option.value.toLowerCase();
                                            let name = "recommendations-" + paymethod.option.value.toLowerCase();
                                            let isActive = paymethod.active;
                                            let disabledClass = isActive ? " payment-methods-group__checkbox-field--disabled" : "";

                                            return (
                                                <FormCheck key={paymethod.option.key.toLowerCase()} bsPrefix="payment-method-group" className={"mb-3" + disabledClass}>
                                                    <Form.Check type={"checkbox"} id={"recommended-paymethod-" + paymethod.option.value} className={"custom-control custom-checkbox"}>
                                                        <Form.Check.Input
                                                            id={checkboxID}
                                                            key={paymethod.option.value.toLowerCase()}
                                                            className={"custom-control-input"}
                                                            defaultChecked={isActive}
                                                            //checked={checked}
                                                            //onClick={() => isChecked(true)}
                                                            onChange={(event)=> handleChecked(event)}
                                                            {...{type: 'checkbox', name, disabled: isActive }}
                                                        />
                                                        <Form.Check.Label htmlFor={checkboxID} className={"custom-control-label has-image text-capitalize"}>
                                                            <img src={IconDin} alt={paymethod.option.key.toLowerCase()} className="payment-methods-group__card-image" />
                                                            {paymethod.option.key.toLowerCase()}
                                                        </Form.Check.Label>
                                                    </Form.Check>
                                                </FormCheck>
                                            )

                                        })}
                                    </div>
                                )}
                            </div>
                        </Form>
                    </div>
                    <div className="d-flex justify-content-end align-items-center mt-3">
                        <Button size="sm" variant="soft-primary">Aceitar recomendação</Button>
                    </div>
                </Card.Body>
            </Card>

        </>
    );

}

export default PaymentMethodsPage;
