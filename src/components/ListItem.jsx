import React from "react";
import { useDispatch } from "react-redux";
import { addPortfoy } from "../store/slices/portfoy";

function ListItem({ coin }) {
    const dispatch = useDispatch();
    const addHandler = () => {
        dispatch(addPortfoy(coin));
        
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
        <div onClick={addHandler} className="flex items-center justify-center bg-gray-500 hover:bg-gray-700 cursor-pointer rounded-full p-1.5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            strokeWidth='3'
            width="24"
            height="24"
          >
            <path
              fill="white"
              
              d="M12 0c-0.6 0-1 0.4-1 1v10H1c-0.6 0-1 0.4-1 1s0.4 1 1 1h10v10c0 0.6 0.4 1 1 1s1-0.4 1-1V13h10c0.6 0 1-0.4 1-1s-0.4-1-1-1H13V1c0-0.6-0.4-1-1-1z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default ListItem;
