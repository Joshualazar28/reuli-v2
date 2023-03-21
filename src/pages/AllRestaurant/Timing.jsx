import React, { useState } from 'react';

const Timing = () => {
    return (
        <div>
            <main>
                <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
                    {/* Page header */}
                    <div className="mb-8">
                        <h1 className="text-2xl md:text-3xl text-slate-800 font-bold">Delivery Timings ✨</h1>
                    </div>
                    <div className="border-t border-slate-200">
                        <div className="grid gap-5 md:grid-cols-3">
                            <div>
                                {/* Start */}
                                <div className='mt-5'>
                                    <label className="block text-sm font-medium mb-1 text-blod" htmlFor="default">
                                        Preparation Time
                                    </label>
                                    <input id="default" className="form-input w-full" type="time" />
                                </div>
                                {/* End */}
                            </div>
                        </div>

                        <div className="grid gap-5 md:grid-cols-3">
                            <div>
                                {/* Start */}
                                <div className='mt-5'>
                                    <label className="block text-sm font-medium mb-1 text-blod" htmlFor="default">
                                        Minimum Delivery Time
                                    </label>
                                    <select className="form-input w-full">
                                        <option value="15min">15min</option>
                                        <option value="15min">15min</option>
                                        <option value="15min">15min</option>
                                        <option value="15min">15min</option>
                                    </select>
                                </div>
                                {/* End */}
                            </div>
                            <div>
                                {/* Start */}
                                <div className='mt-5'>
                                    <label className="block text-sm font-medium mb-1 text-blod" htmlFor="default">
                                        Minimum Delivery Time
                                    </label>
                                    <select className="form-input w-full">
                                        <option value="45min">45min</option>
                                        <option value="45min">45min</option>
                                        <option value="45min">45min</option>
                                        <option value="45min">45min</option>
                                    </select>

                                </div>
                                {/* End */}
                            </div>
                        </div>

                        <div className="grid gap-5 md:grid-cols-3">
                            <div>
                                {/* Start */}
                                <div className='mt-5'>
                                    <label className="block text-sm font-medium mb-1 text-blod" htmlFor="default">
                                        Minimum Delivery Time
                                    </label>
                                    <select className="form-input w-full">
                                        <option value="15min">15min</option>
                                        <option value="15min">15min</option>
                                        <option value="15min">15min</option>
                                        <option value="15min">15min</option>
                                    </select>
                                </div>
                                {/* End */}
                            </div>
                            <div>
                                {/* Start */}
                                <div className='mt-5'>
                                    <label className="block text-sm font-medium mb-1 text-blod" htmlFor="default">
                                        Minimum Delivery Time
                                    </label>
                                    <select className="form-input w-full">
                                        <option value="45min">45min</option>
                                        <option value="45min">45min</option>
                                        <option value="45min">45min</option>
                                        <option value="45min">45min</option>
                                    </select>

                                </div>
                                {/* End */}
                            </div>
                        </div>
                    </div>
                </div>

                {/*  time slot */}
                <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
                    {/* Page header */}

                    <div className="border-t border-slate-200">
                        <div className="grid gap-5 md:grid-cols-3">
                            <div className="mb-8">
                                <h1 className="text-2xl mt-3 md:text-3xl text-slate-800 font-bold">Delivery Timings ✨</h1>
                            </div>

                            {/* Start */}
                            <div className='mt-5'>

                                <input id="default" className="form-input w-full" type="date" />
                            </div>
                            {/* End */}
                            <div>

                            </div>
                        </div>


                    </div>
                </div>


                {/* set time  */}
                {/* maping */}

                <div className="border-t border-slate-200 " >

                    <div className="px-4 sm:px-6 lg:px-4 py-4 w-full max-w-4xl ">
                        <div className="nee shadow-md   rounded-xl p-5 mt-5" style={{ padding: "15px", boxSizing: "border-box" }}>
                            <div className="flex items-center space-x-3 mb-5">

                                <div className="">
                                    <h1 className='font-bold -mt-3 text-lg text-black time-slot-days' >Sunday</h1>
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


                            </div>



                        </div>
                    </div>

                </div>

                {/* maping */}

                <div className="border-t border-slate-200 " >

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

                </div>



                {/* monday */}

                <div className="border-t border-slate-200 " >

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

                </div>


                {/* tuesday */}
                <div className="border-t border-slate-200 " >

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

                </div>

                <div className="border-t border-slate-200 " >

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

                </div>


                <div className="border-t border-slate-200 " >

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

                </div>

                <div className="border-t border-slate-200 " >

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

                </div>







                <button className="btn bg-indigo-500  hover:bg-indigo-600 text-white">Save</button>




            </main>
        </div>
    )
}

export default Timing
