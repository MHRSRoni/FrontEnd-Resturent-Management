import { useState } from 'react';
import SingleMenu from './SingleMenu';

const Sidebar = () => {
  //hook initilization
  const [active, setActive] = useState(null)

  //sidebar menu design 
  const menu = [
    {
      id : 1,
      title: 'Customer',
      route: 'customer',
      submenu: [
        {id : 1, title: 'create customer', route: 'create' },
        {id : 2, title: 'delete customer', route: 'delete' },
      ],
    },
    {
      id : 2,
      title: 'Staff',
      route: 'staff',
      submenu: [
        {id : 1, title: 'create staff', route: 'create' },
        {id : 2, title: 'delete staff', route: 'delete' },
      ],
    },
    {
      id : 3,
      title: 'Food',
      route: 'food',
      submenu: [
        {id : 1, title: 'Overview', route: 'overview' },
        {id : 2, title: 'All food', route: 'all' },
        {id : 3, title: 'Add food', route: 'add' },
        {id : 4, title: 'Discount', route: 'discount' },
      ],
    },
    {
      id : 4, 
      title: 'Order',
      route: 'order',
      submenu: [{id : 1, title: 'all order', route: 'all' }],
    },
  ];
  
  return (
    <div className="min-h-screen bg-neutral w-1/6 border-e border-gray-100">
      {/* Title  */}
      <div className="w-full ms-8 mt-8">
        <h1 className="text-xl font-bold w-fit">
          Admin <br /> Dashboard{' '}
        </h1>
      </div>

      {/* navigation  */}
      <div className="mt-20 bg-white py-2">

      <hr className="border-neutral"/>
        {menu?.map((item, i) => (
          <SingleMenu key={i} menu={item} active={active} setActive={setActive} />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
