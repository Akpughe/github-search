import React from 'react';

const Repos = ({ id, count, f_name, desc, star, lang }) => {
  return (
    <div>
      {/* <h1 className=" font-bold text-xl ">{count} repository results</h1> */}
      <div className=" bg-white sm:w-[680px] w-auto h-auto shadow-lg mt-7" key={id}>
        <div className="p-5">
          <h1 className="font-bold text-base">{f_name}</h1>
          <p className=" font-normal text-sm text-[#91929E] ">{desc}</p>
          <div className="mt-4">
            <span className="font-normal text-sm text-[#91929E]">
              {' '}
              {star} Stars | {lang} | GNU General Public License v2.0 | Updated 4
              hours ago
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Repos;
