import React,{useState} from 'react'
import  About from './About';
import Menu from './Menu';
import Orders from './Orders';
import Payouts from './Payouts';
import Setting from './Setting';
import Timing from './Timing';
import FeedBack from './FeedBack';
// import RiderProfile from './RiderProfile';
// import RiderOrder from './RiderOrder';
// import RiderPayout from './RiderPayouts';
function TabsButton({restaurant, restaurantorder, geRestaurantMenu}) {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
      setToggleState(index);
    };
    const [selectedItems, setSelectedItems] = useState([]);

    const handleSelectedItems = (selectedItems) => {
      setSelectedItems([...selectedItems]);
    };
  
    const  title = "Orders Create"
    const CreateOrderCount  = '76'
  return (
  <>
      <div>
  
    <ul className="flex flex-wrap -m-1">
      <li className="m-1">
        <button  onClick={() => toggleTab(1)} className={toggleState === 1 ? "inline-flex items-center justify-center text-sm font-medium leading-5 rounded-full px-3 py-1 border border-transparent shadow-sm bg-indigo-500 text-white duration-150 ease-in-out" : "inline-flex items-center justify-center text-sm font-medium leading-5 rounded-full px-3 py-1 border border-transparent shadow-sm bg-white text-slate-500 duration-150 ease-in-out"}
        >About us</button>
      </li>
      <li className="m-1">
        <button  onClick={() => toggleTab(2)}  className={toggleState === 2 ? "inline-flex items-center justify-center text-sm font-medium leading-5 rounded-full px-3 py-1 border border-transparent shadow-sm bg-indigo-500 text-white duration-150 ease-in-out" : "inline-flex items-center justify-center text-sm font-medium leading-5 rounded-full px-3 py-1 border border-transparent shadow-sm bg-white text-slate-500 duration-150 ease-in-out"}>Orders</button>
      </li>
      <li className="m-1">
        <button onClick={() => toggleTab(3)} className={toggleState === 3 ? "inline-flex items-center justify-center text-sm font-medium leading-5 rounded-full px-3 py-1 border border-transparent shadow-sm bg-indigo-500 text-white duration-150 ease-in-out" : "inline-flex items-center justify-center text-sm font-medium leading-5 rounded-full px-3 py-1 border border-transparent shadow-sm bg-white text-slate-500 duration-150 ease-in-out"} >Menu</button>
      </li>
    
      <li className="m-1">
        <button onClick={() => toggleTab(4)} className={toggleState === 4 ? "inline-flex items-center justify-center text-sm font-medium leading-5 rounded-full px-3 py-1 border border-transparent shadow-sm bg-indigo-500 text-white duration-150 ease-in-out" : "inline-flex items-center justify-center text-sm font-medium leading-5 rounded-full px-3 py-1 border border-transparent shadow-sm bg-white text-slate-500 duration-150 ease-in-out"} >Payouts</button>
      </li>
      <li className="m-1">
        <button onClick={() => toggleTab(5)} className={toggleState === 5 ? "inline-flex items-center justify-center text-sm font-medium leading-5 rounded-full px-3 py-1 border border-transparent shadow-sm bg-indigo-500 text-white duration-150 ease-in-out" : "inline-flex items-center justify-center text-sm font-medium leading-5 rounded-full px-3 py-1 border border-transparent shadow-sm bg-white text-slate-500 duration-150 ease-in-out"} >Timing</button>
      </li>
      <li className="m-1">
        <button onClick={() => toggleTab(6)} className={toggleState === 6 ? "inline-flex items-center justify-center text-sm font-medium leading-5 rounded-full px-3 py-1 border border-transparent shadow-sm bg-indigo-500 text-white duration-150 ease-in-out" : "inline-flex items-center justify-center text-sm font-medium leading-5 rounded-full px-3 py-1 border border-transparent shadow-sm bg-white text-slate-500 duration-150 ease-in-out"} >Setting</button>
      </li>
      <li className="m-1">
        <button onClick={() => toggleTab(7)} className={toggleState === 7 ? "inline-flex items-center justify-center text-sm font-medium leading-5 rounded-full px-3 py-1 border border-transparent shadow-sm bg-indigo-500 text-white duration-150 ease-in-out" : "inline-flex items-center justify-center text-sm font-medium leading-5 rounded-full px-3 py-1 border border-transparent shadow-sm bg-white text-slate-500 duration-150 ease-in-out"} >FeedBack</button>
      </li>
    </ul>
  </div>
  {toggleState === 1 ? <> <About restaurant={restaurant}/> </> : null}

  {toggleState === 2 ? <> <Orders restaurantorder={restaurantorder}  selectedItems={handleSelectedItems} title={title} CreateOrderCount={CreateOrderCount}/> </> : null}
  {toggleState === 3 ? <><Menu /></> : null }  
  {toggleState === 4 ? <> <Payouts/> </> : null}
  {toggleState === 5 ? <> <Timing/> </> : null}
  
  {toggleState === 6 ? <> <Setting/> </> : null}
  {toggleState === 7 ? <> <FeedBack/> </> : null}




 
  
 
  </>
  )
}

export default TabsButton

