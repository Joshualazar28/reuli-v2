import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from '../../partials/SideBar/Sidebar';
import Header from '../../partials/Header';
import FilterButton from '../../components/DropdownFilter';
import PaginationNumeric from '../../components/PaginationNumeric';
import Datepicker from '../../components/Datepicker';
import DateSelect from '../../components/DateSelect';
import OrdersTable from '../../partials/AllTablesFlow/AdminOrdersFlowTables/Delivered/OrdersTable';

function Received() {

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);
  const [Delivered70, setDelivered70] = useState([]);
  const [Delivered80, setDelivered80] = useState([]);
  const [RecievedDataCOUNT, setRecievedDataCOUNT] = useState(null)
  useEffect(() => {
    axios.get(`https://delivigo-api.herokuapp.com/api/v5/dashboard/orders/admin?pageNo=1&status=70`)
      .then(response => {
        setDelivered70(response.data.result)
        // setRecievedDataCOUNT(response.data.Count)
      })
      .catch(error => console.log(error));
  }, []);



  useEffect(() => {
    axios.get(`https://delivigo-api.herokuapp.com/api/v5/dashboard/orders/admin?pageNo=1&status=80`)
      .then(response => {
        setDelivered80(response.data.result)
        // setRecievedDataCOUNT(response.data.Count)
      })
      .catch(error => console.log(error));
  }, []);






  console.log(Delivered70, Delivered80 , "DeliveredAMWN....");

  const spreadResult = [...Delivered70, ...Delivered80];
  console.log(spreadResult, 'orderComplete');


  const handleSelectedItems = (selectedItems) => {
    setSelectedItems([...selectedItems]);
  };

  const  title = "working......................."
  const CreateOrderCount  = ''

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
              <div className="mb-4 sm:mb-0">
                <h1 className="text-2xl md:text-3xl text-slate-800 font-bold"> Orders ✨</h1>
              </div>

              {/* Right: Actions */}
              <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
                
                {/* Filter button */}
                <FilterButton align="right" />
               {/* Datepicker built with flatpickr */}
               <Datepicker align="right" />
                {/* Create campaign button */}
              
              </div>

            </div>
            Delivered Orders
            {/* Table */}
            <div className='row'>
              <div className="col-6">
            <OrdersTable  spreadResult={Delivered70} selectedItems={handleSelectedItems} title={title} CreateOrderCount={CreateOrderCount} />
              </div>

              <div className="col-6">
            <OrdersTable  spreadResult={Delivered80} selectedItems={handleSelectedItems} title={title} CreateOrderCount={CreateOrderCount} />

              </div>
            </div>
            {/* <OrdersTable selectedItems={handleSelectedItems} title={title} CreateOrderCount={CreateOrderCount} /> */}

            {/* Pagination */}
            <div className="mt-8">
              <PaginationNumeric RecievedDataCOUNT={RecievedDataCOUNT} />
            </div>

          </div>
        </main>

      </div>
      
    </div>
  );
}

export default Received;