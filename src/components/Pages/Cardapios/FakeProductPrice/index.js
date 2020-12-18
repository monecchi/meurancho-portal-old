import React from 'react';
import PropTypes from 'prop-types';

import { numberFormatPrice } from '../../../../utils/formatCurrency';

// styles
import './styles.scss';

const FakeItemPrice = ({ price }) => {
    return (
        <div className="category-item-list-item-body__item-price">
            <div className="price-and-discount-fields">
                <div className="category-item-price-fields-fake price-and-discount-fields__value-field">
                    <span>{numberFormatPrice(price)}</span>
                    {/* <span>R$&nbsp;0,00</span> */}
                </div>
            </div>
        </div>
    )
}

FakeItemPrice.propTypes = {
    price: PropTypes.string.isRequired
};

export default FakeItemPrice;
