import React from "react";
import moment from "moment";
import GroupAvatar01 from "../../images/group-avatar-01.png";
import GroupAvatar02 from "../../images/group-avatar-02.png";
import GroupAvatar03 from "../../images/group-avatar-03.png";
import GroupAvatar04 from "../../images/group-avatar-04.png";
import UserImage01 from "../../images/user-32-01.jpg";
import UserImage02 from "../../images/user-32-02.jpg";
import UserImage04 from "../../images/user-32-04.jpg";
import UserImage05 from "../../images/user-32-05.jpg";
import FeedPosts from "./FeedPosts";


function FeedRightContent({foodmealid, orderdetail, datasend, acecptres,}) {

console.log(acecptres, 'acecptres amen')
  return (
    <div className="w-full hidden xl:block " style={{background:"#f8fafc"}}>
      <div
        style={{
          height: "auto",
          width: "100%",
         
          display: "flex",
          // justifyContent:'space-around',
          paddingBottom:"50px"
        }}
      >




{/* acept res */}
{acecptres ? <div>
          <div className="lg:sticky lg:top-16  lg:overflow-x-hidden lg:overflow-y-auto no-scrollbar">
          <div className="md:py-8">
            {/* Blocks */}

            <div
              className="space-y-4 xl:w-72"
             
            >
              {/* Block 3 */}
              <div className="bg-slate-50 p-4 rounded ">
                <div className="text-xs font-semibold text-black-800 uppercase mb-4">
                  Order Details
                </div>
                <ul className="space-y-3">
                  <li>
                    <div className="text-sm mb-1">
                      <a className="font-medium text-slate-800" href="#0">
                        Order Number📈
                      </a>
                    </div>
                    <div className="text-xs text-slate-500">{acecptres?.OrderNumber}</div>
                  </li>
                  <li>
                    <div className="text-sm mb-1">
                      <a className="font-medium text-slate-800" href="#0">
                        Date/Time
                      </a>
                    </div>
                    <div className="text-xs text-slate-500">
                    {/* {foodmealid?.OrderNumber} */}
                    {moment(acecptres.placeTime).format('h:mm a, MMMM-Do')}
                    </div>
                  </li>
                  <li>
                    <div className="text-sm mb-1">
                      <a className="font-medium text-slate-800" href="#0">
                        Customer
                      </a>
                    </div>
                    <div className="text-xs text-slate-500">
                      {acecptres?.customer}
                    </div>
                  </li>
                  <li>
                    <div className="text-sm mb-1">
                      <a className="font-medium text-slate-800" href="#0">
                        Restaurant
                      </a>
                    </div>
                    <div className="text-xs text-slate-500">   {acecptres?.restaurat}</div>
                  </li>
                  <li>
                    <div className="text-sm mb-1">
                      <a className="font-medium text-slate-800" href="#0">
                        Address
                      </a>
                    </div>
                    <div className="text-xs text-slate-500">
                    
                      {acecptres?.AddressLine}
                    </div>
                  </li>

                  {/* <li>
                    <div className="text-sm mb-1">
                      <a className="font-medium text-slate-800" href="#0">
                        City/Area
                      </a>
                    </div>
                    <div className="text-xs text-slate-500">
                      Xyz city / xyz Area
                    </div>
                  </li> */}
\
                </ul>
              </div>
            </div>
          </div>
        </div>
        </div> : null}


        {/* food ready */}
        {orderdetail ? <div>
          <div className="lg:sticky lg:top-16  lg:overflow-x-hidden lg:overflow-y-auto no-scrollbar">
          <div className="md:py-8">
            {/* Blocks */}

            <div
              className="space-y-4 xl:w-72"
             
            >
              {/* Block 3 */}
              <div className="bg-slate-50 p-4 rounded ">
                <div className="text-xs font-semibold text-black-800 uppercase mb-4">
                  Order Details
                </div>
                <ul className="space-y-3">
                  <li>
                    <div className="text-sm mb-1">
                      <a className="font-medium text-slate-800" href="#0">
                        Order Number📈
                      </a>
                    </div>
                    <div className="text-xs text-slate-500">{orderdetail?.OrderNumber}</div>
                  </li>
                  <li>
                    <div className="text-sm mb-1">
                      <a className="font-medium text-slate-800" href="#0">
                        Date/Time
                      </a>
                    </div>
                    <div className="text-xs text-slate-500">
                    {/* {foodmealid?.OrderNumber} */}
                    {moment(orderdetail.placeTime).format('h:mm a, MMMM-Do')}
                    </div>
                  </li>
                  <li>
                    <div className="text-sm mb-1">
                      <a className="font-medium text-slate-800" href="#0">
                        Customer
                      </a>
                    </div>
                    <div className="text-xs text-slate-500">
                      {orderdetail?.FullName}
                    </div>
                  </li>
                  <li>
                    <div className="text-sm mb-1">
                      <a className="font-medium text-slate-800" href="#0">
                        Restaurant
                      </a>
                    </div>
                    <div className="text-xs text-slate-500">   {orderdetail?.RestaurantName}</div>
                  </li>
                  <li>
                    <div className="text-sm mb-1">
                      <a className="font-medium text-slate-800" href="#0">
                        Address
                      </a>
                    </div>
                    <div className="text-xs text-slate-500">
                    
                      {orderdetail?.AddressLine}
                    </div>
                  </li>

                  {/* <li>
                    <div className="text-sm mb-1">
                      <a className="font-medium text-slate-800" href="#0">
                        City/Area
                      </a>
                    </div>
                    <div className="text-xs text-slate-500">
                      Xyz city / xyz Area
                    </div>
                  </li> */}
\
                </ul>
              </div>
            </div>
          </div>
        </div>
        </div> : null}


        {/* recieved  */}
        {datasend ? <div>
          <div className="lg:sticky lg:top-16  lg:overflow-x-hidden lg:overflow-y-auto no-scrollbar">
          <div className="md:py-8">
            {/* Blocks */}

            <div
              className="space-y-4 xl:w-72"
             
            >
              {/* Block 3 */}
              <div className="bg-slate-50 p-4 rounded ">
                <div className="text-xs font-semibold text-black-800 uppercase mb-4">
                  Order Details
                </div>
                <ul className="space-y-3">
                  <li>
                    <div className="text-sm mb-1">
                      <a className="font-medium text-slate-800" href="#0">
                        Order Number📈
                      </a>
                    </div>
                    <div className="text-xs text-slate-500">{datasend?.OrderNumber}</div>
                  </li>
                  <li>
                    <div className="text-sm mb-1">
                      <a className="font-medium text-slate-800" href="#0">
                        Date/Time
                      </a>
                    </div>
                    <div className="text-xs text-slate-500">
                    {/* {foodmealid?.OrderNumber} */}
                    {moment(datasend.placeTime).format('h:mm a, MMMM-Do')}
                    </div>
                  </li>
                  <li>
                    <div className="text-sm mb-1">
                      <a className="font-medium text-slate-800" href="#0">
                        Customer
                      </a>
                    </div>
                    <div className="text-xs text-slate-500">
                      {datasend?.customer}
                    </div>
                  </li>
                  <li>
                    <div className="text-sm mb-1">
                      <a className="font-medium text-slate-800" href="#0">
                        Restaurant
                      </a>
                    </div>
                    <div className="text-xs text-slate-500">   {datasend?.restaurat}</div>
                  </li>
                  <li>
                    <div className="text-sm mb-1">
                      <a className="font-medium text-slate-800" href="#0">
                        Address
                      </a>
                    </div>
                    <div className="text-xs text-slate-500">
                    
                      {datasend?.AddressLine}
                    </div>
                  </li>

                  {/* <li>
                    <div className="text-sm mb-1">
                      <a className="font-medium text-slate-800" href="#0">
                        City/Area
                      </a>
                    </div>
                    <div className="text-xs text-slate-500">
                      Xyz city / xyz Area
                    </div>
                  </li> */}
\
                </ul>
              </div>
            </div>
          </div>
        </div>
        </div> : null}
     

        {/* food read */}

        <FeedPosts  foodmealid={foodmealid} FoodReady={orderdetail} datasend={datasend} acecptres={acecptres} />
      </div>
    </div>
  );
}

export default FeedRightContent;
