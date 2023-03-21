import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../../partials/SideBar/Sidebar';
import Header from '../../partials/Header';
import SearchForm from '../../partials/actions/SearchForm';
import UsersTabsCard from '../../partials/community/UsersTabsCard';
import PaginationNumeric from '../../components/PaginationNumeric';

import Image01 from '../../images/food.png';
import Image02 from '../../images/food1.png';
import Image03 from '../../images/food1.png';
import Image04 from '../../images/food1.png';
import Image05 from '../../images/food.png';
import Image06 from '../../images/food1.png';
import Image07 from '../../images/food1.png';
import Image08 from '../../images/food1.png';
import Image09 from '../../images/users.png';
import Image10 from '../../images/users.png';
import Image11 from '../../images/users.png';
import Image12 from '../../images/users.png';

function AllRestaurantCard({allRestaurant}) {
console.log(allRestaurant, "allRestaurantJoshua")
  const items = [
    {
      id: 0,
      name: 'Restaurant name',
      image: Image01,
      link: '#0',
      location: '🇮🇹',
      content: '483734338433/id8922323'
    }

  ];

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">

    
    
      {/* Content area */} 
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">

            {/* Cards */}
            <div className="grid grid-cols-12 gap-6">
                

              {
                allRestaurant?.map(item => {
                  console.log(item, 'item')
                  return (
                    <div className="col-span-full  sm:col-span-6 xl:col-span-3 bg-white shadow-lg rounded-xl border border-slate-200">
                    <div className="flex flex-col h-full">
                     
                    <Link to={`/all/rest/${item.Id}`}>
                
                    <UsersTabsCard
                    key={item?.Id}
                    id={item?.PhoneNumber?item?.PhoneNumber:"Not Found"}
                    name={item?.Name?item?.Name:"Not Found"}
                    Logo={item?.Logo?item?.Logo:"Not Found"}
                    email={item?.Email?item?.Email:"Not Found"}
                    link={item?.link?item?.link:"Not Found"}
                    location={item?.location?item?.location:"Not Found"}
                    content={item?.content?item?.content:"Not Found"}
                    joinDate={item?.CreatedDate?item?.CreatedDate:"Not Found"}

                    />
                   </Link>
                    </div>
                    </div>
                  
                
                  )
                })
              }
            </div>

            {/* Pagination */}
           

          </div>
        </main>

      </div>
      
    </div>
  );
}

export default AllRestaurantCard;