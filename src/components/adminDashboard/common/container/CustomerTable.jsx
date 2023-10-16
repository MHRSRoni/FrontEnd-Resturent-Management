
const CustomerTable = ({data}) => {

   const keys = data?.length > 0 ? Object.keys(data[0]) : [];


   return (
      <table className="table table-zebra w-full shadow table-sm h-auto">
         <thead className="bg-primary text-white text-base">
            <div className="table-row">
               {keys?.length > 0 &&
                  keys.map((data, i)=>(
                     <th className="table-cell" key={i}>{data}</th>
                  ))
               }
            </div>
         </thead>
         <tbody className="">
            {data?.length > 0 &&
               data.map((row, i) => {
                  const cell = Object.values(row)
                  return (
                     <tr className="table-row  hover text-gray-600 text-sm"  key={i}>
                     {cell.length > 0 && cell.map((data)=>(
                        <td className="" key={i}>
                           {data}
                        </td>
                     ))}
                  </tr>
                  )
               })
            }
         </tbody>
      </table>
   );
};

export default CustomerTable;
