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
      const checkProduct = state.products.find(
        (pro) => pro.product === action.payLoad.product
      );
      const checkQuantity = state.products.find(
        (pro) => pro.quantity >= action.payLoad.quantity
      );
      if (checkProduct && checkQuantity) {
        const sellQuan =
          parseInt(checkQuantity.quantity) - parseInt(action.payLoad.quantity);
        const sellPro = checkProduct.product;
        const newProducts = state.products.filter(
          (item) => item.product !== action.payLoad.product
        );
        state = {
          ...state,
          products: [...newProducts, { product: sellPro, quantity: sellQuan }],
          sellDetails: [...state.sellDetails, action.payLoad],
        };
      } else {
        if (checkProduct) {
          alert("only" + checkProduct.quantity + " stock quantity available");
        } else {
          alert("product out of stock");
        }
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
