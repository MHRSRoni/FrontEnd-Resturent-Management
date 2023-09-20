import PropTypes from 'prop-types';

function Button({ text, onClick }) {
  return (
    <button
      onClick={onClick}
      className="btn btn-primary hover:bg-orange-500 hover:border-orange-500 hover:text-white"
    >
      {text}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
