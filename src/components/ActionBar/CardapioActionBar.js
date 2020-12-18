import React, { useState, createRef, } from 'react';
import ActionBar from './';

import Button from 'react-bootstrap/Button';

/**
 * Action Bar Component -  A great replacement for general alerts
 * @param {*} props 
 */
const ProductUpdateActionBar = (props) => {

    const { showbar, message } = props;

    const wrapper = createRef();
  
    const [show, setShow] = useState(showbar);
  
    return (
      <ActionBar onClose={() => setShow(false)} show={show} delay={3000} autohide={false} animation={false} className="action-bar category-prices-changed-action-bar" ref={wrapper} style={{transitionDuration: '600ms'}}>
          <div className="action-bar-container action-bar__container">
            <div className="category-prices-changed-action-bar__container">
              <span className="text-dark">{!message ? "Você alterou 1 preço. Deseja salvar todas as alterações?" : message}</span>
              <div className="category-prices-changed-action-bar__actions">
                <Button variant={"outline-brand"} className="category-prices-changed-action-bar__discard-action" onClick={() => setShow(false)}>
                  <span>Descartar</span>
                </Button>
                <Button variant={"danger"} className="category-prices-changed-action-bar__save-action">
                  <span>Salvar</span>
                </Button>
              </div>
            </div>
          </div>
      </ActionBar>
    );
  }

export default ProductUpdateActionBar;
