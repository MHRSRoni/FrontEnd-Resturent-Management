
const MenuBar = ({menus, active, setActive}) => {

    const onClickHandler = (id) => {
        setActive(id)
    }

    return (
        <div className='flex gap-4'>
            {
                menus && menus.length > 0 && 
                menus.map((menu, i) =>(
                    <div key={i} className={`pb-1 ${menu === active ? 'border-b-2 text-secondary' : 'text-gray-300'} border-secondary  cursor-pointer hover:border-b-2`} onClick={()=>onClickHandler(menu)}>{menu}</div>
                ))
            }
            
        </div>
    );
};

export default MenuBar;