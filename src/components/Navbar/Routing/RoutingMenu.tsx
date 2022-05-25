import React, { Component } from 'react'

export interface IRoutes {
    title: string,
    icon?: string,
    link: string,
    subMenu?: IRoutes[],
}

export class RoutingMenu extends Component {

    public static navRoutesList(): IRoutes[]  {
        return (
            [
                { title: 'HOME', link: '/' },
                {
                    title: 'Tech-Question', link: '/tech-question', subMenu: [
                        { title: 'Interview Question', link: '/interview-question' },
                        { title: 'Logical Question', link: '/logical-question' },
                    ]
                },
                {
                    title: 'HR-Section', link: '/hr-section', subMenu: [
                        { title: 'Comming Soon', link: '/Comming Soon' },
                    ]
                },
                { title: 'Contact', link: '/contact' },
            ]
        )
    }

}

export default RoutingMenu;


