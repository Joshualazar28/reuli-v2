import React from "react";
import GroupAvatar01 from "../../../images/group-avatar-01.png";
// import GroupAvatar02 from "../../images/group-avatar-02.png";
// import GroupAvatar03 from "../../images/group-avatar-03.png";
// import GroupAvatar04 from "../../images/group-avatar-04.png";
// import UserImage01 from "../../images/user-32-01.jpg";
// import UserImage02 from "../../images/user-32-02.jpg";
// import UserImage04 from "../../images/user-32-04.jpg";
// import UserImage05 from "../../images/user-32-05.jpg";
import FeedPosts from "./FeedPosts";

function FeedRightContent() {
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
        <div className="lg:sticky lg:top-16  lg:overflow-x-hidden lg:overflow-y-auto no-scrollbar">
          <div className="md:py-8">
            {/* Blocks */}

            <div
              className="space-y-4 xl:w-72"
             
            >
              {/* Block 3 */}
              <div className="bg-slate-50 p-4 rounded ">
                <div className="text-xs font-semibold text-black-800 uppercase mb-4">
                  Rider Details
                </div>
                <ul className="space-y-3">
                  <li>
                    <div className="text-sm mb-1">
                      <a className="font-medium text-slate-800" href="#0">
                        Restaurant ID
                      </a>
                    </div>
                    <div className="text-xs text-slate-500">78347387438</div>
                  </li>
                  <li>
                    <div className="text-sm mb-1">
                      <a className="font-medium text-slate-800" href="#0">
                        Date/Time
                      </a>
                    </div>
                    <div className="text-xs text-slate-500">
                      12/10/2021 11:32 AM
                    </div>
                  </li>
                  <li>
                    <div className="text-sm mb-1">
                      <a className="font-medium text-slate-800" href="#0">
                        Restaurant name
                      </a>
                    </div>
                    <div className="text-xs text-slate-500">
                        Jack will
                    </div>
                  </li>
                  <li>
                    <div className="text-sm mb-1">
                      <a className="font-medium text-slate-800" href="#0">
                        Owner name
                      </a>
                    </div>
                    <div className="text-xs text-slate-500">Messi</div>
                  </li>
                  <li>
                    <div className="text-sm mb-1">
                      <a className="font-medium text-slate-800" href="#0">
                        Number
                      </a>
                    </div>
                    <div className="text-xs text-slate-500">
                      920933293
                    </div>
                  </li>

                  <li>
                    <div className="text-sm mb-1">
                      <a className="font-medium text-slate-800" href="#0">
                      Email
                      </a>
                    </div>
                    <div className="text-xs text-slate-500">
                      xyz@gmail.com
                    </div>
                  </li>

                  <li>
                    <div className="text-sm mb-1">
                      <a className="font-medium text-slate-800" href="#0">
                        Business Id
                      </a>
                    </div>
                    <div className="text-xs text-slate-500">
                      393028320
                    </div>
                  </li>
                  <li>
                    <div className="text-sm mb-1">
                      <a className="font-medium text-slate-800" href="#0">
                        Source
                      </a>
                    </div>
                    <div className="text-xs text-slate-500">
                      App
                    </div>
                  </li>
                  <li>
                    <div className="text-sm mb-1">
                      <a className="font-medium text-slate-800" href="#0">
                        Business Type
                      </a>
                    </div>
                    <div className="text-xs text-slate-500">
                      Restaurant
                    </div>
                  </li>
                  <li>
                    <div className="text-sm mb-1">
                      <a className="font-medium text-slate-800" href="#0">
                        City
                      </a>
                    </div>
                    <div className="text-xs text-slate-500">
                      Turku
                    </div>
                  </li>
                  <li>
                    <div className="text-sm mb-1">
                      <a className="font-medium text-slate-800" href="#0">
                        Country
                      </a>
                    </div>
                    <div className="text-xs text-slate-500">
                      Finland
                    </div>
                  </li>
                  <li>
                    <div className="text-sm mb-1">
                      <a className="font-medium text-slate-800" href="#0">
                        Restaurant Address
                      </a>
                    </div>
                    <div className="text-xs text-slate-500">
                      address
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <FeedPosts/>
      </div>
    </div>
  );
}

export default FeedRightContent;
