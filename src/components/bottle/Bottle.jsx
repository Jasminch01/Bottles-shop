import PropTypes from 'prop-types';

const Bottle = ({bottle, purchaseHandler}) => {
    const{name, price, img, seller, stock, shipping,} = bottle;
    return (
        <div className=' p-5 bg-white rounded-lg'>
            <img className='rounded-lg mb-3' src= {img} alt="" />
           <p className='text-xl font-medium'>{name}</p>
           <p className='text-xl'> Price : {price} $</p>
           <p className='text-xl'>Seller : {seller}</p>
           <p className='text-xl'>Stock: {stock}</p>
           <p className='text-xl'>Shipping: {shipping}</p>
           <button onClick={() => purchaseHandler(bottle)} className='w-full p-3 bg-green-500 text-white rounded-lg mt-3'>Purchase</button>
        </div>
    );
};

Bottle.propTypes = {
    bottle : PropTypes.object.isRequired,
    purchaseHandler : PropTypes.func.isRequired,
}

export default Bottle;