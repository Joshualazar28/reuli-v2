import { Button } from '@material-tailwind/react';
import React from 'react';
import { Link} from 'react-router-dom';
import EditMenu from '../../components/DropdownEditMenu';
import moment from 'moment';
function UsersTabsCard(props) {
  
  return (
    <div className="col-span-full  sm:col-span-6 xl:col-span-3 bg-white shadow-lg rounded-xl border border-slate-200">
      <div className="flex flex-col h-full">
        {/* Card top */}
        {/* <Link to={`/joshua/rider/${props.id}`}> */}
        <div className="grow p-5">
          {/* Menu button */}
          {/* Image + name */}
          <header>
            <div className="flex justify-center mb-2 ">
              {/* <Link className="relative inline-flex items-start" to={props.link}> */}
                <div className="absolute top-0 right-0 -mr-2 bg-white rounded-full shadow" aria-hidden="true">
                  {/* <svg className="w-8 h-8 fill-current text-amber-500" viewBox="0 0 32 32">
                    <path d="M21 14.077a.75.75 0 01-.75-.75 1.5 1.5 0 00-1.5-1.5.75.75 0 110-1.5 1.5 1.5 0 001.5-1.5.75.75 0 111.5 0 1.5 1.5 0 001.5 1.5.75.75 0 010 1.5 1.5 1.5 0 00-1.5 1.5.75.75 0 01-.75.75zM14 24.077a1 1 0 01-1-1 4 4 0 00-4-4 1 1 0 110-2 4 4 0 004-4 1 1 0 012 0 4 4 0 004 4 1 1 0 010 2 4 4 0 00-4 4 1 1 0 01-1 1z" />
                  </svg> */}
                </div>
                <img className="rounded-full" src={props.Logo} width="85" height="64" alt={props.name} />
              {/* </Link> */}
            </div>
            <div className="text-center">
            
                <h2 className="text-xl leading-snug justify-center font-semibold">{props.name}</h2>
             
            </div>
          </header>
          {/* Bio */}
          <div className="text-xs">
            <div className="text-center">{props.id}</div>
          </div>
          <div>
          <div className='text-slate-900 mt-2 flex justify-between text-xs font-semibold'>Joining Date
          <span className='text-slate-700 font-normal text-xs'>{ moment(props.joinDate).format('Do  MMMM YYYY')  }</span>
          </div>
          </div>
          <div>
          {/* <div className='text-slate-900 mt-1 flex justify-between text-xs font-semibold'>Business ID
          <span className='text-slate-700 font-normal text-xs' ></span>
          </div> */}
          </div>
          <div>
          <div className='text-slate-900 mt-2 flex justify-between text-xs font-semibold'>Total order
          <span className='text-slate-700 font-normal text-xs'></span>
          </div>
          </div>
          <div>
          <div className='text-slate-900 mt-2 flex justify-between text-xs font-semibold'>Email
          <span className='text-slate-700 font-normal text-xs'>{props?.email}</span>
          </div>
          <div className='text-slate-900 mt-2 flex justify-between text-xs font-semibold'>Type
          <span className='text-slate-700 font-normal text-xs'>{props?.email}</span>
          </div>
          </div>
          <div className='text-slate-900 mt-2 flex justify-between text-xs font-semibold'>Status
          <span>
            <button className="btn-cd btn-active">active</button>
            <button className="btn-cd btn-bun" >ban</button>
          </span>
          </div>
        </div>
        {/* </Link> */}
    
        {/* Card footer */}
        {/* <div className="border-t border-slate-200">
          <Link className="block text-center text-sm text-indigo-500 hover:text-indigo-600 font-medium px-3 py-4" to="/messages">
            <div className="flex items-center justify-center">
              <svg className="w-4 h-4 fill-current shrink-0 mr-2" viewBox="0 0 16 16">
                <path d="M8 0C3.6 0 0 3.1 0 7s3.6 7 8 7h.6l5.4 2v-4.4c1.2-1.2 2-2.8 2-4.6 0-3.9-3.6-7-8-7zm4 10.8v2.3L8.9 12H8c-3.3 0-6-2.2-6-5s2.7-5 6-5 6 2.2 6 5c0 2.2-2 3.8-2 3.8z" />
              </svg>
              <span>Send Message</span>
            </div>
          </Link>
        </div> */}
      </div>
    </div>
  );
}

export default UsersTabsCard;
