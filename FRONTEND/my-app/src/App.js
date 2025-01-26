import logo from './logo.svg';
import './App.css';
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import Search from './components/navbar';
import IndexPage from './components/indexPage';
import VehicleTypeProvider from './components/VehicleTypeContext';
import { Link } from "react-router-dom";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Login from './components/auth/loginPage';
import VehiclePages from './components/secondPage/vehiclePage';
import { Provider } from 'react-redux';
import store from './components/redux/reduxStore';
import { GoogleOAuthProvider } from "@react-oauth/google";
import Footer from "./components/footer";
import Navbar from './components/navbar';



function App() {
  return (
    <>
    <GoogleOAuthProvider clientId="50814278601-6s888rfbjn1om3ntha784ikd29poiop0.apps.googleusercontent.com">
    <BrowserRouter>
      {/* <VehicleTypeProvider > */}
      <Provider store={store} >
        <div className=''> 
          <Navbar />
          <Routes>
            <Route  path='/' element={<IndexPage/>}/>
            {/* <Route path="/login" element={<Login/>}/> */}
            {/* <Route path='/vehicles' element={<VehiclePages/>}/> */}
            <Route path="/vehicles/:vehicleModel" element={<VehiclePages/>} />
          </Routes> 
          <Footer/>
          <Login /> 
          
        </div>  
        </Provider>
      {/* </VehicleTypeProvider>   */}
    </BrowserRouter>
    </GoogleOAuthProvider>
    </>
  );
}

export default App;
