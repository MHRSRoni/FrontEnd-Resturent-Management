import { useState } from "react";
import Copy from "../presentional/Copy";

const CopyContainer = ({data}) => {

    const [hovering, setHovering] = useState(false)

    return (
        <div onMouseOver={()=>setHovering(true)} onMouseOut={()=>setHovering(false)} className={`${hovering ? 'pr-0' : 'pr-[18px]'} w-full flex`}>
            {data} 
            {hovering && <Copy />}
            
        </div>
    );
};

export default CopyContainer;