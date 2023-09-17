import PropTypes from "prop-types";
import Bottle from "../bottle/bottle";

const Bottles = ({ bottles, purchaseHandler }) => {
  return (
    <>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5 my-10">
        {bottles.map((bottle, idx) => (
          <Bottle bottle={bottle} key={idx} purchaseHandler = {purchaseHandler}/>
        ))}
      </div>
    </>
  );
};

Bottles.propTypes = {
  bottles: PropTypes.array.isRequired,
  purchaseHandler : PropTypes.func.isRequired,
};

export default Bottles;
