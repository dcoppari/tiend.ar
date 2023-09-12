import { Link } from "react-router-dom";
import { ItemCount } from "./itemcount";

export function Item({ itemData, isList = false }) {
  const { id, title, price, description, category, image, stock } = itemData;

  return (
    <>
      {isList ? (
        <div className="card">
          <Link to={`/item/${id}`}>
            <div className="aspect-ratio">
              <img className="card-img-top" src={image} alt={title} />
            </div>
          </Link>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">$ {price}</p>
          </div>
        </div>
      ) : (
        <div className="card">
          <div className="row">
            <div className="col-md-4">
              <img className="card-img-top" src={image} alt={title} />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <p className="card-text">$ {price}</p>
              </div>
              <div className="card-footer">
                <ItemCount stock={stock} initValue={0} />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
