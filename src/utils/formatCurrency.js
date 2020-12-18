//
// Format currency in React
// https://nidhinkumar.medium.com/react-js-number-format-and-styling-a1a6e211e629
//
export const numberFormat = (value) =>
  new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
}).format(value);


export const numberFormatDecimal = (value) => {
  return parseFloat(value).toFixed(2).replace(',', '.'); //value.toLocaleString("pt-BR", { style: "currency" , currency:"BRL"});
}

export const numberFormatPrice = (value) =>
  new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
}).format(value);

// to-do ( create mask for currency, don´t mess up with formating)
