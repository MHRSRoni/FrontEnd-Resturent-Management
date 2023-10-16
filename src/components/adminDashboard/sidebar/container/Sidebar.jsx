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
        {id : 1, title: 'Overview', route: '' },
        {id : 2, title: 'All Customer', route: 'all' },
        {id : 3, title: 'Customer Profile', route: 'profile/id' },
      ],
    },
    {
      id : 2,
      title: 'Staff',
      route: 'staff',
      submenu: [
        {id : 1, title: 'Overview', route: '' },
        {id : 2, title: 'All staff', route: 'all' },
        {id : 3, title: 'Staff profile', route: 'details' },
      ],
    },
    {
      id : 3,
      title: 'Food',
      route: 'food',
      submenu: [
        {id : 1, title: 'Overview', route: '' },
        {id : 2, title: 'All food', route: 'all' },
        {id : 3, title: 'Food details', route: 'details' },
        {id : 4, title: 'Add food', route: 'add' },
        {id : 5, title: 'Discount', route: 'discount' },
      ],
    },
    {
      id : 4, 
      title: 'Order',
      route: 'order',
      submenu: [
        {id : 1, title: 'Overview', route: '' },
        {id : 2, title: 'All order', route: 'all' },
        {id : 3, title: 'Order details', route: 'details' },
      ],
    },
    {
      id : 5, 
      title: 'Information',
      route: 'info',
      submenu: [
        {id : 1, title: 'Overview', route: '' },
        {id : 2, title: 'All complain', route: 'all' },
        {id : 3, title: 'Give Replay', route: 'replay' },
        {id : 4, title: 'Change slider', route: 'slider' },
        {id : 5, title: 'About section', route: 'about' },
        {id : 6, title: 'Promo code', route: 'promo' },
      ],
    },
  ];
  
  return (
    <div className="min-h-screen bg-neutral w-1/6 border border-gray-100">
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
