import React from 'react'
import Riderorder from "./RideProfileOrders/Riderorder"
const RestaurantOrder = ({restaurantorder}) => {
  return (
    <div className='mt-5'>
      <Riderorder restaurantorder={restaurantorder}/>
    </div>
  )
}

export default RestaurantOrder
