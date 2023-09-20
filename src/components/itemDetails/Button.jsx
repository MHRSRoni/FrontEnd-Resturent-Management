const Button = (props) => {
  const {
    title,
    className,
    onClick,
    // Add more props as needed
  } = props;

  return (
    <div>
      <button
        className={`mr-10 py-2.5 px-5 text-md font-medium text-gray-900 bg-white rounded-lg border border-[#F7C25D] hover:bg-gray-100 hover:text-[#C837AB] ${className}`}
        onClick={onClick}
      >
        {title}
      </button>
    </div>
  );
};

export default Button;
