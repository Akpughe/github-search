import React from 'react';

const SIdebar = ({repcount, func, func_two, style, style_two, usercount}) => {
  return (
    <div className="flex flex-col justify-center items-center bg-white w-[280px] h-[140px] shadow-lg mr-10">
      <div onClick={func} className={style}>
        <div>
          <span className="font-normal text-base">Respositories</span>
        </div>
        <div>
          <span className="bg-[#DCDCDF] w-10 h-5 rounded-xl px-2 py-1 ">
            {repcount}
          </span>
        </div>
      </div>
      <div onClick={func_two} className={style_two}>
        <div>
          <span className="font-normal text-base">Users</span>
        </div>
        <div>
          <span className="bg-[#DCDCDF] w-10 h-5 rounded-xl px-2 py-1 ">
            {usercount}
          </span>
        </div>
      </div>
    </div>
  );
};

export default SIdebar;
