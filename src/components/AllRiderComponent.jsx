// import React, {useState, useEffect} from 'react'
// import { useParams } from 'react-router-dom';
// import Sidebar from '../../src/partials/Sidebar';
// import Image01 from '../../src/images/users.png';
// import Image02 from '../../src/images/users.png';
// import Image03 from '../../src/images/users.png';
// import Image04 from '../../src/images/users.png';
// import Image05 from '../../src/images/users.png';
// import Image06 from '../../src/images/users.png';
// import Image07 from '../../src/images/users.png';
// import Image08 from '../../src/images/users.png';
// import Image09 from '../../src/images/users.png';
// import Image10 from '../../src/images/users.png';
// import Image11 from '../../src/images/users.png';
// import Image12 from '../../src/images/users.png';
// const AllRiderComponent = () => {
    
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [selectedItems, setSelectedItems] = useState([]);

//   const handleSelectedItems = (selectedItems) => {
//     setSelectedItems([...selectedItems]);
//   };

//     const {id} = useParams()
//     console.log(typeof (id), 'bbt id')
//     const items = [
//         {
//           id: '0',
//           name: 'Jack will',
//           image: Image01,
//           link: '#0',
//           location: '🇮🇹',
//           content: '483734338433/id8922323',
//         },
//         {
//           id: '1',
//           name: 'Jack will',
//           image: Image02,
//           link: '#0',
//           location: '🇫🇷',
//           content: '483734338433/id8922323',
//         },
//         {
//           id: '2',
//           name: 'Jack will',
//           image: Image03,
//           link: '#0',
//           location: '🇩🇪',
//           content: '483734338433/id8922323',
//         },
//         {
//           id: '3',
//           name: 'Jack will',
//           image: Image04,
//           link: '#0',
//           location: '🇮🇹',
//           content: '483734338433/id8922323',
//         },
//         {
//           id: '4',
//           name: 'Jack will',
//           image: Image05,
//           link: '#0',
//           location: '🇪🇸',
//           content: '483734338433/id8922323',
//           order: [
//             {
//               id: '0',
//               // image: Image01,
//               order: '78347387438',
//               date: '22/01/2021',
//               customer: 'Patricia Semklo',
//               Amount: 'PKR 2000',
//               rems:"10:00",
//               status: 'Order in cart',
//               // items: '1',
//               location: '🇨🇳 Shanghai, CN',
//               restaurat:" xyz city/xyz area",
//               rest:"Xyz restaurat",
//               pay:"Apply pay",
//               type: 'Subscription',
//               description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
//             },
//             {
//               id: '1',
//               // image: Image01,
//               order: '78347387438',
//               date: '22/01/2021',
//               customer: 'Dominik Lamakani',
//               Amount: 'PKR 2000',
//               rems:"10:00",
//               status: 'payment unsuccessful',
//               // items: '2',
//               restaurat:" xyz city/xyz area",
//               rest:"Xyz restaurat",
//               pay:"Credit Card",
//               location: '🇲🇽 Mexico City, MX',
//               type: 'Subscription',
//               description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
//             },
//             {
//               id: '2',
//               // image: Image02,
//               order: '78347387438',
//               date: '22/01/2021',
//               customer: 'Ivan Mesaros',
//               Amount: 'PKR 2000',
//               rems:"10:00",
//               status: 'Order in cart',
//               restaurat:" xyz city/xyz area",
//               rest:"Xyz restaurat",
//               pay:"Credit Card ",
//               // items: '2',
//               location: '🇮🇹 Milan, IT',
//               type: 'One-time',
//               description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
//             },
//             {
//               id: '3',
//               // image: Image01,
//               order: '78347387438',
//               date: '22/01/2021',
//               customer: 'Maria Martinez',
//               Amount: 'PKR 2000',
//               status: 'Pending',
//               restaurat:" xyz city/xyz area",
//               rest:"Xyz restaurat",
//               pay:"Credit Card",
//               rems:"10:00",
//               // items: '1',
//               location: '🇮🇹 Bologna, IT',
//               type: 'One-time',
//               description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
//             },
//             // {
//             //   id: '4',
//             //   // image: Image03,
//             //   order: '78347387438',
//             //   date: '22/01/2021',
//             //   customer: 'Vicky Jung',
//             //   Amount: '$39.00',
//             //   status: 'Refunded',
//             //   restaurat:" xyz city/xyz area",
//             //   rest:"Xyz restaurat",
//             //   pay:"Apply pay",
//             //   // items: '1',
//             //   location: '🇬🇧 London, UK',
//             //   type: 'Subscription',
//             //   description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
//             // },
//             // {
//             //   id: '5',
//             //   // image: Image01,
//             //   order: '78347387438',
//             //   date: '21/01/2021',
//             //   customer: 'Tisho Yanchev',
//             //   Amount: '$59.00',
//             //   status: 'payment unsuccessful',
//             //   restaurat:" xyz city/xyz area",
//             //   rest:"Xyz restaurat",
//             //   pay:"Apply pay",
//             //   // items: '1',
//             //   location: '🇫🇷 Paris, FR',
//             //   type: 'One-time',
//             //   description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
//             // },
//             // {
//             //   id: '6',
//             //   // image: Image03,
//             //   order: '78347387438',
//             //   date: '21/01/2021',
//             //   customer: 'James Cameron',
//             //   Amount: '$89.00',
//             //   status: 'payment unsuccessful',
//             //   restaurat:" xyz city/xyz area",
//             //   rest:"Xyz restaurat",
//             //   pay:"Apply pay",
//             //   // items: '1',
//             //   location: '🇫🇷 Marseille, FR',
//             //   type: 'Subscription',
//             //   description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
//             // },
//             // {
//             //   id: '7',
//             //   // image: Image03,
//             //   order: '78347387438',
//             //   date: '21/01/2021',
//             //   customer: 'Haruki Masuno',
//             //   Amount: '$129.00',
//             //   restaurat:" xyz city/xyz area",
//             //   rest:"Xyz restaurat",
//             //   pay:"Apply pay",
//             //   status: 'payment unsuccessful',
//             //   // items: '2',
//             //   location: '🇺🇸 New York, USA',
//             //   type: 'Subscription',
//             //   description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
//             // },
//             // {
//             //   id: '8',
//             //   // image: Image02,
//             //   order: '78347387438',
//             //   date: '21/01/2021',
//             //   customer: 'Joe Huang',
//             //   Amount: '$89.00',
//             //   status: 'Pending',
//             //   // items: '2',
//             //   restaurat:" xyz city/xyz area",
//             //   rest:"Xyz restaurat",
//             //   pay:"Apply pay",
//             //   location: '🇨🇳 Shanghai, CN',
//             //   type: 'One-time',
//             //   description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
//             // },
//             // {
//             //   id: '9',
//             //   // image: Image01,
//             //   order: '78347387438',
//             //   date: '21/01/2021',
//             //   customer: 'Carolyn McNeail',
//             //   Amount: '$59.00',
//             //   status: 'Refunded',
//             //   restaurat:" xyz city/xyz area",
//             //   rest:"Xyz restaurat",
//             //   pay:"Apply pay",
//             //   // items: '1',
//             //   location: '🇬🇧 Sheffield, UK',
//             //   type: 'Subscription',
//             //   description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
//             // }
//           ]
        
//         },
//         {
//           id: '5',
//           name: 'Jack will',
//           image: Image06,
//           link: '#0',
//           location: '🇩🇪',
//           content: '483734338433/id8922323',
//         },
//         {
//           id: '6',
//           name: 'Jack will',
//           image: Image07,
//           link: '#0',
//           location: '🇬🇧',
//           content: '483734338433/id8922323',
//         },
//         {
//           id: '7',
//           name: 'Jack will',
//           image: Image08,
//           link: '#0',
//           location: '🇺🇸',
//           content: '483734338433/id8922323',
//         },
//       ];

//       const [data, setData] = useState(items)
//       console.log(data)
     
      
      
//         const finding = data?.find((p) => p.id === id)
//         console.log(finding, 'fini')
 
      
      
//   return (
//     <div>
//         <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
//       AllRiderComponent
//         <h1>{finding?.name}</h1>
//     </div>
//   )
// }

// export default AllRiderComponent
import React, { useState } from 'react';

// import Sidebar from '../../partials/Sidebar';
import Sidebar from '../partials/SideBar/Sidebar';
import Header from '../partials/Header';
import FilterButton from '../components/DropdownFilter';
import PaginationNumeric from '../components/PaginationNumeric';
import TabsButton from '../components/TabsButton';
import RiderProfile from '../components/RiderProfile';
import Datepicker from '../components/Datepicker';
import DateSelect from '../components/DateSelect';

// import OrdersTable from '../AllTablesFlow/AdminOrdersFlowTables/OrdersTable';

import RidersTable from '../partials/RideTable/ReceivedRequest/OrdersTable'


function AllRiderComponent() {



  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);

  const handleSelectedItems = (selectedItems) => {
    setSelectedItems([...selectedItems]);
  };

  const  title = "Orders Create"
  const CreateOrderCount  = '76'

  return (
    <div className="flex h-screen overflow-hidden">

      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */} 
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">

        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      

        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">

            {/* Page header */}
            <div className="sm:flex sm:justify-between sm:items-center mb-8" >

              {/* Left: Title */}
              <div className="mb-4 sm:mb-0 flex justify-around">
                <h1 className="text-2xl  md:text-3xl text-indigo-500 font-bold">Jack will  </h1>
                <div class="relative">
             </div>
              </div>

              {/* Right: Actions */}
              <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
                
                {/* Filter button */}
                <FilterButton align="right" />
               {/* Datepicker built with flatpickr */}
               {/* <Datepicker align="right" /> */}
                {/* Create campaign button */}
              
              </div>

            
            </div>
            <TabsButton sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />  
            {/* <RiderProfile sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />  */}
                    
            {/* Table */}
            {/* <OrdersTable selectedItems={handleSelectedItems} title={title} CreateOrderCount={CreateOrderCount} /> */}
            {/* <RidersTable selectedItems={handleSelectedItems} title={title} CreateOrderCount={CreateOrderCount} /> */}
            {/* Pagination */}
            <div className="mt-8">
              <PaginationNumeric />
            </div>

          </div>
        </main>

      </div>
      
    </div>
  );
}

export default AllRiderComponent;