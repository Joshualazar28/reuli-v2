import React, { useState } from 'react'
import Avatar from '../../images/uncle.png'
import Right from '../../images/write.png';
import left from '../../images/map.png'

import UserAvatar from '../../images/user-128-01.jpg';
import ProfileBg from '../../images/vegetable.png';
import Tooltip from '../../components/Tooltip';
// import Reviews from './Reviews';


const Setting = () => {
  const [open, setOpen] = useState(false);
  const [on, setOn] = useState(false)
  return (
    <div>
      <div className="relative h-56 bg-slate-200 mt-5 -z-20">
        <button className="btn border-slate-200 hover:border-slate-300 text-slate-600 edit_rst-pro">
          <svg className="w-4 h-4 fill-current text-slate-500 shrink-0" viewBox="0 0 16 16">
            <path d="M11.7.3c-.4-.4-1-.4-1.4 0l-10 10c-.2.2-.3.4-.3.7v4c0 .6.4 1 1 1h4c.3 0 .5-.1.7-.3l10-10c.4-.4.4-1 0-1.4l-4-4zM4.6 14H2v-2.6l6-6L10.6 8l-6 6zM12 6.6L9.4 4 11 2.4 13.6 5 12 6.6z" />
          </svg>
          <span className="ml-2">Edit Content</span>
        </button>
        <img className="object-cover h-full w-full" src={ProfileBg} width="979" height="220" alt="Profile background" />
      </div>
      <div className="nee neees shadow-md   rounded-xl border border-slate-200 p-5 -mt-10 -z-30">
        <div className="flex items-center space-x-3 mb-5">
          <button className="profile_pic_edit_btn btn border-slate-200 hover:border-slate-300">
            <svg className="w-4 h-4 fill-current text-slate-500 shrink-0" viewBox="0 0 16 16">
              <path d="M11.7.3c-.4-.4-1-.4-1.4 0l-10 10c-.2.2-.3.4-.3.7v4c0 .6.4 1 1 1h4c.3 0 .5-.1.7-.3l10-10c.4-.4.4-1 0-1.4l-4-4zM4.6 14H2v-2.6l6-6L10.6 8l-6 6zM12 6.6L9.4 4 11 2.4 13.6 5 12 6.6z" />
            </svg>
          </button>
          <img className="rounded-full shrink-0" src={Avatar} width="80" height="80" alt="User 02" />
          <div className="grow">
            <h1 className='font-bold -mt-3 text-lg text-black'>Jack Will</h1>
          </div>
        </div>
        <h5 className='ml-18 -mt-9 text-sm users_id_res'>69090704294697</h5>

        <div className='text-slate-900 -mt-9 flex justify-end text-xs font-semibold'>
          <span>
            <button className="btn-cd btn-active  bg-green-500 px-3">active</button>
            <button className="btn-cd btn-bun px-2" >ban</button>
          </span>
        </div>
      </div>

<main>
<div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
<div className="grid gap-2 md:grid-cols-3">
        <div>
          {/* Start */}
          <div>
            <label className="block text-sm font-medium mb-1 p-2" htmlFor="default">
            Restaurant Name
            </label>
            <input id="default" className="form-input w-full"  placeholder='Restaurant Name' type="text" />
          </div>
          {/* End */}
        </div>

        <div>
          {/* Start */}
          <div>
            <div className="flex items-center justify-between">
              <label className="block text-sm font-medium mb-1 p-2" htmlFor="tooltip">
          Number
              </label>
       
            </div>
            <input id="tooltip" className="form-input w-full" type="text" />
          </div>
          {/* End */}
        </div>
      </div>


      <div className="grid gap-2 md:grid-cols-3">
        <div>
          {/* Start */}
          <div>
            <label className="block text-sm font-medium mb-1 p-2" htmlFor="default">
            Delivery Paid
            </label>
            <select id="default" className="form-input w-full">
              <option value="15%">15%</option>
              <option value="15%">15%</option>
              <option value="15%">15%</option>
              <option value="15%">15%</option>
              <option value="15%">15%</option>
              <option value="15%">15%</option>
            </select>
          </div>
          {/* End */}
        </div>

        <div>
          {/* Start */}
          <div>
            <div className="flex items-center justify-between">
              <label className="block text-sm font-medium mb-1 p-2" htmlFor="tooltip">
          Number
              </label>
   
            </div>
            <input id="tooltip" className="form-input w-full" type="text" />
          </div>
          {/* End */}
        </div>
      </div>

      <div className="grid gap-2 md:grid-cols-3">
        <div>
          {/* Start */}
          <div>
            <div className="flex items-center justify-between">
              <label className="block text-sm font-medium mb-1 p-2" htmlFor="tooltip">
              Password
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
              Discount
              </label>
   
            </div>
            <input id="tooltip" className="form-input w-full" type="text" />
          </div>
          {/* End */}
        </div>
      </div>



      <div className="grid gap-2 md:grid-cols-3">
        <div>
          {/* Start */}
          <div>
            <div className="flex items-center justify-between">
              <label className="block text-sm font-medium mb-1 p-2" htmlFor="tooltip">
              Company Percentage
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
              Merchantled
              </label>
   
            </div>
            <select className="form-input w-full" >
              <option value="33">select</option>
              <option value="33">select</option>
              <option value="33">select</option>
              <option value="33">select</option>
              <option value="33">select</option>
            </select>
          </div>
          {/* End */}
        </div>
      </div>
      <div>

      <div className="border-t border-slate-200 " >

<div className="px-4 sm:px-6 lg:px-4 py-4 w-full max-w-4xl ">
    <div className="nee shadow-md   rounded-xl p-5 mt-5" style={{ padding: "15px", boxSizing: "border-box" }}>
        <div className="flex items-center space-x-3 mb-5">

        <div className='time-slot-dayss'>
                <h3>Lorem</h3>
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
                <h3>Lorem</h3>
            </div>
  

        </div>



    </div>
</div>

</div>

</div>
<button className="btn bg-indigo-500  hover:bg-indigo-600 text-white">Update</button>
</div>


</main>



      {/* <Reviews/>  */}
    </div>
  )
}

export default Setting


