import { connect } from 'react-redux';
import React from 'react'
import { UserState } from '../redux/reducer/user.reducer';
import { UserModel } from '../model/user.model';

interface Props {
    currentUserModel?: UserModel | undefined;
}
const UserProfile: React.FC<Props> = ({ currentUserModel }) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <div className="single-instructor">
                        <div className="instructor-image">
                            <a href="instructor.html#"><img src="assets/images/instructors-1.jpg" alt="Instructor" /></a>
                        </div>
                        <div className="instructor-content">
                            <h4 className="name"><a href="instructor.html#">{currentUserModel?.pluck('username')}</a></h4>
                            <p>{currentUserModel?.pluck('aboutMe')}</p>
                        </div>
                    </div>

                </div>
                <div className="col-6"></div>
            </div>
        </div>
    )
}

const mapStateToProps = (state: { user: UserState }) => {
    return {
        currentUserModel: state.user.currentUser ? UserModel.make(state.user.currentUser) : undefined
    }
}
export default connect(mapStateToProps, null)(UserProfile);