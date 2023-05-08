import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from '../../partials/SideBar/Sidebar';
import Header from '../../partials/Header';
import FilterButton from '../../components/DropdownFilter';
import PaginationNumeric from '../../components/PaginationNumeric';
import Datepicker from '../../components/Datepicker';
import DateSelect from '../../components/DateSelect';
import ModalBasic from '../../components/ModalBasic';
// import OrdersTable from '../../partials/AllTablesFlow/orders/OrdersTable';
// import RidersTable from '../../partials/RideTable/Approved/OrdersTable';
// import RiderTable from '../../partials/Rider/Approved/OrdersTable'
import AllRiderPage from '../../components/AllRiderPage'

function CancelOrders() {

  
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);
  const [feedbackModalOpen, setFeedbackModalOpen] = useState(false)
  const handleSelectedItems = (selectedItems) => {
    setSelectedItems([...selectedItems]);
  };
  const [show, setShow] = useState(false);
const [allRider, setallRider] = useState([])
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const  title = "Orders Create"
  const CreateOrderCount  = '76'

  const  getRider = async () =>  {
    try {
      const response = await axios.get('https://delivigo-api.herokuapp.com/api/v5/drivers');
      setallRider(response?.data?.result);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getRider()
  }, [])
  

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
                <h1 className="text-2xl  md:text-3xl text-indigo-500 font-bold">All Rider</h1>
                <div class="relative">
        <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
      <svg aria-hidden="true" class="w-5 h-5 ml-2 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </div>
        <input type="search" id="default-search"
         class="block p-2 pl-12 px-5  ml-3 w-full text-sm text-gray-900 bg-white text-slate-500 rounded-xl border border-gray-300 focus:ring-blue-500 focus:border-blue-500  dark:border-gray-600 dark:placeholder-gray-400 dark:text-slate-500 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required/>
             </div>
              </div>

              {/* Right: Actions */}
              <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
                
                {/* Filter button */}
                <FilterButton align="right" />
               {/* Datepicker built with flatpickr */}
               {/* <Datepicker align="right" /> */}
                {/* Create campaign button */}
                <button className="btn bg-indigo-500 hover:bg-indigo-600 text-white" aria-controls="feedback-modal" onClick={(e) => { e.stopPropagation(); setFeedbackModalOpen(true); }}>Add  New</button>
                <ModalBasic className="w-full " id="feedback-modal" modalOpen={feedbackModalOpen} setModalOpen={setFeedbackModalOpen} title="Add new Ride">
                        {/* Modal content */}
                        <div className="px-5 py-4">
                          <div className="text-sm">
                            <div className="font-medium text-slate-800 mb-3"></div>
                          </div>
                          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
<div className="grid gap-2 md:grid-cols-2">
        <div>
          {/* Start */}
          <div>
            <label className="block text-sm font-medium mb-1 p-2" htmlFor="default">
            First name
            </label>
            <input id="default" className="form-input w-full"  placeholder='' type="text" />
          </div>
          {/* End */}
        </div>

        <div>
          {/* Start */}
          <div>
            <div className="flex items-center justify-between">
              <label className="block text-sm font-medium mb-1 p-2" htmlFor="tooltip">
              Last name
              </label>
       
            </div>
            <input id="tooltip" className="form-input w-full" type="text" />
          </div>
          {/* End */}
        </div>
      </div>


      <div className="grid gap-2 md:grid-cols-2">
        <div>
          {/* Start */}
          <div>
            <div className="flex items-center justify-between">
              <label className="block text-sm font-medium mb-1 p-2" htmlFor="tooltip">
              Email
              </label>
   
            </div>
            <input id="tooltip" className="form-input w-full" type="text" />
          </div>
          {/* End */}
        </div>

        <div>
          {/* Start */}
          <div>
            <div className="flex items-center justify-between">
              <label className="block text-sm font-medium mb-1 p-2" htmlFor="tooltip">
              Mobile number
              </label>
   
            </div>
            <input id="tooltip" className="form-input w-full" type="text" />
          </div>
          {/* End */}
        </div>
      </div>

      <div className="grid gap-2 md:grid-cols-2">
       <div>
            <div className="flex items-center justify-between">
              <label className="block text-sm font-medium mb-1 p-2" htmlFor="tooltip">
              Country
              </label>
   
            </div>
            <select className="form-input w-full" >
              <option value="Country">Country</option>
              <option value="Country">Country</option>
              <option value="Country">Country</option>
              <option value="Country">Country</option>
              <option value="Country">Country</option>
            </select>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label className="block text-sm font-medium mb-1 p-2" htmlFor="tooltip">
              City
              </label>
   
            </div>
            <select className="form-input w-full" >
              <option value="City">City</option>
              <option value="City">City</option>
              <option value="City">City</option>
              <option value="City">City</option>
              <option value="City">City</option>
            </select>
          </div>

</div>


<div className="grid gap-2 md:grid-cols-2">
       <div>
            <div className="flex items-center justify-between">
              <label className="block text-sm font-medium mb-1 p-2" htmlFor="tooltip">
              Vehicle for Delivery
              </label>
   
            </div>
            <select className="form-input w-full" >
              <option value="Vehicle for Delivery">Vehicle for Delivery</option>
              <option value="Vehicle for Delivery">Vehicle for Delivery</option>
              <option value="Vehicle for Delivery">Vehicle for Delivery</option>
              <option value="Vehicle for Delivery">Vehicle for Delivery</option>
              <option value="Vehicle for Delivery">Vehicle for Delivery</option>
            </select>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label className="block text-sm font-medium mb-1 p-2" htmlFor="tooltip">
              What language do you prefer?
              </label>
   
            </div>
            <select className="form-input w-full" >
              <option value="What language do you prefer?">What language do you prefer?</option>
              <option value="What language do you prefer?">What language do you prefer?</option>
              <option value="What language do you prefer?">What language do you prefer?</option>
              <option value="What language do you prefer?">What language do you prefer?</option>
              <option value="What language do you prefer?">What language do you prefer?</option>
            </select>
          </div>

</div>


{/* are you 18 */}
<div className="grid gap-2 md:grid-cols-2">
        <div>
          {/* Start */}
          <div>
            <div className="flex items-center justify-between">
              <label className="block text-sm blod font-medium mb-1 p-2 mt-3" htmlFor="tooltip">
              Are you over 18?
              </label>
   
            </div>
            <input id="tooltip" className="form-input " type="checkbox" /> <label>Yes</label>
            <input id="tooltip" className="form-input ml-3 " type="checkbox" /> <label>No</label>
          </div>
          {/* End */}
        </div>

      
      </div>

      <div className="grid gap-2 md:grid-cols-2">
        <div>
          {/* Start */}
          <div>
            <div className="flex items-center justify-between">
              <label className="block text-sm blod font-medium mb-1 p-2 mt-3" htmlFor="tooltip">
              Do you have a valid work permit?
              </label>
   
            </div>
            <input id="tooltip" className="form-input " type="checkbox" /> <label>Yes</label>
            <input id="tooltip" className="form-input ml-3 " type="checkbox" /> <label>No</label>
          </div>
          {/* End */}
        </div>

      
      </div>


      <div className="grid gap-2 md:grid-cols-2">
        <div>
          {/* Start */}
          <div>
            <div className="flex items-center justify-between">
              <label className="block text-sm blod font-medium mb-1 p-2 mt-3" htmlFor="tooltip">
              Do you have a driving license?
              </label>
   
            </div>
            <input id="tooltip" className="form-input " type="checkbox" /> <label>Yes</label>
            <input id="tooltip" className="form-input ml-3 " type="checkbox" /> <label>No</label>
          </div>
          {/* End */}
        </div>

      
      </div>
    

{/* upload image */}
<div className="grid gap-2 md:grid-cols-2">
        <div>
          {/* Start */}
          <div>
            <div className="flex items-center justify-between">
              <label className="block text-sm font-medium mt-3 mb-1 p-2" htmlFor="tooltip">
              Upload image
              </label>
   
            </div>
            <input id="tooltip" className="form-input w-full" type="file" />
          </div>
          {/* End */}
        </div>

        <div>
          {/* Start */}
          <div>
            <div className="flex items-center justify-between">
              <label className="block text-sm font-medium mt-3 mb-1 p-2" htmlFor="tooltip">
              Valid Work Permit
              </label>
   
            </div>
            <input id="tooltip" className="form-input w-full" type="file" />
          </div>
          {/* End */}
        </div>
      </div>
   

      <div className="grid gap-2 md:grid-cols-2">
        <div>
          {/* Start */}
          <div>
            <div className="flex items-center justify-between">
              <label className="block text-sm font-medium mt-3 mb-1 p-2" htmlFor="tooltip">
              Driving License
              </label>
   
            </div>
            <input id="tooltip" className="form-input w-full" type="file" />
          </div>
          {/* End */}
        </div>

    
      </div>

      <div>



</div>

</div>
                        </div>
                        {/* Modal footer */}
                        <div className="px-5 py-4 border-t border-slate-200">
                          <div className="flex flex-wrap justify-end space-x-2">
                            <button className="btn-sm border-slate-200 hover:border-slate-300 text-slate-600" onClick={(e) => { e.stopPropagation(); setFeedbackModalOpen(false); }}>Cancel</button>
                            <button className="btn-sm bg-indigo-500 hover:bg-indigo-600 text-white">Add</button>
                          </div>
                        </div>
                      </ModalBasic>
              </div>

            </div>

              <AllRiderPage allRider={allRider}/>
           
    
            {/* Table */}
            {/* <OrdersTable selectedItems={handleSelectedItems} title={title} CreateOrderCount={CreateOrderCount} /> */}
            {/* <RidersTable selectedItems={handleSelectedItems} title={title} CreateOrderCount={CreateOrderCount} /> */}
            {/* <R  iderTable selectedItems={handleSelectedItems} title={title} CreateOrderCount={CreateOrderCount} /> */}
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

export default CancelOrders;