import React,{useState} from 'react'
import RiderProfile from './RiderProfile';
import RiderOrder from './RiderOrder';
import RiderPayout from './RiderPayouts';
import RestaurantOrder from './RestaurantOrder';
import RestaurantProfile from './RestaurantProfile';
function RestaurantButton() {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
      setToggleState(index);
    };
  return (
  <>
      <div>
    <ul className="flex flex-wrap -m-1">
      <li className="m-1">
        <button  onClick={() => toggleTab(1)} className={toggleState === 1 ? "inline-flex items-center justify-center text-sm font-medium leading-5 rounded-full px-3 py-1 border border-transparent shadow-sm bg-indigo-500 text-white duration-150 ease-in-out" : "inline-flex items-center justify-center text-sm font-medium leading-5 rounded-full px-3 py-1 border border-transparent shadow-sm bg-white text-slate-500 duration-150 ease-in-out"}
        >Profile</button>
      </li>
      <li className="m-1">
        <button  onClick={() => toggleTab(2)}  className={toggleState === 2 ? "inline-flex items-center justify-center text-sm font-medium leading-5 rounded-full px-3 py-1 border border-transparent shadow-sm bg-indigo-500 text-white duration-150 ease-in-out" : "inline-flex items-center justify-center text-sm font-medium leading-5 rounded-full px-3 py-1 border border-transparent shadow-sm bg-white text-slate-500 duration-150 ease-in-out"}>Orders</button>
      </li>
      <li className="m-1">
        <button onClick={() => toggleTab(3)} className={toggleState === 3 ? "inline-flex items-center justify-center text-sm font-medium leading-5 rounded-full px-3 py-1 border border-transparent shadow-sm bg-indigo-500 text-white duration-150 ease-in-out" : "inline-flex items-center justify-center text-sm font-medium leading-5 rounded-full px-3 py-1 border border-transparent shadow-sm bg-white text-slate-500 duration-150 ease-in-out"} >Payouts</button>
      </li>
      <li className="m-1">
        <button onClick={() => toggleTab(4)} className={toggleState === 3 ? "inline-flex items-center justify-center text-sm font-medium leading-5 rounded-full px-3 py-1 border border-transparent shadow-sm bg-indigo-500 text-white duration-150 ease-in-out" : "inline-flex items-center justify-center text-sm font-medium leading-5 rounded-full px-3 py-1 border border-transparent shadow-sm bg-white text-slate-500 duration-150 ease-in-out"} >Payouts</button>
      </li>
      <li className="m-1">
        <button onClick={() => toggleTab(5)} className={toggleState === 3 ? "inline-flex items-center justify-center text-sm font-medium leading-5 rounded-full px-3 py-1 border border-transparent shadow-sm bg-indigo-500 text-white duration-150 ease-in-out" : "inline-flex items-center justify-center text-sm font-medium leading-5 rounded-full px-3 py-1 border border-transparent shadow-sm bg-white text-slate-500 duration-150 ease-in-out"} >Payouts</button>
      </li>
    </ul>
  </div>
  {toggleState === 1 ? <> <RiderProfile /> </> : null}
  {toggleState === 2 ? <> <RiderOrder/> </> : null}
  {toggleState === 3 ? <><RiderPayout/></> : null }
  {toggleState === 4 ? <><RestaurantOrder/></> : null }
  {toggleState === 5 ? <><RestaurantProfile/></> : null }
 
  
 
  </>
  )
}

export default RestaurantButton