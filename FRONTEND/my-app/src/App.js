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



function App() {
  return (
    <>
    <BrowserRouter>
      {/* <VehicleTypeProvider > */}
      <Provider store={store} >
        <div className=''> //bg-[#F8F8F8]
          <Search />
          <Routes>
            <Route  path='/' element={<IndexPage/>}/>
            <Route path="/login" element={<Login/>}/>
            {/* <Route path='/vehicles' element={<VehiclePages/>}/> */}
            <Route path="/vehicles/:vehicleModel" element={<VehiclePages/>} />
          </Routes> 
          <Login />  
        </div>  
        </Provider>
      {/* </VehicleTypeProvider>   */}
    </BrowserRouter>
    </>
  );
}

export default App;
