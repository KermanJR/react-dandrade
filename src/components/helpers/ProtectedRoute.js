import React from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

export const ProtectedRoute = ({children}) =>{

    const {login, UserLogout} = React.useContext(UserContext)

    return login ? children : <Navigate to="/login/"/>
}