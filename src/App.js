import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import './App.css'
import { Footer } from "./components/Footer";
import { Login } from "./components/forms/login/Login";
import { ProtectedRoute } from "./components/helpers/ProtectedRoute";
import { User } from "./components/user/User";
import { UserStorage } from "./context/UserContext";
import { FloatWhatsapp } from "./floatWhatsapp/FloatWhatsapp";



function App() {
  return (
    <div>
      <BrowserRouter>
      <UserStorage>
        <Header/>
        <Routes>
          <Route path="/login/*" element={<Login/>}/>
          <Route 
            path="/minhaconta/*" 
            element={
            <ProtectedRoute>
              <User/>
            </ProtectedRoute>}
          />
        </Routes>
        <FloatWhatsapp/>
        <Footer/>
        </UserStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;
