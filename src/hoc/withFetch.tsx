import {FC, useEffect, useState} from "react";

const withFetch = (Component:FC<any>, endpoint:string) => {

  return (props:any) => {
    const [items, setItems] = useState<unknown>([])

    useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com' + endpoint)
        .then(res => res.json())
        .then(data => setItems(data))
    }, []);
    return (
      <Component items={items} {...props}/>
    );

  }
}

export default withFetch;