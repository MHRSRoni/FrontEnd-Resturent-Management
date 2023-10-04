import { useNavigate } from "react-router-dom";

const SubMenu = ({id, title, route, active, setActive}) => {
    // hooks initialization
    const navigate = useNavigate()


    // function call 
    const clickHandler = () => {
        setActive(id)
        navigate(route)
    }

    return (
        <div onClick={clickHandler} className={`hover:bg-gray-100 py-1 ${active ? 'bg-gray-300' : ""}`}>
            <h3 className="ps-12">
                {title}
            </h3>
        </div>
    );
};

export default SubMenu;