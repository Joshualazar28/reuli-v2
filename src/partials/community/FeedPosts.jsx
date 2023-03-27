import React, { useState, useEffect } from 'react';
import {
  Popover,
  PopoverHandler,
  PopoverContent,
  Button,
} from "@material-tailwind/react";
import ModalBasic from '../../components/ModalBasic';
import axios  from 'axios';
import moment from 'moment';
import { Link } from "react-router-dom";
// import EditMenu from "../../components/DropdownEditMenu";

// import UserImage02 from "../../images/user-40-02.jpg";
import UserImage03 from "../../../src/images/rustrantname.png";
// import UserImage04 from "../../images/user-40-04.jpg";
// import UserImage06 from "../../images/user-40-06.jpg";
// import UserImage08 from "../../images/user-40-08.jpg";
// import CommenterImage04 from "../../images/user-32-04.jpg";
// import CommenterImage05 from "../../images/user-32-05.jpg";
// import FeedImage01 from "../../images/feed-image-01.jpg";
// import FeedImage02 from "../../images/feed-image-02.jpg";
// import AccordionBasic from "../../components/AccordionBasic";

function FeedPosts({ foodmealid, datasend , FoodReady, acecptres}) {
console.log(FoodReady, 'FoodReady')


  const [open, setOpen] = useState(false);

  console.log('uhi  amen')

  const [show, setShow] = useState(false);
  const [allRestaurant, setallRestaurant] = useState([])
  const [allonlinedriver, setallonlinedriver] = useState([])
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [feedbackModalOpen, setFeedbackModalOpen] = useState(false)
  



    useEffect(() => {
      axios.get(`https://delivigo-api.herokuapp.com/api/online-drivers`)
        .then(response => {

          setallonlinedriver(response.data.result)
         
          // setFoodCOUNT(response.data.Count)
        })
        .catch(error => console.log(error));
    }, []);



    const HandleCom = (e, driver) => {
   

      // axios.get(`https://delivigo-api.herokuapp.com/api/v5/order/assign/admin?orderId=F21671B2-C9AD-47E3-BBE8-083A46F9EDD2&driverId=164`)
      axios.get(`https://delivigo-api.herokuapp.com/api/v5/order/assign/admin?orderId=${foodmealid.orderId}&driverId=${driver.Id}`)
        .then(response => {

          alert('asgin the  order')


         
          // setFoodCOUNT(response.data.Count)
        })
        .catch(error => console.log(error));
    }


  


  return (
    <>
                   <ModalBasic   className="max-w-xl w-full max-h-full" id="feedback-modal" modalOpen={feedbackModalOpen} setModalOpen={setFeedbackModalOpen} title="Assign Rider">
                    {/* Modal content */}
                   
                   <div className='px-5 py-4'>
                   <section className="pb-6 border-b border-slate-200">
                      <div className="grid grid-cols-12 gap-4">
            {/* Card 1 */}
            {allonlinedriver?.map((driver, index) => {
              return (
                <div className="col-span-full xl:col-span-6 2xl:col-span-4 bg-white shadow-md rounded-sm border border-slate-200">
                {/* Card content */}
                <div className="flex flex-col h-full p-3">
                  <div className="grow">
                    <header className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-full shrink-0 bg-gradient-to-tr from-indigo-500 to-indigo-300 mr-3">
                      <svg class="w-10 h-10 fill-current text-white" viewBox="0 0 40 40"><path d="M26.946 18.005a.583.583 0 00-.53-.34h-6.252l.985-3.942a.583.583 0 00-1.008-.52l-7 8.167a.583.583 0 00.442.962h6.252l-.984 3.943a.583.583 0 001.008.52l7-8.167a.583.583 0 00.087-.623z"></path></svg>
                      </div>
                      <h3 className="text-lg text-slate-800 font-semibold">{driver?.FullName?driver?.FullName:"not found"}</h3>
                    </header>
                    
                  </div>
                  {/* Card footer */}
                  <footer className="mt-4">
                    <div className="flex flex-wrap justify-between items-center">
                      {/* Left side */}
                      <div className="flex space-x-3">
                        <div className="flex items-center text-slate-400">
                        <span style={{fontWeight:"900"}}>Orders Done</span>
                        <svg className="w-3 h-3 shrink-0 fill-current text-emerald-500 mr-2" viewBox="0 0 12 12">
                          <path d="M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z" />
                        </svg>
                          <div className="text-sm text-slate-500">{driver?.OrderCount}</div>
                        </div>
                        <div className="flex items-center text-amber-500">
                          <svg className="w-4 h-4 shrink-0 fill-current mr-1.5" viewBox="0 0 16 16">
                            <path d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
                          </svg>
                          <div className="text-sm text-amber-600">4.7</div>
                        </div>
                      </div>
                      {/* Right side */}
                      <button onClick={(e) => HandleCom(e, driver)} className="btn-sm border-slate-200 hover:border-slate-300 shadow-sm flex items-center">
                        <svg className="w-3 h-3 shrink-0 fill-current text-emerald-500 mr-2" viewBox="0 0 12 12">
                          <path d="M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z" />
                        </svg>
                        <span>Assign</span>
                      </button>
                    </div>
                 
                  </footer>
                </div>
              </div>
              )
            })}



            





          </div>
        </section>
                   </div>
                    {/* Modal footer */}
                    <div className="px-5 py-4 border-t border-slate-200">
                      <div className="flex flex-wrap justify-end space-x-2">
                        <button className="btn-sm border-slate-200 hover:border-slate-300 text-slate-600" onClick={(e) => { e.stopPropagation(); setFeedbackModalOpen(false); }}>Cancel</button>
                       
                      </div>
                    </div>
                  </ModalBasic>
      {/* Post 1 */}

          




{/* acept res */}
{acecptres ? <>     
       <div
        className="bg-white shadow-md rounded border border-slate-200 p-5"
        style={{ width: "600px", marginTop: "30px", marginLeft:"60px", borderRadius:"30px" }}
      >
    
        <header className="flex justify-between items-start space-x-3 mb-3">
        
          <div className="flex items-start space-x-3">
            <img
              className="rounded-full shrink-0"
              src={UserImage03}
              width="50"
              height="50"
              alt="User 03"
            />
            <div>
              <div className="leading-tight">
                <a className="text-lg font-semibold text-slate-800" href="#0">
                  {acecptres?.RestaurantName?acecptres?.RestaurantName:"not found"} 
                </a>
              </div>
              <div className="text-xs text-slate-500"></div>
            </div>
          </div>
          {/* Menu button */}
          {/* <EditMenu align="right" className="relative inline-flex shrink-0">
            <li>
              <Link
                className="font-medium text-sm text-slate-600 hover:text-slate-800 flex py-1 px-3"
                to="#0"
              >
                Edit
              </Link>
            </li>
            <li>
              <Link
                className="font-medium text-sm text-rose-500 hover:text-rose-600 flex py-1 px-3"
                to="#0"
              >
                Remove
              </Link>
            </li>
          </EditMenu> */}
                 <svg xmlns="http://www.w3.org/2000/svg" class="icn-arr icon  icon-tabler icon-tabler-arrow-bar-to-down" width="44" height="44" marginLeft="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="4" y1="20" x2="20" y2="20" />
  <line x1="12" y1="14" x2="12" y2="4" />
  <line x1="12" y1="14" x2="16" y2="10" />
  <line x1="12" y1="14" x2="8" y2="10" />
       </svg>
     <button align="right" className="btn bg-indigo-500 hover:bg-indigo-600 text-white">{acecptres?.ETATime}</button>
        </header>
        {/* Body */}
        {/* {datasend?Scales.map((scale) => { */}
          {/* return (  */}
          {acecptres?.Scales?.map((scale) => {
            console.log(scale,'checking')
            return (
              <div className="text-sm text-slate-800 space-y-2 mb-5">
   
              <label className="relative block cursor-pointer text-left w-full">
           <input type="radio" name="radio-buttons" className="peer sr-only" />
           <div className="p-4 rounded shadow-sm duration-150 ease-in-out">
             <div className="grid grid-cols-12 items-center gap-x-2">
               {/* Card */}
               <div className="col-span-6 order-1 sm:order-none sm:col-span-3 flex items-center space-x-4 lg:sidebar-expanded:col-span-8 xl:sidebar-expanded:col-span-8">
                 <div>
                   <div className="text-sm font-medium text-slate-800 one_feed'">
                     <span className="one_feed"> {scale?.Quantity}</span>{" "}
                     <span className="one_feed">x</span>
                     <span className="one_feed">{scale?.Name?scale?.Name:"not Found"}</span>
                   </div>
                 </div>
               </div>
  
               <div className="right col-span-6 order-1 sm:order-none sm:col-span-4 text-right sm:text-center lg:sidebar-expanded:col-span-6 xl:sidebar-expanded:col-span-4">
                 <div className="text-sm price_card">€{scale.UnitPrice}</div>
               </div>
             </div>
             
             {scale.Ingredients?.map((obj) => {
              console.log(obj.IngredientsType, 'sssss')
              return (
                <div>
                  <h3>{obj.Name}</h3>
                <div className="grid grid-cols-12 items-center gap-x-2">
                {/* Card */}
                
             
             
                {obj?.IngredientsType?.map((item) => {
                  console.log(item, 'map items');
                    return (
  
                <div className="col-span-6 order-1 sm:order-none sm:col-span-3 flex items-center space-x-4 lg:sidebar-expanded:col-span-8 xl:sidebar-expanded:col-span-8">
                  <div>
               
              
                      <div className="text-sm font-medium text-slate-800 one_feed'">
                      {/* <div className="flex flex-shrink-0 ml-2"> */}
                  
                      <span className="inline-flex items-center justify-center h-5 text-xs font-medium text-white bg-indigo-500 px-2 rounded">
                       {item.Quantity}
                      </span>
                      {/* </div> */}
   
                      <span className="one_feed">x</span>
                      <span className="one_feed two_feed_text">
                      {item?.Name?item.Name:"NOT FOUND "}

                      </span>
                    </div>
       
  
                  </div>
                  <div className="right col-span-6 order-1 sm:order-none sm:col-span-4 text-right sm:text-center lg:sidebar-expanded:col-span-6 xl:sidebar-expanded:col-span-4">
                  <div className="text-sm price_card price_card_two ">
                    {item.UnitPrice > 0 ? `+€ ${item.UnitPrice} ` : null}
                  </div>
                </div>
                </div>
  
              
               )
              })} 
   
  
  
  
  
              </div>
              </div>

              )
             })}
  
  
  
           </div>
           <div
             className="absolute inset-0 border-2 border-transparent peer-checked:border-indigo-400 rounded pointer-events-none"
             aria-hidden="true"
           />
         </label>
         {scale?.Notes?<>         <article
          style={{ background: "#F6F6F6", borderRadius: "10px" }}
          className="bg-white shadow-md rounded border border-slate-200 p-5"
        >
          <div className="flex flex-start space-x-4">
            <div className="grow">
              <h2 className="font-semibold text-slate-00 order_textt" >
              {scale?.Notes?scale?.Notes:null}
              </h2>
            </div>
          </div>
        </article></>:null}

  
              </div>
            )
          })}
 
          {/* )
        })} */}




        <label className="relative block cursor-pointer text-left w-full">
          <input type="radio" name="radio-buttons" className="peer sr-only" />
          <div   style={{ background: "#F6F6F6", borderRadius: "10px" }} className="p-4 mt-5 rounded shadow-sm duration-150 ease-in-out">
            <div className="grid grid-cols-12 items-center gap-x-2">
              {/* Card */}
        
             
            </div>


            <div className="grid grid-cols-12 items-center gap-x-2">
              {/* Card */}
              <div className="col-span-6 order-1 sm:order-none sm:col-span-3 flex items-center space-x-4 lg:sidebar-expanded:col-span-8 xl:sidebar-expanded:col-span-8">
                <div>
                  <div className="text-sm font-medium text-slate-800 one_feed'">
                    <span className="one_feed">itemSub Total </span>
                  </div>
                </div>
              </div>
            {acecptres?.ItemSubTotal > 0 ? <> 
              <div className="right col-span-6 order-1 sm:order-none sm:col-span-4 text-right sm:text-center lg:sidebar-expanded:col-span-6 xl:sidebar-expanded:col-span-4">
                <div className="text-sm price_card">€{acecptres?.ItemSubTotal}</div>
              </div>
            </> : null }
            
            </div>


            <div className="grid grid-cols-12 items-center gap-x-2">
              {/* Card */}
              <div className="col-span-6 order-1 sm:order-none sm:col-span-3 flex items-center space-x-4 lg:sidebar-expanded:col-span-8 xl:sidebar-expanded:col-span-8">
                <div>
                  <div className="text-sm font-medium text-slate-800 one_feed'">
                    <span className="one_feed">BasicDeliveryFee</span>
                  </div>
                </div>
              </div>
                {acecptres?.BasicDeliveryFee > 0 ? <>
                  <div className="right col-span-6 order-1 sm:order-none sm:col-span-4 text-right sm:text-center lg:sidebar-expanded:col-span-6 xl:sidebar-expanded:col-span-4">
              <div className="text-sm price_card">€{acecptres?.BasicDeliveryFee}</div>
              </div>
                </> : null}
            
            </div>
            <div className="grid grid-cols-12 items-center gap-x-2">
              {/* Card */}
              <div className="col-span-6 order-1 sm:order-none sm:col-span-3 flex items-center space-x-4 lg:sidebar-expanded:col-span-8 xl:sidebar-expanded:col-span-8">
                <div>
                  <div className="text-sm font-medium text-slate-800 one_feed'">
                    <span className="one_feed">ExtraKMDeliveryFee</span>
                  </div>
                </div>
              </div>
                
                {acecptres?.ExtraKMDeliveryFee > 0 ? <>
                  <div className="right col-span-6 order-1 sm:order-none sm:col-span-4 text-right sm:text-center lg:sidebar-expanded:col-span-6 xl:sidebar-expanded:col-span-4">
              <div className="text-sm price_card">€{acecptres?.ExtraKMDeliveryFee}</div>
              </div>
                </> :null}
            
            </div>

 

            <div className="grid grid-cols-12 items-center gap-x-2">
              {/* Card */}
              <div className="col-span-6 order-1 sm:order-none sm:col-span-3 flex items-center space-x-4 lg:sidebar-expanded:col-span-8 xl:sidebar-expanded:col-span-8">
                <div>
                  <div className="text-sm font-medium text-slate-800 one_feed'">
                    <span className="one_feed">Total</span>
                  </div>
                </div>
              </div>

              <div className="right col-span-6 order-1 sm:order-none sm:col-span-4 text-right sm:text-center lg:sidebar-expanded:col-span-6 xl:sidebar-expanded:col-span-4">
              <div className="text-sm price_card">€{acecptres.TotalPrice}</div>
              </div>
            </div>

          </div>
          <div
            className="absolute inset-0 border-2 border-transparent peer-checked:border-indigo-400 rounded pointer-events-none"
            aria-hidden="true"
          />
        </label>
        <div className="mt-5">
    
          <div className=" relative px-5 py-4 rounded-sm border border-slate-200">
      <button
        className="flex items-center justify-between w-full group mb-1"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        <div className="relative  text-md text-blod text-slate-800 font-medium">Order History</div>
        <svg className={`w-8 h-8 shrink-0 fill-current text-slate-400 group-hover:text-slate-500 ml-3 ${open && 'rotate-180'}`} viewBox="0 0 32 32">
          <path d="M16 20l-5.4-5.4 1.4-1.4 4 4 4-4 1.4 1.4z" />
        </svg>
      </button>
      <div className={`text-sm ${!open && 'hidden'}`}>
      <div className="col-span-6 order-1 sm:order-none sm:col-span-3 flex items-center space-x-4 lg:sidebar-expanded:col-span-8 xl:sidebar-expanded:col-span-8">
                  <div>
                    <div className="text-sm font-medium text-slate-800 one_feed'">
                      {" "}
                      <span className="inline-flex items-center justify-center h-5 text-xs font-medium text-black bg-indigo-500 px-2" style={{borderRadius:"100%", width:"20px", height:"20px"}}>
                      
                      </span>
                     
                      <span className="one_feed text-sm" style={{position:"relative", top:"-5px", fontSize:"14px"}}>
                      Order Create
                      </span>
                    </div>

                    <div className="text-sm font-medium text-slate-800 one_feed'" style={{position:"relative", top:"-15px"}}>
                      {" "}
                     
                     
                      <span className="one_feed text-sm" style={{position:"relative", top:"-5px", fontSize:"14px",left:"20px"}}>
                      {moment(acecptres?.CreatedDate).format('MMMM Do YYYY')}
                      </span>
                    </div>
{/* /////////////////////////////////////////// */}
                    <div className="text-sm font-medium text-slate-800 one_feed" style={{marginTop:'-27px',marginLeft:'-10px'}}>
                      {" "}
                      <span className="inline-flex items-center justify-center h-5 text-xs font-medium text-black bg-indigo-500 px-2" style={{borderRadius:"100%", width:"20px", height:"20px"}}>
                      
                      </span>
                     
                      <span className="one_feed text-sm" style={{position:"relative", top:"-5px",lineHeight:"10px", fontSize:"14px"}}>
                      Order received
                      </span>
                    </div>

                    <div className="text-sm font-medium text-slate-800 one_feed'" style={{position:"relative", top:"-15px",left:"20px"}}>
                      {" "}
                     
                     
                      <span className="one_feed text-sm" style={{position:"relative", top:"-5px", fontSize:"14px"}}>
                      {moment(acecptres?.OrderPlaceTime).format('MMMM Do YYYY')}
                      </span>
                    </div>
                    {/* /////////////////////////// */}

                    <div className="text-sm font-medium text-slate-800 one_feed" style={{marginTop:'-27px',marginLeft:'-10px'}}>
                      {" "}
                      <span className="inline-flex items-center justify-center h-5 text-xs font-medium text-black bg-indigo-500 px-2" style={{borderRadius:"100%", width:"20px", height:"20px"}}>
                      
                      </span>
                     
                      <span className="one_feed text-sm" style={{position:"relative", top:"-5px",lineHeight:"10px", fontSize:"14px"}}>
                      Restaurant Accept order
                      </span>
                    </div>

                    <div className="text-sm font-medium text-slate-800 one_feed'" style={{position:"relative", top:"-15px"}}>
                      {" "}
                     
                     
                      <span className="one_feed text-sm" style={{position:"relative", top:"-5px", fontSize:"14px",left:"20px"}}>
                      {moment(acecptres?.OrderAcceptTime).format('MMMM Do YYYY')}
                      </span>
                    </div> 

                    {/* ......././/.././././././././/./././ */}
                    <div className="text-sm font-medium text-slate-800 one_feed" style={{marginTop:'-27px',marginLeft:'-10px'}}>
                      {" "}
                      <span className="inline-flex items-center justify-center h-5 text-xs font-medium text-black bg-indigo-500 px-2" style={{borderRadius:"100%", width:"20px", height:"20px"}}>
                      
                      </span>
                     
                      <span className="one_feed text-sm" style={{position:"relative", top:"-5px",lineHeight:"10px", fontSize:"14px"}}>
                      Restaurant Add time
                      </span>
                    </div>

                    <div className="text-sm font-medium text-slate-800 one_feed'" style={{position:"relative", top:"-15px"}}>
                      {" "}
                     
                     
                    
                    </div>
                  {/* ..../././/./././././.. */}




                  </div>
                </div>
      </div>
    </div>
        </div>
        <div className="mb-3 flex justify-end mt-4">
        <Popover placement="top">
          <PopoverHandler>
            <Button variant="gradient" className='bg-indigo-600'>Change Status</Button>
          </PopoverHandler>
          <PopoverContent>
            <button 
            //  onClick={(e) => { e.stopPropagation(); setFeedbackModalOpen(true); }}
            // onClick={() => setOpen(true)}
              className='mr-5'>Food Ready</button>
          </PopoverContent>
        </Popover>
        </div>
      </div> </> :  null }

{/* Food Ready*/}

{FoodReady ? <>     
       <div
        className="bg-white shadow-md rounded border border-slate-200 p-5"
        style={{ width: "600px", marginTop: "30px", marginLeft:"60px", borderRadius:"30px" }}
      >
    
        <header className="flex justify-between items-start space-x-3 mb-3">
        
          <div className="flex items-start space-x-3">
            <img
              className="rounded-full shrink-0"
              src={UserImage03}
              width="50"
              height="50"
              alt="User 03"
            />
            <div>
              <div className="leading-tight">
                <a className="text-lg font-semibold text-slate-800" href="#0">
                  {FoodReady?.RestaurantName?FoodReady?.RestaurantName:"not found"} 
                </a>
              </div>
              <div className="text-xs text-slate-500"></div>
            </div>
          </div>
          {/* Menu button */}
          {/* <EditMenu align="right" className="relative inline-flex shrink-0">
            <li>
              <Link
                className="font-medium text-sm text-slate-600 hover:text-slate-800 flex py-1 px-3"
                to="#0"
              >
                Edit
              </Link>
            </li>
            <li>
              <Link
                className="font-medium text-sm text-rose-500 hover:text-rose-600 flex py-1 px-3"
                to="#0"
              >
                Remove
              </Link>
            </li>
          </EditMenu> */}
                 <svg xmlns="http://www.w3.org/2000/svg" class="icn-arr icon  icon-tabler icon-tabler-arrow-bar-to-down" width="44" height="44" marginLeft="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="4" y1="20" x2="20" y2="20" />
  <line x1="12" y1="14" x2="12" y2="4" />
  <line x1="12" y1="14" x2="16" y2="10" />
  <line x1="12" y1="14" x2="8" y2="10" />
       </svg>
     <button align="right" className="btn bg-indigo-500 hover:bg-indigo-600 text-white">{FoodReady?.ETATime}</button>
        </header>
        {/* Body */}
        {/* {datasend?Scales.map((scale) => { */}
          {/* return (  */}
          {FoodReady?.Scales?.map((scale) => {
            console.log(scale,'checking')
            return (
              <div className="text-sm text-slate-800 space-y-2 mb-5">
   
              <label className="relative block cursor-pointer text-left w-full">
           <input type="radio" name="radio-buttons" className="peer sr-only" />
           <div className="p-4 rounded shadow-sm duration-150 ease-in-out">
             <div className="grid grid-cols-12 items-center gap-x-2">
               {/* Card */}
               <div className="col-span-6 order-1 sm:order-none sm:col-span-3 flex items-center space-x-4 lg:sidebar-expanded:col-span-8 xl:sidebar-expanded:col-span-8">
                 <div>
                   <div className="text-sm font-medium text-slate-800 one_feed'">
                     <span className="one_feed"> {scale?.Quantity}</span>{" "}
                     <span className="one_feed">x</span>
                     <span className="one_feed">{scale?.Name?scale?.Name:"not Found"}</span>
                   </div>
                 </div>
               </div>
  
               <div className="right col-span-6 order-1 sm:order-none sm:col-span-4 text-right sm:text-center lg:sidebar-expanded:col-span-6 xl:sidebar-expanded:col-span-4">
                 <div className="text-sm price_card">€{scale.UnitPrice}</div>
               </div>
             </div>
             
             {scale.Ingredients?.map((obj) => {
              console.log(obj.IngredientsType, 'sssss')
              return (
                <div>
                  <h3>{obj.Name}</h3>
                <div className="grid grid-cols-12 items-center gap-x-2">
                {/* Card */}
                
             
             
                {obj?.IngredientsType?.map((item) => {
                  console.log(item, 'map items');
                    return (
  
                <div className="col-span-6 order-1 sm:order-none sm:col-span-3 flex items-center space-x-4 lg:sidebar-expanded:col-span-8 xl:sidebar-expanded:col-span-8">
                  <div>
               
              
                      <div className="text-sm font-medium text-slate-800 one_feed'">
                      {/* <div className="flex flex-shrink-0 ml-2"> */}
                  
                      <span className="inline-flex items-center justify-center h-5 text-xs font-medium text-white bg-indigo-500 px-2 rounded">
                       {item.Quantity}
                      </span>
                      {/* </div> */}
   
                      <span className="one_feed">x</span>
                      <span className="one_feed two_feed_text">
                      {item?.Name?item.Name:"NOT FOUND "}

                      </span>
                    </div>
       
  
                  </div>
                  <div className="right col-span-6 order-1 sm:order-none sm:col-span-4 text-right sm:text-center lg:sidebar-expanded:col-span-6 xl:sidebar-expanded:col-span-4">
                  <div className="text-sm price_card price_card_two ">
                    {item.UnitPrice > 0 ? `+€ ${item.UnitPrice} ` : null}
                  </div>
                </div>
                </div>
  
              
               )
              })} 
   
  
  
  
  
              </div>
              </div>

              )
             })}
  
  
  
           </div>
           <div
             className="absolute inset-0 border-2 border-transparent peer-checked:border-indigo-400 rounded pointer-events-none"
             aria-hidden="true"
           />
         </label>
         {scale?.Notes?<>         <article
          style={{ background: "#F6F6F6", borderRadius: "10px" }}
          className="bg-white shadow-md rounded border border-slate-200 p-5"
        >
          <div className="flex flex-start space-x-4">
            <div className="grow">
              <h2 className="font-semibold text-slate-00 order_textt" >
              {scale?.Notes?scale?.Notes:null}
              </h2>
            </div>
          </div>
        </article></>:null}

  
              </div>
            )
          })}
 
          {/* )
        })} */}




        <label className="relative block cursor-pointer text-left w-full">
          <input type="radio" name="radio-buttons" className="peer sr-only" />
          <div   style={{ background: "#F6F6F6", borderRadius: "10px" }} className="p-4 mt-5 rounded shadow-sm duration-150 ease-in-out">
            <div className="grid grid-cols-12 items-center gap-x-2">
              {/* Card */}
        
             
            </div>


            <div className="grid grid-cols-12 items-center gap-x-2">
              {/* Card */}
              <div className="col-span-6 order-1 sm:order-none sm:col-span-3 flex items-center space-x-4 lg:sidebar-expanded:col-span-8 xl:sidebar-expanded:col-span-8">
                <div>
                  <div className="text-sm font-medium text-slate-800 one_feed'">
                    <span className="one_feed">itemSub Total </span>
                  </div>
                </div>
              </div>

              <div className="right col-span-6 order-1 sm:order-none sm:col-span-4 text-right sm:text-center lg:sidebar-expanded:col-span-6 xl:sidebar-expanded:col-span-4">
                <div className="text-sm price_card">€{FoodReady?.ItemSubTotalSUB}</div>
              </div>
            </div>


            <div className="grid grid-cols-12 items-center gap-x-2">
              {/* Card */}
              <div className="col-span-6 order-1 sm:order-none sm:col-span-3 flex items-center space-x-4 lg:sidebar-expanded:col-span-8 xl:sidebar-expanded:col-span-8">
                <div>
                  <div className="text-sm font-medium text-slate-800 one_feed'">
                    <span className="one_feed">BasicDeliveryFee</span>
                  </div>
                </div>
              </div>

              <div className="right col-span-6 order-1 sm:order-none sm:col-span-4 text-right sm:text-center lg:sidebar-expanded:col-span-6 xl:sidebar-expanded:col-span-4">
              <div className="text-sm price_card">€{FoodReady?.BasicDeliveryFee}</div>
              </div>
            </div>
            <div className="grid grid-cols-12 items-center gap-x-2">
              {/* Card */}
              <div className="col-span-6 order-1 sm:order-none sm:col-span-3 flex items-center space-x-4 lg:sidebar-expanded:col-span-8 xl:sidebar-expanded:col-span-8">
                <div>
                  <div className="text-sm font-medium text-slate-800 one_feed'">
                    <span className="one_feed">ExtraKMDeliveryFee</span>
                  </div>
                </div>
              </div>

              <div className="right col-span-6 order-1 sm:order-none sm:col-span-4 text-right sm:text-center lg:sidebar-expanded:col-span-6 xl:sidebar-expanded:col-span-4">
              <div className="text-sm price_card">€{FoodReady?.ExtraKMDeliveryFee}</div>
              </div>
            </div>

 

            <div className="grid grid-cols-12 items-center gap-x-2">
              {/* Card */}
              <div className="col-span-6 order-1 sm:order-none sm:col-span-3 flex items-center space-x-4 lg:sidebar-expanded:col-span-8 xl:sidebar-expanded:col-span-8">
                <div>
                  <div className="text-sm font-medium text-slate-800 one_feed'">
                    <span className="one_feed">Total</span>
                  </div>
                </div>
              </div>

              <div className="right col-span-6 order-1 sm:order-none sm:col-span-4 text-right sm:text-center lg:sidebar-expanded:col-span-6 xl:sidebar-expanded:col-span-4">
              <div className="text-sm price_card">€{FoodReady.TotalPrice}</div>
              </div>
            </div>

          </div>
          <div
            className="absolute inset-0 border-2 border-transparent peer-checked:border-indigo-400 rounded pointer-events-none"
            aria-hidden="true"
          />
        </label>
        <div className="mt-5">
    
          <div className=" relative px-5 py-4 rounded-sm border border-slate-200">
      <button
        className="flex items-center justify-between w-full group mb-1"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        <div className="relative  text-md text-blod text-slate-800 font-medium">Order History</div>
        <svg className={`w-8 h-8 shrink-0 fill-current text-slate-400 group-hover:text-slate-500 ml-3 ${open && 'rotate-180'}`} viewBox="0 0 32 32">
          <path d="M16 20l-5.4-5.4 1.4-1.4 4 4 4-4 1.4 1.4z" />
        </svg>
      </button>
      <div className={`text-sm ${!open && 'hidden'}`}>
      <div className="col-span-6 order-1 sm:order-none sm:col-span-3 flex items-center space-x-4 lg:sidebar-expanded:col-span-8 xl:sidebar-expanded:col-span-8">
                  <div>
                    <div className="text-sm font-medium text-slate-800 one_feed'">
                      {" "}
                      <span className="inline-flex items-center justify-center h-5 text-xs font-medium text-black bg-indigo-500 px-2" style={{borderRadius:"100%", width:"20px", height:"20px"}}>
                      
                      </span>
                     
                      <span className="one_feed text-sm" style={{position:"relative", top:"-5px", fontSize:"14px"}}>
                      Order received
                      </span>
                    </div>

                    <div className="text-sm font-medium text-slate-800 one_feed'" style={{position:"relative", top:"-15px"}}>
                      {" "}
                     
                     
                      <span className="one_feed text-sm" style={{position:"relative", top:"-5px", fontSize:"14px",left:"20px"}}>
                 
                    {moment(FoodReady?.CreatedDate).format('MMMM Do YYYY')}
                      </span>
                    </div>
{/* /////////////////////////////////////////// */}
                    <div className="text-sm font-medium text-slate-800 one_feed" style={{marginTop:'-27px',marginLeft:'-10px'}}>
                      {" "}
                      <span className="inline-flex items-center justify-center h-5 text-xs font-medium text-black bg-indigo-500 px-2" style={{borderRadius:"100%", width:"20px", height:"20px"}}>
                      
                      </span>
                     
                      <span className="one_feed text-sm" style={{position:"relative", top:"-5px",lineHeight:"10px", fontSize:"14px"}}>
                      Order received
                      </span>
                    </div>

                    <div className="text-sm font-medium text-slate-800 one_feed'" style={{position:"relative", top:"-15px",left:"20px"}}>
                      {" "}
                     
                     
                      <span className="one_feed text-sm" style={{position:"relative", top:"-5px", fontSize:"14px"}}>
                      02/11/2021 11:03 PM
                      </span>
                    </div>
                    {/* /////////////////////////// */}

                    <div className="text-sm font-medium text-slate-800 one_feed" style={{marginTop:'-27px',marginLeft:'-10px'}}>
                      {" "}
                      <span className="inline-flex items-center justify-center h-5 text-xs font-medium text-black bg-indigo-500 px-2" style={{borderRadius:"100%", width:"20px", height:"20px"}}>
                      
                      </span>
                     
                      <span className="one_feed text-sm" style={{position:"relative", top:"-5px",lineHeight:"10px", fontSize:"14px"}}>
                      Restaurant Accept order
                      </span>
                    </div>

                    <div className="text-sm font-medium text-slate-800 one_feed'" style={{position:"relative", top:"-15px"}}>
                      {" "}
                     
                     
                      <span className="one_feed text-sm" style={{position:"relative", top:"-5px", fontSize:"14px",left:"20px"}}>
                      02/11/2021 11:03 PM | by jack
                      </span>
                    </div> 

                    {/* ......././/.././././././././/./././ */}
                    <div className="text-sm font-medium text-slate-800 one_feed" style={{marginTop:'-27px',marginLeft:'-10px'}}>
                      {" "}
                      <span className="inline-flex items-center justify-center h-5 text-xs font-medium text-black bg-indigo-500 px-2" style={{borderRadius:"100%", width:"20px", height:"20px"}}>
                      
                      </span>
                     
                      <span className="one_feed text-sm" style={{position:"relative", top:"-5px",lineHeight:"10px", fontSize:"14px"}}>
                      Restaurant Add time
                      </span>
                    </div>

                    <div className="text-sm font-medium text-slate-800 one_feed'" style={{position:"relative", top:"-15px"}}>
                      {" "}
                     
                     
                      <span className="one_feed text-sm" style={{position:"relative", top:"-5px", fontSize:"14px",left:"20px"}}>
                      5 mints add on standard time
                      </span>
                    </div>
                  {/* ..../././/./././././.. */}

                  <div className="text-sm font-medium text-slate-800 one_feed" style={{marginTop:'-27px',marginLeft:'-10px'}}>
                      {" "}
                      <span className="inline-flex items-center justify-center h-5 text-xs font-medium text-black bg-indigo-500 px-2" style={{borderRadius:"100%", width:"20px", height:"20px"}}>
                      
                      </span>
                     
                      <span className="one_feed text-sm" style={{position:"relative", top:"-5px",lineHeight:"10px", fontSize:"14px"}}>
                      Foody Ready
                      </span>
                    </div>  

                    <div className="text-sm font-medium text-slate-800 one_feed'" style={{position:"relative", top:"-15px"}}>
                      {" "}
                      <span className="one_feed text-sm" style={{position:"relative", top:"-5px", fontSize:"14px",left:"20px"}}>
                      02/11/2021 11:03 PM
                      </span>
                    </div>

                    <div className=' absolute w-11/12 -mt-20 flex justify-end '>
                          <div className='border-2 border-gray-300 w-44 rounded-xl'>
                            <div className='w-10 h-10 ml-1 mt-1 pii'></div>
                            <h3 className='ml-10 -mt-10 text-blue-400'>Bilal Ahmed</h3>
                            <h3 className='ml-10'>0333 7883892</h3>
                          </div>
                    </div>
                  </div>
                </div>
      </div>
    </div>
        </div>
        <div className="mb-3 flex justify-end mt-4">
        <Popover placement="top">
          <PopoverHandler>
            <Button variant="gradient" className='bg-indigo-600'>Change Status</Button>
          </PopoverHandler>
          <PopoverContent>
            <button 
             onClick={(e) => { e.stopPropagation(); setFeedbackModalOpen(true); }}
            // onClick={() => setOpen(true)}
              className='mr-5'>Assign Rider</button>
          </PopoverContent>
        </Popover>
        </div>
      </div> </> :  null }



      {/* recvied */}
      {datasend ? <>      <div
        className="bg-white shadow-md rounded border border-slate-200 p-5"
        style={{ width: "600px", marginTop: "30px", marginLeft:"60px", borderRadius:"30px" }}
      >
    
        <header className="flex justify-between items-start space-x-3 mb-3">
        
          <div className="flex items-start space-x-3">
            <img
              className="rounded-full shrink-0"
              src={UserImage03}
              width="50"
              height="50"
              alt="User 03"
            />
            <div>
              <div className="leading-tight">
                <a className="text-lg font-semibold text-slate-800" href="#0">
                  {datasend?.RestaurantName?datasend?.RestaurantName:"not found"} 
                </a>
              </div>
              <div className="text-xs text-slate-500"></div>
            </div>
          </div>
          {/* Menu button */}
          {/* <EditMenu align="right" className="relative inline-flex shrink-0">
            <li>
              <Link
                className="font-medium text-sm text-slate-600 hover:text-slate-800 flex py-1 px-3"
                to="#0"
              >
                Edit
              </Link>
            </li>
            <li>
              <Link
                className="font-medium text-sm text-rose-500 hover:text-rose-600 flex py-1 px-3"
                to="#0"
              >
                Remove
              </Link>
            </li>
          </EditMenu> */}
        
                     
     {/* <button align="right" className="btn bg-indigo-500 hover:bg-indigo-600 text-white">{datasend?.ETATime}</button> */}
     <button align="right" className="btn bg-indigo-500 hover:bg-indigo-600 text-white">{datasend?.ETATime}</button>

     <button align="right" className="btn bg-indigo-500 hover:bg-indigo-600 text-white">Edit</button>
     {/* <button align="right" className="btn bg-indigo-500 hover:bg-indigo-600 text-white">{datasend?.ETATime}</button> */}

        </header>
        <div >
          <svg xmlns="http://www.w3.org/2000/svg"    class="icn-arr icon  icon-tabler icon-tabler-arrow-bar-to-down" width="44" height="44" marginLeft="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="4" y1="20" x2="20" y2="20" />
  <line x1="12" y1="14" x2="12" y2="4" />
  <line x1="12" y1="14" x2="16" y2="10" />
  <line x1="12" y1="14" x2="8" y2="10" />
       </svg>
          </div>
        {/* Body */}
        {/* {datasend?Scales.map((scale) => { */}
          {/* return (  */}
          {datasend?.Scales?.map((scale) => {
            console.log(scale,'checking')
            return (
              <div className="text-sm text-slate-800 space-y-2 mb-5">
   
              <label className="relative block cursor-pointer text-left w-full">
           <input type="radio" name="radio-buttons" className="peer sr-only" />
           <div className="p-4 rounded shadow-sm duration-150 ease-in-out">
             <div className="grid grid-cols-12 items-center gap-x-2">
               {/* Card */}
               <div className="col-span-6 order-1 sm:order-none sm:col-span-3 flex items-center space-x-4 lg:sidebar-expanded:col-span-8 xl:sidebar-expanded:col-span-8">
                 <div>
                   <div className="text-sm font-medium text-slate-800 one_feed'">
                     <span className="one_feed"> {scale?.Quantity}</span>{" "}
                     <span className="one_feed">x</span>
                     <span className="one_feed">{scale?.Name?scale?.Name:"not Found"}</span>
                   </div>
                 </div>
               </div>
  
               <div className="right col-span-6 order-1 sm:order-none sm:col-span-4 text-right sm:text-center lg:sidebar-expanded:col-span-6 xl:sidebar-expanded:col-span-4">
                 <div className="text-sm price_card">€{scale.UnitPrice}</div>
               </div>
             </div>
             
             {scale.Ingredients?.map((obj) => {
              console.log(obj.IngredientsType, 'sssss')
              return (
                <div>
                  <h3>{obj.Name}</h3>
                <div className="grid grid-cols-12 items-center gap-x-2">
                {/* Card */}
                
             
             
                {obj?.IngredientsType?.map((item) => {
                  console.log(item, 'map items');
                    return (
  
                <div className="col-span-6 order-1 sm:order-none sm:col-span-3 flex items-center space-x-4 lg:sidebar-expanded:col-span-8 xl:sidebar-expanded:col-span-8">
                  <div>
               
              
                      <div className="text-sm font-medium text-slate-800 one_feed'">
                      {/* <div className="flex flex-shrink-0 ml-2"> */}
                  
                      <span className="inline-flex items-center justify-center h-5 text-xs font-medium text-white bg-indigo-500 px-2 rounded">
                       {item.Quantity}
                      </span>
                      {/* </div> */}
   
                      <span className="one_feed">x</span>
                      <span className="one_feed two_feed_text">
                      {item?.Name?item.Name:"NOT FOUND "}

                      </span>
                    </div>
       
  
                  </div>
                  <div className="right col-span-6 order-1 sm:order-none sm:col-span-4 text-right sm:text-center lg:sidebar-expanded:col-span-6 xl:sidebar-expanded:col-span-4">
                  <div className="text-sm price_card price_card_two ">
                    {item.UnitPrice > 0 ? `+€ ${item.UnitPrice} ` : null}
                  </div>
                </div>
                </div>
  
              
               )
              })} 
   
  
  
  
  
              </div>
              </div>

              )
             })}
  
  
  
           </div>
           <div
             className="absolute inset-0 border-2 border-transparent peer-checked:border-indigo-400 rounded pointer-events-none"
             aria-hidden="true"
           />
         </label>
         {scale?.Notes?<>         <article
          style={{ background: "#F6F6F6", borderRadius: "10px" }}
          className="bg-white shadow-md rounded border border-slate-200 p-5"
        >
          <div className="flex flex-start space-x-4">
            <div className="grow">
              <h2 className="font-semibold text-slate-00 order_textt" >
              {scale?.Notes?scale?.Notes:null}
              </h2>
            </div>
          </div>
        </article></>:null}

  
              </div>
            )
          })}
 
          {/* )
        })} */}




        <label className="relative block cursor-pointer text-left w-full">
          <input type="radio" name="radio-buttons" className="peer sr-only" />
          <div   style={{ background: "#F6F6F6", borderRadius: "10px" }} className="p-4 mt-5 rounded shadow-sm duration-150 ease-in-out">
            <div className="grid grid-cols-12 items-center gap-x-2">
              {/* Card */}
        
             
            </div>


            <div className="grid grid-cols-12 items-center gap-x-2">
              {/* Card */}
              <div className="col-span-6 order-1 sm:order-none sm:col-span-3 flex items-center space-x-4 lg:sidebar-expanded:col-span-8 xl:sidebar-expanded:col-span-8">
                <div>
                  <div className="text-sm font-medium text-slate-800 one_feed'">
                    <span className="one_feed">itemSub Total </span>
                  </div>
                </div>
              </div>

              {datasend?.ItemSubTotal > 0 ? <>
                <div className="right col-span-6 order-1 sm:order-none sm:col-span-4 text-right sm:text-center lg:sidebar-expanded:col-span-6 xl:sidebar-expanded:col-span-4">
                <div className="text-sm price_card">€{datasend?.ItemSubTotal}</div>
              </div>
               </> : null }
             
            </div>


            <div className="grid grid-cols-12 items-center gap-x-2">
              {/* Card */}
              <div className="col-span-6 order-1 sm:order-none sm:col-span-3 flex items-center space-x-4 lg:sidebar-expanded:col-span-8 xl:sidebar-expanded:col-span-8">
                <div>
                  <div className="text-sm font-medium text-slate-800 one_feed'">
                    <span className="one_feed">BasicDeliveryFee</span>
                  </div>
                </div>
              </div>
              {datasend?.BasicDeliveryFee > 0 ? <>
                <div className="right col-span-6 order-1 sm:order-none sm:col-span-4 text-right sm:text-center lg:sidebar-expanded:col-span-6 xl:sidebar-expanded:col-span-4">
              <div className="text-sm price_card">€{datasend?.BasicDeliveryFee}</div>
              </div>
               </> : null }
           
            </div>
            <div className="grid grid-cols-12 items-center gap-x-2">
              {/* Card */}
              <div className="col-span-6 order-1 sm:order-none sm:col-span-3 flex items-center space-x-4 lg:sidebar-expanded:col-span-8 xl:sidebar-expanded:col-span-8">
                <div>
                  <div className="text-sm font-medium text-slate-800 one_feed'">
                    <span className="one_feed">ExtraKMDeliveryFee</span>
                  </div>
                </div>
              </div>
                {datasend?.ExtraKMDeliveryFee > 0 ? <>
                  <div className="right col-span-6 order-1 sm:order-none sm:col-span-4 text-right sm:text-center lg:sidebar-expanded:col-span-6 xl:sidebar-expanded:col-span-4">
              <div className="text-sm price_card">€{datasend?.ExtraKMDeliveryFee}</div>
              </div>
                </> : null }
             
            </div>

 

            <div className="grid grid-cols-12 items-center gap-x-2">
              {/* Card */}
              <div className="col-span-6 order-1 sm:order-none sm:col-span-3 flex items-center space-x-4 lg:sidebar-expanded:col-span-8 xl:sidebar-expanded:col-span-8">
                <div>
                  <div className="text-sm font-medium text-slate-800 one_feed'">
                    <span className="one_feed">Total</span>
                  </div>
                </div>
              </div>

              <div className="right col-span-6 order-1 sm:order-none sm:col-span-4 text-right sm:text-center lg:sidebar-expanded:col-span-6 xl:sidebar-expanded:col-span-4">
              <div className="text-sm price_card">€
              {datasend.TotalPrice?datasend.TotalPrice:"not found"}
              </div>
              </div>
            </div>

          </div>
          <div
            className="absolute inset-0 border-2 border-transparent peer-checked:border-indigo-400 rounded pointer-events-none"
            aria-hidden="true"
          />
        </label>
        <div className="mt-5">
    
          <div className=" relative px-5 py-4 rounded-sm border border-slate-200">
      <button
        className="flex items-center justify-between w-full group mb-1"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        <div className="relative  text-md text-blod text-slate-800 font-medium">Order History</div>
        <svg className={`w-8 h-8 shrink-0 fill-current text-slate-400 group-hover:text-slate-500 ml-3 ${open && 'rotate-180'}`} viewBox="0 0 32 32">
          <path d="M16 20l-5.4-5.4 1.4-1.4 4 4 4-4 1.4 1.4z" />
        </svg>
      </button>
      <div className={`text-sm ${!open && 'hidden'}`}>
      <div className="col-span-6 order-1 sm:order-none sm:col-span-3 flex items-center space-x-4 lg:sidebar-expanded:col-span-8 xl:sidebar-expanded:col-span-8">
                  <div>
                    <div className="text-sm font-medium text-slate-800 one_feed'">
                      {" "}
                      <span className="inline-flex items-center justify-center h-5 text-xs font-medium text-black bg-indigo-500 px-2" style={{borderRadius:"100%", width:"20px", height:"20px"}}>
                      
                      </span>
                     
                      <span className="one_feed text-sm" style={{position:"relative", top:"-5px", fontSize:"14px"}}>
                      Order received
                      </span>
                    </div>

                    <div className="text-sm font-medium text-slate-800 one_feed'" style={{position:"relative", top:"-15px"}}>
                      {" "}
                     
                     
                      <span className="one_feed text-sm" style={{position:"relative", top:"-5px", fontSize:"14px",left:"20px"}}>
                     
                     {moment(datasend?.OrderPlaceTime).format('MMMM Do YYYY')}
                      </span>
                    </div>



                  </div>
                </div>
      </div>
    </div>
        </div>
        <div className="mb-3 flex justify-end mt-4">
        <Popover placement="top">
          <PopoverHandler>
            <Button variant="gradient" className='bg-indigo-600'>Change Status</Button>
          </PopoverHandler>
          <PopoverContent>
            <div>
            <button 
             onClick={(e) => { e.stopPropagation(); setFeedbackModalOpen(true); }}
            // onClick={() => setOpen(true)}
              className='mr-5'>Assign to restaurant</button>




<button 
             onClick={(e) => { e.stopPropagation(); setFeedbackModalOpen(true); }}
            // onClick={() => setOpen(true)}
              className='mr-5'>Accept behalf on Restaurant</button>

<button 
             onClick={(e) => { e.stopPropagation(); setFeedbackModalOpen(true); }}
            // onClick={() => setOpen(true)}
              className='mr-5'>Cancel</button>
            </div>

          </PopoverContent>
          
        </Popover>
        </div>
      </div> </> :  null }







    </>
  );
}

export default FeedPosts;



// <div
// className="bg-white shadow-md rounded border border-slate-200 p-5"
// style={{ width: "600px", marginTop: "30px", marginLeft:"60px", borderRadius:"30px" }}
// >
// {/* Header */}
// <header className="flex justify-between items-start space-x-3 mb-3">
//   {/* User */}
//   <div className="flex items-start space-x-3">
//     <img
//       className="rounded-full shrink-0"
//       src={UserImage03}
//       width="50"
//       height="50"
//       alt="User 03"
//     />
//     <div>
//       <div className="leading-tight">
//         <a className="text-lg font-semibold text-slate-800" href="#0">
//           {datasend?.restaurat?datasend?.restaurat:"not found"} 
//         </a>
//       </div>
//       <div className="text-xs text-slate-500"></div>
//     </div>
//   </div>
//   {/* Menu button */}
//   {/* <EditMenu align="right" className="relative inline-flex shrink-0">
//     <li>
//       <Link
//         className="font-medium text-sm text-slate-600 hover:text-slate-800 flex py-1 px-3"
//         to="#0"
//       >
//         Edit
//       </Link>
//     </li>
//     <li>
//       <Link
//         className="font-medium text-sm text-rose-500 hover:text-rose-600 flex py-1 px-3"
//         to="#0"
//       >
//         Remove
//       </Link>
//     </li>
//   </EditMenu> */}
//          <svg xmlns="http://www.w3.org/2000/svg" class="icn-arr icon  icon-tabler icon-tabler-arrow-bar-to-down" width="44" height="44" marginLeft="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
// <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
// <line x1="4" y1="20" x2="20" y2="20" />
// <line x1="12" y1="14" x2="12" y2="4" />
// <line x1="12" y1="14" x2="16" y2="10" />
// <line x1="12" y1="14" x2="8" y2="10" />
// </svg>
// <button align="right" className="btn bg-indigo-500 hover:bg-indigo-600 text-white">{foodmealid?.ETATime}</button>
// </header>
// {/* Body */}
// {/* {datasend?Scales.map((scale) => { */}
//   {/* return (  */}
//   {datasend?.Scales?.map((scale) => {
//     return (
//       <div className="text-sm text-slate-800 space-y-2 mb-5">

//       <label className="relative block cursor-pointer text-left w-full">
//    <input type="radio" name="radio-buttons" className="peer sr-only" />
//    <div className="p-4 rounded shadow-sm duration-150 ease-in-out">
//      <div className="grid grid-cols-12 items-center gap-x-2">
//        {/* Card */}
//        <div className="col-span-6 order-1 sm:order-none sm:col-span-3 flex items-center space-x-4 lg:sidebar-expanded:col-span-8 xl:sidebar-expanded:col-span-8">
//          <div>
//            <div className="text-sm font-medium text-slate-800 one_feed'">
//              <span className="one_feed"> {scale?.Quantity}</span>{" "}
//              <span className="one_feed">x</span>
//              <span className="one_feed">{scale?.Name}</span>
//            </div>
//          </div>
//        </div>

//        <div className="right col-span-6 order-1 sm:order-none sm:col-span-4 text-right sm:text-center lg:sidebar-expanded:col-span-6 xl:sidebar-expanded:col-span-4">
//          <div className="text-sm price_card">€{scale.UnitPrice}</div>
//        </div>
//      </div>
     
//      {scale.Ingredients?.map((obj) => {
//       return (
//         <div>
//           <h3>{obj.Name}</h3>
//         <div className="grid grid-cols-12 items-center gap-x-2">
//         {/* Card */}

     
//         {obj?.IngredientsType?.map((item) => {
//             return (

//         <div className="col-span-6 order-1 sm:order-none sm:col-span-3 flex items-center space-x-4 lg:sidebar-expanded:col-span-8 xl:sidebar-expanded:col-span-8">
//           <div>
       
      
//               <div className="text-sm font-medium text-slate-800 one_feed'">
//               {/* <div className="flex flex-shrink-0 ml-2"> */}
          
//               <span className="inline-flex items-center justify-center h-5 text-xs font-medium text-white bg-indigo-500 px-2 rounded">
//                {item.Quantity}
//               </span>
//               {/* </div> */}

//               <span className="one_feed">x</span>
//               <span className="one_feed two_feed_text">
//               {item.Name}

//               </span>
//             </div>


//           </div>
//           <div className="right col-span-6 order-1 sm:order-none sm:col-span-4 text-right sm:text-center lg:sidebar-expanded:col-span-6 xl:sidebar-expanded:col-span-4">
//           <div className="text-sm price_card price_card_two ">
//             {item.UnitPrice > 0 ? `+€ ${item.UnitPrice} ` : null}
//           </div>
//         </div>
//         </div>

      
//        )
//       })} 





//       </div>
//       </div>

//       )
//      })}



//    </div>
//    <div
//      className="absolute inset-0 border-2 border-transparent peer-checked:border-indigo-400 rounded pointer-events-none"
//      aria-hidden="true"
//    />
//  </label>
//  {scale?.Notes?<>         <article
//   style={{ background: "#F6F6F6", borderRadius: "10px" }}
//   className="bg-white shadow-md rounded border border-slate-200 p-5"
// >
//   <div className="flex flex-start space-x-4">
//     <div className="grow">
//       <h2 className="font-semibold text-slate-00 order_textt" >
//       {scale?.Notes?scale?.Notes:null}
//       </h2>
//     </div>
//   </div>
// </article></>:null}


// </div>
//     )
//   })}

//   {/* )
// })} */}




// <label className="relative block cursor-pointer text-left w-full">
//   <input type="radio" name="radio-buttons" className="peer sr-only" />
//   <div   style={{ background: "#F6F6F6", borderRadius: "10px" }} className="p-4 mt-5 rounded shadow-sm duration-150 ease-in-out">
//     <div className="grid grid-cols-12 items-center gap-x-2">
//       {/* Card */}

     
//     </div>


//     <div className="grid grid-cols-12 items-center gap-x-2">
//       {/* Card */}
//       <div className="col-span-6 order-1 sm:order-none sm:col-span-3 flex items-center space-x-4 lg:sidebar-expanded:col-span-8 xl:sidebar-expanded:col-span-8">
//         <div>
//           <div className="text-sm font-medium text-slate-800 one_feed'">
//             <span className="one_feed">itemSub Total </span>
//           </div>
//         </div>
//       </div>

//       <div className="right col-span-6 order-1 sm:order-none sm:col-span-4 text-right sm:text-center lg:sidebar-expanded:col-span-6 xl:sidebar-expanded:col-span-4">
//         <div className="text-sm price_card">€{datasend?.ItemSubTotalSUB}</div>
//       </div>
//     </div>


//     <div className="grid grid-cols-12 items-center gap-x-2">
//       {/* Card */}
//       <div className="col-span-6 order-1 sm:order-none sm:col-span-3 flex items-center space-x-4 lg:sidebar-expanded:col-span-8 xl:sidebar-expanded:col-span-8">
//         <div>
//           <div className="text-sm font-medium text-slate-800 one_feed'">
//             <span className="one_feed">BasicDeliveryFee</span>
//           </div>
//         </div>
//       </div>

//       <div className="right col-span-6 order-1 sm:order-none sm:col-span-4 text-right sm:text-center lg:sidebar-expanded:col-span-6 xl:sidebar-expanded:col-span-4">
//       <div className="text-sm price_card">€{datasend?.BasicDeliveryFee}</div>
//       </div>
//     </div>
//     <div className="grid grid-cols-12 items-center gap-x-2">
//       {/* Card */}
//       <div className="col-span-6 order-1 sm:order-none sm:col-span-3 flex items-center space-x-4 lg:sidebar-expanded:col-span-8 xl:sidebar-expanded:col-span-8">
//         <div>
//           <div className="text-sm font-medium text-slate-800 one_feed'">
//             <span className="one_feed">ExtraKMDeliveryFee</span>
//           </div>
//         </div>
//       </div>

//       <div className="right col-span-6 order-1 sm:order-none sm:col-span-4 text-right sm:text-center lg:sidebar-expanded:col-span-6 xl:sidebar-expanded:col-span-4">
//       <div className="text-sm price_card">€{datasend?.ExtraKMDeliveryFee}</div>
//       </div>
//     </div>



//     <div className="grid grid-cols-12 items-center gap-x-2">
//       {/* Card */}
//       <div className="col-span-6 order-1 sm:order-none sm:col-span-3 flex items-center space-x-4 lg:sidebar-expanded:col-span-8 xl:sidebar-expanded:col-span-8">
//         <div>
//           <div className="text-sm font-medium text-slate-800 one_feed'">
//             <span className="one_feed">Total</span>
//           </div>
//         </div>
//       </div>

//       <div className="right col-span-6 order-1 sm:order-none sm:col-span-4 text-right sm:text-center lg:sidebar-expanded:col-span-6 xl:sidebar-expanded:col-span-4">
//       <div className="text-sm price_card">€{datasend?.TotalPrice}</div>
//       </div>
//     </div>

//   </div>
//   <div
//     className="absolute inset-0 border-2 border-transparent peer-checked:border-indigo-400 rounded pointer-events-none"
//     aria-hidden="true"
//   />
// </label>
// <div className="mt-5">

//   <div className=" relative px-5 py-4 rounded-sm border border-slate-200">
// <button
// className="flex items-center justify-between w-full group mb-1"
// aria-expanded={open}
// onClick={() => setOpen(!open)}
// >
// <div className="relative  text-md text-blod text-slate-800 font-medium">Order History</div>
// <svg className={`w-8 h-8 shrink-0 fill-current text-slate-400 group-hover:text-slate-500 ml-3 ${open && 'rotate-180'}`} viewBox="0 0 32 32">
//   <path d="M16 20l-5.4-5.4 1.4-1.4 4 4 4-4 1.4 1.4z" />
// </svg>
// </button>
// <div className={`text-sm ${!open && 'hidden'}`}>
// <div className="col-span-6 order-1 sm:order-none sm:col-span-3 flex items-center space-x-4 lg:sidebar-expanded:col-span-8 xl:sidebar-expanded:col-span-8">
//           <div>
//             <div className="text-sm font-medium text-slate-800 one_feed'">
//               {" "}
//               <span className="inline-flex items-center justify-center h-5 text-xs font-medium text-black bg-indigo-500 px-2" style={{borderRadius:"100%", width:"20px", height:"20px"}}>
              
//               </span>
             
//               <span className="one_feed text-sm" style={{position:"relative", top:"-5px", fontSize:"14px"}}>
//               Order received
//               </span>
//             </div>

//             <div className="text-sm font-medium text-slate-800 one_feed'" style={{position:"relative", top:"-15px"}}>
//               {" "}
             
             
//               <span className="one_feed text-sm" style={{position:"relative", top:"-5px", fontSize:"14px",left:"20px"}}>
//               02/11/2021 11:03 PM
//               </span>
//             </div>
// {/* /////////////////////////////////////////// */}
//             <div className="text-sm font-medium text-slate-800 one_feed" style={{marginTop:'-27px',marginLeft:'-10px'}}>
//               {" "}
//               <span className="inline-flex items-center justify-center h-5 text-xs font-medium text-black bg-indigo-500 px-2" style={{borderRadius:"100%", width:"20px", height:"20px"}}>
              
//               </span>
             
//               <span className="one_feed text-sm" style={{position:"relative", top:"-5px",lineHeight:"10px", fontSize:"14px"}}>
//               Order received
//               </span>
//             </div>

//             <div className="text-sm font-medium text-slate-800 one_feed'" style={{position:"relative", top:"-15px",left:"20px"}}>
//               {" "}
             
             
//               <span className="one_feed text-sm" style={{position:"relative", top:"-5px", fontSize:"14px"}}>
//               02/11/2021 11:03 PM
//               </span>
//             </div>
//             {/* /////////////////////////// */}

//             <div className="text-sm font-medium text-slate-800 one_feed" style={{marginTop:'-27px',marginLeft:'-10px'}}>
//               {" "}
//               <span className="inline-flex items-center justify-center h-5 text-xs font-medium text-black bg-indigo-500 px-2" style={{borderRadius:"100%", width:"20px", height:"20px"}}>
              
//               </span>
             
//               <span className="one_feed text-sm" style={{position:"relative", top:"-5px",lineHeight:"10px", fontSize:"14px"}}>
//               Restaurant Accept order
//               </span>
//             </div>

//             <div className="text-sm font-medium text-slate-800 one_feed'" style={{position:"relative", top:"-15px"}}>
//               {" "}
             
             
//               <span className="one_feed text-sm" style={{position:"relative", top:"-5px", fontSize:"14px",left:"20px"}}>
//               02/11/2021 11:03 PM | by jack
//               </span>
//             </div> 

//             {/* ......././/.././././././././/./././ */}
//             <div className="text-sm font-medium text-slate-800 one_feed" style={{marginTop:'-27px',marginLeft:'-10px'}}>
//               {" "}
//               <span className="inline-flex items-center justify-center h-5 text-xs font-medium text-black bg-indigo-500 px-2" style={{borderRadius:"100%", width:"20px", height:"20px"}}>
              
//               </span>
             
//               <span className="one_feed text-sm" style={{position:"relative", top:"-5px",lineHeight:"10px", fontSize:"14px"}}>
//               Restaurant Add time
//               </span>
//             </div>

//             <div className="text-sm font-medium text-slate-800 one_feed'" style={{position:"relative", top:"-15px"}}>
//               {" "}
             
             
//               <span className="one_feed text-sm" style={{position:"relative", top:"-5px", fontSize:"14px",left:"20px"}}>
//               5 mints add on standard time
//               </span>
//             </div>
//           {/* ..../././/./././././.. */}

//           <div className="text-sm font-medium text-slate-800 one_feed" style={{marginTop:'-27px',marginLeft:'-10px'}}>
//               {" "}
//               <span className="inline-flex items-center justify-center h-5 text-xs font-medium text-black bg-indigo-500 px-2" style={{borderRadius:"100%", width:"20px", height:"20px"}}>
              
//               </span>
             
//               <span className="one_feed text-sm" style={{position:"relative", top:"-5px",lineHeight:"10px", fontSize:"14px"}}>
//               Foody Ready
//               </span>
//             </div>  

//             <div className="text-sm font-medium text-slate-800 one_feed'" style={{position:"relative", top:"-15px"}}>
//               {" "}
//               <span className="one_feed text-sm" style={{position:"relative", top:"-5px", fontSize:"14px",left:"20px"}}>
//               02/11/2021 11:03 PM
//               </span>
//             </div>

//             <div className=' absolute w-11/12 -mt-20 flex justify-end '>
//                   <div className='border-2 border-gray-300 w-44 rounded-xl'>
//                     <div className='w-10 h-10 ml-1 mt-1 pii'></div>
//                     <h3 className='ml-10 -mt-10 text-blue-400'>Bilal Ahmed</h3>
//                     <h3 className='ml-10'>0333 7883892</h3>
//                   </div>
//             </div>
//           </div>
//         </div>
// </div>
// </div>
// </div>
// <div className="mb-3 flex justify-end mt-4">
// <Popover placement="top">
//   <PopoverHandler>
//     <Button variant="gradient" className='bg-indigo-600'>Change Status</Button>
//   </PopoverHandler>
//   <PopoverContent>
//     <button 
//      onClick={(e) => { e.stopPropagation(); setFeedbackModalOpen(true); }}
//     // onClick={() => setOpen(true)}
//       className='mr-5'>Assign Rider</button>
//   </PopoverContent>
// </Popover>
// </div>
// </div>