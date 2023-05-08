import React, { useState, useEffect } from 'react';
import Orders from './OrdersTableItem';
import ModalBasic from '../../../components/ModalBasic';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function OrdersTable({
  selectedItems, CreateOrderCount, title, AcceptResturant, meal
}) {

  console.log(meal?.Scales, 'meal...dmeal')
  const orders = [
    {
      id: '0',
      // image: Image01,
      order: '78347387438',
      date: '22/01/2021',
      customer: 'Patricia Semklo',
      Amount: 'PKR 2000',
      rems: "10:00",
      status: 'Order in cart',
      // items: '1',
      location: '🇨🇳 Shanghai, CN',
      restaurat: " xyz city/xyz area",
      rest: "Xyz restaurat",
      pay: "Apply pay",
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
      rems: "10:00",
      status: 'payment unsuccessful',
      // items: '2',
      restaurat: " xyz city/xyz area",
      rest: "Xyz restaurat",
      pay: "Credit Card",
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
      rems: "10:00",
      status: 'Order in cart',
      restaurat: " xyz city/xyz area",
      rest: "Xyz restaurat",
      pay: "Credit Card ",
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
      restaurat: " xyz city/xyz area",
      rest: "Xyz restaurat",
      pay: "Credit Card",
      rems: "10:00",
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

  const {id} = useParams()

  const [selectAll, setSelectAll] = useState(false);
  const [checkout, setCheckout] = useState(false);
  const [isCheck, setIsCheck] = useState([]);
  const [list, setList] = useState([]);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [feedbackModalOpen, setFeedbackModalOpen] = useState(false)
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



  const [addscales, setaddscales] = useState(
    {
      Name: "",
      MealId: "",
      Name_fi: "",
      UnitPrice:"" ,
      IsDefault: ""
    }
    
  )

  const {
    Name,
    MealId,
    Name_fi,
    UnitPrice,
    IsDefault
  } = addscales




  const onChangeRest = (e) =>
    setaddscales({ ...addscales, [e.target.name]: e.target.value });
  console.log(addscales, 'addscales')
  const HandleCreateRest = () => {
    console.log(addscales, 'addscales')
    fetch(`https://delivigo-api.herokuapp.com/api/v5/scale`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(
        {
          Name:Name,
          MealId:id,
          Name_fi:Name_fi,
          UnitPrice:UnitPrice,
          IsDefault:checkout
        }
      ),
    })
      .then((res) => res.json())
      .then((data) => {
        data?.ResultMessages?.map((message) => {
          if (message?.MessageType === 'success') {

            toast.success(message.Message, {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
            // setFeedbackModalOpen(false)
            // GetAllRest()
          }
          else if (message?.MessageType === 'danger') {
            toast.error(message.Message, {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
          }
        })
        console.log(data, 'move watching.....')
      })
  }
  return (
    <div className="bg-white shadow-lg rounded-sm border border-slate-200 relative">
      <header className="px-5 py-4">
        {/* <h2 className="font-semibold text-slate-800"> {title} <span className="text-slate-400 font-medium"> {CreateOrderCount}</span></h2> */}
      </header>
      <div>
        <div className="m-1.5">
          {/* Start */}
          <button className="btn bg-indigo-500 hover:bg-indigo-600 text-white" aria-controls="feedback-modal" onClick={(e) => { e.stopPropagation(); setFeedbackModalOpen(true); }}>Add Scales</button>
          <ModalBasic id="feedback-modal" modalOpen={feedbackModalOpen} setModalOpen={setFeedbackModalOpen} title="Add new Restaurant">
            {/* Modal content */}
            <div className="px-5 py-4">
              <div className="text-sm">
                <div className="font-medium text-slate-800 mb-3"></div>
              </div>
              <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
                <div className="grid gap-2 md:grid-cols-2">
                  <div>
                    {/* Start */}
                    <div>
                      <label className="block text-sm font-medium mb-1 p-2" htmlFor="default">
         Name
                      </label>
                      <input id="default" className="form-input w-full" placeholder='Restaurant Name' name='Name' value={Name} onChange={onChangeRest} type="text" />
                    </div>
                    {/* End */}
                  </div>

                  <div>
                    {/* Start */}
                    <div>
                      <label className="block text-sm font-medium mb-1 p-2" htmlFor="default">
                      Name in Finnish
                      </label>
                      <input id="default" className="form-input w-full" placeholder='Name in Finnish' name='Name_fi' value={Name_fi} onChange={onChangeRest} type="text" />
                    </div>
                    {/* End */}
                  </div>






                  <div>
                    {/* Start */}
                    <div>
                      <label className="block text-sm font-medium mb-1 p-2" htmlFor="default">
                      Price
                      </label>
                      <input id="default" className="form-input w-full" placeholder='Restaurant Name' name='UnitPrice' value={UnitPrice} onChange={onChangeRest} type="text" />
                    </div>
                    {/* End */}
                  </div>






                  <div>
                    {/* Start */}
                    <div>
                      <label className="block text-sm font-medium mb-1 p-2" htmlFor="default">
                      Default
                      </label>
                      <input id="default" className="form-inpu" placeholder='Restaurant Name' value="true"  onChange={(e) => setCheckout(e.target.value)} type="checkbox" />
                    </div>
                    {/* End */}
                  </div>
                </div>




                <div>



                </div>

              </div>
            </div>
            {/* Modal footer */}
            <div className="px-5 py-4 border-t border-slate-200">
              <div className="flex flex-wrap justify-end space-x-2">
                <button className="btn-sm border-slate-200 hover:border-slate-300 text-slate-600" onClick={(e) => { e.stopPropagation(); setFeedbackModalOpen(false); }}>Cancel</button>
                <button onClick={HandleCreateRest} className="btn-sm bg-indigo-500 hover:bg-indigo-600 text-white">Add</button>
              </div>
            </div>
          </ModalBasic>
          {/* End */}
        </div>
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
                  <div className="font-semibold text-left">Name</div>
                </th>
                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <div className="font-semibold text-left">Name in Finnish</div>
                </th>
                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <div className="font-semibold text-left">Price</div>
                </th>
                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <div className="font-semibold text-left">Default Scale </div>
                </th>


                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <div className="font-semibold text-left">Action </div>
                </th>

          
              </tr>
            </thead>
            {/* Table body */}
            {
              meal?.Scales?.map(order => {
                console.log()
                return (
                  <Orders
                    name={order?.Name ? order.Name : "not found "}
                    Name_fi={order?.Name_fi ? order.Name_fi : "not found "}
                    price={order?.price ? order.price : "not found "}


                  />
                )
              })
            }
          </table>

        </div>
      </div>
      <ToastContainer/>
    </div>
  );
}

export default OrdersTable;
