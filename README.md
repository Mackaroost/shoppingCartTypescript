# Carrito de Compras con React y Typescript

Este proyecto es un carrito de compras desarrollado con React que consume una API de FakeAPI. Permite visualizar productos, filtrarlos, agregarlos al carrito, eliminarlos, calcular el total y mostrar los más populares. Se utilizan TypeScript para tipado de funciones, interfaces y React Context API para manejar estados en otros componentes, así como useReducer para gestionar el estado del carrito.

## Funcionalidades

- **Visualizar Productos**: La aplicación muestra una lista de productos obtenidos de la FakeAPI.
- **Filtrar Productos**: Permite filtrar los productos por diferentes criterios.
- **Agregar al Carrito**: Los usuarios pueden agregar productos al carrito.
- **Eliminar del Carrito**: Los usuarios pueden eliminar productos del carrito.
- **Calcular Total**: Se calcula el total de la compra en base a los productos en el carrito.
- **Productos Populares**: Se muestran los productos más populares basados en ciertos criterios.

## Uso de TypeScript

Este proyecto hace uso de TypeScript para proporcionar un tipado estático a las funciones y componentes, así como para definir interfaces que especifican la forma de los datos utilizados en la aplicación. Esto proporciona un código más robusto y menos propenso a errores, al tiempo que facilita el mantenimiento y la colaboración en el proyecto.

## Uso de React Context API y useReducer

Se utiliza React Context API para pasar y manejar estados en otros componentes de la aplicación de manera eficiente, evitando la prop drilling. El contexto se utiliza específicamente para gestionar el estado del carrito de compras, lo que permite que los componentes hijos accedan al estado del carrito sin necesidad de pasarlo explícitamente como prop. Además, se emplea useReducer para manejar las acciones relacionadas con el carrito, como agregar y eliminar productos.

## Contribuir

Si deseas contribuir a este proyecto, ¡eres bienvenido! Puedes abrir un *pull request* con tus mejoras o correcciones.



