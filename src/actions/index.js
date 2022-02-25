export const buyProduct = (name, num) => {
  return {
    type: "BUY_PRODUCT",
    payLoad: {
      product: name,
      quantity: num,
    },
  };
};

export const sellProduct = (name, num) => {
  return {
    type: "SELL_PRODUCT",
    payLoad: {
      product: name,
      quantity: num,
    },
  };
};
