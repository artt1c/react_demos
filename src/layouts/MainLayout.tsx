import React, {useEffect} from 'react';
import Pagination from "../components/pagination/Pagination";
import {useSearchParams} from "react-router-dom";

const MainLayout = () => {
  
  const [query] = useSearchParams();

  useEffect(() => {
    console.log(query.get('page'));
  }, [query]);

  return (
    <div>

      <Pagination/>
    </div>
  );
};

export default MainLayout;