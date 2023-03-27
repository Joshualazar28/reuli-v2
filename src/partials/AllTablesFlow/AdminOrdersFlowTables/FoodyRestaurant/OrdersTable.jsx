import React, { useState, useEffect } from 'react';
import Orders from './OrdersTableItem';

function OrdersTable({
  selectedItems,CreateOrderCount,title, food
}) {

  const orders = [
    {
      id: '0',
      // image: Image01,
      order: '78347387438',
      date: '22/01/2021',
      customer: 'Patricia Semklo',
      Amount: 'PKR 2000',
      rems:"10:00",
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
      rems:"10:00",
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
      rems:"10:00",
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
      rems:"10:00",
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
                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <div className="font-semibold text-left">Remaining Time</div>
                </th>

                {/* <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <div className="font-semibold text-left">Remaing Time</div>
                </th> */}

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
              food.map(order => {
                return (
                  <Orders
                    key={order.id}
                    id={order.OrderId}
                    orderId = {order?.Id}
                    // image={order.image}
                    OrderNumber={order.OrderNumber}
                    date={order.date}
                    FullName={order.FullName}
                    PaymentMethod={order?.PaymentMethod?order?.PaymentMethod:'not found'}
                    RestaurantName={order.RestaurantName?order.RestaurantName:"not foud"}
                    placeTime = {order?.OrderCompleteTime?order?.OrderCompleteTime: null}
                    ItemSubTotal={order.TotalPrice?order.TotalPrice:"not foud"}
                    status={order.status}
                    BasicDeliveryFee={order?.BasicDeliveryFee}
                    ExtraKMDeliveryFee={order?.ExtraKMDeliveryFee}
                    // items={order.items}
                    AddressLine={order.AddressLine}
                    ETATime={order?.ETATime}
                    OrderId={order.OrderId}
                    Scales={order.Scales}
                    ItemSubTotalSUB={order?.ItemSubTotal}
                    TotalPrice={order?.TotalPrice}
                    OrderDeliveredTime={order?.OrderDeliveredTime?order?.OrderDeliveredTime:"not available"}
                   
                    CreatedDate={order?.CreatedDate?order.CreatedDate:"not found"}
                  OrderPlaceTime={order.OrderPlaceTime?orders.OrderPlaceTime:"not found"}
                  OrderAcceptTime={order?.OrderAcceptTime?orders.OrderAcceptTime:"not found"}
                  OrderCompleteTime={order?.OrderCompleteTime?orders.OrderCompleteTime:"not found"}
                  
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
