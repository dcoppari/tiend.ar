import { Item } from "./item";

export const ItemList = ({ listData }) => {
  return (
    <div className="row">
      {listData.map((itemData) => (
        <div key={itemData.id} className="col-sm-6 col-md-4 col-lg-3">
          <Item itemData={itemData} isList={true} />
        </div>
      ))}
    </div>
  );
};
