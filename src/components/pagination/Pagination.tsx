import React from 'react';
import {useSearchParams} from "react-router-dom";

const Pagination = () => {

  const [query, setQuery] = useSearchParams({page: '1'});

  return (
    <div>
      <button onClick={() => {
        const page = query.get('page')
        if (page && +page > 1) {
          let currentPage = +page
          currentPage--;
          setQuery({page: currentPage.toString()})

        }
      }}>prev</button>

      <button onClick={() => {
        const page = query.get('page')
        if (page) {
          let currentPage = +page
          currentPage++;
          setQuery({page: currentPage.toString()})
        }
      }}>next</button>
    </div>
  );
};

export default Pagination;