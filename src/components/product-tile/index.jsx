import { addToCart, removeFromCart } from "../../store/slices/card-slice";
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function ProductTile({ product }) {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.cart);
  const isChosen = state.some(item => item.id === product.id);

  function handleAddToCart() {
    dispatch(addToCart(product));
  }

  function handleRemoveFromCart() {
    dispatch(removeFromCart(product));
  }

  return (
    <div>
      <div className="group flex flex-col items-center border-2 border-red-900 gap-3 p-4 h-[360px] mt-10 ml-5 rounded-xl">
        <div className="h-[180px]">
          <img
            src={product.image}
            alt={product.title}
            className="object-cover h-full w-full"
          />
        </div>
        <div>
          <h1 className="w-40 truncate mt-3 text-gray-700 font-bold text-lg">
            {product.title}
          </h1>
        </div>
        <div className="flex items-center w-full mt-5 justify-center">
          <button
            onClick={isChosen ? handleRemoveFromCart : handleAddToCart}
            className="bg-red-950 text-white border-2 rounded-lg font-bold p-4"
          >
            {isChosen ? 'Remove From Cart' : 'Add To Cart'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductTile;
