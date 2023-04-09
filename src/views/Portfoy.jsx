import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ListItemPort from "../components/ListItemPort";
import { setPortfoy } from "../store/slices/portfoy";

const Portfoy = () => {
  const dispatch = useDispatch()


    const [coinsList, setCoinsList] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc");
  const [activeSort, setActiveSort] = useState("");
  const coins = useSelector((state) => {
   return state.portfoy.portfoy});


    const nameHandler = () => {



        const newList = [...coins];
        newList.sort((a, b) => {
          const nameA = a.name.toUpperCase();
          const nameB = b.name.toUpperCase();
    
          if (sortOrder === "asc") {
            if (nameA > nameB) return 1;
            if (nameA < nameB) return -1;
          } else {
            if (nameA < nameB) return 1;
            if (nameA > nameB) return -1;
          }
    
          return 0;
        });
    
        dispatch(setPortfoy(newList));
        setSortOrder(sortOrder === "asc" ? "desc" : "asc");
        setActiveSort("name");
      };
      const currentPriceHandler = () => {
        const newList = [...coins];
        newList.sort((a, b) => {
          if (sortOrder === "asc") {
            return a.current_price - b.current_price;
          } else {
            return b.current_price - a.current_price;
          }
        });

        dispatch(setPortfoy(newList));
        setSortOrder(sortOrder === "asc" ? "desc" : "asc");
        setActiveSort("current_price");
      };
      const highPriceHandler = () => {
        const newList = [...coins];
        newList.sort((a, b) => {
          if (sortOrder === "asc") {
            return a.high_24h - b.high_24h;
          } else {
            return b.high_24h - a.high_24h;
          }
        });

        dispatch(setPortfoy(newList));
        setSortOrder(sortOrder === "asc" ? "desc" : "asc");
        setActiveSort("high_24h");
      };
      const lowPriceHandler = () => {
        const newList = [...coins];
        newList.sort((a, b) => {
          if (sortOrder === "asc") {
            return a.low_24h - b.low_24h;
          } else {
            return b.low_24h - a.low_24h;
          }
        });
    
        dispatch(setPortfoy(newList));
        setSortOrder(sortOrder === "asc" ? "desc" : "asc");
        setActiveSort("low_24h");
      };

    return(
        <div className="w-full h-full p-12">
      <div className="flex flex-col w-full h-full overflow-hidden border border-slate-400 rounded">
        <div className="flex justify-between w-full bg-white  border-b border-slate-300">
          <div className=" py-2 font-bold w-[10%]"> </div>

         
            <div
              className="w-[20%] py-2 font-bold cursor-pointer text-left"
              onClick={nameHandler}
            >
              Name
              {activeSort === "name" && sortOrder === "asc" && (
                <svg
                  className="inline-block w-4 h-4 text-green-500 align-middle ml-1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              )}
              {activeSort === "name" && sortOrder === "desc" && (
                <svg
                  className="inline-block w-4 h-4 text-red-500 align-middle ml-1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M6 15l6-6 6 6" />
                </svg>
              )}
            </div>
          
          <div
            className=" w-[20%] py-2 font-bold text-center cursor-pointer"
            onClick={currentPriceHandler}
          >
            Current Price
            {activeSort === "current_price" && sortOrder === "asc" && (
              <svg
                className="inline-block w-4 h-4 text-green-500 align-middle ml-1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            )}
            {activeSort === "current_price" && sortOrder === "desc" && (
              <svg
                className="inline-block w-4 h-4 text-red-500 align-middle ml-1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 15l6-6 6 6" />
              </svg>
            )}
          </div>

          <div
            className="w-[20%] py-2 font-bold text-center cursor-pointer"
            onClick={highPriceHandler}
          >
            High Price 24h
            {activeSort === "high_24h" && sortOrder === "asc" && (
              <svg
                className="inline-block w-4 h-4 text-green-500 align-middle ml-1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            )}
            {activeSort === "high_24h" && sortOrder === "desc" && (
              <svg
                className="inline-block w-4 h-4 text-red-500 align-middle ml-1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 15l6-6 6 6" />
              </svg>
            )}
          </div>

          <div
            className=" w-[20%] py-2 font-bold text-center cursor-pointer"
            onClick={lowPriceHandler}
          >
            Low Price 24h
            {activeSort === "low_24h" && sortOrder === "asc" && (
              <svg
                className="inline-block w-4 h-4 text-green-500 align-middle ml-1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            )}
            {activeSort === "low_24h" && sortOrder === "desc" && (
              <svg
                className="inline-block w-4 h-4 text-red-500 align-middle ml-1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 15l6-6 6 6" />
              </svg>
            )}
          </div>
          <div className=" py-2 font-bold w-[10%]"> </div>
        </div>

        <div className=" overflow-y-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-thumb-rounded-full scrollbar-track-gray-300">
          {coins?.map((coin) => {
            return <ListItemPort coin={coin} key={coin.id} />;
          })}
        </div>
      </div>
    </div>
    )
}

export default Portfoy