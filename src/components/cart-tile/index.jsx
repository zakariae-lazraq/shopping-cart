import React from "react";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../store/slices/card-slice";

function CartTile({ cartItem }) {
    const dispatch =useDispatch()
    function handleRemoveFromCart(){
        dispatch(removeFromCart(cartItem))
        
    }
  return (
    <div className="flex   items-center p-5 justify-between bg-red-500 mt-2 mb-2 rounded-xl">
      <div className="flex flex-col items-center p-3">
        <img
          src={cartItem.image}
          alt={cartItem.title}
          className="w-28
        h-28 object-cover rounded-lg"
        />
        <div className="ml-5 flex flex-col justify-between text-black">
          <h1 className="text-2xl font-bold text-black">{cartItem.title}</h1>
          <p className="text-xl font-bold text-black">{cartItem.price}</p>
          <p className="text-xl font-bold text-black">{cartItem.quantity}</p>
          <p className="text-xl font-bold text-black">{cartItem.total}</p>
        </div>
        <button
          onClick={handleRemoveFromCart}
          className="bg-red-950 text-white border-2 rounded-lg font-bold p-4"
        >
          Remove From Cart
        </button>
      </div>
    </div>
  );
}

export default CartTile;
