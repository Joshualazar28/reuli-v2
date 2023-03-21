import React from 'react';
import User03 from '../images/review2.png';
import User04 from '../images/review3.png';
import User07 from '../images/review1.png';

function Reviews() {
    const reviews = [
        {
            name:"Messi",
            img:User07,
            date:'29 May,2021',
            reviews:"Lorem ipsum dolor sit amet,consetetur sadip scing elitr,sed diam nonu my eirmodtempor.",
            rating:"4.6",
            lite:'line'
        },
        {
            name:"Neymar",
            img:User03,
            date:'29 May,2021',
            reviews:"Lorem ipsum dolor sit amet,consetetur sadip scing elitr,sed diam nonu my eirmodtempor.",
            rating:"4.6",
            lite:'line'
        },
        {
            name:"Paul",
            img:User04,
            date:'29 May,2021',
            reviews:"Lorem ipsum dolor sit amet,consetetur sadip scing elitr,sed diam nonu my eirmodtempor.",
            rating:"4.6",
            lite:'line'
        },
        {
            name:"Paul",
            img:User04,
            date:'29 May,2021',
            reviews:"Lorem ipsum dolor sit amet,consetetur sadip scing elitr,sed diam nonu my eirmodtempor.",
            rating:"4.6",
            lite:'line'
        }
    ]
  return (
    <div className='mt-5 pt-3 w-96 '>
    <div>
                  <h2 className="text-xl leading-snug text-slate-800 font-bold mb-2">Reviews</h2>
                  <ul className="space-y-5 my-6">
                    {reviews?.map((review) => (
               <li>
               <div className="flex items-center mb-2">
                 <img className="w-14 h-14 rounded-full mr-3" src={review.img} width="50" height="50" alt="User 07" />
                 <div>
                   <div className="text-lg font-bold text-slate-800 mb-1">{review.name}</div>
               
                   <div className="flex justify-end space-x-2">
                 
                     <h5 className='text-sm '>{review.date}</h5>
                     <div className='inline-flex bg-gray-200 px-1 rounded-xl text-blue-600'>
                     <svg className="w-3 h-3 mt-1 fill-current" viewBox="0 0 16 16">
                            <path d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
                          </svg>
                     <div className="text-sm ml-1">5.0</div>
                     </div>
                   </div>
                 </div>
               </div>
               <div className="text-sm text-black  ml-10 px-5">{review.reviews}</div>
               <div className='w-72 border border-gray-300 ml-14 mt-3'></div>
             </li>
                    ))}
                  </ul>
                 
                </div>
      </div>
  )
}

export default Reviews