import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useFetchMutate, useSelectCategories } from '../../../hooks/useFetch';
import api from '../../../services/api';

import Dropdown from 'react-bootstrap/Dropdown';
//import DropdownButton from 'react-bootstrap/DropdownButton'
import Icon from '../../Icon';
import CardapioItems from './List';
import './styles.scss';

//import Select from 'react-select'

ComponentWithInitialProps.getInitialProps = async function getInitialProps () {
  const data = await api.get('/api/category/list')
  return { data }
}

function ComponentWithInitialProps (props) {
  // swr custom fetcher
  //const fetcher = url => api.get(url).then(res => res.data); // swr fetcher
  const initialData = props.data
  const { data, error } = useFetchMutate('/api/category/list', false, { initialData })

  if(!data) {
    return <div>Loading...</div>
  }

  if(error) {
    return <div>Erro ao carregar...</div>
  }
  
  return (
    <div>
    {data && data.categories.map((category, index) => {
      return (
        <React.Fragment key={index}>
        <b>{category.name}</b><br></br>
        </React.Fragment>
      )
    })}
  </div>
  )
}

// Mock categories select options
// const options = [
//   { value: 'tudo', label: 'Todas as Categorias' },
//   { value: 'pizzas-tradicionais', label: 'Pizzas Tradicionais' },
//   { value: 'pizzas-menu-rancho', label: 'Pizzas Meu Rancho' },
//   { value: 'massas-da-casa', label: 'Massas da Casa' }
// ]

//
// Categories Filter Component
//
export const CategoriesFilter = () => {

  const [selectedCategory, setCategory] = useState('');

  const handleCategorySelect = (e) => {
    console.log(e);
    setCategory(e);
  }

  const { categories, isLoading, isError } = useSelectCategories();
  console.log('select input categories: ', categories);


  if (isLoading) {
    return <p>Carregando...</p>
  }

  if(isError) {
    return <p>Erro ao carregar categorias</p>
  }

  return (
    <>
      {/*<Select options={options} />*/}

      <Dropdown data-toggle="dropdown" onSelect={(e) => handleCategorySelect(e)}>
        <Dropdown.Toggle as={"a"} bsPrefix="categories-dropdown" role="button" id="dropdown-categories">
          {selectedCategory ? selectedCategory : "Todas as Categorias"} <Icon color={"#8492a6"} size={14} icon={"chevron-down"} className="ml-3" />
        </Dropdown.Toggle>

        <Dropdown.Menu bsPrefix="dropdown-menu dropdown-menu-lg dropdown-menu-right py-0 border-0">
          <div className="list-group list-group-flush">
            <div className="list-group">
              {categories && categories.categories.map((optionItem, index) => {
                return (
                  <Dropdown.Item bsPrefix="list-group-item list-group-item-action d-flex align-items-center" eventKey={optionItem.name} key={index}>
                    <div className="d-flex align-items-center">
                      {optionItem.name}
                    </div>
                  </Dropdown.Item>
                )
              })}
            </div>
          </div>
        </Dropdown.Menu>
      </Dropdown>
    </>
  )
}


//
// PageCardapios Component
//
const PageCardapios = (props) => {
  
  return (
    <>
      <div className="menu__section">
        <div className="menu-category">

          <div className="category-intro d-flex w-100 justify-content-between align-items-baseline">
            <p className="text-left" style={{ maxWidth: "70wv" }}>Este é o seu Cardápio • Aqui você define quais itens os clientes vão poder ver online no site e encontrar no Google.</p>
            <a href="https://pizzariameurancho.com.br/teste-layouts-page-builder/" target="_blank" rel="noopener noreferrer" className="ml-auto">Ver online</a>
          </div>

          {/*Search & Filter */}
          <form autoComplete="off" className="category-filter">
            <div className="field category-filter__field category-filter__field--fields">
              <div className="category-filter__field category-filter__field--category field">

                <CategoriesFilter />

              </div>

              <div className="category-filter__input-name">
                <div className="field__input category-filter__field category-filter__field--name field form-group">
                  <div className="input-group input-group-merge">
                    <div className="input-group-prepend">
                      <span className="input-group-text"><Icon icon="search" size={16} color="#fc0e36" /></span>
                    </div>
                    <input className="field__input form-control" name="name" placeholder="Buscar nas categorias" type="text" id="filter-name" />
                  </div>
                </div>
              </div>
            </div>
          </form>

          {/* Cardapio Items */}
          <CardapioItems />

          <ComponentWithInitialProps />

          <div className="mt-5 mb-3">
            <Link className="d-block" to="/">Voltar pro início</Link>
          </div>
        </div>
      </div>
    </>
  );

};

export default PageCardapios;
