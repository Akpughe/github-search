import React, {useState} from 'react';

const Searchbar = ({ width, height, text, change, gsearch, w }) => {
  // const [text, setText] = useState("")
  return (
    <div className={`p-8 ${width}`}>
      <div className={`bg-white flex ${height} ${w}  items-center border border-[#C4C4C4] rounded-full`}>
        <input
          className="rounded-l-full w-full px-6  text-gray-700 leading-tight focus:outline-none"
          id="search"
          type="text"
          placeholder="Search"
          value={text}
          onChange={change}
        />

        <div className="p-4">
          <button onClick={gsearch} className="text-white rounded-full p-2 focus:outline-none w-12 h-12 flex items-center justify-center">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.2943 12.0034L17.5091 15.2182C18.1636 15.8727 18.1636 16.8545 17.5091 17.5091C17.1818 17.8364 16.6909 18 16.3636 18C16.0364 18 15.5455 17.8364 15.2182 17.5091L12.0034 14.2943C10.7859 15.0857 9.33302 15.5455 7.77273 15.5455C3.47997 15.5455 0 12.0655 0 7.77273C0 3.47997 3.47997 0 7.77273 0C12.0655 0 15.5455 3.47997 15.5455 7.77273C15.5455 9.33302 15.0857 10.7859 14.2943 12.0034ZM7.77273 12.7636C10.5291 12.7636 12.7636 10.5291 12.7636 7.77273C12.7636 5.01632 10.5291 2.78182 7.77273 2.78182C5.01632 2.78182 2.78182 5.01632 2.78182 7.77273C2.78182 10.5291 5.01632 12.7636 7.77273 12.7636Z"
                fill="#5C5C5C"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Searchbar;
