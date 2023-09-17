
import PropTypes from 'prop-types';

const Cartlist = ({bottle,}) => {
const {name}= bottle;
    return (
        <div>
            <h1 className='text-xl'>{name}</h1>
        </div>
    );
};

Cartlist.propTypes = {
    bottle : PropTypes.object.isRequired,
   
}

export default Cartlist;