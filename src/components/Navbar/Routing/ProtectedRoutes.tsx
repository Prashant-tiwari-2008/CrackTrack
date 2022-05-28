import React from 'react'
import { Navigate } from 'react-router-dom'

const ProtectedRoutes = (props: any) => {
    console.log("prpps", props)
    if (props.condition) {
        return <Navigate to={props.navigationUrl} replace />;
    }
    return props.children;
}

export default ProtectedRoutes