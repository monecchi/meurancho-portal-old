import React from 'react';
//import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { slugify } from '../../../utils/slugify';
//import Preloader from '../../Preloader';
//import DotsLoading from '../../IconPreloader'


// Custom Toastify Component
//import MNotifier from '../../Notifier';

// MainPage Component Styles
import './styles.scss';

//
// MainPage - Generic page template component
//
const MainPage = (props) => {

    const { title, subtitle, background, content, children } = props;

    return (
        <div id={title && title ? slugify(title) : "main-container"} className="main__container main__container--no-top-bar main__container--no-sidebar-scroll" style={{ backgroundColor: background }}>
            <main id={"micro-frontend-" + slugify(title)}>
                <div className="active-restaurant-provider">
                    <div className={title && slugify(title) + " base-page"}>

                        {title && title && (
                            <div className={title && slugify(title) ? "base-page-header " + slugify(title) + "__header" : "base-page-header default__header"}> 
                                <div className="base-page-header__container">
                                    <h2 className="base-header-title">
                                        <span>{title}</span>
                                    </h2>
                                    <p className="base-header-subtitle header-subtitle__subtitle-v2">
                                        <span>{subtitle}</span>
                                    </p>
                                </div>
                            </div>
                        )}

                        <div className={title && slugify(title) ? "base-page-content " + slugify(title) + "__content" : "base-page-content default__content"}>
                            <div className="base-page-content__container">
                                {content && content}
                                {children}
                            </div>
                        </div>
                    </div>
                </div>
                {/*<MNotifier />*/}
            </main>
        </div>
    );
}

MainPage.propTypes = {
    background: PropTypes.string,
}

MainPage.defaultProps = {
    background: "#ffffff"
}

export default MainPage;
