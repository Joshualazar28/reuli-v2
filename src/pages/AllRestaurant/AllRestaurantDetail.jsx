
import React, { useState, useEffect } from 'react';
import axios  from 'axios';
// import Sidebar from '../../partials/Sidebar';
import Sidebar from '../../partials/SideBar/Sidebar';
import Header from '../../partials/Header';
import FilterButton from '../../components/DropdownFilter';
import PaginationNumeric from '../../components/PaginationNumeric';
// import TabsButton from '../../components/TabsButton';
import AllRestTabs from "./AllRestTabs"
// import RiderProfile from '../../components/RiderProfile';
// import Datepicker from '../../components/Datepicker';
// import DateSelect from '../../components/DateSelect';

// import OrdersTable from '../AllTablesFlow/AdminOrdersFlowTables/OrdersTable';

// import RidersTable from '../partials/RideTable/ReceivedRequest/OrdersTable'
import {useParams } from 'react-router-dom';

function AllRestaurantDetail() {

  let { id } = useParams();
  const [restaurant, setRestaurant] = useState("")
  const [restaurantorder, setRestaurantrestaurantorder] = useState("")
  const [geRestaurantMenu, setgeRestaurantMenu] = useState("")
  console.log(id, 'userId')

  useEffect(() => {
    const allRestaurant = axios.get(`https://delivigo-api.herokuapp.com/api/restaurant/profile/admin?restaurantId=${id}`)
    .then(function (response) {
      setRestaurant(response?.data?.result)
    });
  }, [])
  useEffect(() => {
    const allRestaurant = axios.get(`https://delivigo-api.herokuapp.com/api/v5/orders/admin?restaurantId=${id}&pageNo=1`)
    .then(function (response) {
      // console.log(response, "res-joshua")
      setRestaurantrestaurantorder(response?.data?.result)
    });
  }, [])

  useEffect(() => {
    const geRestaurantMenu = axios.get(`https://delivigo-api.herokuapp.com/api/restaurant/menu/admin?restaurantId=${id}`)
    .then(function (response) {
      setgeRestaurantMenu(response?.data?.result)
    });
  }, [])



  console.log(restaurantorder, 'restaurantorder-by-id')
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
            <div className="sm:flex sm:justify-between sm:items-center mb-8">

              {/* Left: Title */}
              <div className="mb-4 sm:mb-0 flex justify-around">
                <h1 className="text-2xl  md:text-3xl text-indigo-500 font-bold">{restaurant?.Name?restaurant?.Name:"Not Found"}</h1>
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
            
            <AllRestTabs geRestaurantMenu={geRestaurantMenu} restaurant={restaurant} sidebarOpen={sidebarOpen} restaurantorder={restaurantorder} setSidebarOpen={setSidebarOpen} />  
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

export default AllRestaurantDetail;