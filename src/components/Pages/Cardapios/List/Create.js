import React, { useState, useCallback } from "react";
import ProductsDataService from '../../../../services/apiService';
import api from '../../../../services/api';
//import axios from 'axios';
import useSWR from 'swr';
import { useForm, Controller } from "react-hook-form";
import { RHFInput } from "react-hook-form-input";

// React Select // 
import Select from 'react-dropdown-select';

// Bootstrap Components
import Modal from 'react-bootstrap/Modal';
//import ModalDialog from 'react-bootstrap/ModalDialog';
import ModalHeader from 'react-bootstrap/ModalHeader';
import ModalTitle from 'react-bootstrap/ModalTitle';
import ModalBody from 'react-bootstrap/ModalBody';
import ModalFooter from 'react-bootstrap/ModalFooter';
import Form from 'react-bootstrap/Form';
import { Button, Col, Container, Row } from "react-bootstrap";

import { slugify } from '../../../../utils/slugify';

import NumberFormat from 'react-number-format';

// Toastify
//import MNotifier from '../../../Notifier';

import { toast } from 'react-toastify';

// -------------
// End Imports
// ------------- 

// 
// Add Product Component
//
export const AddProduct = () => {
  const initialProductState = {
    id: null,
    name: "",
    slug: "",
    description: "",
    price: Number,
    active: true
  };
  const [product, setProduct] = useState(initialProductState);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = event => {
    const { name, value } = event.target;
    const { slug } = slugify(name);
    setProduct({ ...product, [name]: value, slug, });
  };

  const saveProduct = () => {
    var data = {
      slug: product.slug,
      name: product.name,
      description: product.description,
      price: product.price,
      active: product.active
    };

    ProductsDataService.create(data)
      .then(response => {
        setProduct({
          id: response.data.id,
          slug: response.data.slug,
          name: response.data.name,
          description: response.data.description,
          price: response.data.price,
          active: response.data.active
        });
        setSubmitted(true);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const newProduct = () => {
    setProduct(initialProductState);
    setSubmitted(false);
  };

  return (
    <div className="submit-form">
      {submitted ? (
        <div>
          <h4>You submitted successfully!</h4>
          <button className="btn btn-success" onClick={newProduct}>
            Add
              </button>
        </div>
      ) : (
          <div>
            <div className="form-group">
              <label htmlFor="name">Title</label>
              <input
                type="text"
                className="form-control"
                id="name"
                required
                value={product.name}
                onChange={handleInputChange}
                name="name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="description">Description</label>
              <input
                type="text"
                className="form-control"
                id="description"
                required
                value={product.description}
                onChange={handleInputChange}
                name="description"
              />
            </div>

            <button onClick={saveProduct} className="btn btn-danger">
              Salvar
              </button>
          </div>
        )}
    </div>
  );
};


// Reusable React hook form input component
const PriceInput = ({ register, setValue, id, name }) => {
  const onValueChange = useCallback(
    e => ({
      value: e[0].floatValue || e[0].formattedValue // fallback to formattedValue
    }),
    []
  );

  return (
    <RHFInput
      register={register({ required: true })}
      mode="onChange"
      id={id}
      name={name}
      displayType="input"
      prefix="R$ "
      placeholder="R$"
      isNumericString={true}
      decimalSeparator={","}
      thousandSeparator={"."}
      allowedDecimalSeparators={[".", ","]}
      decimalScale={2}
      fixedDecimalScale={true}
      allowNegative={false}
      setValue={setValue}
      onChangeName="onValueChange"
      onChangeEvent={onValueChange}
      className={"form-control form-control-no-shadow"}
      as={<NumberFormat />}
    />
  );
}


// Reusable Select input component
const SelectInput = ({ control, id, name, options, setValue }) => {
  //const categoryArr = [];
  // const onCategoryChange = useCallback(
  //   e => (
  //     [].push(e.value.map(val=> val))//
  //   ),
  //   []
  // );

  const catIndex = useCallback(
    options => options.map((opt, index) => console.log('[options['+index+']]') ),
    []
  );

  return (
    <Controller
      as={
        <Select/>
      }
      control={control}
      options={options}
      values={[options[0]]} // [options[0]] `${catIndex}`
      defaultValue
      id={id}
      name={name}
      searchBy="name"
      labelField="name"
      valueField="_id"
      placeholder={"Categorias"}
      keepSelectedInList={true}
      searchable={true}
      clearable={true}
      disabledLabel={"pausada"}
      color="#fc0e36"
      rules={{ required: true }}
      //onChange={([selected]) => {
        // Place your logic here
        //return selected;
      //}}
     //onChangeName="catIndex"
     //onChangeEvent={catIndex}
    />
  );
}


const fetcher = url => api.get(url).then(res => res.data); // swr fetcher

//
// Create Menu Item Form Component
//
export const CreateMenuItemForm = (props) => {

  const { catid } = props;
  //const { categories } = props; // comes from component props

  const [formvalues, setFormValues] = useState({
    name: "",
    description: "",
    price: null,
    selectedValues: []
  })

  const { price, selectedValues } = formvalues;
  //console.log(price);

  // Input Characters Counter
  const [counter, setCount] = useState({
    titleCount: 0,
    descriptionCount: 0,
    pdvCount: 0
  });

  const NotifyContent = (props) => {

    const { type, message } = props;

    return (
      <div>
        {type === 'SUCCESS' && (
          <div className="mrToastiFy-success">{message}</div>
        )}

        {type === 'ERROR' && (
          <div className="mrToastiFy-error">{message}</div>
        )}
      </div>
    )
  }

  const notify = (message, type) => {
    const defaultMessage = "Tarefa executada com sucesso!"
    if (!message) {
      message = defaultMessage;
    }
    switch (type) {
      case 'success':
        toast.success(<NotifyContent type={"SUCCESS"} position={"bottom-left"} message={message} />, {
          position: toast.POSITION.BOTTOM_LEFT,
          autoClose: false
        });
        break;
      case 'error':
        toast.error(<NotifyContent type={"SUCCESS"} position={"bottom-left"} message={"Erro ao criar o produto, verifique os campos!"} />, {
          position: toast.POSITION.BOTTOM_LEFT,
          autoClose: false
        });
        break;
      default:
        break;
    }
  }

  // React hook Form hook
  const { errors, register, control, handleSubmit, watch, setValue } = useForm(); //  getValues 

  // Read the formState before render to subscribe the form state through Proxy
  //const { isValid, isSubmitted } = formState;

  /**
   * Post form data to API
   * @param {any} formData
   */
  const onSubmit = (formData) => {

    if (formData) {
      notify("Produto criado com sucesso !", "success");
    } else {
      notify("Falha ao salvar o produto!", "error");
    }

    // Save product (menu item) to API
    // ProductsDataService.create(data).then(result => {

    // }).catch(err => {
    //   console.log(err);
    // })

    console.log(formData);
  }

  console.log('watching name field with `UseFrom`', watch("name")); // watch input value by passing the name of it

  // Dummy options for react-select
  // const categoriesOptions = [
  //     { value: 'promocao', label: 'Promoção', slug: 'promocao', name: 'Promoção' },
  //     { value: 'combos', label: 'Combos', slug: 'combos', name: 'Combos' },
  //     { value: 'pizzas-tradicionais', label: 'Pizzas Tradicionais', slug: 'pizzas-tradicionais', name: 'Pizzas Tradicionais' },
  //     { value: 'pizzas-menu-rancho', label: 'Pizzas Meu Rancho', slug: 'pizzas-menu-rancho', name: 'Pizzas Meu Rancho' }
  // ];

  const noDataRenderer = ({ props, state, methods }) => (
    <>
      <div className="d-flex w-100 justify-content-center align-items-center">
        Nada retornado para <div className="badge badge-sm badge-soft-primary font-weight-600 ml-1">{state.search}</div>
      </div>
    </>
  );

  const { data, error } = useSWR('/api/category/list/select', fetcher);

  console.log(data, error);

  const categoriesList = [];

  if (!error) {
    categoriesList.push(...data.categories);
  }

  console.log('categoriesList array', categoriesList);

  if (!data) {
    return "Nenhuma categoria"
  }

  console.log('categories data: ' + data.categories)

  return (
    <>
      {/*handleSubmit will validate your inputs before invoking "onSubmit" */}
      <Form onSubmit={handleSubmit(onSubmit)} className="addMenuItem w-100">

        <input id="" name="products[]" type="hidden" />

        <Form.Row>
          <Col xs={12} md={8} className="pr-4">

            <Form.Group as="div" className="mb-4">
              <Form.Label htmlFor="categories">Categoria </Form.Label>

              <SelectInput
                control={control}
                id={"categories"}
                name={"categories"}
                //options={categoriesList}
                options={categoriesList.map((cat) => ({
                  _id: cat._id,
                  name: cat.name
                }))}
                //values={}
                onChange={(values) => { console.log(values); values.map(item => item.value) }}
                className={`form-control-no-shadow ${errors.price ? "is-invalid" : ""}`}
              />
              {errors.categories && <Form.Text className="text-sm text-danger">Defina um preço!</Form.Text>}
            </Form.Group>

            {/* register your input into the hook by invoking the "register" function */}
            <Form.Group as="div" className="mb-2">
              <Form.Label htmlFor="itemTitle">Nome do Produto</Form.Label>
              <Form.Control
                id="itemTitle"
                name="name"
                placeholder="Pizza de Frango"
                defaultValue=""
                ref={register({ required: true, maxLength: 80 })}
                maxLength={80}
                className={`form-control-no-shadow ${errors.name ? "is-invalid" : ""}`}
                onChange={(e) => {
                  setCount({ ...counter, titleCount: e.target.value.length });
                }}
              />
              <div className="invalid-feedback">{errors.name ? "Campo obrigatório" : ""}</div>
              <div className="field-with-limit__counter">{counter.titleCount}/80<span> caracteres</span></div>
            </Form.Group>

            <Form.Group as="div" className="my-2">
              {/* include validation with required or other standard HTML validation rules */}
              <Form.Label htmlFor="itemDescription">Descrição</Form.Label>
              <Form.Control
                as="textarea"
                id="itemDescription"
                name="description"
                placeholder="Ingredientes ou breve apresentação do prato"
                defaultValue=""
                rows={3}
                maxLength={1000}
                ref={register({ required: true, maxLength: 1000 })}
                className={`form-control-no-shadow ${errors.description ? "is-invalid" : ""}`}
                style={{ fontSize: "0.95rem", height: "164px", resize: "none" }}
                onChange={(e) => {
                  setCount({ ...counter, descriptionCount: e.target.value.length });
                }}
              />
              {errors.description && <Form.Text className="text-sm text-danger">Considere detalhar o produto</Form.Text>}
              <div className="field-with-limit__counter">{counter.descriptionCount}/1000<span> caracteres</span></div>
            </Form.Group>
          </Col>

          <Col xs={12} md={4}>
            <Form.Group as="div" className="mb-2">
              <Form.Label htmlFor="itemPhoto">Foto do Produto</Form.Label>
              <div className="d-flex justify-content-center align-items-center p-5 w-100 bg-light bordered rounded-sm">

                <Form.File id="formcheck-api-custom" custom>
                  <Form.File.Input bsPrefix="custom-input-file" autoComplete="off" tabIndex={-1} style={{ display: 'none' }} />
                  <Form.File.Label data-browse="Enviar Imagem">
                    Imagem
                  </Form.File.Label>
                  <Form.Control.Feedback type="valid" className="sr-only">You did it!</Form.Control.Feedback>
                </Form.File>

              </div>
            </Form.Group>

            <Form.Group as="div" className="my-2">
              <Form.Label htmlFor="posCode">Código PDV</Form.Label>
              <Form.Control
                id="posCode"
                name="posCode"
                placeholder="000"
                maxLength={60}
                ref={register({ pattern: /^0|[1-9]\d*$/ })}
                className="form-control-no-shadow"
                onChange={(e) => {
                  setCount({ ...counter, pdvCount: e.target.value.length });
                }}
              />
              <div className="field-with-limit__counter">{counter.pdvCount}/60<span> caracteres</span></div>
              {errors.posCode && <Form.Control.Feedback>This field is required</Form.Control.Feedback>}
            </Form.Group>

            <Form.Group as="div" className="my-2">
              <Form.Label htmlFor="price">Preço</Form.Label>
              <PriceInput
                register={register}
                setValue={setValue}
                id="price"
                name="price"
                className={`form-control-no-shadow ${errors.price ? "is-invalid" : ""}`}
              />
             {errors.price && <Form.Text className="text-sm text-danger">Defina um preço!</Form.Text>}
            </Form.Group>
          </Col>
        </Form.Row>

        <Form.Row>
          <Col xs={12} md={12}>
            <div className="my-3">
              <input type="submit" className="btn btn-danger btn-round" />
            </div>
          </Col>
        </Form.Row>

      </Form>
    </>
  );
}

// Discard Unsaved Changes Modal
export const DiscardChangesModal = ({ onKeep, onDiscard, ...props }) => {
  return (
    <>
      <Modal {...props} animation={false} transition={null} backdrop={false} size="sm" dialogClassName="discard-unsaved-changes-modal" className="discard-changes" aria-labelledby="discard-item-modal">
        <ModalHeader className="align-items-center border-0" closeButton onHide={onKeep}>
          <ModalTitle id="discard-item-modal">
            Atenção
            </ModalTitle>
        </ModalHeader>
        <ModalBody>
          <div className="w-100 text-center">
            <p>Você não salvou suas alterações. Deseja sair sem salvar?</p>
            <Button onClick={onKeep} variant="danger" className="btn-block">Continuar na página</Button>
            <div className="divider my-3"></div>
            <Button onClick={onDiscard} variant="outline-danger" className="btn-block">Descartar Alterações</Button>
          </div>
        </ModalBody>
      </Modal>
    </>
  )
}

//
// Create Menu Item Modal
//
export const CreateMenuItemModal = ({ onSave, ...props }) => {

  //const { data, error } = useSWR('/api/category/list/select', fetcher);
  //const { data: projects } = useSWR(() => '/api/projects?uid=' + user.id)

  //const { categorieslist } = props;

  //const { categories } = data;

  return (
    <>
      <Modal {...props} animation={false} transition={null} size="lg" backdrop="static" dialogClassName="modal-vertical modal-full-height" className="fixed-right" aria-labelledby="create-menu-item-modal">
        <ModalHeader className="align-items-center">
          <ModalTitle id="create-menu-item-modal">
            Novo Item
                    </ModalTitle>
        </ModalHeader>
        <ModalBody className="show-grid">
          <Container>
            <Row>

              <CreateMenuItemForm />

              <div className="d-flex justify-content-start align-items-center w-100 bg-light rounded-sm p-3 my-3"><p>Teste</p></div>
              <div className="d-flex justify-content-start align-items-center w-100 bg-light rounded-sm p-3 my-3"><p>Teste</p></div>
              <div className="d-flex justify-content-start align-items-center w-100 bg-light rounded-sm p-3 my-3"><p>Teste</p></div>
              <div className="d-flex justify-content-start align-items-center w-100 bg-light rounded-sm p-3 my-3"><p>Teste</p></div>
              <div className="d-flex justify-content-start align-items-center w-100 bg-light rounded-sm p-3 my-3"><p>Teste</p></div>
              <div className="d-flex justify-content-start align-items-center w-100 bg-light rounded-sm p-3 my-3"><p>Teste</p></div>
              <div className="d-flex justify-content-start align-items-center w-100 bg-light rounded-sm p-3 my-3"><p>Teste</p></div>
              <div className="d-flex justify-content-start align-items-center w-100 bg-light rounded-sm p-3 my-3"><p>Teste</p></div>
              <div className="d-flex justify-content-start align-items-center w-100 bg-light rounded-sm p-3 my-3"><p>Teste</p></div>
              <div className="d-flex justify-content-start align-items-center w-100 bg-light rounded-sm p-3 my-3"><p>Teste</p></div>
              <div className="d-flex justify-content-start align-items-center w-100 bg-light rounded-sm p-3 my-3"><p>Teste</p></div>
              <div className="d-flex justify-content-start align-items-center w-100 bg-light rounded-sm p-3 my-3"><p>Teste</p></div>
              <div className="d-flex justify-content-start align-items-center w-100 bg-light rounded-sm p-3 my-3"><p>Teste</p></div>
              <div className="d-flex justify-content-start align-items-center w-100 bg-light rounded-sm p-3 my-3"><p>Teste</p></div>
              <div className="d-flex justify-content-start align-items-center w-100 bg-light rounded-sm p-3 my-3"><p>Teste</p></div>
              <div className="d-flex justify-content-start align-items-center w-100 bg-light rounded-sm p-3 my-3"><p>Teste</p></div>
              <div className="d-flex justify-content-start align-items-center w-100 bg-light rounded-sm p-3 my-3"><p>Teste</p></div>
              <div className="d-flex justify-content-start align-items-center w-100 bg-light rounded-sm p-3 my-3"><p>Teste</p></div>
            </Row>
          </Container>
        </ModalBody>
        <ModalFooter className="py-3 mt-auto">
          <Button onClick={props.onExit} variant="outline-danger">Cancelar</Button>
          <Button onClick={props.onSave}>Salvar</Button>
        </ModalFooter>
      </Modal>
    </>

  )
}

export default CreateMenuItemModal;