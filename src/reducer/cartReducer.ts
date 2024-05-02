import { type Producto } from "../Types"

export type CarActions =
  | { type: "add-to-cart"; payload: { producto: Producto } }
  | { type: "remove-cart"; payload: { producto: Producto } }
  | { type: "decremento"; payload: { producto: Producto } }

export type CarState = {
  cart: Producto[]
}

export const InitialState: CarState = {
  cart: []
}

export const CarReducer = (
  state: CarState = InitialState,
  action: CarActions
) => {
  if (action.type === "add-to-cart") {
    const duplicado = state.cart.find(
      (item) => item.id === action.payload.producto.id
    )
    let updatedCart = []
    if (duplicado) {
      updatedCart = state.cart.map((item) =>
        item.id === action.payload.producto.id
          ? { ...item, cantidad: item.cantidad + 1 }
          : item
      )
    } else {
      updatedCart = [
        ...state.cart,
        { ...action.payload.producto, cantidad: 1 },
      ]
    }
    return {
      ...state,
      cart: updatedCart,
    }
  }
  if (action.type === "remove-cart") {
    let updateCart = []
    const productDelete = state.cart.filter(
      (item) => item.id !== action.payload.producto.id
    )
    updateCart = productDelete
    return {
      ...state,
      cart: updateCart,
    }
  }
  if (action.type === "decremento") {
    const duplicado = state.cart.find(
      (item) => item.id === action.payload.producto.id
    )
    let updatedCart = []
    if (duplicado) {
      updatedCart = state.cart.map((item) =>
        item.id === action.payload.producto.id
          ? { ...item, cantidad: item.cantidad - 1 }
          : item
      );
    } else {
      updatedCart = [
        ...state.cart,
        { ...action.payload.producto, cantidad: 1 },
      ];
    }
    return {
      ...state,
      cart: updatedCart,
    };
  }
};
