import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import Sidebar from '../../partials/SideBar/Sidebar';
// import Header from '../../partials/Header';
// import SearchForm from '../../partials/actions/SearchForm';
import UsersTabsCard from '../../partials/community/UsersTabsCard';
import Image01 from '../../images/users.png';
import Image02 from '../../images/users.png';
import Image03 from '../../images/users.png';
import Image04 from '../../images/users.png';
import Image05 from '../../images/users.png';
import Image06 from '../../images/users.png';
import Image07 from '../../images/users.png';
import Image08 from '../../images/users.png';
import Image09 from '../../images/users.png';
import Image10 from '../../images/users.png';
import Image11 from '../../images/users.png';
import Image12 from '../../images/users.png';
function UsersTabs() {
  const items = [
    {
      id: 0,
      name: 'Jack Will',
      image: Image01,
      link: '#0',
      location: '🇮🇹',
      content: '483734338433/id8922323',
    },
    {
      id: 1,
      name: 'Jack Will',
      image: Image02,
      link: '#0',
      location: '🇫🇷',
      content: '483734338433/id8922323',
    },
    {
      id: 2,
      name: 'Jack will',
      image: Image03,
      link: '#0',
      location: '🇩🇪',
      content: '483734338433/id8922323',
    },
    {
      id: 3,
      name: 'Jack Will',
      image: Image04,
      link: '#0',
      location: '🇮🇹',
      content: '483734338433/id8922323',
    },
    {
      id: 4,
      name: 'carol',
      image: Image05,
      link: '#0',
      location: '🇪🇸',
      content: '483734338433/id8922323',
    },
    {
      id: 5,
      name: 'Jack Will',
      image: Image06,
      link: '#0',
      location: '🇩🇪',
      content: '483734338433/id8922323',
    },
    {
      id: 6,
      name: 'Jack Will',
      image: Image07,
      link: '#0',
      location: '🇬🇧',
      content: '483734338433/id8922323',
    },
    {
      id: 7,
      name: 'Jack Will',
      image: Image08,
      link: '#0',
      location: '🇺🇸',
      content: '483734338433/id8922323',
    },
  ];

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
            <div className="grid grid-cols-12 gap-6">
              {
                items.map(item => {
                  console.log(item, 'item')
                  return (
                    <div className="col-span-full  sm:col-span-6 xl:col-span-3 bg-white shadow-lg rounded-xl border border-slate-200">
                    <div className="flex flex-col h-full">
                    <Link to={`/joshua/rider/${item.id}`}>
                  <UsersTabsCard
                      key={item.id}
                      id={item.id}
                      name={item.name}
                      image={item.image}
                      link={item.link}
                      location={item.location}
                      content={item.content}
                    />
                    </Link>
                    </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </main>

      </div>
      
    </div>
  );
}

export default UsersTabs;