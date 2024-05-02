import { Producto } from '../Types';

export type FilterState = {
  productos: Producto[]; // Lista completa de productos
  productosFiltrados: Producto[]; // Lista de productos filtrados
  filters: { minPrice: number; category: string };
};

export type FilterActions =
  | { type: 'update-filters'; payload: { minPrice: number; category: string } }
  | { type: 'filter-products' };

export const filterReducer = (state: FilterState, action: FilterActions): FilterState => {
  switch (action.type) {
    case 'update-filters':
      const { minPrice, category } = action.payload;
      return {
        ...state,
        filters: minPrice, category,
      
      };
    case 'filter-products':
      return {
        ...state,
        productosFiltrados: state.productos.filter(item => {
          const { minPrice, category } = state.filters;
          const categoriaCoincide = category === 'all' || item.category === category;
          const precioMayorOIgual = item.price >= minPrice;
          return categoriaCoincide && precioMayorOIgual;
        })
      };
    default:
      return state;
  }
};
