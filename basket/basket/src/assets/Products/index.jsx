import React, { useState, useEffect } from "react";
import axious from "axios";
import "./style.css";
function Product() {
  const [product, setProduct] = useState([]);
  const [basket, setBasket] = useState([]);

  async function getFetch() {
    const response = await axious.get(
      "https://northwind.vercel.app/api/products"
    );
    setProduct(response.data);
  }
  useEffect(() => {
    getFetch();
  }, []);

  function addBasket(item) {
    const elementIndex = basket.findIndex((x) => x.id === item.id);
    if (elementIndex !== -1) {
      const newBasket = [...basket];
      newBasket[elementIndex].count++;
      setBasket(newBasket);
    } else {
      setBasket([...basket, { ...item, count: 1 }]);
    }

    // if (basket.findIndex((x)=>x.id===item.id)){
    //     console.log("same prodct");
    // }else{
  }

function increase() {
  setcount(count + 1);
}
function removeItem(id) {
    setBasket(basket.filter(x=>x.id !==id))
    
}
return (
  <>
    <div className="basket">
      <h2>Basket</h2>
      {basket.map((x) => (
        <ul key={x.id}>
          <li>{x.id}</li>
          <li>{x.name}</li>
          <li>Say:{x.count}
           <button>+</button>
           <button>-</button>
          </li>
          <li><button onClick={()=>removeItem(x.id)}>Remove Item</button></li>
        </ul>
      ))}
    </div>
    <ul>
      {product.map((x) => (
        <div key={x.id}>
          <li>{x.id}</li>
          <li>{x.name}</li>
          <button onClick={() => addBasket(x)}>Add Basket</button>
        </div>
      ))}
    </ul>
  </>
);
      }
export default Product;

