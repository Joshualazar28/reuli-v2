import React, { useState } from 'react';

function JobSidebar({geRestaurantMenu}) {

  const [companySetting, setCompanySetting] = useState(true);
  const [immigrationSetting, setImmigrationSetting] = useState(false);

  return (
    <div className="space-y-8">
      {/* Alert */}
      
      {/* White box */}
      <div className="bg-white shadow-lg rounded-sm border border-slate-200 p-5 min-w-60">
        <div className="grid md:grid-cols-2 xl:grid-cols-1 gap-6">
          {/* Group 1 */}
          <button className="btn bg-indigo-500 hover:bg-indigo-600 text-white">
                        <svg className="w-4 h-4 fill-current opacity-50 shrink-0" viewBox="0 0 16 16">
                          <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
                        </svg>
                        <span className="ml-2">Add category</span>
                      </button>
          <div>

            <ul className="space-y-2">
              {geRestaurantMenu?.map((getNameMenu)=> (
    <li>
    <label className="flex items-center">
      {/* <input type="checkbox" className="form-checkbox" defaultChecked /> */}
      <span className="text-sm text-slate-600 font-medium ml-2">{getNameMenu?.Name?getNameMenu?.Name:"Not found"}</span>
    </label>
  </li>
              ))}
          
 
            </ul>
          </div>


        </div>
      </div>
    </div>
  );
}

export default JobSidebar;