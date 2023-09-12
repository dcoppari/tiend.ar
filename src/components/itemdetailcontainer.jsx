import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "./itemdetail";

import productsData from "../assets/products.json";

const mockData = (itemId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const results = itemId ? productsData.find((item) => item.id == itemId) : null;
      resolve(results);
    }, 1000);
  });
};

export const ItemDetailContainer = () => {
  const [itemData, setItemData] = useState([]);

  const { id: itemId } = useParams();

  useEffect(() => {
    mockData(itemId).then((data) => {
      setItemData(data);
    });
  }, [itemId]);

  return (
    <main>
      <div className="container container-single">
        <ItemDetail itemData={itemData} />
      </div>
    </main>
  );
};
