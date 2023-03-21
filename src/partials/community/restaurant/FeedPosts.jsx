import React, { useState } from 'react';
import {
  Popover,
  PopoverHandler,
  PopoverContent,
  Button,
} from "@material-tailwind/react";


import { Link } from "react-router-dom";
import UserImage1 from "../../../images/jack.png";

import UserImage2 from "../../../images/Rectangle 18607.png"

// import EditMenu from "../../components/DropdownEditMenu";
// import UserImage1 from "../../../images/jack.png"
// import UserImage02 from "../../../images/user-40-02.jpg";
// import UserImage03 from "../../../images/Rectangle 17166.png";
// import UserImage04 from "../../../images/user-40-04.jpg";
// import UserImage06 from "../../../images/user-40-06.jpg";
// import UserImage08 from "../../../images/user-40-08.jpg";
// import CommenterImage04 from "../../../images/user-32-04.jpg";
// import CommenterImage05 from "../../../images/user-32-05.jpg";
// import FeedImage01 from "../../../images/feed-image-01.jpg";
// import FeedImage02 from "../../../images/feed-image-02.jpg";
// import AccordionBasic from "../../../components/AccordionBasic";

function FeedPosts() {
  
  const [open, setOpen] = useState(false);

  
    console.log(open ,' 00')
  return (
    <>

      {/* Post 1 */}
      <div
        className="bg-white shadow-md rounded border border-slate-200 p-5"
        style={{ width: "600px", marginTop: "30px", marginLeft:"60px", borderRadius:"30px" }}
      >
        {/* Header */}
        <header className="flex justify-between items-start space-x-3 mb-3">
          {/* User */}
          <div className="flex items-start space-x-3">
            <img
              className="rounded-full shrink-0"
              src={UserImage1}
              width="50"
              height="50"
              alt="User 03"
            />
            <div>
              <div className="leading-tight">
                <a className="text-lg font-semibold text-slate-800" href="#0">
                  Jack Will
                </a>
              </div>
              <div className="text-xs text-slate-500">0333 47878291</div>
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
                 <svg xmlns="http://www.w3.org/2000/svg" class=" icon  icon-tabler icon-tabler-arrow-bar-to-down" width="44" height="44" marginLeft="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="4" y1="20" x2="20" y2="20" />
  <line x1="12" y1="14" x2="12" y2="4" />
  <line x1="12" y1="14" x2="16" y2="10" />
  <line x1="12" y1="14" x2="8" y2="10" />
       </svg>
     {/* <button align="right" className="btn bg-indigo-500 hover:bg-indigo-600 text-white">10:00</button> */}
        </header>
        {/* Body */}
        <div className="text-sm text-slate-800 space-y-2 mb-5">
        
          <label className="relative block cursor-pointer text-left w-full">
            <input type="radio" name="radio-buttons" className="peer sr-only" />
            <div className="p-4 rounded shadow-sm duration-150 ease-in-out">
              <div className="grid grid-cols-12 items-center gap-x-2">
                {/* Card */}
                <div className="col-span-6 order-1 sm:order-none sm:col-span-3 flex items-center space-x-4 lg:sidebar-expanded:col-span-8 xl:sidebar-expanded:col-span-8">
                  <div>
                    <div className="text-md font-bold">
                      {/* <span className="one_feed">1 </span>{" "}
                      <span className="one_feed">x</span> */}
                      <span className="mt-2 ml-2">Menu</span>
                      <div className="m-3">
                      {/* Start */}
                      {/* <label className="flex justify-around lab">
                        <input type="checkbox" className="form-checkbox ml-5" />
                        <span className="text-sm ml-4 -mt-1">Yes</span>
                      </label> */}
                      <img src={UserImage2} 
                        width="50"
                        height="50"
                        alt="User 03"
                      />
                      {/* End */}
                    </div>
                    </div>
                  </div>
                </div>

                {/* <div className="right col-span-6 order-1 sm:order-none sm:col-span-4 text-right sm:text-center lg:sidebar-expanded:col-span-6 xl:sidebar-expanded:col-span-4">
                  <div className="text-sm price_card">€20.00</div>
                </div> */}
              </div>
              {/* <div className="grid grid-cols-12 items-center gap-x-2">
                <div className="col-span-6 order-1 sm:order-none sm:col-span-3 flex items-center space-x-4 lg:sidebar-expanded:col-span-8 xl:sidebar-expanded:col-span-8">
                  <div>
                    <div className="text-sm font-bold flex justify-between">
                      <span className="mt-2">
                       Valid Work Permit
                      </span>
                      <div className="m-3">
                      <label className="flex justify-around lab1">
                        <input type="checkbox" className="form-checkbox ml-5" />
                        <span className="text-sm ml-3 -mt-1">Yes</span>
                      </label>
                    </div>
                    </div>
                  </div>
                </div>

                <div className="right col-span-6 order-1 sm:order-none sm:col-span-4 text-right sm:text-center lg:sidebar-expanded:col-span-6 xl:sidebar-expanded:col-span-4">
                  <div className="text-sm flex justify-end ">
                    Upload
                  </div>
                </div>
              </div> */}
              {/* <div className="grid grid-cols-12 items-center gap-x-2">
                <div className="col-span-6 order-1 sm:order-none sm:col-span-3 flex items-center space-x-4 lg:sidebar-expanded:col-span-8 xl:sidebar-expanded:col-span-8">
                  <div>
                    <div className="text-sm font-bold flex justify-between">
                      {" "}
                      <span className="mt-2">
                       Driving License
                      </span>
                      <div className="m-3">
                      <label className="flex justify-around lab2">
                        <input type="checkbox" className="form-checkbox disabled:bg-slate-50 ml-5" disabled />
                        <span className="text-sm ml-4 -mt-1">No</span>
                      </label>
                    </div>
                    </div>
                  </div>
                </div>

                <div className="right col-span-6 order-1 sm:order-none sm:col-span-4 text-right sm:text-center lg:sidebar-expanded:col-span-6 xl:sidebar-expanded:col-span-4">
                  <div className="text-sm flex justify-end">
                    Upload
                  </div>
                </div>
              </div> */}
            </div>
            <div
              className="absolute inset-0 border-2 border-transparent peer-checked:border-indigo-400 rounded pointer-events-none"
              aria-hidden="true"
            />
          </label>
        </div>

        <article
          style={{ background: "#F6F6F6", borderRadius: "10px" }}
          className="bg-white shadow-md rounded border border-slate-200 p-5"
        >
          <div className="flex">
            <div className="grow flex">
            <div className="m-3">
                      {/* Start */}
                      <label className="">
                        <input type="checkbox" className="form-checkbox  -mt-4" />
                      </label>
                      {/* End */}
                    </div>
              <h2 className=" font-medium text-slate-00 mt-1" >
                I gave all the information to rider
              </h2>
            </div>
          </div>
        </article>

        {/* <label className="relative block cursor-pointer text-left w-full">
          <input type="radio" name="radio-buttons" className="peer sr-only" />
          <div   style={{ background: "#F6F6F6", borderRadius: "10px" }} className="p-4 mt-5 rounded shadow-sm duration-150 ease-in-out">
            <div className="grid grid-cols-12 items-center gap-x-2">
              <div className="col-span-6 order-1 sm:order-none sm:col-span-3 flex items-center space-x-4 lg:sidebar-expanded:col-span-8 xl:sidebar-expanded:col-span-8">
                <div>
                  <div className="text-sm font-medium text-slate-800 one_feed'">
                    {" "}
                    <span className="one_feed two_feed_text">Tax</span>
                  </div>
                </div>
              </div>

              <div className="right col-span-6 order-1 sm:order-none sm:col-span-4 text-right sm:text-center lg:sidebar-expanded:col-span-6 xl:sidebar-expanded:col-span-4">
                <div className="text-sm price_card price_card_two">+€2.00</div>
              </div>
            </div>

            <div className="grid grid-cols-12 items-center gap-x-2">
              
              <div className="col-span-6 order-1 sm:order-none sm:col-span-3 flex items-center space-x-4 lg:sidebar-expanded:col-span-8 xl:sidebar-expanded:col-span-8">
                <div>
                  <div className="text-sm font-medium text-slate-800 one_feed'">
                    <span className="one_feed">Total</span>
                  </div>
                </div>
              </div>

              <div className="right col-span-6 order-1 sm:order-none sm:col-span-4 text-right sm:text-center lg:sidebar-expanded:col-span-6 xl:sidebar-expanded:col-span-4">
                <div className="text-sm price_card">€90.00</div>
              </div>
            </div>
          </div>
          <div
            className="absolute inset-0 border-2 border-transparent peer-checked:border-indigo-400 rounded pointer-events-none"
            aria-hidden="true"
          />
        </label> */}
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
                      02/11/2021 11:03 PM
                      </span>
                    </div>
{/* /////////////////////////////////////////// */}
                    <div className="text-sm font-medium text-slate-800 one_feed" style={{marginTop:'-27px',marginLeft:'-10px'}}>
                      {" "}
                      <span className="inline-flex items-center justify-center h-5 text-xs font-medium text-black bg-indigo-500 px-2" style={{borderRadius:"100%", width:"20px", height:"20px"}}>
                      
                      </span>
                     
                      <span className="one_feed text-sm" style={{position:"relative", top:"-5px",lineHeight:"10px", fontSize:"14px"}}>
                      Agent who gave the information
                      </span>
                    </div>

                    <div className="text-sm font-medium text-slate-800 one_feed'" style={{position:"relative", top:"-15px",left:"20px"}}>
                      {" "}
                     
                     
                      <span className="one_feed text-sm" style={{position:"relative", top:"-5px", fontSize:"14px"}}>
                      02/11/2021 11:03 PM
                      </span>
                    </div>
                    {/* /////////////////////////// */}

                    {/* <div className="text-sm font-medium text-slate-800 one_feed" style={{marginTop:'-27px',marginLeft:'-10px'}}>
                      {" "}
                      <span className="inline-flex items-center justify-center h-5 text-xs font-medium text-black bg-indigo-500 px-2" style={{borderRadius:"100%", width:"20px", height:"20px"}}>
                      
                      </span>
                     
                      <span className="one_feed text-sm" style={{position:"relative", top:"-5px",lineHeight:"10px", fontSize:"14px"}}>
                      Restaurant Accept order
                      </span>
                    </div> */}

                    {/* <div className="text-sm font-medium text-slate-800 one_feed'" style={{position:"relative", top:"-15px"}}>
                      {" "}
                     
                     
                      <span className="one_feed text-sm" style={{position:"relative", top:"-5px", fontSize:"14px",left:"20px"}}>
                      02/11/2021 11:03 PM | by jack
                      </span>
                    </div>  */}

                    {/* ......././/.././././././././/./././ */}
                    {/* <div className="text-sm font-medium text-slate-800 one_feed" style={{marginTop:'-27px',marginLeft:'-10px'}}>
                      {" "}
                      <span className="inline-flex items-center justify-center h-5 text-xs font-medium text-black bg-indigo-500 px-2" style={{borderRadius:"100%", width:"20px", height:"20px"}}>
                      
                      </span>
                     
                      <span className="one_feed text-sm" style={{position:"relative", top:"-5px",lineHeight:"10px", fontSize:"14px"}}>
                      Restaurant Add time
                      </span>
                    </div> */}

                    {/* <div className="text-sm font-medium text-slate-800 one_feed'" style={{position:"relative", top:"-15px"}}>
                      {" "}
                     
                     
                      <span className="one_feed text-sm" style={{position:"relative", top:"-5px", fontSize:"14px",left:"20px"}}>
                      5 mints add on standard time
                      </span>
                    </div> */}
                  {/* ..../././/./././././.. */}

                  {/* <div className="text-sm font-medium text-slate-800 one_feed" style={{marginTop:'-27px',marginLeft:'-10px'}}>
                      {" "}
                      <span className="inline-flex items-center justify-center h-5 text-xs font-medium text-black bg-indigo-500 px-2" style={{borderRadius:"100%", width:"20px", height:"20px"}}>
                      
                      </span>
                     
                      <span className="one_feed text-sm" style={{position:"relative", top:"-5px",lineHeight:"10px", fontSize:"14px"}}>
                      Foody Ready
                      </span>
                    </div>   */}

                    {/* <div className="text-sm font-medium text-slate-800 one_feed'" style={{position:"relative", top:"-15px"}}>
                      {" "}
                      <span className="one_feed text-sm" style={{position:"relative", top:"-5px", fontSize:"14px",left:"20px"}}>
                      02/11/2021 11:03 PM
                      </span>
                    </div> */}

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
            <button onClick={() => setOpen(true)}  className='mr-5'>Assign Rider</button>
          </PopoverContent>
        </Popover>
        </div>
      </div>
    </>
  );
}

export default FeedPosts;
