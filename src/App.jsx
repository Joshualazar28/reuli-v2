import React, { useEffect, createContext, useReducer,   } from "react";
import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom';

import './css/style.css';

import './charts/ChartjsConfig';
import { Link, useNavigate } from "react-router-dom";

// Import pages
import Dashboard from './pages/Dashboard';
import Analytics from './pages/Analytics';
import Fintech from './pages/Fintech';
import Customers from './pages/ecommerce/Customers';
import Orders from './pages/ecommerce/Orders';
import Invoices from './pages/ecommerce/Invoices';
import Shop from './pages/ecommerce/Shop';
import Shop2 from './pages/ecommerce/Shop2';
import Product from './pages/ecommerce/Product';
import Cart from './pages/ecommerce/Cart';
import Cart2 from './pages/ecommerce/Cart2';
import Cart3 from './pages/ecommerce/Cart3';
import Pay from './pages/ecommerce/Pay';
import Campaigns from './pages/Campaigns';
import UsersTabs from './pages/community/UsersTabs';
import UsersTiles from './pages/community/UsersTiles';
import Profile from './pages/community/Profile';
import Feed from './pages/community/Feed';
import Forum from './pages/community/Forum';
import ForumPost from './pages/community/ForumPost';
import Meetups from './pages/community/Meetups';
import MeetupsPost from './pages/community/MeetupsPost';
import CreditCards from './pages/finance/CreditCards';
import Transactions from './pages/finance/Transactions';
import TransactionDetails from './pages/finance/TransactionDetails';
import JobListing from './pages/job/JobListing';
import JobPost from './pages/job/JobPost';
import CompanyProfile from './pages/job/CompanyProfile';
import Messages from './pages/Messages';
import TasksKanban from './pages/tasks/TasksKanban';
import TasksList from './pages/tasks/TasksList';
import Inbox from './pages/Inbox';
import Calendar from './pages/Calendar';
import Account from './pages/settings/Account';
import Notifications from './pages/settings/Notifications';
import Apps from './pages/settings/Apps';
import Plans from './pages/settings/Plans';
import Billing from './pages/settings/Billing';
import Feedback from './pages/settings/Feedback';
import Changelog from './pages/utility/Changelog';
import Roadmap from './pages/utility/Roadmap';
import Faqs from './pages/utility/Faqs';
import EmptyState from './pages/utility/EmptyState';
import PageNotFound from './pages/utility/PageNotFound';
import KnowledgeBase from './pages/utility/KnowledgeBase';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import ResetPassword from './pages/ResetPassword';
import Onboarding01 from './pages/Onboarding01';
import Onboarding02 from './pages/Onboarding02';
import Onboarding03 from './pages/Onboarding03';
import Onboarding04 from './pages/Onboarding04';
import ButtonPage from './pages/component/ButtonPage';
import FormPage from './pages/component/FormPage';
import DropdownPage from './pages/component/DropdownPage';
import AlertPage from './pages/component/AlertPage';
import ModalPage from './pages/component/ModalPage';
import PaginationPage from './pages/component/PaginationPage';
import TabsPage from './pages/component/TabsPage';
import BreadcrumbPage from './pages/component/BreadcrumbPage';
import BadgePage from './pages/component/BadgePage';
import AvatarPage from './pages/component/AvatarPage';
import TooltipPage from './pages/component/TooltipPage';
import AccordionPage from './pages/component/AccordionPage';
import IconsPage from './pages/component/IconsPage';
// ORDER  ROUTE 
import Create from './pages/AdminOrdersFlow/Create';
import Received from './pages/AdminOrdersFlow/Received';
import RestaurantDecline from './pages/AdminOrdersFlow/RestaurantDecline';
import AcceptRestaurant from './pages/AdminOrdersFlow/AcceptRestaurant';
import FoodReady from "./pages/AdminOrdersFlow/FoodReady"
import RiderDecline from "./pages/AdminOrdersFlow/RiderDecline"
import RiderAccepted from "./pages/AdminOrdersFlow/RiderAccepted"
import Complete from "./pages/AdminOrdersFlow/Complete"
import Complain from "./pages/AdminOrdersFlow/Complain"
import Scheduled from "./pages/AdminOrdersFlow/Scheduled"
import IsDelivery from "./pages/AdminOrdersFlow/IsDelivery"
import FoodAsign from './pages/AdminOrdersFlow/FoodAsign';
import Delivered from './pages/AdminOrdersFlow/Delivered';

// Rider Route
import  ReceivedReq from './pages/RiderPage/ReceivedReq'
import  Documents  from './pages/RiderPage/Documents';
import Approved from './pages/RiderPage/Approved';
import Reject from './pages/RiderPage/Reject'

// All Rider
import AllRider from './pages/Rider/AllRider';
import AllRiderComponent from './components/AllRiderComponent';
import TabsButton from './components/TabsButton'
import RiderProfile from './components/RiderProfile'
import RiderOrder from './components/RiderOrder';
import RiderPayouts from './components/RiderPayouts';
import RestaurantOrder from './components/RestaurantOrder';
import RestaurantProfile from './components/RestaurantProfile';
// import Docu from './pages/Rider/Documents';
// import Approve from './pages/Rider/AllRider';
// import Reje from './pages/Rider/Reject'

// REviews
import Reviews from './components/Reviews';

// Restaurant
import AllRestaurant from './pages/AllRestaurant/AllRestaurant'
import AllRestaurantDetail from './pages/AllRestaurant/AllRestaurantDetail'

// Meal  Category

import MealCategory from "./partials/MealCategory/MealCategory"

// restaurant rout

import ReceReq from './pages/RestaurantPage/ReceivedReq';
import  Doc from './pages/RestaurantPage/Documents';
import Appr from './pages/RestaurantPage/Approved'
import Rej from './pages/RestaurantPage/Reject'
import RestaurantButton from './components/RestaurantButton';
// map route
import { Store, UpdateStore } from '../src/StoreContext'
import Maping from './pages/Map/Maping';

// authget

import { reducer, initialState } from "../src/reducersAuth/useReducers";

export const UserContext = createContext();
function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const navigation = useNavigate();
  const location = useLocation();
  const store = Store()
  console.log(store, "joshua-Store")
console.log(state,'app data admin')
  useEffect(() => {
    const admin = JSON.parse(localStorage.getItem('admin'));
    console.log(admin,  'admin...')
    if(!admin)
    {
    navigation('/signin')
    }
    else
    {
      navigation('/')
    }

  }, [])

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); // triggered on route change

  return (
    <>
     <UserContext.Provider value={{ state, dispatch }}>
     
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route path="/dashboard/analytics" element={<Analytics />} />
        <Route path="/dashboard/fintech" element={<Fintech />} />
        <Route path="/ecommerce/customers" element={<Customers />} />
        <Route path="/ecommerce/orders" element={<Orders />} />
        <Route path="/ecommerce/invoices" element={<Invoices />} />
        <Route path="/ecommerce/shop" element={<Shop />} />
        <Route path="/ecommerce/shop-2" element={<Shop2 />} />
        <Route path="/ecommerce/product" element={<Product />} />
        <Route path="/ecommerce/cart" element={<Cart />} />
        <Route path="/ecommerce/cart-2" element={<Cart2 />} />
        <Route path="/ecommerce/cart-3" element={<Cart3 />} />
        <Route path="/ecommerce/pay" element={<Pay />} />
        <Route path="/campaigns" element={<Campaigns />} />
        {/* ORDER ROUTE  */}
        <Route path="/order/create" element={<Create />} />
        <Route path="/order/received" element={<Received />} />
        <Route path="/order/restaurant/Delivered" element={<Delivered />} />
        
        <Route path="/order/restaurant/decline" element={<RestaurantDecline />} />
        <Route path="/order/restaurant/accept" element={<AcceptRestaurant />} />
        <Route path="/order/restaurant/food/ready" element={<FoodReady/>} />
        <Route path="/order/restaurant/food/isdelivery" element={<IsDelivery/>} />
        <Route path="/order/restaurant/rider/decline" element={<RiderDecline/>} />
        <Route path="/order/restaurant/rider/accepted" element={<RiderAccepted/>} />
        <Route path="/order/restaurant/rider/complete" element={<Complete/>} />
        <Route path="/order/restaurant/rider/complain" element={<Complain/>} />
        <Route path="/order/restaurant/rider/scheduled" element={<Scheduled/>} />
        {/* <Route path="/order/restaurant/rider/CancelOrders" element={<CancelOrders/>} /> */}
        <Route path="/order/restaurant/rider/Food/Asign" element={<FoodAsign/>} />
        
         
         {/* RIDER ROUTES */}

         <Route path='/ride/received/request' element={<ReceivedReq/>}/>
         <Route path='/ride/approved' element={<Approved/>}/>
         <Route path='/ride/documents' element={<Documents/>}/>
         <Route path='/ride/reject' element={<Reject/>}/>
        
        {/* ALL RIDER */}

        <Route path='/joshua/all' element={<AllRider/>}/>
        <Route path='/joshua/rider/:id' element={<AllRiderComponent/>}/>
        <Route path='/tab/button' element={<TabsButton/>}/>
        <Route path='/rider/profile' element={<RiderProfile/>}/>
        <Route path='/rider/order' element={<RiderOrder/>}/>
        <Route path='/rider/payouts' element={<RiderPayouts/>}/>

        <Route path='/reviews' element={<Reviews/>}/>

        {/* Restaurant */}
        <Route path='/all/rest' element={<AllRestaurant/>}/>
        <Route path='/all/rest/:id' element={<AllRestaurantDetail/>}/>
        <Route path='/restaurant/profile' element={<RestaurantProfile/>}/>
        <Route path='/restaurant/order' element={<RestaurantOrder/>}/>
        <Route path='/restaurant/button' element={<RestaurantButton/>}/>
        

        {/* MealCategory */}
        <Route path='/restaurant/mealcategory' element={<MealCategory/>}/>


        {/* RESTAURANT ROUTES */}
        <Route path='/restaurant/received/request' element={<ReceReq/>}/>
         <Route path='/restaurant/approved' element={<Appr/>}/>
         <Route path='/restaurant/documents' element={<Doc/>}/>
         <Route path='/restaurant/reject' element={<Rej/>}/>
        
        {/* Map */}
        <Route path='/restaurant/loction' element={<Maping/>}/>


        <Route path="/community/users-tabs" element={<UsersTabs />} />
        <Route path="/community/users-tiles" element={<UsersTiles />} />
        <Route path="/community/profile" element={<Profile />} />
        <Route path="/community/feed" element={<Feed />} />
        <Route path="/community/forum" element={<Forum />} />
        <Route path="/community/forum-post" element={<ForumPost />} />
        <Route path="/community/meetups" element={<Meetups />} />
        <Route path="/community/meetups-post" element={<MeetupsPost />} />
        <Route path="/finance/cards" element={<CreditCards />} />
        <Route path="/finance/transactions" element={<Transactions />} />
        <Route path="/finance/transaction-details" element={<TransactionDetails />} />
        <Route path="/job/job-listing" element={<JobListing />} />
        <Route path="/job/job-post" element={<JobPost />} />
        <Route path="/job/company-profile" element={<CompanyProfile />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/tasks/kanban" element={<TasksKanban />} />
        <Route path="/tasks/list" element={<TasksList />} />
        <Route path="/inbox" element={<Inbox />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/settings/account" element={<Account />} />
        <Route path="/settings/notifications" element={<Notifications />} />
        <Route path="/settings/apps" element={<Apps />} />
        <Route path="/settings/plans" element={<Plans />} />
        <Route path="/settings/billing" element={<Billing />} />
        <Route path="/settings/feedback" element={<Feedback />} />
        <Route path="/utility/changelog" element={<Changelog />} />
        <Route path="/utility/roadmap" element={<Roadmap />} />
        <Route path="/utility/faqs" element={<Faqs />} />
        <Route path="/utility/empty-state" element={<EmptyState />} />
        <Route path="/utility/404" element={<PageNotFound />} />
        <Route path="/utility/knowledge-base" element={<KnowledgeBase />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/onboarding-01" element={<Onboarding01 />} />
        <Route path="/onboarding-02" element={<Onboarding02 />} />
        <Route path="/onboarding-03" element={<Onboarding03 />} />
        <Route path="/onboarding-04" element={<Onboarding04 />} />
        <Route path="/component/button" element={<ButtonPage />} />
        <Route path="/component/form" element={<FormPage />} />
        <Route path="/component/dropdown" element={<DropdownPage />} />
        <Route path="/component/alert" element={<AlertPage />} />
        <Route path="/component/modal" element={<ModalPage />} />
        <Route path="/component/pagination" element={<PaginationPage />} />
        <Route path="/component/tabs" element={<TabsPage />} />
        <Route path="/component/breadcrumb" element={<BreadcrumbPage />} />
        <Route path="/component/badge" element={<BadgePage />} />
        <Route path="/component/avatar" element={<AvatarPage />} />
        <Route path="/component/tooltip" element={<TooltipPage />} />
        <Route path="/component/accordion" element={<AccordionPage />} />
        <Route path="/component/icons" element={<IconsPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>

    </UserContext.Provider>



    </>
  );
}

export default App;
