import {
  Route, Routes, useLocation
} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Contacts from "./pages/contacts/Contacts";
import Therapies  from "./pages/therapies/Therapies";
import Medications from  "./pages/medications/Medications";

import Login from "./pages/login/Login";
import AppNavigation from "./components/AppNavigation"; 


function App() {
  const location = useLocation();
  
  return (
    <>
      {location.pathname !== '/' && location.pathname !== '/login' && <AppNavigation />}

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/contact" element={<Contacts />} />
        <Route path="/medication" element={<Medications />} />
        <Route path="/therapie" element={<Therapies />} />
      </Routes>
    </>
  );
}

export default App;
