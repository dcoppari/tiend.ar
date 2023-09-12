import { Item } from "./item";
import { ItemCount } from "./itemcount";

export const ItemDetail = ({ itemData }) => {
  //const { id, title, price, description, image, stock } = itemData;

  return (
    <div className="row">
      <div key={itemData.id} className="col-12">
        <Item itemData={itemData} />
      </div>
    </div>
  );
};

{
  /*
    <div className="row">
      <div key={id} className="col-sm-6 col-md-4 col-lg-3">
        <div className="card" key={id} style={{ width: "20rem" }}>
          <img className="card-img-top" src={image} alt={title} />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text">{price}</p>
          </div>
          <div className="card-footer">
            <ItemCount stock={stock} initValue={0} />
          </div>
        </div>
      </div>
    </div>
  */
}
