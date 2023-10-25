import CopyContainer from "../common/container/CopyContainer";
import EditPenContainer from "../common/container/EditPenContainer";
import MenuBar from "../common/container/MenuBar";
import useMenuAndTitleLink from "../common/hooks/useMenuAndTitleLink";
import Search from "../common/presentional/Search";
import Title from "../common/presentional/Title";


const FoodTable = () => {


    return (
        <table className="table table-zebra shadow table-sm  h-auto table-pin-rows">
         <thead className="">
                <tr className="bg-primary text-white text-sm ">
                    <th className="table-cell " >Food ID</th>
                    <th className="table-cell " >Food Name</th>
                    <th className="table-cell " >Category</th>
                    <th className="table-cell " >Stock</th>
                    <th className="table-cell " >Price</th>
                    <th className="table-cell " >Total Sale</th>
                    <th className="table-cell " >Added Date</th>
                    <th className="table-cell " >Mark</th>
                </tr>
         </thead>
         <tbody className="">
                    <tr className="table-row  hover text-gray-600 text-sm "  >
                        <td className="table-cell " ><CopyContainer data={'794894894845'} /></td>
                        <td className="table-cell " ><CopyContainer data={'Kabab'} /></td>
                        <td className="table-cell " ><CopyContainer data={'meat'} /></td>
                        <td className="table-cell" ><EditPenContainer data={'50'} /></td>
                        <td className="table-cell" ><EditPenContainer data={'250'} /></td>
                        <td className="table-cell " >450</td>
                        <td className="table-cell " >22/12/2022</td>
                        <td className="table-cell " ><EditPenContainer data={'Hot'} /></td>
                    </tr>
                    <tr className="table-row  hover text-gray-600 text-sm "  >
                        <td className="table-cell " ><CopyContainer data={'794894894845'} /></td>
                        <td className="table-cell " ><CopyContainer data={'Kabab'} /></td>
                        <td className="table-cell " ><CopyContainer data={'meat'} /></td>
                        <td className="table-cell" ><EditPenContainer data={'50'} /></td>
                        <td className="table-cell" ><EditPenContainer data={'250'} /></td>
                        <td className="table-cell " >450</td>
                        <td className="table-cell " >22/12/2022</td>
                        <td className="table-cell " ><EditPenContainer data={'Hot'} /></td>
                    </tr>
                    <tr className="table-row  hover text-gray-600 text-sm "  >
                        <td className="table-cell " ><CopyContainer data={'794894894845'} /></td>
                        <td className="table-cell " ><CopyContainer data={'Kabab'} /></td>
                        <td className="table-cell " ><CopyContainer data={'meat'} /></td>
                        <td className="table-cell" ><EditPenContainer data={'50'} /></td>
                        <td className="table-cell" ><EditPenContainer data={'250'} /></td>
                        <td className="table-cell " >450</td>
                        <td className="table-cell " >22/12/2022</td>
                        <td className="table-cell " ><EditPenContainer data={'Hot'} /></td>
                    </tr>
                    <tr className="table-row  hover text-gray-600 text-sm "  >
                        <td className="table-cell " ><CopyContainer data={'794894894845'} /></td>
                        <td className="table-cell " ><CopyContainer data={'Kabab'} /></td>
                        <td className="table-cell " ><CopyContainer data={'meat'} /></td>
                        <td className="table-cell" ><EditPenContainer data={'50'} /></td>
                        <td className="table-cell" ><EditPenContainer data={'250'} /></td>
                        <td className="table-cell " >450</td>
                        <td className="table-cell " >22/12/2022</td>
                        <td className="table-cell " ><EditPenContainer data={'Hot'} /></td>
                    </tr>
                    <tr className="table-row  hover text-gray-600 text-sm "  >
                        <td className="table-cell " ><CopyContainer data={'794894894845'} /></td>
                        <td className="table-cell " ><CopyContainer data={'Kabab'} /></td>
                        <td className="table-cell " ><CopyContainer data={'meat'} /></td>
                        <td className="table-cell" ><EditPenContainer data={'50'} /></td>
                        <td className="table-cell" ><EditPenContainer data={'250'} /></td>
                        <td className="table-cell " >450</td>
                        <td className="table-cell " >22/12/2022</td>
                        <td className="table-cell " ><EditPenContainer data={'Hot'} /></td>
                    </tr>
                    <tr className="table-row  hover text-gray-600 text-sm "  >
                        <td className="table-cell " ><CopyContainer data={'794894894845'} /></td>
                        <td className="table-cell " ><CopyContainer data={'Kabab'} /></td>
                        <td className="table-cell " ><CopyContainer data={'meat'} /></td>
                        <td className="table-cell" ><EditPenContainer data={'50'} /></td>
                        <td className="table-cell" ><EditPenContainer data={'250'} /></td>
                        <td className="table-cell " >450</td>
                        <td className="table-cell " >22/12/2022</td>
                        <td className="table-cell " ><EditPenContainer data={'Hot'} /></td>
                    </tr>
                    <tr className="table-row  hover text-gray-600 text-sm "  >
                        <td className="table-cell " ><CopyContainer data={'794894894845'} /></td>
                        <td className="table-cell " ><CopyContainer data={'Kabab'} /></td>
                        <td className="table-cell " ><CopyContainer data={'meat'} /></td>
                        <td className="table-cell" ><EditPenContainer data={'50'} /></td>
                        <td className="table-cell" ><EditPenContainer data={'250'} /></td>
                        <td className="table-cell " >450</td>
                        <td className="table-cell " >22/12/2022</td>
                        <td className="table-cell " ><EditPenContainer data={'Hot'} /></td>
                    </tr>
                    <tr className="table-row  hover text-gray-600 text-sm "  >
                        <td className="table-cell " ><CopyContainer data={'794894894845'} /></td>
                        <td className="table-cell " ><CopyContainer data={'Kabab'} /></td>
                        <td className="table-cell " ><CopyContainer data={'meat'} /></td>
                        <td className="table-cell" ><EditPenContainer data={'50'} /></td>
                        <td className="table-cell" ><EditPenContainer data={'250'} /></td>
                        <td className="table-cell " >450</td>
                        <td className="table-cell " >22/12/2022</td>
                        <td className="table-cell " ><EditPenContainer data={'Hot'} /></td>
                    </tr>
                    <tr className="table-row  hover text-gray-600 text-sm "  >
                        <td className="table-cell " ><CopyContainer data={'794894894845'} /></td>
                        <td className="table-cell " ><CopyContainer data={'Kabab'} /></td>
                        <td className="table-cell " ><CopyContainer data={'meat'} /></td>
                        <td className="table-cell" ><EditPenContainer data={'50'} /></td>
                        <td className="table-cell" ><EditPenContainer data={'250'} /></td>
                        <td className="table-cell " >450</td>
                        <td className="table-cell " >22/12/2022</td>
                        <td className="table-cell " ><EditPenContainer data={'Hot'} /></td>
                    </tr>
                    <tr className="table-row  hover text-gray-600 text-sm "  >
                        <td className="table-cell " ><CopyContainer data={'794894894845'} /></td>
                        <td className="table-cell " ><CopyContainer data={'Kabab'} /></td>
                        <td className="table-cell " ><CopyContainer data={'meat'} /></td>
                        <td className="table-cell" ><EditPenContainer data={'50'} /></td>
                        <td className="table-cell" ><EditPenContainer data={'250'} /></td>
                        <td className="table-cell " >450</td>
                        <td className="table-cell " >22/12/2022</td>
                        <td className="table-cell " ><EditPenContainer data={'Hot'} /></td>
                    </tr>
        </tbody>
        </table>
    )
}








const AllFood = () => {

    const [activeMenu, activeMenuHandler, menus] = useMenuAndTitleLink(['All Food', 'Meat', 'Vegetarian', 'Beverage', 'Daily-Special', 'Deals', 'Top-10'])

    return (
        <div>
            <Title title={activeMenu} />
            <div className="mx-4 mt-2">
                <MenuBar active={activeMenu} setActive={activeMenuHandler} menus={menus} />
            </div>
            <div className="flex justify-between mx-8 mt-2">
                <p>Total : 101</p>
                <Search />
            </div>
            <div  className="mx-8 mt-2 overflow-y-auto">
                <FoodTable />
            </div>
        </div>
    );
};

export default AllFood;