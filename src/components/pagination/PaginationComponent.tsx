import React, {FC} from 'react';
import {useSearchParams} from "react-router-dom";

type IDisableProps = {
  prev: boolean;
  next: boolean;
}

const PaginationComponent:FC<IDisableProps> = ({prev, next}) => {

  const [query, setQuery] = useSearchParams({page: '1'});

  return (
    <div>
      <button onClick={() => {
        const page = query.get('page')
        if (page) {
          let currentPage = +page
          currentPage--;
          setQuery({page: currentPage.toString()})

        }
      }} disabled={prev}>prev</button>

      <button onClick={() => {
        const page = query.get('page')
        if (page) {
          let currentPage = +page
          currentPage++;
          setQuery({page: currentPage.toString()})
        }
      }} disabled={next}>next</button>
    </div>
  );
};

export default PaginationComponent;