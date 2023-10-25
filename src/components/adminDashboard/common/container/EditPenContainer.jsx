import { useState } from "react";
import EditPen from "../presentional/EditPen";

const EditPenContainer = ({data}) => {

    const [hovering, setHovering] = useState(false)

    return (
        <div onMouseOver={()=>setHovering(true)} onMouseOut={()=>setHovering(false)} className={`${hovering ? 'pr-0' : 'pr-[18px]'} w-full flex`}>
            {data}
            {hovering && <EditPen />}
        </div>
    );
};

export default EditPenContainer;