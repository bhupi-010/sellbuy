const initialState = {
  products: [],
  buyDetails: [],
  sellDetails: [],
};

const buyReducer = (state = initialState, action) => {
  switch (action.type) {
    case "BUY_PRODUCT":
      const checkBuy = state.products.find(
        (pro) => pro.product === action.payLoad.product
      );
      if (checkBuy) {
        const quan =
          parseInt(checkBuy.quantity) + parseInt(action.payLoad.quantity);
        const pro = checkBuy.product;
        const newProducts = state.products.filter(
          (item) => item.product !== action.payLoad.product
        );
        state = {
          ...state,
          products: [
            ...newProducts,
            {
              product: pro,
              quantity: quan,
            },
          ],
          buyDetails: [...state.buyDetails, action.payLoad],
        };
      } else {
        state = {
          ...state,
          products: [...state.products, action.payLoad],
          buyDetails: [...state.buyDetails, action.payLoad],
        };
      }

      return state;

    case "SELL_PRODUCT":
      const checkSell = state.products.find(
        (pro) => pro.product === action.payLoad.product
      );
      if (checkSell) {
        const sellQuan =
          parseInt(checkSell.quantity) - parseInt(action.payLoad.quantity);
        const sellPro = checkSell.product;
        const newProducts = state.products.filter(
          (item) => item.product !== action.payLoad.product
        );
        state = {
          ...state,
          products: [...newProducts, { product: sellPro, quantity: sellQuan }],
          sellDetails: [...state.sellDetails, action.payLoad],
        };
      } else {
        alert("Product not available");
      }

      return state;

    case "DELETE_PRODUCT":
      const buyDelete = state.buyDetails.filter(
        (item) => item.id !== action.payLoad.id
      );
      const checkDel = state.products.find(
        (pro) => pro.product === action.payLoad.product
      );
      const delQuan =
        parseInt(checkDel.quantity) - parseInt(action.payLoad.quantity);
      const delPro = checkDel.product;

      const stockDelete = state.products.filter(
        (item) => item.product !== action.payLoad.product
      );
      return {
        ...state,
        buyDetails: buyDelete,
        products: [...stockDelete, { product: delPro, quantity: delQuan }],
      };

    default:
      return state;
  }
};

export default buyReducer;
