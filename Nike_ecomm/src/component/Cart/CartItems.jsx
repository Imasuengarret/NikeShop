import React from "react";
import { useDispatch } from "react-redux";
import { MinusIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/solid";
import { setDecreasedItemQTY, setIncreasedItemQTY, setRemoveItemFromCart } from "../../app/CartSlice";

const CartItems = ({
  item: { id, title, text, img, color, shadow, price, cartQuantity },
}) => {
  const dispatch = useDispatch();
  const onRemoveFromCart = () => {
    const item = { id, title, text, img, color, shadow, price };
    dispatch(setRemoveItemFromCart(item));
  };
  const onIncreasedItemQTY = ()=>{
    dispatch(setIncreasedItemQTY({id, title, text, img, color, shadow, price, cartQuantity}))
  }
  const onDecreasedItemQTY = () =>{
    dispatch(setDecreasedItemQTY({id, title, text, img, color, shadow, price, cartQuantity}))
}
  return (
    <>
      <div className="flex items-center justify-between gap-10 lg:space-x-2 w-full px-5">
        <div className="flex items-center gap-5">
          <div
            className={`bg-gradient-to-b ${color} ${shadow} relative rounded p-3 hover:scale-105 transition-all duration-75 ease-in-out grid items-center`}
          >
            <img
              src={img}
              alt={`img/cart-item/${id}`}
              className="h-auto w-28 lg:w-36 object-fill"
            />
            <div className="blur-effect-theme bg-white/80 text-black text-xs px-1 absolute right-1 top-1">${price}</div>
          </div>
          <div className="grid items-center gap-4 ">
            <div className="grid items-center leading-none">
              <h1 className="font-medium text-sm text-slate-900 lg:text-lg">
                {title}
              </h1>
              <p className="text-xs text-slate-800 lg:text-sm">{text}</p>
            </div>
            <div className="flex items-center justify-around w-full">
              <button
                type="button"
                className="bg-theme-cart rounded text-white lg:h-6 lg:w-6 h-5 w-5 flex items-center justify-center active:scale-90"
                onClick={onDecreasedItemQTY}
              >
                <MinusIcon className="w-4 h-4 lg:w-5 lg:h-5 stroke-[2]" />
              </button>
              <div className="bg-theme-cart rounded text-white font-medium text-sm lg:h-6 lg:w-7 h-5 w-6 flex items-center justify-center">{cartQuantity}</div>
              <button
                type="button"
                className="bg-theme-cart rounded text-white lg:h-6 lg:w-6 h-5 w-5 flex items-center justify-center active:scale-90"
                onClick={onIncreasedItemQTY}
              >
                <PlusIcon className="w-5 h-5 lg:w-5 lg:h-5 stroke-[2]" />
              </button>
            </div>
          </div>
        </div>
        <div className="grid items-center gap-5 ">
          <div className="grid items-center justify-center">
            <h1 className="text-base lg:text-lg text-slate-900 font-medium">{price * cartQuantity}</h1>
          </div>
          <div>
            <button type="button" className="bg-theme-cart text-white p-0.5 lg:p-1 active:scale-110" onClick={()=>onRemoveFromCart()}>
              <TrashIcon className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItems;
