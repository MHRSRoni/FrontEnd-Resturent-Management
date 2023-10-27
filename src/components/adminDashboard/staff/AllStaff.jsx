import CopyContainer from "../common/container/CopyContainer";
import EditPenContainer from "../common/container/EditPenContainer";
import MenuBar from "../common/container/MenuBar";
import useColorizeText from "../common/hooks/useColorizeText";
import useMenuAndTitleLink from "../common/hooks/useMenuAndTitleLink";
import Search from "../common/presentional/Search";
import Title from "../common/presentional/Title";


const StaffTable = () => {

    const colorizePaid = useColorizeText([['True', 'text-green-600'], ['False', 'text-red-600']])
    const colorizeTitle = useColorizeText([['Admin', 'text-blue-600'], ['Chef', 'text-yellow-600']])

    return (
        <table className="table table-zebra shadow table-sm  h-auto table-pin-rows">
         <thead className="">
                <tr className="bg-primary text-white text-sm ">
                    <th className="table-cell " >Staff ID</th>
                    <th className="table-cell " >Staff Name</th>
                    <th className="table-cell " >Title</th>
                    <th className="table-cell " >Staff Email</th>
                    <th className="table-cell " >Phone No</th>
                    <th className="table-cell " >Salary</th>
                    <th className="table-cell " >Paid</th>
                    <th className="table-cell " >Mark</th>
                </tr>
         </thead>
         <tbody className="">
                    <tr className="table-row  hover text-gray-600 text-sm "  >
                        <td className="table-cell " ><CopyContainer data={'794894894845'} /></td>
                        <td className="table-cell " ><CopyContainer data={'Md Monir Hosen Roni'} /></td>
                        <td className="table-cell " >{colorizeTitle('Admin')}</td>
                        <td className="table-cell" ><CopyContainer data={'mdmonirhosenroni@gmail.com'} /></td>
                        <td className="table-cell " ><CopyContainer data={'018xxxxxxxx'} /></td>
                        <td className="table-cell " ><EditPenContainer data={'120000'} /></td>
                        <td className="table-cell " ><EditPenContainer data={colorizePaid('True')} /></td>
                        <td className="table-cell " ><EditPenContainer data={'Owner'} /></td>
                    </tr>
                    <tr className="table-row  hover text-gray-600 text-sm "  >
                        <td className="table-cell " ><CopyContainer data={'794894894845'} /></td>
                        <td className="table-cell " ><CopyContainer data={'Md Monir Hosen Roni'} /></td>
                        <td className="table-cell " >{colorizeTitle('Chef')}</td>
                        <td className="table-cell" ><CopyContainer data={'mdmonirhosenroni@gmail.com'} /></td>
                        <td className="table-cell " ><CopyContainer data={'018xxxxxxxx'} /></td>
                        <td className="table-cell " ><EditPenContainer data={'120000'} /></td>
                        <td className="table-cell " ><EditPenContainer data={colorizePaid('False')} /></td>
                        <td className="table-cell " ><EditPenContainer data={'Owner'} /></td>
                    </tr>
                    <tr className="table-row  hover text-gray-600 text-sm "  >
                        <td className="table-cell " ><CopyContainer data={'794894894845'} /></td>
                        <td className="table-cell " ><CopyContainer data={'Md Monir Hosen Roni'} /></td>
                        <td className="table-cell " >{colorizeTitle('Admin')}</td>
                        <td className="table-cell" ><CopyContainer data={'mdmonirhosenroni@gmail.com'} /></td>
                        <td className="table-cell " ><CopyContainer data={'018xxxxxxxx'} /></td>
                        <td className="table-cell " ><EditPenContainer data={'120000'} /></td>
                        <td className="table-cell " ><EditPenContainer data={colorizePaid('True')} /></td>
                        <td className="table-cell " ><EditPenContainer data={'Owner'} /></td>
                    </tr>
                    <tr className="table-row  hover text-gray-600 text-sm "  >
                        <td className="table-cell " ><CopyContainer data={'794894894845'} /></td>
                        <td className="table-cell " ><CopyContainer data={'Md Monir Hosen Roni'} /></td>
                        <td className="table-cell " >{colorizeTitle('Admin')}</td>
                        <td className="table-cell" ><CopyContainer data={'mdmonirhosenroni@gmail.com'} /></td>
                        <td className="table-cell " ><CopyContainer data={'018xxxxxxxx'} /></td>
                        <td className="table-cell " ><EditPenContainer data={'120000'} /></td>
                        <td className="table-cell " ><EditPenContainer data={colorizePaid('True')} /></td>
                        <td className="table-cell " ><EditPenContainer data={'Owner'} /></td>
                    </tr>
                    <tr className="table-row  hover text-gray-600 text-sm "  >
                        <td className="table-cell " ><CopyContainer data={'794894894845'} /></td>
                        <td className="table-cell " ><CopyContainer data={'Md Monir Hosen Roni'} /></td>
                        <td className="table-cell " >{colorizeTitle('Admin')}</td>
                        <td className="table-cell" ><CopyContainer data={'mdmonirhosenroni@gmail.com'} /></td>
                        <td className="table-cell " ><CopyContainer data={'018xxxxxxxx'} /></td>
                        <td className="table-cell " ><EditPenContainer data={'120000'} /></td>
                        <td className="table-cell " ><EditPenContainer data={colorizePaid('True')} /></td>
                        <td className="table-cell " ><EditPenContainer data={'Owner'} /></td>
                    </tr>
                    <tr className="table-row  hover text-gray-600 text-sm "  >
                        <td className="table-cell " ><CopyContainer data={'794894894845'} /></td>
                        <td className="table-cell " ><CopyContainer data={'Md Monir Hosen Roni'} /></td>
                        <td className="table-cell " >{colorizeTitle('Admin')}</td>
                        <td className="table-cell" ><CopyContainer data={'mdmonirhosenroni@gmail.com'} /></td>
                        <td className="table-cell " ><CopyContainer data={'018xxxxxxxx'} /></td>
                        <td className="table-cell " ><EditPenContainer data={'120000'} /></td>
                        <td className="table-cell " ><EditPenContainer data={colorizePaid('True')} /></td>
                        <td className="table-cell " ><EditPenContainer data={'Owner'} /></td>
                    </tr>
                    <tr className="table-row  hover text-gray-600 text-sm "  >
                        <td className="table-cell " ><CopyContainer data={'794894894845'} /></td>
                        <td className="table-cell " ><CopyContainer data={'Md Monir Hosen Roni'} /></td>
                        <td className="table-cell " >{colorizeTitle('Admin')}</td>
                        <td className="table-cell" ><CopyContainer data={'mdmonirhosenroni@gmail.com'} /></td>
                        <td className="table-cell " ><CopyContainer data={'018xxxxxxxx'} /></td>
                        <td className="table-cell " ><EditPenContainer data={'120000'} /></td>
                        <td className="table-cell " ><EditPenContainer data={colorizePaid('True')} /></td>
                        <td className="table-cell " ><EditPenContainer data={'Owner'} /></td>
                    </tr>
                    <tr className="table-row  hover text-gray-600 text-sm "  >
                        <td className="table-cell " ><CopyContainer data={'794894894845'} /></td>
                        <td className="table-cell " ><CopyContainer data={'Md Monir Hosen Roni'} /></td>
                        <td className="table-cell " >{colorizeTitle('Admin')}</td>
                        <td className="table-cell" ><CopyContainer data={'mdmonirhosenroni@gmail.com'} /></td>
                        <td className="table-cell " ><CopyContainer data={'018xxxxxxxx'} /></td>
                        <td className="table-cell " ><EditPenContainer data={'120000'} /></td>
                        <td className="table-cell " ><EditPenContainer data={colorizePaid('True')} /></td>
                        <td className="table-cell " ><EditPenContainer data={'Owner'} /></td>
                    </tr>
                    <tr className="table-row  hover text-gray-600 text-sm "  >
                        <td className="table-cell " ><CopyContainer data={'794894894845'} /></td>
                        <td className="table-cell " ><CopyContainer data={'Md Monir Hosen Roni'} /></td>
                        <td className="table-cell " >{colorizeTitle('Admin')}</td>
                        <td className="table-cell" ><CopyContainer data={'mdmonirhosenroni@gmail.com'} /></td>
                        <td className="table-cell " ><CopyContainer data={'018xxxxxxxx'} /></td>
                        <td className="table-cell " ><EditPenContainer data={'120000'} /></td>
                        <td className="table-cell " ><EditPenContainer data={colorizePaid('True')} /></td>
                        <td className="table-cell " ><EditPenContainer data={'Owner'} /></td>
                    </tr>
                    <tr className="table-row  hover text-gray-600 text-sm "  >
                        <td className="table-cell " ><CopyContainer data={'794894894845'} /></td>
                        <td className="table-cell " ><CopyContainer data={'Md Monir Hosen Roni'} /></td>
                        <td className="table-cell " >{colorizeTitle('Admin')}</td>
                        <td className="table-cell" ><CopyContainer data={'mdmonirhosenroni@gmail.com'} /></td>
                        <td className="table-cell " ><CopyContainer data={'018xxxxxxxx'} /></td>
                        <td className="table-cell " ><EditPenContainer data={'120000'} /></td>
                        <td className="table-cell " ><EditPenContainer data={colorizePaid('True')} /></td>
                        <td className="table-cell " ><EditPenContainer data={'Owner'} /></td>
                    </tr>
        </tbody>
        </table>
    )
}



const AllStaff = () => {

    const [activeMenu, activeMenuHandler, menus] = useMenuAndTitleLink(['All Staff', 'Manager', 'Chef', 'Server', 'Guard', 'Boy', 'Other'])

    return (
        <div>
            <Title title={activeMenu} />
            <div className="mx-4 mt-2">
                <MenuBar  menus={menus} active={activeMenu} setActive={activeMenuHandler} />
            </div>
            <div className="flex justify-between mx-8 mt-2 items-center">
                <p className="font-bold text-sm">Total : 1012</p>
                <Search />
            </div>
            <div className="mx-8 mt-2 overflow-y-auto">
                <StaffTable />
            </div>
        </div>
    );
};

export default AllStaff;