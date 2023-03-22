import React, { useState, useEffect } from 'react';
import Orders from './OrdersTableItem';

function OrdersTable({
  selectedItems,CreateOrderCount,title,RecievedData
}) {

  const orders = [
    {
      id: '0',
      // image: Image01,
      order: '78347387438',
      date: '22/01/2021',
      customer: 'Patricia Semklo',
      Amount: 'PKR 2000',
      status: 'Order in cart',
      // items: '1',
      location: '🇨🇳 Shanghai, CN',
      restaurat:" xyz city/xyz area",
      rest:"Xyz restaurat",
      pay:"Apply pay",
      type: 'Subscription',
      description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      id: '1',
      // image: Image01,
      order: '78347387438',
      date: '22/01/2021',
      customer: 'Dominik Lamakani',
      Amount: 'PKR 2000',
      status: 'payment unsuccessful',
      // items: '2',
      restaurat:" xyz city/xyz area",
      rest:"Xyz restaurat",
      pay:"Credit Card",
      location: '🇲🇽 Mexico City, MX',
      type: 'Subscription',
      description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      id: '2',
      // image: Image02,
      order: '78347387438',
      date: '22/01/2021',
      customer: 'Ivan Mesaros',
      Amount: 'PKR 2000',
      status: 'Order in cart',
      restaurat:" xyz city/xyz area",
      rest:"Xyz restaurat",
      pay:"Credit Card ",
      // items: '2',
      location: '🇮🇹 Milan, IT',
      type: 'One-time',
      description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      id: '3',
      // image: Image01,
      order: '78347387438',
      date: '22/01/2021',
      customer: 'Maria Martinez',
      Amount: 'PKR 2000',
      status: 'Pending',
      restaurat:" xyz city/xyz area",
      rest:"Xyz restaurat",
      pay:"Credit Card",
      // items: '1',
      location: '🇮🇹 Bologna, IT',
      type: 'One-time',
      description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    // {
    //   id: '4',
    //   // image: Image03,
    //   order: '78347387438',
    //   date: '22/01/2021',
    //   customer: 'Vicky Jung',
    //   Amount: '$39.00',
    //   status: 'Refunded',
    //   restaurat:" xyz city/xyz area",
    //   rest:"Xyz restaurat",
    //   pay:"Apply pay",
    //   // items: '1',
    //   location: '🇬🇧 London, UK',
    //   type: 'Subscription',
    //   description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    // },
    // {
    //   id: '5',
    //   // image: Image01,
    //   order: '78347387438',
    //   date: '21/01/2021',
    //   customer: 'Tisho Yanchev',
    //   Amount: '$59.00',
    //   status: 'payment unsuccessful',
    //   restaurat:" xyz city/xyz area",
    //   rest:"Xyz restaurat",
    //   pay:"Apply pay",
    //   // items: '1',
    //   location: '🇫🇷 Paris, FR',
    //   type: 'One-time',
    //   description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    // },
    // {
    //   id: '6',
    //   // image: Image03,
    //   order: '78347387438',
    //   date: '21/01/2021',
    //   customer: 'James Cameron',
    //   Amount: '$89.00',
    //   status: 'payment unsuccessful',
    //   restaurat:" xyz city/xyz area",
    //   rest:"Xyz restaurat",
    //   pay:"Apply pay",
    //   // items: '1',
    //   location: '🇫🇷 Marseille, FR',
    //   type: 'Subscription',
    //   description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    // },
    // {
    //   id: '7',
    //   // image: Image03,
    //   order: '78347387438',
    //   date: '21/01/2021',
    //   customer: 'Haruki Masuno',
    //   Amount: '$129.00',
    //   restaurat:" xyz city/xyz area",
    //   rest:"Xyz restaurat",
    //   pay:"Apply pay",
    //   status: 'payment unsuccessful',
    //   // items: '2',
    //   location: '🇺🇸 New York, USA',
    //   type: 'Subscription',
    //   description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    // },
    // {
    //   id: '8',
    //   // image: Image02,
    //   order: '78347387438',
    //   date: '21/01/2021',
    //   customer: 'Joe Huang',
    //   Amount: '$89.00',
    //   status: 'Pending',
    //   // items: '2',
    //   restaurat:" xyz city/xyz area",
    //   rest:"Xyz restaurat",
    //   pay:"Apply pay",
    //   location: '🇨🇳 Shanghai, CN',
    //   type: 'One-time',
    //   description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    // },
    // {
    //   id: '9',
    //   // image: Image01,
    //   order: '78347387438',
    //   date: '21/01/2021',
    //   customer: 'Carolyn McNeail',
    //   Amount: '$59.00',
    //   status: 'Refunded',
    //   restaurat:" xyz city/xyz area",
    //   rest:"Xyz restaurat",
    //   pay:"Apply pay",
    //   // items: '1',
    //   location: '🇬🇧 Sheffield, UK',
    //   type: 'Subscription',
    //   description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    // }
  ];

 
  const [selectAll, setSelectAll] = useState(false);
  const [isCheck, setIsCheck] = useState([]);
  const [list, setList] = useState([]);

  useEffect(() => {
    setList(orders);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSelectAll = () => {
    setSelectAll(!selectAll);
    setIsCheck(list.map(li => li.id));
    if (selectAll) {
      setIsCheck([]);
    }
  };

  const handleClick = e => {
    const { id, checked } = e.target;
    setSelectAll(false);
    setIsCheck([...isCheck, id]);
    if (!checked) {
      setIsCheck(isCheck.filter(item => item !== id));
    }
  };

  useEffect(() => {
    selectedItems(isCheck);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isCheck]);

  return (
    <div className="bg-white shadow-lg rounded-sm border border-slate-200 relative">
      <header className="px-5 py-4">
        <h2 className="font-semibold text-slate-800"> {title} <span className="text-slate-400 font-medium"> {CreateOrderCount}</span></h2>
      </header>
      <div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="table-auto w-full divide-y divide-slate-200">
            {/* Table header */}
            <thead className="text-xs uppercase text-slate-500 bg-slate-50 border-t border-slate-200">
              <tr>
                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap w-px">
                  <div className="flex items-center">
                    <label className="inline-flex">
                      <span className="sr-only">Select all</span>
                      <input className="form-checkbox" type="checkbox" checked={selectAll} onChange={handleSelectAll} />
                    </label>
                  </div>
                </th>
                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <div className="font-semibold text-left">Order Number</div>
                </th>
                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <div className="font-semibold text-left">Customer</div>
                </th>
                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <div className="font-semibold text-left">City/Area</div>
                </th>
                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <div className="font-semibold text-left">Restaurant </div>
                </th>
                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <div className="font-semibold text-left">Payment </div>
                </th>
                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <div className="font-semibold text-left">Date</div>
                </th>
               
                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <div className="font-semibold text-left">Amount</div>
                </th>
                {/* <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <div className="font-semibold text-left">Status</div>
                </th> */}
                {/* <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <div className="font-semibold">Items</div>
                </th> */}
                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  {/* <div className="font-semibold text-left">Location</div> */}
                </th>
                {/* <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <div className="font-semibold text-left">Payment type</div>
                </th> */}
               
              </tr>
            </thead>
            {/* Table body */}
            {
              RecievedData.map(order => {
              
                return (
                  <Orders
                    // key={order.id}
                    OrderNumber={order.OrderNumber?order.OrderNumber:"not found"}
                    // date={order.date}
                    customer={order.FullName?order.FullName:"not found"}
                    AddressLine={order.AddressLine?order.AddressLine:"not found"}
                    // restaurat={order.RestaurantName}
                    // image={order.image}
                    restaurat={order.RestaurantName?order.RestaurantName:"not found"}
                    pay={order.PaymentMethod?order.PaymentMethod:"not found"}
                    datetime={order.OrderPlaceTime?order.OrderPlaceTime:"not found"}
                    ItemSubTotal={order.ItemSubTotal?order.ItemSubTotal:"not found"}
                    BasicDeliveryFee={order.BasicDeliveryFee?order.BasicDeliveryFee:"not found"}
                    ETATime={order?.ETATime}
                    OrderId={order?.OrderId?order?.OrderId:"not found"}
                    Scales={order?.Scales?order?.Scales:"not found"}
                    TotalPrice={order?.TotalPrice?order?.TotalPrice:"not found"}
                    
                    ExtraKMDeliveryFee={order?.ExtraKMDeliveryFee?order?.ExtraKMDeliveryFee:"not found"}
                  
                    // rest={order.RestaurantName}
                    // OrderNumber={order.order}
                    // date={order.date}
                    // customer={order.customer}
                    // restaurat={order.restaurat}
                    // rest={order.rest}
                    // pay={order.pay}
                    // total={order.Amount}

                    // status={order.status}
                    // items={order.items}
                    // location={order.location}
                    // type={order.type}
                    // description={order.description}
                    // handleClick={handleClick}
                    // isChecked={isCheck.includes(order.id)}
                  />
                )
              })
            }
          </table>

        </div>
      </div>
    </div>
  );
}

export default OrdersTable;
