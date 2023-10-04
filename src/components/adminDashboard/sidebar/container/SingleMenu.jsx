import { useState } from "react";
import MenuHeader from "../presentional/MenuHeader";
import SubMenu from "../presentional/SubMenu";
import {useNavigate } from "react-router-dom";

const SingleMenu = ({ menu, active, setActive }) => {
  //hook initialisation
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()

  //function calls 
  const clickHandler = (item) => {
    setActive(`${menu.id}-${item.id}`)
    navigate(`${menu.route}/${item.route}`)
}

  return (
    <div className="">

      {/* menu header  */}
      <div onClick={() => setOpen(pre => !pre)}>
        <MenuHeader title={menu.title} open={open}/>  
      </div>

      {/* subMenu  */}
      {open && 
        menu?.submenu.map((item) => (
          <div key={item.id} className={`${active=== `${menu.id}-${item.id}` ? 'bg-gray-200' : ""}`}
          onClick={()=>clickHandler(item)}>
            <SubMenu 
              title={item.title} 
              clickHandler={()=>{}} />
          </div>
        ))
      }
      <hr className="border-neutral"/>

    </div>
  );
};

export default SingleMenu;
