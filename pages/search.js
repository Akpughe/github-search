import React from 'react';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Searchbar from '../components/Searchbar';
import Button from '../components/Button';

const search = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col justify-center items-center h-screen">
        <div>
          <img src="/logo.svg" alt="" />
        </div>
        <div className="sm:w-2/5 w-full">
          <Searchbar height="h-[60px]" />
        </div>
        <Link href="/result">
          <div>
            <Button text="Search Github" />
          </div>
        </Link>
      </div>
    </>
  );
};

export default search;
