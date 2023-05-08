import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import UserAvatar from '../../images/user-avatar-32.png';
import UserImage01 from '../../images/user-32-01.jpg';
import UserImage02 from '../../images/user-32-02.jpg';
import UserImage03 from '../../images/user-32-03.jpg';
import UserImage04 from '../../images/user-32-04.jpg';
import UserImage05 from '../../images/user-32-05.jpg';
import UserImage06 from '../../images/user-32-06.jpg';
import UserImage07 from '../../images/user-32-07.jpg';

function ForumEntries() {
  const [allReviwes, setallReviwes] = useState()
  const GetAllRest = () => {
    const allRestaurant = axios.get("https://delivigo-api.herokuapp.com/api/restaurant/profile/admin?restaurantId=3")
    .then(function (response) {
      setallReviwes(response?.data?.result, 'allRestaurant');
    });
  }
  useEffect(() => {
    GetAllRest()
  }, [])

  console.log(allReviwes,'allReviwes')
  return (
    <>
      {/* Post 1 */}
      <div>
        {allReviwes?.RestaurantReviews?.map((review) => {
          console.log(review.Customer?.FullName,'xx')
          return (
            <>
                  <article className="bg-white shadow-md rounded border border-slate-200 p-5">
        <div className="flex flex-start space-x-4">
          {/* Avatar */}
          <div className="shrink-0 mt-1.5">
            <img className="w-8 h-8 rounded-full" src={UserAvatar} width="32" height="32" alt="User avatar" />
          </div>
          {/* Content */}
          <div className="grow">
            {/* Title */}
            <h2 className="font-semibold text-slate-800 mb-2">
              <Link to="/community/forum-post">{review?.Comments?review?.Comments:"not found"}</Link>
            </h2>
            {/* Footer */}
            <footer className="flex flex-wrap text-sm">
              <div className="flex items-center after:block after:content-['·'] last:after:content-[''] after:text-sm after:text-slate-400 after:px-2">
                <a className="font-medium text-indigo-500 hover:text-indigo-600" href="#0">
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-2 fill-current" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15.686 5.708 10.291.313c-.4-.4-.999-.4-1.399 0s-.4 1 0 1.399l.6.6-6.794 3.696-1-1C1.299 4.61.7 4.61.3 5.009c-.4.4-.4 1 0 1.4l1.498 1.498 2.398 2.398L.6 14.001 2 15.4l3.696-3.697L9.692 15.7c.5.5 1.199.2 1.398 0 .4-.4.4-1 0-1.4l-.999-.998 3.697-6.695.6.6c.599.6 1.199.2 1.398 0 .3-.4.3-1.1-.1-1.499Zm-7.193 6.095L4.196 7.507l6.695-3.697 1.298 1.299-3.696 6.694Z" />
                    </svg>
                    {review.Customer?.FullName}
                  </div>
                </a>
              </div>
              {/* <div className="flex items-center after:block after:content-['·'] last:after:content-[''] after:text-sm after:text-slate-400 after:px-2">
                <span className="text-slate-500">7d</span>
              </div> */}
              {/* <div className="flex items-center after:block after:content-['·'] last:after:content-[''] after:text-sm after:text-slate-400 after:px-2">
                <span className="text-slate-500">688 Comments</span>
              </div> */}
            </footer>
          </div>
          {/* Upvote button */}
          <div className="shrink-0">
            <button className="text-xs font-semibold text-center h-12 w-12 border border-indigo-400 rounded-sm flex flex-col justify-center items-center outline outline-2 outline-indigo-100">
              <svg className="inline-flex fill-indigo-500 mt-1.5 mb-1.5" width="12" height="6" xmlns="http://www.w3.org/2000/svg">
                <path d="m0 6 6-6 6 6z" />
              </svg>
              <div>{(review?.Rates).toFixed(1)}</div>

            </button>
          </div>
        </div>
      </article>
            </>

          )
        })}

      </div>



    </>
  );
}

export default ForumEntries;
