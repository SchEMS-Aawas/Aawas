import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation
} from "react-router-dom";
import CusomNav from './Components/Navbar/CusomNav';
import Mainbody from './Components/body/mainbody';
import Footer from './Components/Footer/Footer';
import Sell from './Components/pages/Sell/sell';
import Rent from './Components/pages/Rent/rent';
import Contact from './Components/pages/Contact/contact';
import SignUP from './Components/pages/SignUp/SignUP';
import Login from './Components/pages/Login/Login';
import Terms from './Components/pages/Footer Pages/Terms';
import AddProperty from './Components/pages/Add Property/AddProperty';
import PropertyDetail from './Components/body/MainBody page/PropertyDetails';
import About from './Components/pages/Footer Pages/About';
// import Carrers from './Components/pages/Footer Pages/Carrers';

const App = () => {
  const location = useLocation();

  // Define the paths where Navbar and Footer should be hidden
  const hideNavbarFooterPaths = ['/login'];

  return (
    <div>
      {/* Conditionally render Navbar */}
      {!hideNavbarFooterPaths.includes(location.pathname.toLowerCase()) && <CusomNav />}
      
      <Routes>
        <Route path='/' element={<Mainbody />} />
        <Route path='/sell' element={<Sell />} />
        <Route path='/rent' element={<Rent />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/signup' element={<SignUP />} />
        <Route path='/login' element={<Login />} />
        <Route path='/terms-and-conditions' element={<Terms />} />
        {/* <Route path='/careers' element={<careers />} />    */}
        <Route path='/addProperty' element={<AddProperty />} />
        <Route path='/property/:id' element={<PropertyDetail />} />
        <Route path='/about-us' element={<About/>} />
        
      </Routes>
      
      {/* Conditionally render Footer */}
      {!hideNavbarFooterPaths.includes(location.pathname.toLowerCase()) && <Footer />}
    </div>
  );
}

const AppWrapper = () => {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;
