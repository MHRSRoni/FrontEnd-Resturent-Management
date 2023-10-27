import { useState } from "react";

const useMenuAndTitleLink = (menus) => {

    const [activeMenu, setActiveMenu] = useState(menus[0])

    const setActiveMenuHandler = (menu) => {
        setActiveMenu(menu)
    }
    return [activeMenu, setActiveMenuHandler, menus]
};

export default useMenuAndTitleLink;

//active title
//Array for menu 
//set active title