import React from 'react';

const Users = ({ id, f_name, desc, star, lang, log }) => {
  return (
    <div>
      <div className=" bg-white w-[680px] h-auto shadow-lg mt-7" key={id}>
        <div className="p-5">
          <div className="flex items-end">
            <h1 className="font-bold text-base">{f_name}</h1>{' '}
            <span className=" text-sm font-normal ml-2 text-[#91929E] ">
              {log}
            </span>
          </div>
          {/* <p className=" font-normal text-sm text-[#91929E] ">{desc}</p> */}
          <div className="">
            <span className="font-normal text-sm text-[#91929E]">{desc}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
