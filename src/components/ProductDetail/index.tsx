import React from "react";
import "./style.css";
import { ProductsContext } from "../../context/productsContext";

function ProductDetail() {
  const { onClose, open, productDetail } = React.useContext(ProductsContext);

  return (
    <aside
      className={`product-detail ${
        open
          ? "flex flex-col fixed right-0 border border-black rounded-lg bg-white"
          : "hidden"
      }`}
    >
      <article>
        <div className="flex justify-between items-center">
          <h2 className="">Product Detail</h2>
          <button onClick={onClose}>x</button>
        </div>
        <div className="grid gap-1">
          <img src={productDetail?.images[0]} alt="" />
          <p>{productDetail?.title}</p>
          <p>{"$" + productDetail?.price}</p>
          <p>{productDetail?.description}</p>
        </div>
      </article>
    </aside>
  );
}

export { ProductDetail };
