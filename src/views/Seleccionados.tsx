import { useContext } from "react"
import { DataContext } from "../context/DataProvider"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const Seleccionados = () => {
  const { cart, addProducts, decremento, removeItem } = useContext(DataContext)
  //console.log(cart)
  const total = cart
    .reduce((ac, el) => ac + el.price * el.cantidad, 0)
    .toFixed(1)

  return (
    <section className="section bg-slate-50 pt-3 h-screen m-4">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="p-4  rounded mx-auto shadow-sm md:w-[550px] bg-sky-400 grid grid-cols-1">
        {cart.map((item) => (
          <div
            key={item.id}
            className="card flex flex-row items-center justify-around border-b border-white gap-x-4"
          >
            <img
              src={item.image}
              alt={item.title}
              className="rounded w-24 h-24 mt-2"
            />

            <p className="text-slate-50 font-bold text-center text-base">
              {item.title}
            </p>
            <div className="flex items-center justify-center ">
              <p
                className="text-slate-50 font-bold text-center text-base cursor-pointer"
                onClick={() => decremento(item)}
              >
                -
              </p>
              <p className="text-slate-50 font-bold text-center text-base px-3">
                {item.cantidad}
              </p>
              <p
                className="text-slate-50 font-bold text-center text-base cursor-pointer"
                onClick={() => addProducts(item)}
              >
                +
              </p>
            </div>
            <p className="text-slate-50 text-lg mt-2 text-center  font-semibold">
              ${item.price}
            </p>
            <p
              className="font-ligh text-sm text-slate-50 text-center cursor-pointer pt-2"
              onClick={() => removeItem(item)}
            >
              Quitar
            </p>
          </div>
        ))}
        <div className="p-3 bg-stone-50 mt-3">
          {cart.length > 0 ? (
            <p className="text-black text-center text-lg font-semibold">
              Total: ${total}
            </p>
          ) : (
            <p className="text-center">No hay productos en el carrito</p>
          )}
        </div>
      </div>
    </section>
  )
}

export default Seleccionados
