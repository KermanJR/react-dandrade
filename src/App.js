import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import './App.css'
import { Footer } from "./components/Footer";
import { Login } from "./components/forms/login/Login";
import { ProtectedRoute } from "./components/helpers/ProtectedRoute";
import { User } from "./components/user/User";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/login/*" element={<Login/>}/>
          <Route 
            path="/conta/*" 
            element={
            <ProtectedRoute>
              <User/>
            </ProtectedRoute>}
          />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
