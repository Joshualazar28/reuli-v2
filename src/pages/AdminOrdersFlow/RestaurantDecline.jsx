import React, { useState,useEffect } from 'react';
import axios from 'axios';
import Sidebar from '../../partials/SideBar/Sidebar';
import Header from '../../partials/Header';
import FilterButton from '../../components/DropdownFilter';
import ReactPaginate from 'react-paginate';
import PaginationNumeric from '../../components/PaginationNumeric';
import Datepicker from '../../components/Datepicker';
import DateSelect from '../../components/DateSelect';
import OrdersTable from '../../partials/AllTablesFlow/AdminOrdersFlowTables/RestruantDeline/OrdersTable';

function RestaurantDecline() {



  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);
  const [ResturantDecline, setResturantDecline] = useState([]);
  const [ResturantDeclineCOUNT, setResturantDeclineCOUNT] = useState(null);
  
  const [page, setPage] = useState(0)


  const pageDivTen = ResturantDeclineCOUNT / 10 // divied page in to 10
  const showCount = pageDivTen.toFixed() // remove the . value 


  const handlePageClick = (data) => {

    setPage(data.selected)
  }



  useEffect(() => {
    axios.get(`https://delivigo-api.herokuapp.com/api/v5/dashboard/orders/admin?pageNo=${page + 1}&status=25`)
   
      .then(response => {
        setResturantDecline(response.data.result)
        setResturantDeclineCOUNT(response.data.Count)
      })
      .catch(error => console.log(error));
  }, [page]);
  console.log(ResturantDecline , "Decline Works");

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
            Received Orders Decline
            {/* Table */}
            <OrdersTable  ResturantDecline={ResturantDecline} selectedItems={handleSelectedItems} title={title} CreateOrderCount={CreateOrderCount} />

            {/* Pagination */}
            <div className="mt-8">    {/* <PaginationNumeric RecievedDataCOUNT={RecievedDataCOUNT} Pagenation={Pagenation} /> */}
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
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={showCount}
                previousLabel="previous"
             renderOnZeroPageCount={null}
                nextLinkClassName='page-link'
                breakLinkClassName='page-link'
                activeClassName='active-page'
               
              />
            </div>

          </div>
        </main>

      </div>
      
    </div>
  );
}

export default RestaurantDecline;