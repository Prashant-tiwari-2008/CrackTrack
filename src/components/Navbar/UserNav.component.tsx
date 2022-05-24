import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { User } from '../../domain/user/model/user'
import { UserModel } from '../../domain/user/model/user.model'

interface Props {
    currentUser: User | undefined
}

const UserNav = ({ currentUser }: Props) => {
    const navigate = useNavigate()
    return (
        <div className="header-meta">
            <div className="header-search d-none d-lg-block">
                <form action="#">
                    <input type="text" placeholder="Search Courses" />
                    <button><i className="flaticon-loupe" /></button>
                </form>
            </div>
            {!currentUser && <div className="header-login d-none d-lg-flex">
                <Link className="link" to="/login"><i className="fa fa-user-o" /> Login</Link>
                <Link className="link" to="/registration">Register</Link>
            </div>}
            {currentUser && (
                <div className="header-menu">
                    <ul className="main-menu">
                        <li><a><i className="fa fa-user-o" /> {currentUser.username}</a>
                            <ul className="sub-menu">
                                <li><a href="blog-grid.html">Profile</a></li>
                                <li><a onClick={async () => {
                                    await UserModel.logoutMe();
                                    navigate('/login')
                                }}>Logout</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            )}
            <div className="header-toggle d-lg-none">
                <button data-bs-toggle="offcanvas" data-bs-target="#offcanvasMenu">
                    <span />
                    <span />
                    <span />
                </button>
            </div>
        </div>
    )
}

export default UserNav