import React,{useState} from 'react'
import OrdersTable from "./OrdersTable"
const Riderorder = ({restaurantorder}) => {
    const [selectedItems, setSelectedItems] = useState([]);

    const handleSelectedItems = (selectedItems) => {
      setSelectedItems([...selectedItems]);
    };
  
    const  title = "Orders Create"
    const CreateOrderCount  = '76'
  return (
    <div>
       <OrdersTable restaurantorder={restaurantorder} selectedItems={handleSelectedItems} title={title} CreateOrderCount={CreateOrderCount} />
    </div>
  )
}

export default Riderorder