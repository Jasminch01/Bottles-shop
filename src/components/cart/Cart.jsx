import PropTypes from "prop-types";
import Cartlist from "../cartlist/Cartlist";

const Cart = ({ bottlesList, priceTotal }) => {
  return (
    <>
      <div className="p-5 bg-white md:w-[50%] rounded-lg lg:w-[33%]">
        <h1 className="text-xl font-semibold">Itmes</h1>
        {bottlesList.map((bottle, idx) => (
          <Cartlist key={idx} bottle={bottle} priceTotal= {priceTotal}></Cartlist>
        ))}
         <h1 className="text-xl font-semibold">Total Price : {priceTotal} $</h1>
      </div>
    </>
  );
};

Cart.propTypes = {
  bottlesList: PropTypes.array.isRequired,
  priceTotal : PropTypes.number.isRequired
};

export default Cart;
