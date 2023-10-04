const MenuHeader = ({ title, open = true }) => {
  

  return (
    <>
      <div className={`${open ? 'bg-neutral ' : 'bg-inherit' } py-1 `}>
        <h2 className={`${open ? 'text-black' : 'text-gray-500' } text-lg ps-8`}>
          {title}
        </h2>
      </div>
    </>
  );
};

export default MenuHeader;
