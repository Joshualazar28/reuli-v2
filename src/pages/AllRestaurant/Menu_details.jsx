import React, { useState, useEffect } from 'react';
import axios from "axios"
import Sidebar from '../../partials/SideBar/Sidebar';
import Header from '../../partials/Header';
import FilterButton from '../../components/DropdownFilter';
import PaginationNumeric from '../../components/PaginationNumeric';
import Datepicker from '../../components/Datepicker';
import ModalBasic from '../../components/ModalBasic';
import DateSelect from '../../components/DateSelect';
import OrdersTable from '../../pages/AllRestaurant/Menu_scale_in/Order';
import RidersTable from '../../partials/RideTable/Approved/OrdersTable';
import RiderTable from '../../partials/Rider/Approved/OrdersTable';
import AllRiderPage from '../../components/AllRiderPage';
import AllRestaurantCard from './AllRestaurantCard';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MeNUDetails from "./Menu_scale_in/MenuDetails"
import { useLocation } from 'react-router-dom';
function CancelOrders() {
  const location = useLocation()
  console.log(location, 'loctijns...')
  const {state} = location
  const {meal} = state
  console.log(meal, 'loctions...')
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);
  const [feedbackModalOpen, setFeedbackModalOpen] = useState(false)
  const handleSelectedItems = (selectedItems) => {
    setSelectedItems([...selectedItems]);
  };
  const title = "Orders Create"
  const CreateOrderCount = '76'
  const [show, setShow] = useState(false);
  const [allRestaurant, setallRestaurant] = useState([])
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  console.log(show, 'sjow')
  const GetAllRest = () => {
    const allRestaurant = axios.get("https://delivigo-api.herokuapp.com/api/v5/restaurants")
    .then(function (response) {
      setallRestaurant(response?.data?.result, 'allRestaurant');
    });
  }
  useEffect(() => {
    GetAllRest()
  }, [])




  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };



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
             
            
              <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
            
               
          

                {/* <button  onClick={handleShow} className="btn bg-indigo-500  hover:bg-indigo-600 text-white">Add Restaurant</button> */}
                {/* Create campaign button */}
              </div>
            </div>
            <MeNUDetails meal={meal}/>
            <ul className="flex flex-wrap -m-1">
    
      <li className="m-1">
        <button  onClick={() => toggleTab(1)}  className={toggleState === 1 ? "inline-flex items-center justify-center text-sm font-medium leading-5 rounded-full px-3 py-1 border border-transparent shadow-sm bg-indigo-500 text-white duration-150 ease-in-out" : "inline-flex items-center justify-center text-sm font-medium leading-5 rounded-full px-3 py-1 border border-transparent shadow-sm bg-white text-slate-500 duration-150 ease-in-out"}>Scales</button>
      </li>
      <li className="m-1">
        <button onClick={() => toggleTab(2)} className={toggleState === 2 ? "inline-flex items-center justify-center text-sm font-medium leading-5 rounded-full px-3 py-1 border border-transparent shadow-sm bg-indigo-500 text-white duration-150 ease-in-out" : "inline-flex items-center justify-center text-sm font-medium leading-5 rounded-full px-3 py-1 border border-transparent shadow-sm bg-white text-slate-500 duration-150 ease-in-out"} >Ingredient</button>
      </li>
    
    
    </ul>
    {toggleState === 1 ? <> <OrdersTable  meal={meal} /> </> : null}  

            {/* <AllRestaurantCard allRestaurant={allRestaurant} /> */}
            {/* Table */}
            {/* <OrdersTable selectedItems={handleSelectedItems} title={title} CreateOrderCount={CreateOrderCount} /> */}
            {/* <RidersTable selectedItems={handleSelectedItems} title={title} CreateOrderCount={CreateOrderCount} /> */}
            {/* <RiderTable selectedItems={handleSelectedItems} title={title} CreateOrderCount={CreateOrderCount} /> */}
            {/* Pagination */}
            <div className="mt-8">
              <PaginationNumeric />
            </div>
<ToastContainer/>
          </div>
        </main>

      </div>
    </div>
  );
}

export default CancelOrders;