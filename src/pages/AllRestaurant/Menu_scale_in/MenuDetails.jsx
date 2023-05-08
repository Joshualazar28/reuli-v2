import React,{useState} from 'react'

// import Right from '../images/write.png';
// import""from '../images/map.png'
import { useLocation } from 'react-router-dom'
import moment  from 'moment';

function RestaurantProfile({restaurant, meal}) {
 
    const [open, setOpen] = useState(false);
    const [on,setOn]=useState(false)
    console.log(restaurant, 'restaurant-about')
    return (
        <>
       
            <div className="nee shadow-md   rounded-xl border border-slate-200 p-5 -mt-10 -z-30">     
                <div className="flex items-center space-x-3 mb-5">
                    <img className="rounded-full shrink-0" src={meal?.ImageUrl} width="140" height="140" alt="User 02" />
                    <div className="grow">
                        <h1 className='font-bold -mt-3 text-lg text-black'>{meal?.Name?meal?.Name:"Not Found"}</h1>
                    </div>  

                    
                </div>
                <h5 className='ml-12  text-sm'>Price :     {meal?.Price?meal?.Price:"Not Found"} €</h5>
                <h5 className='ml-12  text-sm'>Discount :     {meal?.Discount?meal?.Discount:"Not Found"} €</h5>
                <h5 className='ml-12  text-sm'>Quantity :     {meal?.Quantity?meal?.Quantity:"Not Found"} €</h5>
                <h2 className='ml-12  mt-9 '>Description</h2>
                <p className='ml-12  text-sm'> {meal?.Description?meal?.Description:"Not Found"}</p>

                

               
            </div>
 

    


    {/* <Reviews/>   */}
        </>
    )
}

export default RestaurantProfile