import React,{useState} from 'react'
import Avatar from '../images/avatar-01.jpg'
import Right from '../images/write.png';
import Reviews from './Reviews';

function RiderProfile() {
    const [open, setOpen] = useState(false);
    const [on,setOn]=useState(false)
    return (
        <>
            <div className="nee shadow-md   rounded-xl border border-slate-200 p-5 mt-5">
                <div className="flex items-center space-x-3 mb-5">
                    <img className="rounded-full shrink-0" src={Avatar} width="40" height="40" alt="User 02" />
                    <div className="grow">
                        <h1 className='font-bold -mt-3 text-lg text-black'>Jack Will</h1>
                    </div>  
                </div>
                <h5 className='ml-12 -mt-9 text-sm'>69090704294697</h5>

                <div className='text-slate-900 -mt-9 flex justify-end text-xs font-semibold'>
                    <span>
                        <button className="btn-cd btn-active  bg-green-500 px-3">active</button>
                        <button className="btn-cd btn-bun px-2" >ban</button>
                    </span>
                </div>
            </div>
      <div className='mt-5 pt-3'>
      <div>
          <div className='text-slate-900  flex justify-between text-sm font-bold'>Joining Date
          <span className='text-slate-700 font-normal text-sm'>12-09-2022</span>
          </div>
          </div>
          <div>
          <div className='text-slate-900 mt-1 flex justify-between text-sm font-bold'>Vehicle
          <span className='text-slate-700 font-normal text-sm' >Car</span>
          </div>
          </div>
          <div>
          <div className='text-slate-900 mt-2 flex justify-between text-sm font-bold'>Total order
          <span className='text-slate-700 font-normal text-sm'>2000</span>
          </div>
          </div>
          <div>
          <div className='text-slate-900 mt-2 flex justify-between text-sm font-bold'>Email
          <span className='text-slate-700 font-normal text-sm'>xyz@gmail.com</span>
          </div>
          </div>
          <div>
          <div className='text-slate-900 mt-2 flex justify-between text-sm font-bold'>Password
          <span className='text-slate-700 font-normal text-sm'>ssd83433</span>
          </div>
          </div>
          <div>
          <div className='text-slate-900 mt-2 flex justify-between text-lg font-bold'>Document
          </div>
          </div>
      </div>

    
            <div className="nee relative px-5 py-3 mt-5 rounded-xl border border-slate-200">
      <button
        className="flex items-center justify-between w-full group mb-1"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        <div className="relative  text-md text-blod  text-slate-800 font-bold">Valid Work Permit</div>
        <svg className={`w-8 h-8 shrink-0 fill-current text-slate-400 group-hover:text-slate-500 ml-3 ${open && 'rotate-180'}`} viewBox="0 0 32 32">
          <path d="M16 20l-5.4-5.4 1.4-1.4 4 4 4-4 1.4 1.4z" />
        </svg>
      </button>
      
      <div className={`text-sm ${!open && 'hidden'}`}>
      <div className="flex items-center space-x-3 mb-5 mt-2">
                    <img className=" " src={Right} width="56" height="60" alt="User 02" /> 
                </div>
      <div className="col-span-6 order-1 sm:order-none sm:col-span-3 flex items-center space-x-4 lg:sidebar-expanded:col-span-8 xl:sidebar-expanded:col-span-8">
                  
        
        </div>
      </div>
    </div>

    <div className="nee relative px-5 py-3 mt-5 rounded-xl border border-slate-200">
      <button
        className="flex items-center justify-between w-full group mb-1"
        aria-expanded={on}
        onClick={() => setOn(!on)}
      >
        <div className="relative  text-md text-blod  text-slate-800 font-bold">Driving License</div>
        <svg className={`w-8 h-8 shrink-0 fill-current text-slate-400 group-hover:text-slate-500 ml-3 ${open && 'rotate-180'}`} viewBox="0 0 32 32">
          <path d="M16 20l-5.4-5.4 1.4-1.4 4 4 4-4 1.4 1.4z" />
        </svg>
      </button>
      
      <div className={`text-sm ${!on && 'hidden'}`}>
      <div className="flex items-center space-x-3 mb-5 mt-2">
                    <img className=" " src={Right} width="56" height="60" alt="User 02" /> 
                </div>
      <div className="col-span-6 order-1 sm:order-none sm:col-span-3 flex items-center space-x-4 lg:sidebar-expanded:col-span-8 xl:sidebar-expanded:col-span-8">
                  
        
        </div>
      </div>
    </div>

    <Reviews/>  
        </>
    )
}

export default RiderProfile