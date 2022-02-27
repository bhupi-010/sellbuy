import { v4 as uuidv4 } from "uuid";
export const buyProduct = (name, num) => {
  // const product = name.replace(/ /g, "");
  const product = name.trim();

  const id = uuidv4();
  return {
    type: "BUY_PRODUCT",
    payLoad: {
      id: id,
      product: product,
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

export const deleteProduct = (item) => {
  return {
    type: "DELETE_PRODUCT",
    payLoad: {
      id: item.id,
      product: item.product,
      quantity: item.quantity,
    },
  };
};

export const editProduct = (item) => {
  return {
    type: "EDIT_PRODUCT",
    payLoad: {
      product: item.product,
      quantity: item.quantity,
    },
  };
};
