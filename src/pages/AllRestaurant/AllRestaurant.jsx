import React, { useState, useEffect } from 'react';
import axios from "axios"
import Sidebar from '../../partials/SideBar/Sidebar';
import Header from '../../partials/Header';
import FilterButton from '../../components/DropdownFilter';
import PaginationNumeric from '../../components/PaginationNumeric';
import Datepicker from '../../components/Datepicker';
import ModalBasic from '../../components/ModalBasic';
import DateSelect from '../../components/DateSelect';
// import OrdersTable from '../../partials/AllTablesFlow/orders/OrdersTable';
import RidersTable from '../../partials/RideTable/Approved/OrdersTable';
import RiderTable from '../../partials/Rider/Approved/OrdersTable';
import AllRiderPage from '../../components/AllRiderPage';
import AllRestaurantCard from './AllRestaurantCard';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function CancelOrders() {
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


  // Create Rest

  const [createRestaurant, setCreateRestaurant] = useState(
    {
      Name: "",
      Email:"",
      Password: "",
      PhoneNumber: "",
      CompanyPer: "",
      TagLine: "",
      ApproximateCostPerPerson: "",
      CountryId: "",
      CityId: "",
      BusinessType: "",
      BusinessId:"",
      RestaurantTagId: [
          "",
          ""
      ],
      RestaurantTypeId: [
          "",
          ""
      ]
    
  }
  )


  const {
    Name,
  Email,
  Password,
  PhoneNumber,
  CompanyPer,
  TagLine,
  ApproximateCostPerPerson,
  CountryId,
  CityId,
  BusinessTypetaurant,
  BusinessIdw323,
  BusinessId
} =  createRestaurant

  
  const onChangeRest = (e) =>
  setCreateRestaurant({ ...createRestaurant, [e.target.name]: e.target.value });
  console.log(createRestaurant,'createRestaurant')
  const HandleCreateRest = ( ) => {
   console.log(createRestaurant,'createRestaurant')
    fetch(`https://delivigo-api.herokuapp.com/api/v5/restaurant/admin/singup`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({

        "Name": "reilu res",
        "Email": "amenamen5@reilu.com",
        "Password": "aaaaaa",
        "PhoneNumber": "+3234234",
        "CompanyPer": "10",
        "TagLine": "ass",
        "ApproximateCostPerPerson": "€",
        "CountryId": "1",
        "CityId": "1",
        "BusinessType": "restaurant",
        "BusinessId":"ksakw323",
        "RestaurantTagId": [
            "1",
            "3"
        ],
      
        "RestaurantTypeId": [
            "2",
            "1"
        ]
        // Name: Name,
        // Email:Email,
        // Password:Password,
        // PhoneNumber: PhoneNumber,
        // // CompanyPer: CompanyPer,
        // CompanyPer:CompanyPer ,
        // TagLine: TagLine,
        // ApproximateCostPerPerson: ApproximateCostPerPerson,
        // CountryId: "1",
        // CityId: "1",
      
        // BusinessId:BusinessId,
        // RestaurantTagId: [
        //     "1",
        //     "3"
        // ],
        // RestaurantTypeId: [
        //     "2",
        //     "1"
        // ]
    
    }),
    })
      .then((res) => res.json())
      .then((data) => {
        data?.ResultMessages?.map((message) => {
          if(message?.MessageType === 'success') {

            toast.success(message.Message, {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
              });
              setFeedbackModalOpen(false)
              GetAllRest()
          }
          else if(message?.MessageType === 'danger')
          {
            toast.error(message.Message, {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
              });
          }
        })
        console.log(data, 'move watching.....')
      })
  }

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
              <div className="mb-4 sm:mb-0 flex justify-around">
                <h1 className="text-2xl  md:text-3xl text-indigo-500 font-bold">All Restaurant</h1>
                <div class="relative">
                  <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <svg aria-hidden="true" class="w-5 h-5 ml-2 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                  </div>
                  <input type="search" id="default-search"
                    class="block p-2 pl-12 px-5  ml-3 w-full text-sm text-gray-900 bg-white  rounded-xl border border-gray-300 focus:ring-blue-500 focus:border-blue-500  dark:border-gray-600 dark:placeholder-gray-400 dark:text-slate-500 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required />
                </div>
              </div>
              {/* Right: Actions */}
              <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
                {/* Filter button */}
                <FilterButton align="right" />
                {/* Datepicker built with flatpickr */}
                {/* <Datepicker align="right" /> */}
                <div className="m-1.5">
                  {/* Start */}
                  <button className="btn bg-indigo-500 hover:bg-indigo-600 text-white" aria-controls="feedback-modal" onClick={(e) => { e.stopPropagation(); setFeedbackModalOpen(true); }}>Add  Restaurant</button>
                  <ModalBasic id="feedback-modal" modalOpen={feedbackModalOpen} setModalOpen={setFeedbackModalOpen} title="Add new Restaurant">
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
                                Restaurant Name
                              </label>
                              <input id="default" className="form-input w-full" placeholder='Restaurant Name' name='Name' value={Name}   onChange={onChangeRest} type="text" />
                            </div>
                            {/* End */}
                          </div>

                          <div>
                            {/* Start */}
                            <div>
                              <div className="flex items-center justify-between">
                                <label className="block text-sm font-medium mb-1 p-2" htmlFor="tooltip">
                                  Email
                                </label>

                              </div>
                              <input id="tooltip"  name='Email' value={Email}   onChange={onChangeRest} className="form-input w-full" type="text" />
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
                                  Password
                                </label>

                              </div>
                              <input id="tooltip" name='Password' value={Password}   onChange={onChangeRest} className="form-input w-full" type="text" />
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
                              <input id="tooltip" name='PhoneNumber' value={PhoneNumber}   onChange={onChangeRest} className="form-input w-full" type="text" />
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
                                  Company Percentage
                                </label>

                              </div>
                              <input id="tooltip"  name='CompanyPer' value={CompanyPer}   onChange={onChangeRest} className="form-input w-full" type="text" />
                            </div>
                            {/* End */}
                          </div>

                          <div>
                            {/* Start */}
                            <div>
                              <div className="flex items-center justify-between">
                                <label className="block text-sm font-medium mb-1 p-2" htmlFor="tooltip">
                                  Approximate cost per person
                                </label>

                              </div>
                              <select name='ApproximateCostPerPerson' value={ApproximateCostPerPerson}  onChange={onChangeRest} className="form-input w-full" >
                                <option value="€">€</option>
                                <option value="€€">€€</option>
                                <option value="€€€">€€€</option>
                                <option value="€€€€">€€€€</option>
                           
                              </select>
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
                                  Tag Line
                                </label>

                              </div>
                              <input name='TagLine' value={TagLine}   onChange={onChangeRest} id="tooltip" className="form-input w-full" type="text" />
                            </div>
                            {/* End */}
                                  <div>
                              <div className="flex items-center justify-between">
                                <label className="block text-sm font-medium mb-1 p-2" htmlFor="tooltip">
                                BusinessId
                                </label>

                              </div>
                              <input name='BusinessId' value={BusinessId}   onChange={onChangeRest} id="tooltip" className="form-input w-full" type="text" />
                            </div>
                          </div>

                          <div>
                            {/* Start */}
                            <div>
                              <div className="flex items-center justify-between">
                                <label className="block text-sm font-medium mb-1 p-2" htmlFor="tooltip">
                                  Tags
                                </label>

                              </div>
                              <select className="form-input w-full" >
                                <option value="Tags">Tags</option>
                                <option value="Tags">Tags</option>
                                <option value="Tags">Tags</option>
                                <option value="Tags">Tags</option>
                                <option value="Tags">Tags</option>
                              </select>
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
                                  Restaurant Type
                                </label>

                              </div>
                              <select className="form-input w-full" >
                                <option value="Restaurant Type">Restaurant Type</option>
                                <option value="Restaurant Type">Restaurant Type</option>
                                <option value="Restaurant Type">Restaurant Type</option>
                                <option value="Restaurant Type">Restaurant Type</option>
                                <option value="Restaurant Type">Restaurant Type</option>
                              </select>
                            </div>
                            {/* End */}
                          </div>

                          <div>
                            {/* Start */}
                            <div>
                              <div className="flex items-center justify-between">
                                <label className="block text-sm font-medium mb-1 p-2" htmlFor="tooltip">
                                  Country
                                </label>

                              </div>
                              <select  name='CountryId' value={CountryId}   onChange={onChangeRest} className="form-input w-full" >
                                <option value="Finland">Finland</option>
                                <option value="Germany">Germany</option>

                              </select>
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
                            {/* End */}
                          </div>


                        </div>


                        <div className="grid gap-2 md:grid-cols-2">
                          <div>
                            {/* Start */}
                            <div>
                              <div className="flex items-center justify-between">
                                <label className="block text-sm font-medium mb-1 p-2" htmlFor="tooltip">
                                  Upload image
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
                        <button onClick={HandleCreateRest} className="btn-sm bg-indigo-500 hover:bg-indigo-600 text-white">Add</button>
                      </div>
                    </div>
                  </ModalBasic>
                  {/* End */}
                </div>
                {/* <button  onClick={handleShow} className="btn bg-indigo-500  hover:bg-indigo-600 text-white">Add Restaurant</button> */}
                {/* Create campaign button */}
              </div>
            </div>
            <AllRestaurantCard allRestaurant={allRestaurant} />
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