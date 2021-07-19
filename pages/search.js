import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Searchbar from '../components/Searchbar';
import Button from '../components/Button';
import { useRouter } from 'next/dist/client/router';

const search = () => {
  const router = useRouter();
  const [input, setInput] = useState('');

  const onSearch = (e) => {
    e.preventDefault();

    const term = input;

    if (!term) return;

    router.push(`/result?term=${term}`);
  };
  return (
    <>
      <Head>
        <title>Github Search</title>
      </Head>
      <Navbar />
      <form action="">
        <div className="flex flex-col justify-center items-center h-screen">
          <div>
            <img src="/logo.svg" alt="" />
          </div>
          <div className="sm:w-2/5 w-full">
            <Searchbar
              text={input}
              change={(e) => setInput(e.target.value)}
              height="h-[60px]"
            />
          </div>
          <div>
            <Button search={onSearch} text="Search Github" />
          </div>
        </div>
      </form>
    </>
  );
};

export default search;
