import { useEffect, useState, useContext } from "react"
import { Producto } from "../Types"
import { DataContext } from "../context/DataProvider"

const useFilteredProducts = (productosApi: Producto[]) => {
  const { filters, setFilters } = useContext(DataContext)
  //console.log(filters)
  const [productosFiltrados, setProductosFiltrados] = useState<Producto[]>([])
  useEffect(() => {
    const filteredProducts = productosApi.filter((item) => {
      const categoriaCoincide =
        filters.category === "all" || item.category === filters.category
      const precioMayorOIgual = item.price >= filters.minPrice
      return categoriaCoincide && precioMayorOIgual
    })

    setProductosFiltrados(filteredProducts)
  }, [productosApi, filters, setFilters])

  return productosFiltrados;
};

export default useFilteredProducts
