import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Timing = () => {

    const {id } = useParams()
    console.log(id)
    const [eta, seteta] = useState('')
    const [TimeTable, setTimeTable] = useState({
        active: "",
        day: "",
        end: "",
        start: "",
      });
    const [Delivery, setDelivery] = useState("")
  const [shopStatuses, setShopStatuses] = useState([
    { day: "Monday", isOpen: false },
    { day: "Tuesday", isOpen: false },
    { day: "Wednesday", isOpen: false },
    { day: "Thursday", isOpen: false },
    { day: "Friday", isOpen: false },
    { day: "Saturday", isOpen: false },
    { day: "Sunday", isOpen: false },
  ]);
  const [timeStart, setTimeStart] = useState('00:00');
  const [timeEnd, setTimeEnd] = useState('00:00');

  const handleTimeChangeStart = (event) => {
    const { value } = event.target;

    setTimeTable((prev) => {
        prev.start = value;
        return { ...prev };
      });
  };


  const handleTimeChangeEnd = (event) => {
    const { value } = event.target;

    setTimeTable((prev) => {
        prev.end = value;
        return { ...prev };
      });
  };

  const HandleTimeSlot = (e) => {
    console.log(e);
    setTimeTable((prev) => {
      prev.day = e.target.value;
      prev.active = true;
      return { ...prev };
    });
  };
  console.log(TimeTable);


  const HandleUpdateTime = ( ) => {
    console.log(Delivery ,eta,TimeTable,'createRestaurant')
     fetch(`https://delivigo-api.herokuapp.com/api/v5/update/time/table/admin`, {
       method: "post",
       headers: {
         "Content-Type": "application/json",
       },
       body: JSON.stringify({
        "TimeTable":{  "active": TimeTable.active,
          "day":TimeTable.day ,
          "end":TimeTable.end,
          "start":TimeTable.start,
      },
      "ETATime":eta,
      "DeliveryTime":30,
      "Id":id
      }),
     })
       .then((res) => res.json())
       .then((data) => {
        console.log(data, 'sss')
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
         console.log(data)
       })
   }
  return (
    <div>
      <main>
        <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
          {/* Page header */}
          <div className="mb-8">
            <h1 className="text-2xl md:text-3xl text-slate-800 font-bold">
              Delivery Timings ✨
            </h1>
          </div>
          <div className="border-t border-slate-200">
            <div className="grid gap-5 md:grid-cols-3">
              <div>
                {/* Start */}
                <div className="mt-5">
                  <label
                    className="block text-sm font-medium mb-1 text-blod"
                    htmlFor="default"
                  >
                    Preparation Time
                  </label>
                  <input

                    id="default"
                    className="form-input w-full"
                    onChange={(e) => seteta(e.target.value)}
                    type="text"
                  />
                </div>
                {/* End */}
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              <div>
                {/* Start */}
                <div className="mt-5">
                  <label
                    className="block text-sm font-medium mb-1 text-blod"
                    htmlFor="default"
                  >
                    Minimum Delivery Time
                  </label>
                  <select onChange={(e) => setDelivery(e.target.value)} className="form-input w-full">
                    <option value="15min">15min</option>
                    <option value="15min">15min</option>
                    <option value="15min">15min</option>
                    <option value="15min">15min</option>
                  </select>
                </div>
                {/* End */}
              </div>
              <div>

              </div>
            </div>


          </div>
        </div>

        {/*  time slot */}

        {/* set time  */}
        {/* maping */}
        {shopStatuses?.map((item) => {
          return (
            <>
              <div className="border-t border-slate-200 ">
                <div className="px-4 sm:px-6 lg:px-4 py-4 w-full max-w-4xl ">
                  <div
                    className="nee shadow-md   rounded-xl p-5 mt-5"
                    style={{ padding: "15px", boxSizing: "border-box" }}
                  >
                    <div className="flex items-center space-x-3 mb-5">
                      <div className="">
                        <h1 className="font-bold -mt-3 text-lg text-black time-slot-days">
                          {item?.day}
                        </h1>
                      </div>
                      <div>
                        <div class="form-switch time-slot-dayss">
                          <input
                            type="checkbox"
                            name={item?.day}
                            value={item?.day}
                            onChange={(e) => HandleTimeSlot(e)}
                            id={item?.day}
                            class="sr-only"
                            x-model="checked"
                          />
                          <label class="bg-slate-400" for={item?.day}>
                            <span
                              class="bg-white shadow-sm"
                              aria-hidden="true"
                            ></span>
                          </label>
                        </div>
                      </div>
                      <div className="time-slot-dayss">
                        <h3>Close</h3>
                      </div>
                      <div>
                        <input
                        //   id="default"
                          className="form-input w-full time-slot-times"
                          type="time"
                         value={TimeTable.start}
                         onChange={handleTimeChangeStart}
                        />
                      </div>
                      <span className="time-slot-times_text">To</span>
                      <div>
                      <input
                        //   id="default"
                          className="form-input w-full time-slot-times"
                          type="time"
                          value={TimeTable.end}
                         onChange={handleTimeChangeEnd}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}

        {/* maping */}

        {/* <div className="border-t border-slate-200 " >

                    <div className="px-4 sm:px-6 lg:px-4 py-4 w-full max-w-4xl ">
                        <div className="nee shadow-md   rounded-xl p-5 mt-5" style={{ padding: "15px", boxSizing: "border-box" }}>
                            <div className="flex items-center space-x-3 mb-5">

                                <div className="">
                                    <h1 className='font-bold -mt-3 text-lg text-black time-slot-days' >Monday</h1>
                                </div>
                                <div>

                                    <div class="form-switch time-slot-dayss" >
                                        <input type="checkbox" id="switch-1" class="sr-only" x-model="checked" />
                                        <label class="bg-slate-400" for="switch-1">
                                            <span class="bg-white shadow-sm" aria-hidden="true"></span>
                                        </label>
                                    </div>
                                </div>
                                <div className='time-slot-dayss'>
                                    <h3>Close</h3>
                                </div>
                                <div>
                                    <input id="default" className="form-input w-full time-slot-times" type="time" />
                                </div>
                                <span className='time-slot-times_text'>To</span>
                                <div>
                                    <input id="default" className="form-input w-full time-slot-times" type="time" />
                                </div>

                            </div>



                        </div>
                    </div>

                </div> */}

        {/* monday */}

        {/* <div className="border-t border-slate-200 " >

                    <div className="px-4 sm:px-6 lg:px-4 py-4 w-full max-w-4xl ">
                        <div className="nee shadow-md   rounded-xl p-5 mt-5" style={{ padding: "15px", boxSizing: "border-box" }}>
                            <div className="flex items-center space-x-3 mb-5">

                                <div className="">
                                    <h1 className='font-bold -mt-3 text-lg text-black time-slot-days' >Tuesday</h1>
                                </div>
                                <div>

                                    <div class="form-switch time-slot-dayss" >
                                        <input type="checkbox" id="switch-1" class="sr-only" x-model="checked" />
                                        <label class="bg-slate-400" for="switch-1">
                                            <span class="bg-white shadow-sm" aria-hidden="true"></span>
                                        </label>
                                    </div>
                                </div>
                                <div className='time-slot-dayss'>
                                    <h3>Close</h3>
                                </div>
                                <div>
                                    <input id="default" className="form-input w-full time-slot-times" type="time" />
                                </div>
                                <span className='time-slot-times_text'>To</span>
                                <div>
                                    <input id="default" className="form-input w-full time-slot-times" type="time" />
                                </div>

                            </div>



                        </div>
                    </div>

                </div> */}

        {/* tuesday */}
        {/* <div className="border-t border-slate-200 " >

                    <div className="px-4 sm:px-6 lg:px-4 py-4 w-full max-w-4xl ">
                        <div className="nee shadow-md   rounded-xl p-5 mt-5" style={{ padding: "15px", boxSizing: "border-box" }}>
                            <div className="flex items-center space-x-3 mb-5">

                                <div className="">
                                    <h1 className='font-bold -mt-3 text-lg text-black time-slot-days' >Wednesday</h1>
                                </div>
                                <div>

                                    <div class="form-switch time-slot-dayss" >
                                        <input type="checkbox" id="switch-1" class="sr-only" x-model="checked" />
                                        <label class="bg-slate-400" for="switch-1">
                                            <span class="bg-white shadow-sm" aria-hidden="true"></span>
                                        </label>
                                    </div>
                                </div>
                                <div className='time-slot-dayss'>
                                    <h3>Close</h3>
                                </div>
                                <div>
                                    <input id="default" className="form-input w-full time-slot-times" type="time" />
                                </div>
                                <span className='time-slot-times_text'>To</span>
                                <div>
                                    <input id="default" className="form-input w-full time-slot-times" type="time" />
                                </div>

                            </div>



                        </div>
                    </div>

                </div> */}

        {/* <div className="border-t border-slate-200 " >

                    <div className="px-4 sm:px-6 lg:px-4 py-4 w-full max-w-4xl ">
                        <div className="nee shadow-md   rounded-xl p-5 mt-5" style={{ padding: "15px", boxSizing: "border-box" }}>
                            <div className="flex items-center space-x-3 mb-5">

                                <div className="">
                                    <h1 className='font-bold -mt-3 text-lg text-black time-slot-days' >Thursday</h1>
                                </div>
                                <div>

                                    <div class="form-switch time-slot-dayss" >
                                        <input type="checkbox" id="switch-1" class="sr-only" x-model="checked" />
                                        <label class="bg-slate-400" for="switch-1">
                                            <span class="bg-white shadow-sm" aria-hidden="true"></span>
                                        </label>
                                    </div>
                                </div>
                                <div className='time-slot-dayss'>
                                    <h3>Close</h3>
                                </div>
                                <div>
                                    <input id="default" className="form-input w-full time-slot-times" type="time" />
                                </div>
                                <span className='time-slot-times_text'>To</span>
                                <div>
                                    <input id="default" className="form-input w-full time-slot-times" type="time" />
                                </div>

                            </div>



                        </div>
                    </div>

                </div> */}

        {/* <div className="border-t border-slate-200 " >

                    <div className="px-4 sm:px-6 lg:px-4 py-4 w-full max-w-4xl ">
                        <div className="nee shadow-md   rounded-xl p-5 mt-5" style={{ padding: "15px", boxSizing: "border-box" }}>
                            <div className="flex items-center space-x-3 mb-5">

                                <div className="">
                                    <h1 className='font-bold -mt-3 text-lg text-black time-slot-days' >Friday</h1>
                                </div>
                                <div>

                                    <div class="form-switch time-slot-dayss" >
                                        <input type="checkbox" id="switch-1" class="sr-only" x-model="checked" />
                                        <label class="bg-slate-400" for="switch-1">
                                            <span class="bg-white shadow-sm" aria-hidden="true"></span>
                                        </label>
                                    </div>
                                </div>
                                <div className='time-slot-dayss'>
                                    <h3>Close</h3>
                                </div>
                                <div>
                                    <input id="default" className="form-input w-full time-slot-times" type="time" />
                                </div>
                                <span className='time-slot-times_text'>To</span>
                                <div>
                                    <input id="default" className="form-input w-full time-slot-times" type="time" />
                                </div>

                            </div>



                        </div>
                    </div>

                </div> */}

        {/* <div className="border-t border-slate-200 " >

                    <div className="px-4 sm:px-6 lg:px-4 py-4 w-full max-w-4xl ">
                        <div className="nee shadow-md   rounded-xl p-5 mt-5" style={{ padding: "15px", boxSizing: "border-box" }}>
                            <div className="flex items-center space-x-3 mb-5">

                                <div className="">
                                    <h1 className='font-bold -mt-3 text-lg text-black time-slot-days' >Saturday</h1>
                                </div>
                                <div>

                                    <div class="form-switch time-slot-dayss" >
                                        <input type="checkbox" id="switch-1" class="sr-only" x-model="checked" />
                                        <label class="bg-slate-400" for="switch-1">
                                            <span class="bg-white shadow-sm" aria-hidden="true"></span>
                                        </label>
                                    </div>
                                </div>
                                <div className='time-slot-dayss'>
                                    <h3>Close</h3>
                                </div>
                                <div>
                                    <input id="default" className="form-input w-full time-slot-times" type="time" />
                                </div>
                                <span className='time-slot-times_text'>To</span>
                                <div>
                                    <input id="default" className="form-input w-full time-slot-times" type="time" />
                                </div>

                            </div>



                        </div>
                    </div>

                </div> */}

        <button onClick={HandleUpdateTime} className="btn bg-indigo-500  hover:bg-indigo-600 text-white">
          Save
        </button>
      </main>
      <ToastContainer/>
    </div>
  );
};

export default Timing;
