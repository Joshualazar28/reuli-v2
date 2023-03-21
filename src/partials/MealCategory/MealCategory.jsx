import React, {useState} from 'react'
import Sidebar from "../SideBar/Sidebar"
import Header from '../Header';
import FilterButton from '../../components/DropdownFilter';
import ModalBasic from '../../components/ModalBasic';
import PaginationNumeric from '../../components/PaginationNumeric';
import Datepicker from '../../components/Datepicker';
import DateSelect from '../../components/DateSelect';
import OrdersTable from  "./OrderMeal"
const MealCategory = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);
  const [feedbackModalOpen, setFeedbackModalOpen] = useState(false)
  const handleSelectedItems = (selectedItems) => {
    setSelectedItems([...selectedItems]);
  };
  const  title = "Orders Create"
  const CreateOrderCount  = '76'
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div  className="flex h-screen overflow-hidden">
      
      <Sidebar/>   
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
      <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <main>

          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">

            {/* Page header */}
            <div className="sm:flex sm:justify-between sm:items-center mb-8">

              {/* Left: Title */}
              <div className="mb-4 sm:mb-0 flex justify-around">
                <h1 className="text-2xl  md:text-3xl text-indigo-500 font-bold"> Meal Category </h1>
                <div class="relative">
        <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" class="w-5 h-5 ml-2 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </div>
        <input type="search" id="default-search" class="block p-2 pl-12 px-5  ml-3 w-full text-sm text-gray-900 bg-gray-50 rounded-xl border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required/>
             </div>
              </div>

              {/* Right: Actions */}
              <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
                
                {/* Filter button */}
                <FilterButton align="right" />
               {/* Datepicker built with flatpickr */}
               <div className="m-1.5">
                      {/* Start */}
                      <button className="btn bg-indigo-500 hover:bg-indigo-600 text-white" aria-controls="feedback-modal" onClick={(e) => { e.stopPropagation(); setFeedbackModalOpen(true); }}>Add  Restaurant</button>
                      <ModalBasic  id="feedback-modal" modalOpen={feedbackModalOpen} setModalOpen={setFeedbackModalOpen} title="Add Meal Category">
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
            Add Meal Category
            </label>
            <input id="default" className="form-input w-full"  placeholder='Restaurant Name' type="file" />
          </div>
          {/* End */}
        </div>
      
        <div>
          {/* Start */}
         
          {/* End */}
        </div>

      </div>




 
      <div>
          {/* Start */}
          <div>
            <div className="flex items-center justify-between">
              <label className="block text-sm font-medium mb-1 p-2" htmlFor="tooltip">
              Meal Name
              </label>
       
            </div>
            <input id="tooltip" className="form-input w-full" type="text" />
          </div>
          {/* End */}
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
                      {/* End */}
                    </div>
              
              </div>

            </div>
         
            <OrdersTable selectedItems={handleSelectedItems} title={title} CreateOrderCount={CreateOrderCount} />
            {/* Table */}
            {/* <OrdersTable selectedItems={handleSelectedItems} title={title} CreateOrderCount={CreateOrderCount} /> */}
            {/* <RidersTable selectedItems={handleSelectedItems} title={title} CreateOrderCount={CreateOrderCount} /> */}
            {/* <RestaurantTable selectedItems={handleSelectedItems} title={title} CreateOrderCount={CreateOrderCount} /> */}
            {/* Pagination */}
            <div className="mt-8">
              {/* <PaginationNumeric /> */}
            </div>

          </div>
        </main> 
        </div>    

      

    </div>
  )
}

export default MealCategory