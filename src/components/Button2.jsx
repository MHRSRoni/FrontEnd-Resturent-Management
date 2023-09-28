const Button = (props) => {
    const {
      text,
      className,
      onClick,
    } = props;
  
    return (
      <div>
        <button
          className={`py-4 px-5 sm:py-3 sm:px-2 mt-2 sm:mt-1 text-m font-normal text-gray-900 bg-white rounded-lg border border-orange-500 hover:bg-orange-500 hover:border-orange-500 hover:text-white ${className}`}
          onClick={onClick}
        >
          {text}
        </button>
      </div>
    );
  };
  
  export default Button;
  