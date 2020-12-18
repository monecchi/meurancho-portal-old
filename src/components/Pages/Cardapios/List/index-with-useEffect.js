import React, { useState, useEffect, useCallback } from 'react';
import ProductsDataService from '../../../../services/apiService';

import Icon from '../../../Icon';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';

// Create Menu Item Modal
import { CreateMenuItemModal } from './Create';
import { DiscardChangesModal } from './Create';

import { numberFormat } from '../../../../utils/formatCurrency';

const CardapioItemsUseEffect = (props) => {

  const [modalCreateShow, setModalCreateShow] = useState(false);
  const [modalDiscardChanges, setModalDiscardChanges] = useState(false);

  const [categories, setCategories] = useState({
    menuCategories: [],
    isLoading: true
  });


  //Using axios here, no need to import axios, it is set on /services/api.js, gettting data from meurancho-api project running nodejs and mongodb 
  const getCategories = async () => {
    const response = await ProductsDataService.getCategories(); // '/api/category/list'
    console.log(response);
    setCategories({
      menuCategories: response.data.categories,
      isLoading: false
    })
  }

  // Quick Update Product
  
  const handleProductStatus = ((id, itemData) => {
    ProductsDataService.update(`/api/product/update/${id}`, itemData);
  }, []);

  // (show) CreateMenuItemModal modal & (hide) DiscardChangesModal modal 
  const onKeep = () => {
    setModalCreateShow(true);
    setTimeout(() => {
      setModalDiscardChanges(false);
    }, 100);
  };

  // Discard (hide) CreateMenuItemModal & DiscardChangesModal modals 
  const onDiscard = () => {
    setModalCreateShow(false);
    setTimeout(() => {
      setModalDiscardChanges(false);
    }, 100);
  };

  useEffect(() => {
    getCategories();
  }, []);

  const { menuCategories } = categories;

  //console.log(menuCategories);

  const { isLoading } = categories;

  if (isLoading)
    return (
      <>
        <div className="d-flex justfy-content-center align-items-center carregando">Carregando...</div>
      </>
    )

  return (
    <>
      <div className="cardapio_contents mt-3">
        <form autoComplete="off" className="category-form">

          {menuCategories && menuCategories.map((category, index) => {
            // Define products which belong to each category
            const menuItems = category.products;
            const currentCategory = category._id;

            return (
              <React.Fragment key={index}>
                <div className="category__group">

                  <div id={currentCategory} className="card card__category">
                    <div className="card-header">
                      <div className="d-flex justify-content-between align-items-center">
                        <div>
                          <h6 className="menu-category__name mb-0">
                            {category.name}
                            {!menuItems.length && (
                              <span className="badge badge-light badge-sm font-weight-500 ml-3">Categoria vazia</span>
                            )}
                            <span className="ml-2">{currentCategory}</span>
                          </h6>
                        </div>
                        <div className="text-right">
                          <div className="actions">
                            <button className="action-item" style={{ marginRight: "1rem" }}><Icon icon="chevron-down" size={14} color="#fc0e36" /></button>
                            <Dropdown data-toggle="dropdown">
                              <Dropdown.Toggle as={"div"} bsPrefix="action-item" role="button" id="dropdown-category-actions">
                                <Icon color={"#8492a6"} size={16} icon={"menu-vertical-dots"} className="fas" />
                              </Dropdown.Toggle>

                              <Dropdown.Menu bsPrefix="dropdown-menu dropdown-menu-left">
                                <Dropdown.Item eventKey="update">Editar</Dropdown.Item>
                                <div className="dropdown-divider"></div>
                                <Dropdown.Item eventKey="delete">Excluir</Dropdown.Item>
                                <div className="dropdown-divider"></div>
                                <Dropdown.Item eventKey="duplicate" active>Duplicar</Dropdown.Item>
                              </Dropdown.Menu>
                            </Dropdown>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Menu Items */}
                    {menuItems && menuItems.map((menuItem, index) => {

                      const currentItem = menuItem._id + '_' + index;
                      const activeStatusClass = menuItem.active ? 'ativado' : 'pausado';

                      return (
                        <React.Fragment key={currentItem.toString()}>
                          <div className="list-group list-group-flush">
                            <div className={"list-group-item list-group-item-action cursor-pointer " + activeStatusClass}>
                              <div className="product__menu-item d-flex align-items-center">
                                <div>
                                  <span className="product-image category-item-image bg-primary text-white rounded">
                                    <img src={menuItem.image} alt={menuItem.title} className="category-item-image__image" />
                                  </span>
                                </div>

                                {/* Menu Item Details & Actions */}
                                <div className="d-flex w-100 align-items-center justify-content-between align-items-center">
                                  <div className="flex-fill ml-3">
                                    <div className="h6 mb-0">
                                      {menuItem.title}
                                    </div>
                                    <p className="text-sm lh-140 mb-0 font-weight-300 truncate_text user-select-none" style={{ WebkitLineClamp: 2, display: '-webkit-box' }}>
                                      {menuItem.description}
                                    </p>
                                  </div>

                                  <div className="menu-item__price mx-3 d-none d-lg-block">
                                    <input
                                      type="text"
                                      className="form-control"
                                      placeholder={numberFormat(menuItem.unitPrice | menuItem.price)}
                                      style={{ maxWidth: 143 }}
                                    />
                                  </div>


                                  <ButtonGroup size="sm" toggle={false} aria-label="product status">
                                    {menuItem.active ? (
                                      <React.Fragment>
                                        <Button variant={'light'} value={`{"id": ${menuItem._id}, "active": false}`} onClick={() => handleProductStatus(menuItem._id, { "active": false })}>
                                          <span className="btn-inner--text">Pausar</span>
                                        </Button>
                                        <Button variant={'danger'}>
                                          <span className="btn-inner--text">Ativado</span>
                                        </Button>
                                      </React.Fragment>
                                    ) : (
                                        <React.Fragment>
                                          <Button variant={'danger'}>
                                            <span className="btn-inner--text">Pausado</span>
                                          </Button>
                                          <Button variant={'light'} value={`{"id": ${menuItem._id}, "active": true}`} onClick={() => handleProductStatus(menuItem._id, { "active": true })}>
                                            <span className="btn-inner--text">Ativar</span>
                                          </Button>
                                        </React.Fragment>
                                      )}
                                  </ButtonGroup>


                                  {/* <ProductQuickForm singleproduct={menuItem} /> */}

                                  {/* Menu Item Actions */}
                                  <div className="text-right">
                                    <div className="actions d-inline-flex ml-3">
                                      <button className="action-item" style={{ marginRight: "1rem" }}><Icon icon="chevron-down" size={14} color="#fc0e36" /></button>
                                      <Dropdown data-toggle="dropdown">
                                        <Dropdown.Toggle as={"div"} bsPrefix="action-item" role="button" id="dropdown-category-actions">
                                          <Icon color={"#3c4858"} size={16} icon={"menu-vertical-dots"} className="fas" />
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu bsPrefix="dropdown-menu dropdown-menu-left">
                                          <Dropdown.Item eventKey="1">Editar Item</Dropdown.Item>
                                          <div className="dropdown-divider"></div>
                                          <Dropdown.Item eventKey="2">Excluir Item</Dropdown.Item>
                                          <div className="dropdown-divider"></div>
                                          <Dropdown.Item eventKey="3" active>Duplicar Item</Dropdown.Item>
                                        </Dropdown.Menu>
                                      </Dropdown>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </React.Fragment>
                      );
                    })}

                    <div className="card-footer py-4 text-left">
                      <Button variant="soft-primary btn-icon" className="btn-md" onClick={() => setModalCreateShow(true)}>
                        <span className="btn-inner--icon">
                          <Icon icon="add-plus" size={14} />
                        </span>
                        <span className="btn-inner--text">Adicionar Item</span>
                      </Button>
                    </div>
                  </div>
                </div>
              </React.Fragment>
            );
          })}
        </form>
      </div>
      <CreateMenuItemModal show={modalCreateShow} onHide={() => setModalCreateShow(false)} onExit={() => setModalDiscardChanges(true)} onSave={() => null} />
      <DiscardChangesModal show={modalDiscardChanges} onKeep={() => onKeep()} onDiscard={() => onDiscard()} />
    </>
  );

}

export default CardapioItemsUseEffect;
