import Title from "../common/presentional/Title";
import Search from "../common/presentional/Search";
import MenuBar from "../common/container/MenuBar";
import useMenuAndTitleLink from "../common/hooks/useMenuAndTitleLink";
import CopyContainer from "../common/container/CopyContainer";
import EditPenContainer from "../common/container/EditPenContainer";


const ALlCustomerTable = () => {
    

    return (
        <table className="table table-zebra shadow table-sm  h-auto table-pin-rows">
         <thead className="">
                <tr className="bg-primary text-white text-sm ">
                    <th className="table-cell " >Customer ID</th>
                    <th className="table-cell " >Customer Name</th>
                    <th className="table-cell " >Customer Email</th>
                    <th className="table-cell " >Phone No</th>
                    <th className="table-cell " >Total Expend</th>
                    <th className="table-cell " >Status</th>
                    <th className="table-cell " >Registered At</th>
                    <th className="table-cell " >Mark</th>
                </tr>
         </thead>
         <tbody className="">
                    <tr className="table-row  hover text-gray-600 text-sm "  >
                        <td className="table-cell " ><CopyContainer data={'794894894845'} /></td>
                        <td className="table-cell " ><CopyContainer data={'Md Monir Hosen Roni'} /></td>
                        <td className="table-cell " ><CopyContainer data={'mdmonirhosenroni@gmail.com'} /></td>
                        <td className="table-cell " ><CopyContainer data={'018xxxxxxxx'} /></td>
                        <td className="table-cell " >12000</td>
                        <td className="table-cell" ><EditPenContainer data={'customer'} /></td>
                        <td className="table-cell " >22/12/2022</td>
                        <td className="table-cell " ><EditPenContainer data={'Normal'} /></td>
                    </tr>
                    <tr className="table-row  hover text-gray-600 text-sm"  >
                        <td className="table-cell " ><CopyContainer data={'794894894845'} /></td>
                        <td className="table-cell " ><CopyContainer data={'Md Monir Hosen Roni'} /></td>
                        <td className="table-cell " ><CopyContainer data={'mdmonirhosenroni@gmail.com'} /></td>
                        <td className="table-cell " ><CopyContainer data={'018xxxxxxxx'} /></td>
                        <td className="table-cell " >12000</td>
                        <td className="table-cell" ><EditPenContainer data={'customer'} /></td>
                        <td className="table-cell " >22/12/2022</td>
                        <td className="table-cell " ><EditPenContainer data={'Normal'} /></td>
                    </tr>
                    <tr className="table-row  hover text-gray-600 text-sm"  >
                        <td className="table-cell " ><CopyContainer data={'794894894845'} /></td>
                        <td className="table-cell " ><CopyContainer data={'Md Monir Hosen Roni'} /></td>
                        <td className="table-cell " ><CopyContainer data={'mdmonirhosenroni@gmail.com'} /></td>
                        <td className="table-cell " ><CopyContainer data={'018xxxxxxxx'} /></td>
                        <td className="table-cell " >12000</td>
                        <td className="table-cell" ><EditPenContainer data={'customer'} /></td>
                        <td className="table-cell " >22/12/2022</td>
                        <td className="table-cell " ><EditPenContainer data={'Normal'} /></td>
                    </tr>
                    <tr className="table-row  hover text-gray-600 text-sm"  >
                        <td className="table-cell " ><CopyContainer data={'794894894845'} /></td>
                        <td className="table-cell " ><CopyContainer data={'Md Monir Hosen Roni'} /></td>
                        <td className="table-cell " ><CopyContainer data={'mdmonirhosenroni@gmail.com'} /></td>
                        <td className="table-cell " ><CopyContainer data={'018xxxxxxxx'} /></td>
                        <td className="table-cell " >12000</td>
                        <td className="table-cell" ><EditPenContainer data={'customer'} /></td>
                        <td className="table-cell " >22/12/2022</td>
                        <td className="table-cell " ><EditPenContainer data={'Normal'} /></td>
                    </tr>
                    <tr className="table-row  hover text-gray-600 text-sm"  >
                        <td className="table-cell " ><CopyContainer data={'794894894845'} /></td>
                        <td className="table-cell " ><CopyContainer data={'Md Monir Hosen Roni'} /></td>
                        <td className="table-cell " ><CopyContainer data={'mdmonirhosenroni@gmail.com'} /></td>
                        <td className="table-cell " ><CopyContainer data={'018xxxxxxxx'} /></td>
                        <td className="table-cell " >12000</td>
                        <td className="table-cell" ><EditPenContainer data={'customer'} /></td>
                        <td className="table-cell " >22/12/2022</td>
                        <td className="table-cell " ><EditPenContainer data={'Normal'} /></td>
                    </tr>
                    <tr className="table-row  hover text-gray-600 text-sm"  >
                        <td className="table-cell " ><CopyContainer data={'794894894845'} /></td>
                        <td className="table-cell " ><CopyContainer data={'Md Monir Hosen Roni'} /></td>
                        <td className="table-cell " ><CopyContainer data={'mdmonirhosenroni@gmail.com'} /></td>
                        <td className="table-cell " ><CopyContainer data={'018xxxxxxxx'} /></td>
                        <td className="table-cell " >12000</td>
                        <td className="table-cell" ><EditPenContainer data={'customer'} /></td>
                        <td className="table-cell " >22/12/2022</td>
                        <td className="table-cell " ><EditPenContainer data={'Normal'} /></td>
                    </tr>
                    <tr className="table-row  hover text-gray-600 text-sm"  >
                        <td className="table-cell " ><CopyContainer data={'794894894845'} /></td>
                        <td className="table-cell " ><CopyContainer data={'Md Monir Hosen Roni'} /></td>
                        <td className="table-cell " ><CopyContainer data={'mdmonirhosenroni@gmail.com'} /></td>
                        <td className="table-cell " ><CopyContainer data={'018xxxxxxxx'} /></td>
                        <td className="table-cell " >12000</td>
                        <td className="table-cell" ><EditPenContainer data={'customer'} /></td>
                        <td className="table-cell " >22/12/2022</td>
                        <td className="table-cell " ><EditPenContainer data={'Normal'} /></td>
                    </tr>
                    <tr className="table-row  hover text-gray-600 text-sm"  >
                        <td className="table-cell " ><CopyContainer data={'794894894845'} /></td>
                        <td className="table-cell " ><CopyContainer data={'Md Monir Hosen Roni'} /></td>
                        <td className="table-cell " ><CopyContainer data={'mdmonirhosenroni@gmail.com'} /></td>
                        <td className="table-cell " ><CopyContainer data={'018xxxxxxxx'} /></td>
                        <td className="table-cell " >12000</td>
                        <td className="table-cell" ><EditPenContainer data={'customer'} /></td>
                        <td className="table-cell " >22/12/2022</td>
                        <td className="table-cell " ><EditPenContainer data={'Normal'} /></td>
                    </tr>
                    <tr className="table-row  hover text-gray-600 text-sm"  >
                        <td className="table-cell " ><CopyContainer data={'794894894845'} /></td>
                        <td className="table-cell " ><CopyContainer data={'Md Monir Hosen Roni'} /></td>
                        <td className="table-cell " ><CopyContainer data={'mdmonirhosenroni@gmail.com'} /></td>
                        <td className="table-cell " ><CopyContainer data={'018xxxxxxxx'} /></td>
                        <td className="table-cell " >12000</td>
                        <td className="table-cell" ><EditPenContainer data={'customer'} /></td>
                        <td className="table-cell " >22/12/2022</td>
                        <td className="table-cell " ><EditPenContainer data={'Normal'} /></td>
                    </tr>
                    <tr className="table-row  hover text-gray-600 text-sm"  >
                        <td className="table-cell " ><CopyContainer data={'794894894845'} /></td>
                        <td className="table-cell " ><CopyContainer data={'Md Monir Hosen Roni'} /></td>
                        <td className="table-cell " ><CopyContainer data={'mdmonirhosenroni@gmail.com'} /></td>
                        <td className="table-cell " ><CopyContainer data={'018xxxxxxxx'} /></td>
                        <td className="table-cell " >12000</td>
                        <td className="table-cell" ><EditPenContainer data={'customer'} /></td>
                        <td className="table-cell " >22/12/2022</td>
                        <td className="table-cell " ><EditPenContainer data={'Normal'} /></td>
                    </tr>
                    
         </tbody>
      </table>
    )
}




const AllCustomer = () => {

    const [activeMenu, activeMenuHandler, menus] = useMenuAndTitleLink(['All Customer', 'New Customer', 'Top 10 Customer', 'Reported Customer', 'Baned Customer', ''])

    return (
        <div className="max-h-screen">
            <Title title={activeMenu} />
            <div className="mx-4 mt-2">
                <MenuBar  menus={menus} active={activeMenu} setActive={activeMenuHandler}/>
            </div>
            <div className="mx-8 mt-2">
                <div className="flex justify-between mb-2 items-center">
                    <h4 className="font-bold text-sm">Total : 1221</h4>
                    <Search />
                </div>
                <div className="w-full h-[68vh] overflow-y-auto">
                    <ALlCustomerTable />
                </div>
            </div>
        </div>
    );
};

export default AllCustomer;