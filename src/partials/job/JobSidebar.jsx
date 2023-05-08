import React, { useState, useEffect } from 'react';
import ModalBasic from '../../components/ModalBasic';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

function JobSidebar({setcalling, geRestaurantMenu}) {
 
const  {id} = useParams()

  const [feedbackModalOpen, setFeedbackModalOpen] = useState(false)
  const [addCatg, setAddCatg] = useState("")
  const [addCatgDes, setAddCatgDes] = useState("")





  


const HandleCatg = () => {
  console.log(addCatg)
      fetch(`https://delivigo-api.herokuapp.com/api/v5/meal/main/type`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({

        Name:addCatg,
        RestroId:id,
        Description: addCatgDes
        
    
    }),
    })
      .then((res) => res.json())
      .then((data) => {
        data?.ResultMessages?.map((message) => {
          if(message?.MessageType === 'success') {
            setcalling(true)
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
    <div className="space-y-8">
      {/* Alert */}

      {/* White box */}
      <div className="bg-white shadow-lg rounded-sm border border-slate-200 p-5 min-w-60">
        <div className="grid md:grid-cols-2 xl:grid-cols-1 gap-6">
          {/* Group 1 */}
          <button className="btn bg-indigo-500 hover:bg-indigo-600 text-white" onClick={(e) => { e.stopPropagation(); setFeedbackModalOpen(true); }}>
            <svg className="w-4 h-4 fill-current opacity-50 shrink-0" viewBox="0 0 16 16">
              <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
            </svg>
            <span className="ml-2">Add category </span>

          </button>
         
          <ModalBasic id="feedback-modal" modalOpen={feedbackModalOpen} setModalOpen={setFeedbackModalOpen} title="Add new category">
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
                              category Name
                              </label>
                              <input id="default" onChange={(e) => setAddCatg(e.target.value)} className="form-input w-full" placeholder='category Name' type="text" />
                              <input id="default" onChange={(e) => setAddCatgDes(e.target.value)} className="form-input w-full" placeholder='description' type="text" />
                            </div>
                            {/* End */}
                          </div>






                      </div>
                      </div>
                    </div>
                    {/* Modal footer */}
                    <div className="px-5 py-4 border-t border-slate-200">
                      <div className="flex flex-wrap justify-end space-x-2">
                        <button className="btn-sm border-slate-200 hover:border-slate-300 text-slate-600" onClick={(e) => { e.stopPropagation(); setFeedbackModalOpen(false); }}>Cancel</button>
                        <button onClick={HandleCatg} className="btn-sm bg-indigo-500 hover:bg-indigo-600 text-white">Add</button>
                      </div>
                    </div>
                  </ModalBasic>
                  
          <div>

            <ul className="space-y-2">
              {geRestaurantMenu?.map((getNameMenu, index) => (
                <li>
                  <label className="flex items-center">
                    {/* <input type="checkbox" className="form-checkbox" defaultChecked /> */}
                    <span>{index + 1 }</span>
                    <span className="text-sm text-slate-600 font-medium ml-2">{getNameMenu?.Name ? getNameMenu?.Name : "Not found"}</span>
                  </label>
                </li>
              ))}


            </ul>
          </div>

          <ToastContainer/>
        </div>
      </div>
    </div>
  );
}

export default JobSidebar;




