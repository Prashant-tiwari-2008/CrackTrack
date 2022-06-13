import React from 'react'
import { connect } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { User } from '../../domain/user/model/user';
import { UserState } from '../../domain/user/redux/reducer/user.reducer';
import PhoneNavbar from './PhoneNavbar.component';
import UserNav from './UserNav.component';
import { IRoutes, RoutingMenu } from './Routing/RoutingMenu';
import { UserModel } from '../../domain/user/model/user.model';
import { userInfo } from 'os';

interface Props {
  currentUserModel?: UserModel
}

const Navbar = ({ currentUserModel }: Props) => {
  const navRoutes: IRoutes[] = RoutingMenu.navRoutesList();
  const navaigate = useNavigate()
  return (
    <>
      <div>
        {/* Header Start  */}
        <div id="header" className="header section">
          <div className="container">
            {/* Header Wrapper Start  */}
            <div className="header-wrapper">
              {/* Header Logo Start */}
              <div className="header-logo">
                <a href="index.html"><img src="assets/images/logo.png" /></a>
              </div>
              {/* Header Logo End */}
              {/* Header Menu Start */}
              <div className="header-menu d-none d-lg-block">
                <ul className="main-menu">
                  {navRoutes && navRoutes.map((route, index) => {
                    return (
                      <>
                        <li key={index}>
                          <Link className="active" to={route.link}>{route.title}</Link>
                          {route.IsSubMenu && <ul className="sub-menu">
                            {route.subMenu?.map((subRoute) => {
                              return (
                                <li><Link className="active" to={subRoute.link!}>{subRoute.title}</Link></li>
                              )
                            })}
                          </ul>
                          }
                        </li>
                      </>
                    )
                  })}
                </ul>
              </div>
              {/* Header Menu End */}
              {/* Header Meta Start */}
              <UserNav currentUserModel={currentUserModel} />
              {/* Header Meta End */}
            </div>
            {/* Header Wrapper End */}
          </div>
        </div>
        {/* Header End */}
      </div>
      <PhoneNavbar />
    </>
  )
}

const mapStateToProps = (state: { user: UserState }) => {
  return {
    currentUserModel: state.user.currentUser ? UserModel.make(state.user.currentUser) : undefined
  }
}

export default connect(mapStateToProps, null)(Navbar);