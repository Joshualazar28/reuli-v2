import React, {useState} from 'react'
import RestaurantOrder from '../../components/RestaurantOrder'
import RestaurantProfileOrder from '../AllRestaurant/RestruantProfileOrder/Resprofileorder'
const Orders = ({restaurantorder}) => {
  const [selectedItems, setSelectedItems] = useState([]);

const handleSelectedItems = (selectedItems) => {
  setSelectedItems([...selectedItems]);
};

const  title = "Orders Create"
const CreateOrderCount  = '76'
  return (
    // <RestaurantOrder restaurantorder={restaurantorder}/>
    <div  className='mt-5'>
    <RestaurantProfileOrder  restaurantorder={restaurantorder}  selectedItems={selectedItems}/>
      
    </div>
    // <div>joshua</div>
  )
}


export default Orders