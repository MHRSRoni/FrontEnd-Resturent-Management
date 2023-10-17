import MenuBar from "../common/container/MenuBar";
import Search from "../common/presentional/Search";
import Title from "../common/presentional/Title";
import CustomerTable from "../common/container/CustomerTable";
import useMenuAndTitleLink from "../common/hooks/useMenuAndTitleLink";


const AllOrderResponseDemo = [
    {_id : '#1' , customerId : '#112455', 'order date' : '21/12/2022','payment method' : 'Cash on delevery', transectionId : '#112455', 'total amount' : '15000BDT', status : 'Pending', action : 'anything', mark : 'New'},
    {_id : '#1' , customerId : '#112455', 'order date' : '21/12/2022','payment method' : 'Cash on delevery', transectionId : '#112455', 'total amount' : '15000BDT', status : 'Pending', action : 'anything', mark : 'New'},
    {_id : '#1' , customerId : '#112455', 'order date' : '21/12/2022','payment method' : 'Cash on delevery', transectionId : '#112455', 'total amount' : '15000BDT', status : 'Pending', action : 'anything', mark : 'New'},
    {_id : '#1' , customerId : '#112455', 'order date' : '21/12/2022','payment method' : 'Cash on delevery', transectionId : '#112455', 'total amount' : '15000BDT', status : 'Pending', action : 'anything', mark : 'New'},
    {_id : '#1' , customerId : '#112455', 'order date' : '21/12/2022','payment method' : 'Cash on delevery', transectionId : '#112455', 'total amount' : '15000BDT', status : 'Pending', action : 'anything', mark : 'New'},
    {_id : '#1' , customerId : '#112455', 'order date' : '21/12/2022','payment method' : 'Cash on delevery', transectionId : '#112455', 'total amount' : '15000BDT', status : 'Pending', action : 'anything', mark : 'New'},
    {_id : '#1' , customerId : '#112455', 'order date' : '21/12/2022','payment method' : 'Cash on delevery', transectionId : '#112455', 'total amount' : '15000BDT', status : 'Pending', action : 'anything', mark : 'New'},
    {_id : '#1' , customerId : '#112455', 'order date' : '21/12/2022','payment method' : 'Cash on delevery', transectionId : '#112455', 'total amount' : '15000BDT', status : 'Pending', action : 'anything', mark : 'New'},
    {_id : '#1' , customerId : '#112455', 'order date' : '21/12/2022','payment method' : 'Cash on delevery', transectionId : '#112455', 'total amount' : '15000BDT', status : 'Pending', action : 'anything', mark : 'New'},
    {_id : '#1' , customerId : '#112455', 'order date' : '21/12/2022','payment method' : 'Cash on delevery', transectionId : '#112455', 'total amount' : '15000BDT', status : 'Pending', action : 'anything', mark : 'New'},
]


const ALlOrder = () => {
    //states 
    const [activeMenu, setActiveMenuHandler, menus] = useMenuAndTitleLink(['All Order', 'Pending Order', 'Shiped Order', 'Deleveried Order', 'Canceled Order', 'Refunded Order']) //for menu



    return (
        <div>
            <Title title={activeMenu} />
            <div className="ms-4 mt-2">
                <MenuBar menus={menus} active={activeMenu} setActive={setActiveMenuHandler}/>
            </div>
            <div className="flex justify-between mx-8 mt-2 mb-2 text-sm font-bold items-center">
                <div className="">
                    Total : 210
                </div>
                <div className=""><Search /></div>
            </div>
            <div className="mx-8">
                <CustomerTable data={AllOrderResponseDemo}/>
            </div>
        </div>
    );
};

export default ALlOrder;