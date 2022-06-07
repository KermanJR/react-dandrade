import React from "react";
import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({children}) =>{

    /* Variável para teste */
    var login = false;
    return login ? children : <Navigate to="/login/"/>
}