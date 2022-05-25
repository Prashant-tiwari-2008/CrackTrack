import React from 'react'
import { connect } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { User } from '../../domain/user/model/user';
import { UserState } from '../../domain/user/redux/reducer/user.reducer';
import PhoneNavbar from './PhoneNavbar.component';
import UserNav from './UserNav.component';
import { IRoutes, RoutingMenu } from './Routing/RoutingMenu';

interface Props {
  currentUser?: User
}

const Navbar = ({ currentUser }: Props) => {
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
                  {/* {navRoutes && navRoutes.map((route, index) => { */}
                    {/* return ( */}
                      <>
                        <li>
                          <Link className="active" to="/">HOME</Link>
                        </li>
                        <li>
                          <a href="index-2.html#">Tech-Question</a>
                          <ul className="sub-menu">
                            <li><a href="about.html">Interview Question</a></li>
                            <li><a href="about-2.html">Logical Question</a></li>
                          </ul>
                        </li>
                        <li>
                          <a href="index-2.html#">HR-Section</a>
                          <ul className="sub-menu">
                            <li><a href="course-list.html">Comming Soon</a></li>
                          </ul>
                        </li>
                        <li><a href="index-2.html#">Contact</a>
                        </li>
                      </>
                    {/* ) */}
                  {/* })} */}
                </ul>
              </div>
              {/* Header Menu End */}
              {/* Header Meta Start */}
              <UserNav currentUser={currentUser} />
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
    currentUser: state.user.currentUser
  }
}

export default connect(mapStateToProps, null)(Navbar);