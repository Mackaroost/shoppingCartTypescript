import { Dispatch, SetStateAction } from "react";

export interface Producto {
  id: number;
  title: string;
  description: string;
  cantidad: number;
  category: string;
  image: string;
  price: number;
  rating: {
    rate: number;
    count: number;
  };
}

export type DataProviderContext = {
  children: JSX.Element | JSX.Element[];
};

export type DataContextValue = {
  productosApi: Producto[];
  cart: Producto[];
  popular: Producto[];
  addProducts: (producto: Producto) => void;
  decremento: (producto: Producto) => void;
  removeItem: (producto: Producto) => void;
  filters: FilterType;
  setFilters: Dispatch<SetStateAction<{ minPrice: number; category: string }>>;
};

export type FilterType = {
  minPrice: number;
  category: string;
};

export interface FilterProps {
  productosApi: Producto[];
  filters: FilterType;
  SetFilters: () => void;
}

//Type Guard
/*
export const DataContext = createContext<DataContextValue>({
  productosApi:[],
  cart: [],
  setCart: () => {},
  addProducts: () => {},
  popular: [],
  setPopular: () => {},
});
  export function isProducto(data:Producto) {
    return (
      Boolean(data) &&
      typeof data.id === 'number' &&
      typeof data.title === 'string' &&
      typeof data.description === 'string' &&
      typeof data.image === 'string' &&
      typeof data.price === 'number' &&
      typeof data.rating === 'object' && 
      typeof data.rating.rate === 'number' 
    );
  }
  */
