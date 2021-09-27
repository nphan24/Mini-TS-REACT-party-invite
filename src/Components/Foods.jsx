import PropTypes from 'prop-types';

const Foods = ({ people }) => {
  console.log('people', people)
  return (
    <div>
      Party Foods!
    </div>
  )
}

Foods.propTypes = {
  people: PropTypes.array
}

export default Foods
