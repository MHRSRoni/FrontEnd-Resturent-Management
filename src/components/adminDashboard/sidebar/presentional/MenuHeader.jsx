//dependencies
import {MdOutlineArrowDropDown} from 'react-icons/md'
const MenuHeader = ({ title, open = true }) => {
  

  return (
    <>
      <div className={`${open ? 'bg-neutral ' : 'bg-inherit' } py-1 `}>
        <h2 className={`${open ? 'text-black' : 'text-gray-500'} flex text-lg ps-8`}>
          {title}
        <span className='inline-block'>
          {open ? <MdOutlineArrowDropDown className='text-2xl rotate-180'/> : <MdOutlineArrowDropDown className='text-2xl'/>}
          </span>
        </h2>
      </div>
    </>
  );
};

export default MenuHeader;
