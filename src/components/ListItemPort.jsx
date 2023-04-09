import React from "react";
import { useDispatch } from "react-redux";
import { removePortfoy } from "../store/slices/portfoy";

function ListItemPort({ coin }) {
  const dispatch = useDispatch();
  const removeHandler = () => {
    dispatch(removePortfoy(coin.id));
  };
  return (
    <div className="flex w-full border-b border-gray-400 bg-gray-300 hover:bg-gray-400">
      <div className=" py-2 w-[10%]">
        <img className="h-8 pl-4" src={coin.image} alt="" />
      </div>
      <div className=" py-2 w-[20%]">{coin.name}</div>
      <div className=" py-2 w-[20%] text-center">{coin.current_price}$</div>
      <div className=" py-2 w-[20%] text-center">{coin.high_24h}$</div>
      <div className=" py-2 w-[20%] text-center">{coin.low_24h}$</div>
      <div className="w-[10%]   rounded-full  flex items-center justify-center">
        <div
          onClick={removeHandler}
          className="flex items-center justify-center bg-gray-500 hover:bg-gray-700 cursor-pointer rounded-full p-1.5"
        >
          <p className="px-1 font-bold text-white">X</p>
        </div>
      </div>
    </div>
  );
}

export default ListItemPort;