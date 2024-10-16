import { ChevronDoubleLeftIcon, XMarkIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";

const CartCount = ({onCartToggle, totalQTY, onClearCartItems}) => {

  return (
    <>
      <div className="bg-white h-11 flex items-center justify-between px-2 sticky top-0 left-0 right-0 w-full">
        <div className="flex items-center gap-3">
          <div className="grid items-center cursor-pointer text-slate-500 hover:text-orange-500 stroke-[2]" onClick={onCartToggle}>
            <ChevronDoubleLeftIcon className="w-5 h-5 tex" />
          </div>
          <div className="gird items-center">
            <h1 className="text-base font-medium text-slate-900">
              Your Cart <span className="bg-theme-cart rounded px-1 py-0.5 text-slate-100 font-normal text-xs">({totalQTY} Items)</span>
            </h1>
          </div>
        </div>
        <div className="flex items-center">
          <button type="button" className="rounded bg-theme-cart active:scale-90 p-0.5" onClick={onClearCartItems}>
            <XMarkIcon className="w-5 h-5 text-white stroke-[2]" />
          </button>
        </div>
      </div>
    </>
  );
};

export default CartCount;
