import { useEffect, useState } from "react";
import Bottles from "./components/bottles/bottles";
import Cart from "./components/cart/Cart";

function App() {
  const [bottles, setBottles] = useState([]);
  const [bottlesList, setBottleList] = useState([]);
  const [priceTotal, setPriceTotal] = useState(0);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setBottles(data));
  }, []);

  const purchaseHandler = (bottle) => {
    const newList = [...bottlesList, bottle];
    setBottleList(newList);
    let totalPrice = bottle.price;
    bottlesList.forEach((item) => (totalPrice += item.price));
    setPriceTotal(totalPrice);
  };
  return (
    <>
      <h1 className="text-3xl font-semibold text-center my-10">
        Memorable Bottles
      </h1>
      <div>
        <Cart bottlesList={bottlesList} priceTotal= {priceTotal}/>
        <Bottles bottles={bottles} purchaseHandler={purchaseHandler} />
      </div>
    </>
  );
}

export default App;
