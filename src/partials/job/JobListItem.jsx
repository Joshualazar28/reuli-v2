import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import ReadMoreReact from 'read-more-react';

function JobListItem(props) {
  
console.log(props?.Meals,'meal')
// console.log(props.Meals?.map((p) => p))

  return (
    <div
      className={`shadow-lg rounded-sm border px-5 py-4 ${props.type === 'Featured' ? 'bg-amber-50 border-amber-300' : 'bg-white border-slate-200'}`}
    >
              <div>
                <div className="bg-white p-5 shadow-lg rounded-sm border border-slate-200" style={{width:"670px"}}>
                <span className="font-semibold text-slate-800  ">{props.catgname}</span>
                      <p></p>  
                      <ReadMoreReact text={props?.Description}
            min={80}
            ideal={100}
            max={100}
            readMoreText={"read more"}/>            
                  <ul className="space-y-2 sm:flex sm:space-y-0 sm:space-x-2 lg:space-y-2 lg:space-x-0 lg:flex-col mb-4">


                      {props.Meals?.map((meal) => {
                        console.log(meal)
                      })}
                    {props?.Meals?.map((meal) => (
  <li className='pt-4'>
  <button className="w-full h-full text-left py-3 px-4 rounded bg-white border border-slate-200 hover:border-slate-300 shadow-sm duration-150 ease-in-out">
 
  <div className="flex items-center mb-2">
<img className="w-14 h-14 rounded-full mr-3" src={meal?.ImageUrl} width="50" height="50" alt="User 07" />
</div>

    <div className="flex flex-wrap items-center justify-between mb-0.5">


      <span className="font-semibold text-slate-800">{meal.Name?meal.Name:"Not found"}</span>
      <span className="font-medium text-emerald-600">      
      <div class="form-switch " >
                    <input type="checkbox" id="switch-1" class="sr-only" x-model="checked" />
                    <label class="bg-slate-400" for="switch-1">
                        <span class="bg-white shadow-sm" aria-hidden="true"></span>
                    </label>
                </div>
                </span>

      
    </div>

    <div className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
    <span className="font-medium text-emerald-600"> {meal?.OldPrice ? <del className='font-small' style={{color:"gray"}}>    €{meal?.OldPrice?meal.OldPrice:"Not found"}</del> : null }  &nbsp;  &nbsp;    €{meal?.Price?meal?.Price:"Not found"}</span>
  </button>
</li>
                    ))}
                  

 
                  </ul>
                  <div className="mb-4">
                    <a className="btn w-full bg-indigo-500 hover:bg-indigo-600 text-white" href="#0">Add meal</a>
                  </div>
                 
                </div>
              </div>
    </div>
  );
}

export default JobListItem;