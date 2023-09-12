import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemList } from "./itemlist";

import productsData from "../assets/products.json";

const mockData = (filter) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const results = filter ? productsData.filter((item) => item.category === filter) : productsData;
      resolve(results);
    }, 1000);
  });
};

export const ItemListContainer = () => {
  const [listData, setListData] = useState([]);

  const { category } = useParams();

  useEffect(() => {
    mockData(category).then((data) => setListData(data));
  }, [category]);

  return (
    <main>
      <div className="container container-list">
        <ItemList listData={listData} />
      </div>
    </main>
  );
};
