import React, { useEffect, useState } from "react";
import { getCoinsList } from "../utils/cryptoApi.js";
import ListItem from "./ListItem.jsx";



function Market(props) {
  const [coinsList, setCoinsList] = useState([]);
  const [filteredCoinsList, setFilteredCoinsList] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc");
  const [activeSort, setActiveSort] = useState("");
  const [search, setSearch] = useState("");
  const [activePage, setActivePage] = useState(1);

useEffect(()=>{
  const fetchData = async () => {
    const data = await getCoinsList(activePage);
    setCoinsList(data);
    setFilteredCoinsList(data);
  };
  fetchData();
},[activePage])

  const nameHandler = () => {
    const newList = [...coinsList];
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

    setFilteredCoinsList(newList);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    setActiveSort("name");
  };
  const currentPriceHandler = () => {
    const newList = [...coinsList];
    newList.sort((a, b) => {
      if (sortOrder === "asc") {
        return a.current_price - b.current_price;
      } else {
        return b.current_price - a.current_price;
      }
    });

    setFilteredCoinsList(newList);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    setActiveSort("current_price");
  };
  const highPriceHandler = () => {
    const newList = [...coinsList];
    newList.sort((a, b) => {
      if (sortOrder === "asc") {
        return a.high_24h - b.high_24h;
      } else {
        return b.high_24h - a.high_24h;
      }
    });

    setFilteredCoinsList(newList);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    setActiveSort("high_24h");
  };
  const lowPriceHandler = () => {
    const newList = [...coinsList];
    newList.sort((a, b) => {
      if (sortOrder === "asc") {
        return a.low_24h - b.low_24h;
      } else {
        return b.low_24h - a.low_24h;
      }
    });

    setFilteredCoinsList(newList);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    setActiveSort("low_24h");
  };
  const searchHandler = (e) => {
    setSearch(e.target.value);
    const newList = [...coinsList];
    const filteredList = newList.filter((item) => {
      return item.name.toLowerCase().includes(e.target.value.toLowerCase());
    });
    setFilteredCoinsList(filteredList);
   
  
  };
  const pageHandler = (page) => {
    setActivePage(page);
    
  }
  const previousHandler = () => {
    if (activePage > 1) {
      setActivePage(activePage - 1);
    }else{
      setActivePage(1);
    }

  }
  const nextHandler = () => {
    if (activePage < 3) {
      setActivePage(activePage + 1);
    }else{
      setActivePage(3);
    }
  }

  return (
    <div className="w-full h-full p-12">
      <div className='w-full flex justify-center mb-4'>
      <input type="text"  className="p-4 w-1/2 rounded" onChange={searchHandler}/>
      </div>
      <div className="flex flex-col w-full h-3/4 overflow-hidden border border-slate-400 rounded">
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
          {filteredCoinsList?.map((coin) => {
            return <ListItem coin={coin} key={coin.id} />;
          })}
        </div>
      </div>
      <div className="flex items-center justify-center mt-4">
  <nav className="flex rounded-md border border-gray-300 divide-x divide-gray-300">
    <button onClick={previousHandler} className="px-3 py-2 bg-white text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-l-md focus:outline-none focus:ring focus:ring-gray-200">
      Previous
    </button>
    <button onClick={()=>pageHandler(1)} className={`${activePage=== 1 ? 'font-bold':'' + '' } px-3 py-2 bg-white text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring focus:ring-gray-200`}>
      1
    </button>
    <button onClick={()=>pageHandler(2)} className={`${activePage=== 2 ? 'font-bold':'' + '' } px-3 py-2 bg-white text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring focus:ring-gray-200`}>
      2
    </button>
    <button onClick={()=>pageHandler(3)} className={`${activePage=== 3 ? 'font-bold':'' + '' } px-3 py-2 bg-white text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring focus:ring-gray-200`}>
      3
    </button>
    
    
    <button onClick={nextHandler}  className="px-3 py-2 bg-white text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-r-md focus:outline-none focus:ring focus:ring-gray-200">
      Next
    </button>
  </nav>
</div>
    </div>
  );
}

export default Market;
