import React from 'react';

const Button = ({text}) => {
  return (
    <button className="bg-[#5C5C5C] w-[179px] h-[50px] text-white text-base font-bold rounded-md">
      {text}
    </button>
  );
};

export default Button;
