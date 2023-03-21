import React from 'react'
import JobSidebar from '../../partials/job/JobSidebar';
import MenuCat from '../../partials/job/JobListItem';
import Image01 from '../../images/company-icon-05.svg';
import Image02 from '../../images/company-icon-06.svg';
import Image03 from '../../images/company-icon-03.svg';
import Image04 from '../../images/company-icon-07.svg';
import Image05 from '../../images/company-icon-08.svg';
import Image06 from '../../images/company-icon-01.svg';
import Image07 from '../../images/company-icon-02.svg';

const Menu = ({geRestaurantMenu}) => {
  console.log(geRestaurantMenu, 'geRestaurantMenu')
  const items = [
    {
      id: 0,
      image: Image01,
      company: 'Company 01',
      role: 'Senior Web App Designer',
      link: '/job/job-post',
      details: 'Contract / Remote / New York, NYC',
      date: 'Jan 4',
      type: 'Featured',
      fav: false,
    },
    {
      id: 1,
      image: Image01,
      company: 'Company 02',
      role: 'Senior Full Stack Engineer',
      link: '/job/job-post',
      details: 'Contract / Remote / New York, NYC',
      date: 'Jan 7',
      type: 'New',
      fav: true,
    },
    {
      id: 2,
      image: Image02,
      company: 'Company 03',
      role: 'Ruby on Rails Engineer',
      link: '/job/job-post',
      details: 'Contract / Remote / New York, NYC',
      date: 'Jan 7',
      type: 'New',
      fav: false,
    }
  ];

  return (
    <div>
          <div className="flex flex-col space-y-10 sm:flex-row sm:space-x-6 sm:space-y-0 md:flex-col md:space-x-0 md:space-y-10 xl:flex-row xl:space-x-6 xl:space-y-0 mt-9">
          <JobSidebar geRestaurantMenu={geRestaurantMenu}/>

          <div className='space-y-2'>
                  {geRestaurantMenu?.map((item) => {
                    return (
                      <MenuCat
                        key={item.id}
                        id={item.id}
                        catgname={item.Name?item.Name:"Not Found"}
                        image={item?.ImageUrl?item?.ImageUrl:"Not found Url"}
                        Description={item?.Description?item?.Description:"not found"}
                        // Meals={item?.Meals?.length > 0 ? item?.Meals  :"Not found"}
                        Meals={item?item?.Meals:"dummy"}
                        role="joshua"
                        link={item.link}
                        details={item.details}
                        date={item.date}
                        type={item.type}
                        fav={item.fav}

                      />
                    );
                  })}
                </div>


          </div>
    </div>
  )
}

export default Menu