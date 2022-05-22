import { useEffect } from 'react'
import { useLocation } from "react-router-dom";

interface Props {
    routeChange: (activeRoute: string) => void
}

const RouteChangeDetector = ({ routeChange }: Props) => {
    const location = useLocation();

    useEffect(() => {
        const currentRoute: string = location.pathname.split('/').join("").toUpperCase();
        routeChange(currentRoute)
    }, [location])

    return (<></>)
}

export default RouteChangeDetector;