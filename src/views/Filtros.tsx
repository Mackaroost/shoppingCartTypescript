import { useContext } from "react"
import { DataContext } from "../context/DataProvider"

const FilterComponent = () => {
  const { productosApi, filters, setFilters } = useContext(DataContext)
  const uniqueCategories = [
    ...new Set(productosApi.map((item) => item.category)),
  ]

  const filtrarPrecio = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters((prev) => ({
      ...prev,
      minPrice: parseFloat(e.target.value),
    }))
  }

  const filtrarCategoria = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilters((prev) => ({
      ...prev,
      category: e.target.value,
    }))
  }
  return (
    <div className="flex items-center justify-evenly py-3">
      <div className="text-lg">
        <input
          type="range"
          name="minPrice"
          id="minPrice"
          min="0"
          max="1000"
          value={filters.minPrice}
          onChange={(e) => filtrarPrecio(e)}
        />
        <label className="px-1" htmlFor="minPrice">A partir de {filters.minPrice}$</label>
      </div>
      <div className="flex items-center justify-evenly">
        <label htmlFor="category">Categoría</label>
        <select
          id="category"
          name="category"
          value={filters.category}
          onChange={(e) => filtrarCategoria(e)}
        >
          <option value="all">Todos</option>
          {uniqueCategories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default FilterComponent
