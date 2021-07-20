import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import SIdebar from '../components/SIdebar';
import ReactPaginate from 'react-paginate';
import ChevronLeft from '../components/icons/ChevronLeft';
import ChevronRight from '../components/icons/ChevronRight';
import Repos from '../components/Repos';
import Users from '../components/Users';
const PER_PAGE = 10;
const result = ({ results }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [show, setShow] = useState('repo');
 
  const handleShow = (str) => {
    setShow(str);
  };

  var pow = Math.pow,
    floor = Math.floor,
    abs = Math.abs,
    log = Math.log;
  var abbrev = 'kmb'; // could be an array of strings: [' m', ' Mo', ' Md']

  function round(n, precision) {
    var prec = Math.pow(10, precision);
    return Math.round(n * prec) / prec;
  }

  function format(n) {
    var base = floor(log(abs(n)) / log(1000));
    var suffix = abbrev[Math.min(2, base - 1)];
    base = abbrev.indexOf(suffix) + 1;
    return suffix ? round(n / pow(1000, base), 2) + suffix : '' + n;
  }

  function handlePageClick({ selected: selectedPage }) {
    setCurrentPage(selectedPage);
  }
  const offset = currentPage * PER_PAGE;

  const pageCount = Math.ceil(results.items.length / PER_PAGE);
  
  return (
    <>
      <Navbar />
      <div className="h-full bg-[#f9fbfd]">
        <div className="flex flex-wrap justify-center pt-12">
          {/* Sidebar */}
          <SIdebar
            style={
              show === 'repo'
                ? `flex justify-between bg-[#F7F7F8] p-4 w-[220px] text-[#5C5C5C] cursor-pointer`
                : `flex justify-between p-4 w-[220px] text-[#5C5C5C] cursor-pointer`
            }
            style_two={
              show === 'user'
                ? `flex justify-between bg-[#F7F7F8] p-4 w-[220px] text-[#5C5C5C] cursor-pointer`
                : `flex justify-between  p-4 w-[220px] text-[#5C5C5C] cursor-pointer`
            }
            func={() => {
              handleShow('repo');
            }}
            func_two={() => {
              handleShow('user');
            }}
            repcount={format(results.total_count)}
            usercount={format(results.total_count / 74)}
          />
          {/* start   */}
          <div>
            {show === 'repo' ? (
              <div className="">
                <h1 className="font-bold text-xl">
                  {results.total_count} repository results
                </h1>
                {results.items.slice(offset, offset + PER_PAGE).map((item) => {
                  // const diff = tsx - item.updated_at;
                  console.log(item.updated_at);
                  return (
                    <Repos
                      id={item.id}
                      f_name={item.full_name}
                      desc={item.description}
                      star={item.stargazers_count}
                      lang={item.language}
                    />
                  );
                })}
              </div>
            ) : (
              show === 'user' && (
                <div>
                  <h1 className=" font-bold text-xl ">
                    {Math.round(results.total_count / 74)} users
                  </h1>
                  {results.items
                    .slice(offset, offset + PER_PAGE)
                    .map((item) => {
                      return (
                        <Users
                          id={item.owner.id}
                          f_name={item.name}
                          log={item.owner.login}
                          desc={item.description}
                        />
                      );
                    })}
                </div>
              )
            )}
          </div>
          {/* end  */}
        </div>
        <div className="flex justify-end max-w-7xl">
          <ReactPaginate
            previousLabel={<ChevronLeft />}
            nextLabel={<ChevronRight />}
            pageCount={pageCount}
            onPageChange={handlePageClick}
            containerClassName={'pagination'}
            subContainerClassName={'pages pagination'}
            pageClassName={'pagination-item'}
            activeClassName={'active'}
          />
        </div>
      </div>
    </>
  );
};

export default result;

export async function getServerSideProps(context) {
  const useDummyData = false;

  const data = await fetch(
    `https://api.github.com/search/repositories?q=${context.query.term}`
  ).then((response) => response.json());

  return {
    props: {
      results: data,
    },
  };
}
{
  /* <Users id={item.owner.id} f_name={item.owner.login} /> */
}
