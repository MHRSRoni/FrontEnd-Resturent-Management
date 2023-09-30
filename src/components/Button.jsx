import PropTypes from 'prop-types';

function Button({ text, onClick, className, icon }) {
  return (
    <button
      onClick={onClick}
      className={`btn btn-primary text-sm sm:text-lg hover:bg-orange-500 hover:border-orange-500 hover:text-white ${className}`}
    >
      {icon}
      {text}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
