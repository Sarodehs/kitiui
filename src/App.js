
import './App.css';
import LoginPage from './component/User/LoginPage';
import RegistrationPage from './component/User/RegistrationPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './component/User/HomePage';
import About from './component/User/About';
import Contact from './component/User/Contact';
import FAQ from './component/User/FAQ';
import TermsAndConditions from './component/User/TermsAndConditions';
import VenRegistration from './component/Vendors/VenRegistration';
import VenDashboard from './component/Vendors/VenDashboard';
import VenLogin from './component/Vendors/VenLogin';
// import VenderLogin from './component/Vendors/VenderLogin';

import AdminLogin from './component/Admin/AdminLogin';
import AdminDashboard from './component/Admin/AdminDashboard';
// import AllUser from './component/Admin/AllUser';
import MainDashboad from './component/Vendors/MainDashboad';
import ProductDetails from './component/User/ProductDetails';
import AdminUitiliy from './component/Admin/AdminUitiliy';
import AdminAllCustomer from './component/Admin/AdminAllCustomer';
import AdminAllProduct from './component/Admin/AdminAllProduct';
import AdminAddProduct from './component/Admin/AdminAddProduct';
import AdminCategory from './component/Admin/AdminCategory';
import AdminCalendar from './component/Admin/AdminCalendar';
import AdminOrder from './component/Admin/AdminOrder';
import AdminInvoices from './component/Admin/AdminInvoices';
import AdminContacts from './component/Admin/AdminContacts';
import AdminSweetAlert from './component/Admin/AdminSweetAlert';
import AdminNestableList from './component/Admin/AdminNestableList';
import AdminAnimation from './component/Admin/AdminAnimation';
import AdminSwiperSlider from './component/Admin/AdminSwiperSlider';
import AdminTables from './component/Admin/AdminTables';
import AdminForms from './component/Admin/AdminForms';
import AdminCharts from './component/Admin/AdminCharts';
import AdminIcons from './component/Admin/AdminIcons';
import AdminMaps from './component/Admin/AdminMaps';
import AdminFileManager from './component/Admin/AdminFileManager';
import ShopDetails from './component/Vendors/ShopDetails';



function App() {
  // const navigate = useNavigate();

  return (
    <>
      <BrowserRouter>


        <Routes>
          <Route path='/' index  element={<LoginPage />} />
          <Route path='/RegistrationPage' element={<RegistrationPage />} />
          <Route path='/FAQ' element={<FAQ />} />
          <Route path='/TermsAndConditions' element={<TermsAndConditions />} />
          <Route path='/HomePage' element={<HomePage />} />
          <Route path='/About' element={<About />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/ProductDetails' element={<ProductDetails/>}/>




          {/* <Route path='/venderlogin' element={<VenderLogin />} /> */}

          <Route path='/venlogin' element={<VenLogin />} />
          <Route path='/vendashboard' element={<VenDashboard />} />
          <Route path='/venregistration' element={<VenRegistration />} />
          <Route path='/shopdetails' element={<ShopDetails />} />


          <Route path='/adminlogin' element={<AdminLogin />} />
          <Route path='/maindashboad' element={<MainDashboad/>}/>
          <Route path='/admindashboard' element={<AdminDashboard />} />
          <Route path='/adminallcustomer' element={<AdminAllCustomer />} />
          <Route path='/adminaddproduct' element={<AdminAddProduct />} />
          <Route path='/adminallproduct' element={<AdminAllProduct />} />
          <Route path='/admincategory' element={<AdminCategory />} />
          <Route path='/adminorder' element={<AdminOrder/>} />
          <Route path='/admincalendar' element={<AdminCalendar />} />
          <Route path='/admininvoices' element={<AdminInvoices />} />
          <Route path='/admincontacts' element={<AdminContacts />} />
          
          <Route path='/adminuitiliy' element={<AdminUitiliy />} />

          <Route path='/adminsweetalert' element={<AdminSweetAlert />} />
          <Route path='/adminnestablelist' element={<AdminNestableList />} />
          <Route path='/adminanimation' element={<AdminAnimation />} />
          <Route path='/adminswiperslider' element={<AdminSwiperSlider/>} />
          <Route path='/adminforms' element={<AdminForms/>} />
          <Route path='/admintables' element={<AdminTables/>} />
          <Route path='/admincharts' element={<AdminCharts/>} />
          <Route path='/adminicons' element={<AdminIcons/>} />
          <Route path='/adminmaps' element={<AdminMaps/>} />
          <Route path='/adminfilemanager' element={<AdminFileManager/>} />

          
          
          
          

          

            {/* <Route path='/alluser' element={<AllUser />} /> */}
           
       </Routes>



          



      </BrowserRouter>
    </>

  );
}

export default App;
