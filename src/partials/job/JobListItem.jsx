import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import ReadMoreReact from 'read-more-react';
import ModalBasic from '../../components/ModalBasic';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function JobListItem(props) {

    const {id} = useParams()
    console.log(id, '---dddd--bbb')
    const MyrestruantID = id
  console.log(props, 'meal')
  const [feedbackModalOpen, setFeedbackModalOpen] = useState(false)
  // console.log(props.Meals?.map((p) => p))

  const [meal, setMeal] = useState(
    {
      Name: "",
      RestroId: "",
      Price: "",
      IsRecommend: "",
      IsCustomDish: "",
      ProductInfo: "",
      ImageUrl: "",
      IsFeatured: "",
      MealMainId: "",
      Description: "",
      Discount: "",
      Quantity: ""

    }
  )
  const {Name,
  RestroId,
  Price,
  IsRecommend,
  IsCustomDish,
  ProductInfo,
  ImageUrl,
  IsFeatured,
  MealMainId,
  Description,
  Discount,
  Quantity} = meal
  const onChangeMeal = (e) =>
    setMeal({ ...meal, [e.target.name]: e.target.value });

    console.log(meal,'cc')
    const HandleCreateMeal = () => {
      console.log(props.id)
      
       fetch(`https://delivigo-api.herokuapp.com/api/v5/meal`, {
         method: "post",
         headers: {
           "Content-Type": "application/json",
         },
         body: JSON.stringify({
   
        
            "Name": Name,
            "RestroId":id,
            "Price": Price,
            "IsRecommend": "",
            "IsCustomDish": "",
            "ProductInfo":ProductInfo,
            "ImageUrl": "",
            "IsFeatured": "",
            "MealMainId": props.id,
            "Description":Description,
            "Discount": Discount,
            "Quantity": Quantity
               
       }),
       })
         .then((res) => res.json())
         .then((data) => {
           data?.ResultMessages?.map((message) => {
             if(message?.MessageType === 'success') {
   
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
                 setFeedbackModalOpen(false)
                 props?.setcalling(true)
                //  GetAllRest()
             }
             else if(message?.MessageType === 'danger')
             {
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
    <div
      className={`shadow-lg rounded-sm border px-5 py-4 ${props.type === 'Featured' ? 'bg-amber-50 border-amber-300' : 'bg-white border-slate-200'}`}
    >
      <div>
        <div  className="bg-white p-5 shadow-lg rounded-sm border border-slate-200" style={{ width: "670px" }}>
          <span className="font-semibold text-slate-800  ">{props.catgname}</span>
          <p></p>
          <ReadMoreReact text={props?.Description}
            min={80}
            ideal={100}
            max={100}
            readMoreText={"read more"} />
          <ul className="space-y-2 sm:flex sm:space-y-0 sm:space-x-2 lg:space-y-2 lg:space-x-0 lg:flex-col mb-4">




            {props?.Meals?.map((meal) =>{
              console.log(meal?.Id,'MealMainId')
              var id = 3
              return (
                <>
                    <div>
                <Link to={`/restaurant/${MyrestruantID}/menu/${meal?.Id}`}  state={{ meal}}>
                <li className='pt-4'>
                <button className="w-full h-full text-left py-3 px-4 rounded bg-white border border-slate-200 hover:border-slate-300 shadow-sm duration-150 ease-in-out">

                  <div className="flex items-center mb-2">
                    <img className="w-14 h-14 rounded-full mr-3" src={meal?.ImageUrl} width="50" height="50" alt="User 07" />
                  </div>

                  <div className="flex flex-wrap items-center justify-between mb-0.5">


                    <span className="font-semibold text-slate-800">{meal.Name ? meal.Name : "Not found"}</span>
                    <span className="font-medium text-emerald-600">
                      <div class="form-switch " >
                        <input type="checkbox" id="switch-1" class="sr-only" x-model="checked" />
                        <label class="bg-slate-400" for="switch-1">
                          <span class="bg-white shadow-sm" aria-hidden="true"></span>
                        </label>
                      </div>
                    </span>


                  </div>

                  <div className="text-sm">{meal?.Description ? meal?.Description  : 'not found' }</div>
                  <span className="font-medium text-emerald-600"> {meal?.OldPrice ? <del className='font-small' style={{ color: "gray" }}>    €{meal?.OldPrice ? meal.OldPrice : "Not found"}</del> : null}  &nbsp;  &nbsp;    €{meal?.Price ? meal?.Price : "Not found"}</span>
                </button>
              </li>
                </Link>

              </div>
                </>
              )
            })}



          </ul>
          {/* <div className="mb-4">
                    <a className="btn w-full bg-indigo-500 hover:bg-indigo-600 text-white" href="#0"></a>
                  </div> */}
          <button className="btn bg-indigo-500 hover:bg-indigo-600 text-white" aria-controls="feedback-modal" onClick={(e) => { e.stopPropagation(); setFeedbackModalOpen(true); }}>Add Meals </button>
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
                      <input id="default"  className="form-input w-full" placeholder='name' value={Name} onChange={onChangeMeal} name='Name' type="text" />
                    </div>
                    {/* End */}
                  </div>

                  <div>
                    {/* Start */}
                    <div>
                      <div className="flex items-center justify-between">
                        <label className="block text-sm font-medium mb-1 p-2" htmlFor="tooltip">
                          Price
                        </label>

                      </div>
                      <input id="tooltip" name='Price' value={Price} onChange={onChangeMeal} className="form-input w-full" type="text" />
                    </div>
                    {/* End */}
                  </div>
                </div>


                <div className="grid gap-2 md:grid-cols-2">
                  <div>
                    {/* Start */}
                    <div>
                      <div className="flex items-center justify-between">
                        <label className="block text-sm font-medium mb-1 p-2" htmlFor="tooltip">
                          Description
                        </label>

                      </div>
                      <input id="tooltip" name='Description' value={Description} onChange={onChangeMeal} className="form-input w-full" type="text" />
                    </div>
                    {/* End */}
                  </div>

                  <div>
                    {/* Start */}
                    <div>
                      <div className="flex items-center justify-between">
                        <label className="block text-sm font-medium mb-1 p-2" htmlFor="tooltip">
                          Product Info
                        </label>

                      </div>
                      <input id="tooltip" name='ProductInfo' value={ProductInfo} onChange={onChangeMeal} className="form-input w-full" type="text" />
                    </div>
                    {/* End */}
                  </div>
                </div>




                <div className="grid gap-2 md:grid-cols-2">
                  <div>
                    {/* Start */}
                    <div>
                      <div className="flex items-center justify-between">
                        <label className="block text-sm font-medium mb-1 p-2" htmlFor="tooltip">
                          Quantity
                        </label>

                      </div>
                      <input id="tooltip" name='Quantity' value={Quantity} onChange={onChangeMeal} className="form-input w-full" type="text" />
                    </div>
                    {/* End */}
                  </div>

                  <div>
                    {/* Start */}
                    <div>
                      <div className="flex items-center justify-between">
                        <label className="block text-sm font-medium mb-1 p-2" htmlFor="tooltip">
                          Discount
                        </label>

                      </div>
                      <input   id="tooltip" name='Discount' value={Discount} onChange={onChangeMeal} className="form-input w-full" type="text" />
                    </div>
                    {/* End */}
                  </div>
                </div>

                <div className="grid gap-2 md:grid-cols-2">
                  <div>
                    {/* Start */}
                    <div>
                      <div className="flex items-center justify-between">


                        <input id="dish" name='Quantity' className="form-input " value="yes" type="checkbox" /><label for="dish">Recommended Dish</label>

                      </div>

                      <div className="flex items-center justify-between">

                        <input id="customdish" name='Quantity' className="form-input" value="yes" onChange={(e) => console.log(e.target.value) } type="checkbox" /><label for="customdish">Custom Dish</label>

                      </div>
                      <div className="flex items-center justify-between">

                        <input id="feature" name='Quantity' className="form-input " value="yes" type="checkbox" /><label for="feature">Featured Dish</label>

                      </div>

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
                <button onClick={(e) => HandleCreateMeal(e, meal)} className="btn-sm bg-indigo-500 hover:bg-indigo-600 text-white">Add</button>
              </div>
            </div>
          </ModalBasic>

        </div>
      </div>
      <ToastContainer/>
      
    </div>
  );
}

export default JobListItem;