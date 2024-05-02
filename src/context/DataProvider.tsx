import { createContext, useReducer, useState } from "react"
import { Bounce, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { Producto, DataProviderContext, DataContextValue } from "../Types"
import { apiValidator, productoValidator } from "../zod/validator"
import useFetchData from "../service/ShoppingService"
import usePopularService from "../service/PopularService"
import { InitialState, CarReducer } from "../reducer/cartReducer"

export const DataContext = createContext<DataContextValue>({
  productosApi: [],
  popular: [],
  addProducts: () => {},
  decremento: () => {},
  removeItem: () => {},
  cart: [],
  filters: { minPrice: 0, category: "all" },
  setFilters: () => {},
})

export default function DataProvider({ children }: DataProviderContext) {
  // States
  const [cartState = { cart: [] }, dispatch] = useReducer(
    CarReducer,
    InitialState
  )
  const [filters, setFilters] = useState({ minPrice: 0, category: "all" })

  // Llamada a la API sección layout
  const { popular } = usePopularService(
    "https://fakestoreapi.com/products/?limit=8"
  )
  // Llamada a la API para productos
  const { data: productosApi } = useFetchData(
    "https://fakestoreapi.com/products"
  )

  // Validando los datos recibidos
  const res = apiValidator.safeParse(productosApi)
  if (res.success) {
    //console.log("Validacion de Data exitosa")
  } else {
    console.error(res.error.errors)
    return res.error
  }

  // Función agregar Producto
  const addProducts = (producto: Producto) => {
    const validate = productoValidator.safeParse(producto)
    if (validate.success) {
      dispatch({ type: "add-to-cart", payload: { producto } })
      toast(`Agregando a ${producto.title}`, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      })
    } else {
      console.error("Error de validación:", validate.error)
      return validate.error
    }
  }

  // Restar producto
  const decremento = (producto: Producto) => {
    const validate = productoValidator.safeParse(producto)
    if (validate.success) {
      dispatch({ type: "decremento", payload: { producto } })
    } else {
      return validate.error
    }
  }

  // Eliminar producto individual
  const removeItem = (producto: Producto) => {
    const validate = productoValidator.safeParse(producto)
    if (validate.success) {
      dispatch({ type: "remove-cart", payload: { producto } })
      toast(`Eliminando a ${producto.title}`, {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      })
    } else {
      return validate.error
    }
  }

  if (!productosApi) {
    return <div>Loading...</div>
  }

  return (
    <DataContext.Provider
      value={{
        productosApi,
        popular,
        addProducts,
        decremento,
        removeItem,
        cart: cartState.cart,
        filters,
        setFilters,
      }}
    >
      {children}
    </DataContext.Provider>
  )
}
