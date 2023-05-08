import React, {useEffect, useState} from 'react'
import {useParams } from 'react-router-dom';
import JobSidebar from '../../partials/job/JobSidebar';
import MenuCat from '../../partials/job/JobListItem';
import Image01 from '../../images/company-icon-05.svg';
import Image02 from '../../images/company-icon-06.svg';
import Image03 from '../../images/company-icon-03.svg';
import Image04 from '../../images/company-icon-07.svg';
import Image05 from '../../images/company-icon-08.svg';
import Image06 from '../../images/company-icon-01.svg';
import Image07 from '../../images/company-icon-02.svg';
import axios from 'axios';

const Menu = () => {
  let { id } = useParams();
  const [calling, setcalling] = useState(false)
  console.log(id, 'dd')
const [geRestaurantMenu, setgeRestaurantMenu] = useState()


  const geRestaurantMenubyId = () => {
    const geRestaurantMenuId = axios.get(`https://delivigo-api.herokuapp.com/api/restaurant/menu/admin?restaurantId=${id}`)
    .then(function (response) {
      setgeRestaurantMenu(response?.data?.result)
    });
  }  




  useEffect(() => {
    geRestaurantMenubyId()
  }, [calling])
console.log(geRestaurantMenu, 'geRestaurantMenu')
  return (
    <div>
          <div className="flex flex-col space-y-10 sm:flex-row sm:space-x-6 sm:space-y-0 md:flex-col md:space-x-0 md:space-y-10 xl:flex-row xl:space-x-6 xl:space-y-0 mt-9">
          <JobSidebar geRestaurantMenu={geRestaurantMenu} setcalling={setcalling}/>

          <div className='space-y-2'>
                  {geRestaurantMenu?.map((item) => {
                    console.log(item, 'iddd...')
                    return (
                      <MenuCat
                        key={item.Id}
                        id={item.Id}
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
                        setcalling={setcalling}

                      />
                    );
                  })}
                </div>


          </div>
    </div>
  )
}

export default Menu