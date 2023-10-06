import DataRow from '../presentional/DataRow';
import HeaderRow from '../presentional/HeaderRow';

const CustomerTable = () => {
   return (
      <table className="table table-zebra w-full shadow">
         <HeaderRow />
         {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((row) => (
            <DataRow key={row} />
         ))}
      </table>
   );
};

export default CustomerTable;
