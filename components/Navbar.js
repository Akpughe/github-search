import React, { useState, useEffect } from 'react';
import Link from 'next/dist/client/link';
import { useRouter } from 'next/dist/client/router';
import Searchbar from './Searchbar';
import { useSession } from 'next-auth/client';

const Navbar = () => {
  const [session, loading] = useSession();
  const router = useRouter();
  const [input, setInput] = useState('');
  const onSearch = (e) => {
    e.preventDefault();

    const term = input;

    if (!term) return;

    router.push(`/result?term=${term}`);
  };

  return router.pathname === `/search` ? (
    <nav className="flex justify-end  w-full bg-white h-20  ">
      <div className="flex items-center px-16 cursor-pointer">
        <div className=" h-9 w-9 rounded-full ">
          <img src={session && session.user.image} alt="" />
        </div>
        <div className="mr-2 ml-2">
          <span>{session && session.user.name}</span>
        </div>
        <div>
          <svg
            width="12"
            height="7"
            viewBox="0 0 12 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.7156 0.300562C11.5278 0.11125 11.2722 0.00476399 11.0056 0.00476399C10.7389 0.00476399 10.4833 0.11125 10.2956 0.300562L6.00556 4.57056L1.70556 0.290563C1.31344 -0.0987982 0.679923 -0.09656 0.290562 0.295562C-0.0987984 0.687684 -0.0965597 1.3212 0.295562 1.71056L5.29556 6.71056C5.4859 6.89409 5.74119 6.99477 6.00556 6.99056C6.2679 6.98946 6.5193 6.88531 6.70556 6.70056L11.7056 1.70056C12.0895 1.31445 12.0939 0.692123 11.7156 0.300562Z"
              fill="black"
            />
          </svg>
        </div>
      </div>
    </nav>
  ) : (
    <nav className="flex justify-between w-full bg-white h-20 shadow-lg  ">
      <Link href="/search">
        <div className="flex w-40 ml-12 pl-5 cursor-pointer">
          <img src="/logo.svg" alt="" />
        </div>
      </Link>
      <div className="flex justify-center items-center sm:w-96 w-full">
        <Searchbar
          text={input}
          change={(e) => setInput(e.target.value)}
          gsearch={onSearch}
          width="w-full"
          w="w-[380px]"
          height="h-[50px]"
        />
      </div>

      <div className="sm:flex hidden items-center px-16 cursor-pointer">
        <div className=" h-9 w-9 rounded-full ">
          <img src={session && session.user.image} alt="" />
        </div>
        <div className="mr-2 ml-2">
          <span>{session && session.user.name}</span>
        </div>
        <div>
          <svg
            width="12"
            height="7"
            viewBox="0 0 12 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.7156 0.300562C11.5278 0.11125 11.2722 0.00476399 11.0056 0.00476399C10.7389 0.00476399 10.4833 0.11125 10.2956 0.300562L6.00556 4.57056L1.70556 0.290563C1.31344 -0.0987982 0.679923 -0.09656 0.290562 0.295562C-0.0987984 0.687684 -0.0965597 1.3212 0.295562 1.71056L5.29556 6.71056C5.4859 6.89409 5.74119 6.99477 6.00556 6.99056C6.2679 6.98946 6.5193 6.88531 6.70556 6.70056L11.7056 1.70056C12.0895 1.31445 12.0939 0.692123 11.7156 0.300562Z"
              fill="black"
            />
          </svg>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
