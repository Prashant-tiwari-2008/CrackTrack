import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'


interface IMyProps {
    navigationUrl: string;
    isAuthenticated: boolean,
    children?: any
}

const ProtectedRoutes: React.FC<IMyProps> = (props: IMyProps) => {
    debugger
    console.log("Props", props)
    console.log("Props children", props.children)
    if (props.isAuthenticated) {
        return <Navigate to={props.navigationUrl} replace />;
    }
    return props.children ? props.children : <Outlet />;
}

export default ProtectedRoutes