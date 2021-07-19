import React from 'react';
import { useRouter } from 'next/dist/client/router';

const Button = ({text, search}) => {
  return (
    <button onClick={search} className="bg-[#5C5C5C] w-[179px] h-[50px] text-white text-base font-bold rounded-md">
      {text}
    </button>
  );
};

export default Button;
