import React, { useState, useEffect } from 'react';
import Orders from './OrdersTableItem';

function OrdersTable({
  selectedItems,CreateOrderCount,title
}) {

  const orders = [
    {
      id: '0',
      // image: Image01,
      order: '78347387438',
      date: '12/10/2021 11:32 AM',
      customer: 'Subway',
       city:'Turku/Finland',
       name:'Messi',
       sou:"App",
      status: 'Order in cart',
      num:'0239029323',
      // items: '1',
      location: '🇨🇳 Shanghai, CN',
      email:" xyz@gamil.com",
      vehicle:"8239232",
      Lan:"Restaurant",
      pay:"Apply pay",
      type: 'Subscription',
      description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      id: '1',
      // image: Image01,
      order: '78347387438',
      date: '12/10/2021 11:32 AM',
      customer: 'Subway',
      city:'Turku/Finland',
      name:'Neymar',
      sou:"App",
      status: 'payment unsuccessful',
      // items: '2',
      email:" xyz@gamil.com",
      num:'0239029323',
      vehicle:"8239232",
      Lan:"Home Chef",
      pay:"Credit Card",
      location: '🇲🇽 Mexico City, MX',
      type: 'Subscription',
      description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      id: '2',
      // image: Image02,
      order: '78347387438',
      date: '12/10/2021 11:32 AM',
      customer: 'Subway',
      city:'Turku/Finland',
      name:'Ronaldo',
      sou:"Mobile",
      num:'0239029323',
      status: 'Order in cart',
      email:" xyz@gamil.com",
      vehicle:"8239232",
      Lan:"Restaurant",
      rest:"Restaurant",
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
      date: '12/10/2021 11:32 AM',
      customer: 'Subway',
      city:'Turku/Finland',
      status: 'Pending',
      num:'0239029323',
      name:'Wood',
      vehicle:"8239232",
      Lan:"Restaurant",
      email:" xyz@gamil.com",
      rest:"Xyz restaurat",
      pay:"Credit Card",
      sou:"Mobile",
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
      {/* <header className="px-5 py-4">
        <h2 className="font-semibold text-slate-800"> {title} <span className="text-slate-400 font-medium"> {CreateOrderCount}</span></h2>
      </header> */}
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
                  <div className="font-semibold text-left">Restaurant ID</div>
                </th>
                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <div className="font-semibold text-left"> Restaurant Name</div>
                </th>
                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <div className="font-semibold text-left">Name</div>
                </th>
                <th className="px-5 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <div className="font-semibold text-left">Email </div>
                </th>
                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <div className="font-semibold text-left">Business ID </div>
                </th>
                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <div className="font-semibold text-left">Source</div>
                </th>
                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <div className="font-semibold text-left">Business Type</div>
                </th>
                <th className="px-5 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <div className="font-semibold text-left">Number</div>
                </th>
                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <div className="font-semibold text-left">City/Country</div>
                </th>
                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <div className="font-semibold text-left">Date/Time</div>
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
              list.map(order => {
                return (
                  <Orders
                    key={order.id}
                    id={order.id}
                    // image={order.image}
                    OrderNumber={order.order}
                    date={order.date}
                    customer={order.customer}
                    email={order.email}
                    vehicle={order.vehicle}
                    Lan={order.Lan}
                    name={order.name}
                    num={order.num}
                    sou={order.sou}
                    city={order.city}
                    rest={order.rest}
                    pay={order.pay}
                    total={order.Amount}
                    rems={order.rems}

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
