import { useState } from "react";
import MenuHeader from "../presentional/MenuHeader";
import SubMenu from "../presentional/SubMenu";

const SingleMenu = ({ menu, active, setActive }) => {
  //hook initialisation
  const [open, setOpen] = useState(false)

  

  return (
    <div className="">

      {/* menu header  */}
      <div onClick={() => setOpen(pre => !pre)}>
        <MenuHeader title={menu.title} open={open}/>  
      </div>

      {/* subMenu  */}
      {open && 
        menu?.submenu.map((item) => (
          <div key={item.id} className="">
            <SubMenu 
              id={`${menu.id}-${item.id}`}
              title={item.title} 
              route={`${menu.route}/${item.route}`} 
              active={active === `${menu.id}-${item.id}`}
              setActive={setActive}/>
          </div>
        ))
      }
      <hr className="border-neutral"/>

    </div>
  );
};

export default SingleMenu;
