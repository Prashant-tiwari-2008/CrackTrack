import React, { Component } from 'react'

export interface IRoutes {
    title: string,
    icon?: string,
    //TODO: need to ask if we make link optional
    link: string,
    IsSubMenu: boolean;
    subMenu?: IRoutes[],
}

export class RoutingMenu extends Component {

    public static navRoutesList(): IRoutes[] {
        return (
            [
                { title: 'HOME', link: '/', IsSubMenu: false },
                {
                    title: 'Tech-Question',link: '/hr-section', IsSubMenu: true, subMenu: [
                        { title: 'Interview Question', IsSubMenu: false, link: '/interview-questions' },
                        { title: 'Logical Question', IsSubMenu: false, link: '/logical-questions' },
                    ]
                },
                {
                    title: 'HR-Section', link: '/hr-section',IsSubMenu: true, subMenu: [
                        { title: 'Comming Soon', link: '/hr-section', IsSubMenu: false },
                    ]
                },
                { title: 'Contact', IsSubMenu: false, link: '/contact' },
            ]
        )
    }

}

export default RoutingMenu;


