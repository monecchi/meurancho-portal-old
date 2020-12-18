import React, { memo } from 'react';

import './styles.scss';

const RestaurantStatus = ({ restaurant }) => {
    const { isOpen, statusLabel, statusReason } = restaurant;

    //let isError = false;

    const addErrorClassNames = (isError) => {
        let additionalClass = "";
        if(isError)
            additionalClass = "restaurant-information-container__restaurant-status--order-manager"; // add those classes to element with id #restaurant-info-container on error
        return additionalClass;
    }

    //const isError = ( error && error ) ? ("ERROR") : ("OK");'

    const isOpenStatus = ( isOpen && isOpen !== false ) ? ("OK") : ("DEFAULT");

    return (
        <div className={"restaurant-information restaurant-information--" + isOpenStatus + " restaurant-information--styled tether-target"}>
            <div className={"restaurant-information-container restaurant-information-container--" + isOpenStatus}>
                <div className={"restaurant-information-container__restaurant-name restaurant-information-container__restaurant-name--" + isOpenStatus}>
                    <span>Pizzaria Meu Rancho</span>
                </div>
                <div className="restaurant-information-container__content">
                    <div id="restaurant-info-container" className={"restaurant-information-container__restaurant-status restaurant-information-container__restaurant-status--" + isOpenStatus + addErrorClassNames()}>
                        <i className={"restaurant-information-container__icon restaurant-information-container__icon--" + isOpenStatus} />
                        <div className="restaurant-information-container__restaurant-status-info">
                            <span className={"restaurant-information-container__restaurant-status-title restaurant-information-container__restaurant-status-title--" + isOpenStatus}>{statusLabel}</span>
                            <span className={"restaurant-information-container__restaurant-status-subtitle restaurant-information-container__restaurant-status-subtitle--" + isOpenStatus}>{statusReason}</span>
                        </div>
                    </div>
                </div>
                <div className={"restaurant-information-container__border restaurant-information-container__border--" + isOpenStatus } />
            </div>
        </div>
    )
}

export default memo(RestaurantStatus);
