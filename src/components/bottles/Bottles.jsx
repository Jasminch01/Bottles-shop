import PropTypes from 'prop-types';
import Bottle from '../bottle/bottle';

const Bottles = ({bottles}) => {
    return (
        <>
         {
            bottles.map((bottle , idx) => <Bottle bottle = {bottle} key={idx}/>)
         }   
        </>
    );
};

Bottles.propTypes = {
    bottles : PropTypes.array.isRequired,
}

export default Bottles;