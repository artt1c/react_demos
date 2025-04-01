import React, {useState} from 'react';
import {IProduct} from "../models/IProduct";
import {loadAuthProducts, refresh} from "../services/api.service";
import {AxiosError} from "axios";

const AuthResourcesPage = () => {

  const [products, setProducts] = useState<IProduct[]>([])

  const onClickHandler = async () => {
    try {
      const responseWithProducts = await loadAuthProducts();
      console.log(responseWithProducts);
      setProducts(responseWithProducts);
    } catch (e) {
      const error = e as AxiosError;
      alert(error.message);
      await refresh();
    }
  }

  return (
    <div>
      <div>
        <button onClick={onClickHandler}>show auth resources</button>
      </div>
      {
        products.length > 0 &&
        <div>
          {
            products.map(product => <div key={product.id}>{product.title}</div>)
          }
        </div>
      }
    </div>
  );
};

export default AuthResourcesPage;