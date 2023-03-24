import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from '../../partials/SideBar/Sidebar';
import Header from '../../partials/Header';
import FilterButton from '../../components/DropdownFilter';
import PaginationNumeric from '../../components/PaginationNumeric';
import Datepicker from '../../components/Datepicker';
import DateSelect from '../../components/DateSelect';
import OrdersTable from '../../partials/AllTablesFlow/AdminOrdersFlowTables/Delivered/OrdersTable';
import ReactPaginate from 'react-paginate';
function Received() {

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);
  const [Delivered70, setDelivered70] = useState([]);
  const [Delivered70Count, setDelivered70Count] = useState();
  const [Delivered80, setDelivered80] = useState([]);
  const [Delivered80Count, setDelivered80Count] = useState();
  const [RecievedDataCOUNT, setRecievedDataCOUNT] = useState(null)
  const [page70, setPage70] = useState(0)
  const [page80, setPage80] = useState(0)

  const pageDivTen80 = Delivered80Count / 10 // divied page in to 10
  const showCount80 = pageDivTen80.toFixed() // remove the . value 


  const pageDivTen70 = Delivered70Count / 10 // divied page in to 10
  const showCount70 = pageDivTen70.toFixed() // remove the . value 



  const handlePageClick70 = (data) => {
   
    setPage70(data.selected)
  }
  const handlePageClick80 = (data) => {
   
    setPage80(data.selected)
  }


  useEffect(() => {
    axios.get(`https://delivigo-api.herokuapp.com/api/v5/dashboard/orders/admin?pageNo=${page70 + 1 }&status=70`)
      .then(response => {
        setDelivered70(response.data.result)
        setDelivered70Count(response.data.Count)
      })
      .catch(error => console.log(error));
  }, [page70]);



  useEffect(() => {
    axios.get(`https://delivigo-api.herokuapp.com/api/v6/dashboard/orders/admin?pageNo=${page80 + 1}&status=80`)
      .then(response => {
        setDelivered80(response.data.result)
        setDelivered80Count(response.data.Count)
      })
      .catch(error => console.log(error));
  }, [page80]);






  console.log(Delivered70, Delivered80 , "DeliveredAMWN....");

  const spreadResult = [...Delivered70, ...Delivered80];
  console.log(spreadResult, 'orderComplete');


  const handleSelectedItems = (selectedItems) => {
    setSelectedItems([...selectedItems]);
  };

  const  title = "Delivered 70 "
  const CreateOrderCount  = Delivered70Count

  const  title80 = "Delivered 80 "
  const CreateOrderCount80  = Delivered80Count


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
            <div className="mt-8">
            <ReactPaginate
                containerClassName='inline-flex text-sm font-medium -space-x-px shadow-sm'
                pageClassName='inline-flex items-center justify-center rounded-l leading-5 px-3.5 py-2 bg-white border border-slate-200 text-indigo-500'
                pageLinkClassName=''
              breakClassName='page-item'
              previousClassName='page-item'
              previousLinkClassName='page-link'
              nextClassName='page-item'
                breakLabel="..."
                nextLabel="next"
                onPageChange={handlePageClick70}
                pageRangeDisplayed={5}
                pageCount={showCount70}
                previousLabel="previous"
             renderOnZeroPageCount={null}
                nextLinkClassName='page-link'
                breakLinkClassName='page-link'
                activeClassName='active-page'
               
              />
            </div>
              </div>

              <div className="col-6">
            <OrdersTable  spreadResult={Delivered80} selectedItems={handleSelectedItems} title={title80} CreateOrderCount={CreateOrderCount80} />
            <div className="mt-8">
            <ReactPaginate
                containerClassName='inline-flex text-sm font-medium -space-x-px shadow-sm'
                pageClassName='inline-flex items-center justify-center rounded-l leading-5 px-3.5 py-2 bg-white border border-slate-200 text-indigo-500'
                pageLinkClassName=''
              breakClassName='page-item'
              previousClassName='page-item'
              previousLinkClassName='page-link'
              nextClassName='page-item'
                breakLabel="..."
                nextLabel="next"
                onPageChange={handlePageClick80}
                pageRangeDisplayed={5}
                pageCount={showCount80 > 0 ? showCount80 : 1}
                previousLabel="previous"
             renderOnZeroPageCount={null}
                nextLinkClassName='page-link'
                breakLinkClassName='page-link'
                activeClassName='active-page'
               
              />
            </div>
              </div>
            </div>
            {/* <OrdersTable selectedItems={handleSelectedItems} title={title} CreateOrderCount={CreateOrderCount} /> */}

            {/* Pagination */}
           

          </div>
        </main>

      </div>
      
    </div>
  );
}

export default Received;