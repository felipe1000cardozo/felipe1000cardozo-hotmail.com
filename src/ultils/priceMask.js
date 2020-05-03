const priceMask = (value) => {
  const options = { style: "currency", currency: "BRL" };
  return value.toLocaleString("pt-BR", options);
};

export default priceMask;
