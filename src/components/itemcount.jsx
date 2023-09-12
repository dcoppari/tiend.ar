import { useState } from "react";

export function ItemCount({ stock, initValue }) {
  const [itemCount, setItemCount] = useState(initValue);

  const handleClick = (e) => {
    const btnClass = e.currentTarget.classList;

    if (btnClass.contains("btn-add")) {
      itemCount < stock ? setItemCount(itemCount + 1) : null;
    }
    if (btnClass.contains("btn-remove")) {
      itemCount > 0 ? setItemCount(itemCount - 1) : null;
    }
  };

  return (
    <>
      <div className="row">
        <div className="col-8">
          <div className="input-group">
            <button className="btn btn-outline-secondary btn-remove" onClick={handleClick} type="button">
              -
            </button>
            <span className="form-control">{itemCount}</span>
            <button className="btn btn-outline-secondary btn-add" onClick={handleClick} type="button">
              +
            </button>
          </div>
        </div>
        <div className="col-4">
          <button type="button" className="btn btn-outline-primary">
            Agregar
          </button>
        </div>
      </div>
    </>
  );
}
