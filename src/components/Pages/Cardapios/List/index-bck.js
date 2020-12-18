import React, { useState, useCallback } from 'react'; // , useRef
import { useFetchMutate } from '../../../../hooks/useFetch';
//import ProductsDataService from '../../../../services/apiService';
import api from '../../../../services/api';
import { mutate as mutateGlobal } from 'swr';//

import Icon from '../../../Icon';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';

// Create Menu Item Modal
import { CreateMenuItemModal } from './Create';
import { DiscardChangesModal } from './Create';
import CardapioActionBar from '../../../ActionBar/CardapioActionBar';

import { numberFormat } from '../../../../utils/formatCurrency'; // numberFormatPrice, numberFormatDecimal 

//import NumberFormat from 'react-number-format';

//import ProductQuickForm from './QuickUpdateForm';


const initState = {
  productsPrices: [{ name: '' }],
};


const CardapioItems = (props) => {

  const [initialstate, setInitialState] = useState(
    {
      name: "",
      price: "",
      items: []
    }
  )

  const [showbar, setActionBar] = useState(false);

  /**
   * Toggle the isEditing property of an item when the Edit button
   * within ItemCard is clicked.
   * @param index
   * @see: https://github.com/vumbula/vumbula-react/blob/master/chapter%204/Delete-Final/src/components/App.js
   */
  const toggleItemEditing = index => {
    setInitialState({
      items: initialstate.items.map((item, itemIndex) => {
        if (itemIndex === index) {
          return {
            ...item,
            isEditing: !item.isEditing
          }
        }
        return item;
      })
    });
  };

  /**
   * Update the Name and/or Price of an item.
   * @param event
   * @param index
   */
  const handleItemQuickUpdate = (event, index) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    setInitialState({
      items: initialstate.items.map((item, itemIndex) => {
        if (itemIndex === index) {
          return {
            ...item,
            [name]: value
          }
        }
        return item;
      })
    });
  };

  /**
   * 
   * @param {boolean} value 
   */
  const handleDisplayActionBar = (value) => {
    setActionBar(value);
  }

  const [productsPriceState, setProductsPriceState] = useState(initState);

  //const handleChange = (e) => setPriceState({ price: e.target.value });

  // const handlePriceChange = e => {
  //   const {price , value} = e.target
  //   setPriceState( prevState => ({
  //       ...prevState,
  //       [price] : value
  //   }))
  // }

  const handleProductsPriceChange = (idx) => (evt) => {
    const newPrices = productsPriceState.productsPrices.map((productPrice, sidx) => {
      if (idx !== sidx) return productPrice;
      return { ...productPrice, name: evt.target.value };
    });
    
    setProductsPriceState({ productsPrices: newPrices });
    setActionBar(true);
  }

  //const target = useRef(null);

  const { data, mutate } = useFetchMutate('/api/category/list');

  // const productQuickStatus = useCallback((id, status) => {

  //   //ProductsDataService.update(id, { active: status });

  //   api.put(`/api/product/update/${id}`, { active: status });

  //   const updateProduct = data.categories.map((category) => {
  //     const products = category.products;

  //     products && products.map((product) => {
  //       if (product._id === id) {
  //         return { ...product, active: status }
  //       }
  //       return product;
  //     });

  //     return { ...data }
  //   });

  //   mutate(updateProduct, false)
  //   mutateGlobal(`/api/product/update/${id}`, { id, active: status })
  // }, [data, mutate]);

  // const handleStatusChange = async (id, itemData) => {

  //   //const { id } = action;
    
  //   // update the local data immediately, but disable the revalidation
  //   mutate('/api/category/list', { ...data }, false)

  //   //mutate('/api/category/list', data => ({ ...data, categories: [ ...data.categories.products.slice(0, index), index < data.categories.length - 1 && data.categories.slice(index + 1) ] }), false)

    
  //   // send a request to the API to update the source
  //   await api.put(`/api/product/update/${id}`, itemData)
    
  //   // trigger a revalidation (refetch) to make sure our local data is correct
  //   mutate('/api/category/list')
  // }

  const handleQuickUpdate = useCallback((id, productData) => {

    //const { price } = productData;

    const updatedProducts = data.categories.products?.map(product => {
      if (product._id === id) {
        return { ...product, productData }
      }
      return product;
    })

    // update the local data immediately, but disable the revalidation
    mutate(updatedProducts, false)
    mutate('/api/category/list', { ...data.categories.products }, false)

    // send a request to the API to update the source
    api.put(`/api/product/update/${id}`, productData);

    mutateGlobal(`/api/product/item/${id}`, { productData })
  }, [data, mutate]);

  const [modalCreateShow, setModalCreateShow] = useState(false);
  const [modalDiscardChanges, setModalDiscardChanges] = useState(false);

// const [categories, setCategories] = useState({
//     menuCategories: [],
//     isLoading: true
// });


// Using axios here, no need to import axios, it is set on /services/api.js, gettting data from meurancho-api project running nodejs and mongodb 
// const getCategories = async () => {
//     const response = await ProductsDataService.getCategories(); // '/api/category/list'
//     console.log(response);
//     setCategories({
//         menuCategories: response.data.categories,
//         isLoading: false
//     })
// }

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

// useEffect(() => {
//     // const response = getCategories();
//     // response.then(result => {
//     //     //if(!result) console.warn('That was an error trying to get the menu categories');
//     //     //console.log(result);
//     //     setCategories({
//     //         menuCategories: result.data.categories,
//     //         isLoading: false
//     //     })
//     // });
//     getCategories();
// }, []);

//const { menuCategories } = categories;

//console.log(menuCategories);


//const updateProductStatus = (e) => {
//return null;
//}

// const { isLoading } = categories;

// if (isLoading)
//     return (
//         <>
//             <div className="d-flex justfy-content-center align-items-center carregando">Carregando...</div>
//         </>
//     )

if (!data) {
  return <p>Carregando...</p>
}

const { categories } = data;

return (
  <>
    <div className="cardapio_contents mt-3">
      <div className="category-form">

        {categories && categories.map((category, index) => {
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

                                {/* <div className="menu-item__price mx-3 d-none d-lg-block">
                                  <input
                                    type="text"
                                    name="price"
                                    placeholder={numberFormat(menuItem.unitPrice | menuItem.price)}
                                    value={price}
                                    onChange={(e)=>handleChange(e)}
                                    className="form-control"
                                    style={{ maxWidth: 143 }}
                                  />
                                </div> */}

                                {/* <NumberFormat
                                  name="price"
                                  value={price}
                                  isNumericString={true}
                                  allowNegative={false}
                                  thousandSeparator={true}
                                  allowedDecimalSeparators={[',', '.']}
                                  prefix={'R$ '}
                                  placeholder={numberFormat(menuItem.unitPrice | menuItem.price)}
                                  onChange={(e)=>handlePriceChange(e)}
                                  onValueChange={(values) => {
                                  const {formattedValue, value} = values;
                                    console.log('formatted value: ' + formattedValue) // = $2,223
                                    // value ie, 2223
                                    setInitState({ price: value });
                                  }}
                                  className={"form-control mr-3"}
                                  style={{ maxWidth: 143 }}
                                /> */}

                                {productsPriceState.productsPrices.map((produto, idx) => (
                                  <div className="preco mr-4" key={idx+produto}>
                                    <input
                                      type="text"
                                      name="price"
                                      placeholder={numberFormat(menuItem.unitPrice | menuItem.price)}
                                      value={produto.price}
                                      onChange={()=>{ handleProductsPriceChange(idx) }}
                                      className={"form-control form-control-no-shadow"}
                                      style={{ maxWidth: 143 }}
                                    />
                                  </div>
                                ))}


                                <ButtonGroup role="group" size="sm" toggle={true} aria-label="product status">
                                  {menuItem.active ? (
                                    <React.Fragment>
                                      <Button variant={'light'} value={`{"id": ${menuItem._id}, "active": false}`} onClick={()=> { handleQuickUpdate(menuItem._id, {"active": false}); return false; }}>
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
                                        <Button variant={'light'} value={`{"id": ${menuItem._id}, "active": true}`} onClick={()=> { handleQuickUpdate(menuItem._id, {"active": true}); return false; }}>
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
      </div>
    </div>
    <CreateMenuItemModal show={modalCreateShow} onHide={() => setModalCreateShow(false)} onExit={() => setModalDiscardChanges(true)} onSave={() => null} />
    <DiscardChangesModal show={modalDiscardChanges} onKeep={() => onKeep()} onDiscard={() => onDiscard()} />
    <CardapioActionBar showbar={showbar} />
  </>
);

}

export default CardapioItems;
