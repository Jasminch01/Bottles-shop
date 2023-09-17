import PropTypes from 'prop-types';

const Bottle = ({bottle}) => {
    const{name, price, img} = bottle;
    return (
        <div>
            <img src= {img} alt="" />
           <p className='text-xl font-medium'>{name}</p>
           <p className='text-xl'> Price : {price} $</p>
        </div>
    );
};

Bottle.propTypes = {
    bottle : PropTypes.object.isRequired,
}

export default Bottle;