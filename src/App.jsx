
// import React from 'react'
// import { RentalSummary } from './components/rentalSummary/RentalSummary'

// const App = () => {
//   return (
//     <div>
//       <RentalSummary/>
//     </div>
//   )
// }



export default App
import { useState } from "react";
import MyLogIn from "./components/LogIn/MyLogIn";
import ForgotPassword from "./components/LogIn/forgotPassword/ForgotPassword";
import Alerts from "./components/LogIn/modals/Alerts";
import CategoryChoose from "./components/chooseCategoryComponents/CategoryChoose";
import Autho from "./components/Authentication/Autho";
import Scroll from "./components/hear-scroll-main-elts/Scroll";
import NavLeft from "./components/Left-Navbar/NavLeft";
import Search from "./components/Search-Nav/Search";
import Authenticator from "./components/LogIn/modals/Authenticator";

const App = () => {
  const [login, setLogIn] = useState(false);
  const [forgot, setForgot] = useState(false);
  const [alert, setAlerts] = useState(false);
  const [spec, setSpec] = useState(false);
  const [auth, setAuth] = useState(false);
  const [scroll, setScroll] = useState(false);
  const [navLeft, setNavLeft] = useState(false);
  const [search, setSearch] = useState(false);
  const [author, setAuthor]=useState(false);
  return (
    <div>
      <button
        onClick={() => {
          setLogIn(true),
            setForgot(false),
            setAlerts(false),
            setSpec(false),
            setAuth(false),
            setScroll(false);
        }}
      >
        Test LogIn
      </button>

      {login && <MyLogIn />}
      <button
        onClick={() => {
          setForgot(true),
            setLogIn(false),
            setAlerts(false),
            setSpec(false),
            setAuth(false),
            setScroll(false);
        }}
      >
        Test Forgot
      </button>

      {forgot && <ForgotPassword />}
      <button
        onClick={() => {
          setAlerts(true),
            setForgot(false),
            setLogIn(false),
            setSpec(false),
            setAuth(false),
            setScroll(false);
        }}
      >
        Test Alert
      </button>
      {alert && <Alerts />}

      <button
        onClick={() => {
          setSpec(true),
            setAlerts(false),
            setForgot(false),
            setLogIn(false),
            setAuth(false),
            setScroll(false);
        }}
      >
        Test Spec
      </button>
      {spec && <CategoryChoose />}
      <button
        onClick={() => {
            setAuth(true),
            setSpec(false),
            setAlerts(false),
            setForgot(false),
            setLogIn(false),
            setScroll(false);
        }}
      >
        Test Authentication
      </button>
      {auth && <Autho />}
      <button
        onClick={() => {
          setScroll(true),
            setAuth(false),
          setSpec(false),
            setAlerts(false),
            setForgot(false),
            setLogIn(false);
        }}
      >
        Test Scroll-Main
      </button>
      {scroll && <Scroll />} 
      
      <button
        onClick={() => {
            setNavLeft(true)
        }}
      >
        Test NavLeft
      </button>

      {navLeft && <NavLeft />}

      <button
        onClick={() => {
            setNavLeft(true)
        }}
      >
        Test NavLeft
      </button>

      {navLeft && <NavLeft />}

      <button
        onClick={() => {
            setSearch(true)
        }}
      >
        Test SearchMiddle
      </button>

      {search && <Search />}

      <button
        onClick={() => {
            setAuthor(true)
        }}
      >
        Test Corousel
      </button>

      {author && <Authenticator />}
    </div>
  );
};

export default App;
