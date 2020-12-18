import React, { useCallback } from 'react';
//import { Link } from 'react-router-dom';
import { mutate as mutateGlobal } from 'swr';
import { useFetchMutate } from '../../../../hooks/useFetch';
import api from '../../../../services/api';

import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

const ProductQuickForm = (props) => {

  const { singleproduct } = props;

  //const id = productID;

  const { data, mutate } = useFetchMutate(`/api/product/item/${singleproduct._id}`);

  const handleProductStatus = useCallback((id, status) => {
    api.put(`/api/product/update/${id}`, { active: status });

    const updatedProduct = () => {

        const { product } = data;

        if (product._id === id) {
          return { ...product, active: status }
        }
        return product;
    }

    mutate(updatedProduct, false)
    mutateGlobal(`/api/product/item/${id}`, { id, active: status })
  }, [data, mutate]);

  if (!data) {
    return <p>Carregando...</p>
  }

  return (
    <React.Fragment>
          <ButtonGroup size="sm" toggle={true} aria-label="product status" key={singleproduct._id}>
            {singleproduct.active ? (
              <React.Fragment>
                <Button id={singleproduct._id} variant={'light'} onClick={() => handleProductStatus(singleproduct._id, false)}>
                  <span className="btn-inner--text">Pausar agora</span>
                </Button>
                <Button variant={'danger'} onClick={() => null}>
                  <span className="btn-inner--text">Ativado</span>
                </Button>
              </React.Fragment>
            ) : (
                <React.Fragment>
                  <Button variant={'danger'} onClick={() => null}>
                    <span className="btn-inner--text">Pausado agora</span>
                  </Button>
                  <Button id={singleproduct._id} variant={'light'} onClick={() => handleProductStatus(singleproduct._id, true)}>
                    <span className="btn-inner--text">Ativar</span>
                  </Button>
                </React.Fragment>
              )}
          </ButtonGroup>
    </React.Fragment>
  );
}

export default ProductQuickForm;

/**
 * 
 * @param {any} productID
 */
export const QuickProductUpdate = (productID, ...props) => {
  return (
    <React.Fragment>
    </React.Fragment>
  )
}

//export default QuickProductUpdate;
