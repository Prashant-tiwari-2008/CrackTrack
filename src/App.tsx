import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from 'react';
import RouteChangeDetector from './components/RouteChangeDetector/RouteChangeDetector';
import { Firebase } from './library/firebase/firebase';
import { UserState } from './domain/user/redux/reducer/user.reducer';
import { connect } from 'react-redux';
import { User } from './domain/user/model/user';
import { UserModel } from './domain/user/model/user.model';
import ProtectedRoutes from './components/Navbar/Routing/ProtectedRoutes';
import { boolean } from 'yup';

//====>> Import Components
import Home from './domain/home/view/Home.view';
import Registration from './Authentication/Registration';
import BreadCrumb from './components/BreadCrumb'
import Login from './Authentication/Login';
import Navbar from './components/Navbar/Navbar.component';
import Questions from './domain/questions/view/question.view';
import InterviewQuestion from './domain/questions/view/interviewQuestion.view';
import LogicalQuestion from './domain/questions/view/logicalQuestion.view';
import HrQuestion from './domain/hr-Section/view/hrSection.view'
import Contact from './domain/contact/view/contact.view'

// https://jsv9000.app/
interface Props {
  currentUser?: User
}

function App({ currentUser }: Props) {

  //TODO: NEED TO DISCUSS
  useEffect(() => {
    Firebase.getInstance();
    authenticateMe()
  }, [])

  //TODO: NEED TO DISCUSS
  const authenticateMe = async () => {
    if (!currentUser) {
      const uid = localStorage.getItem('uid');
      if (uid) {
        const user = await UserModel.syncUser(uid);
        UserModel.setCurrentUser(user)
      }
    }
  }

  const isUserAuthenticated = () => {
    const uid = localStorage.getItem('uid');
    console.log("uid", uid)
    if (!uid) {
      return true
    }
    return false
  }

  const [currentLocation, setCurrentLocation] = useState('');
  return (
    <div className="main-wrapper">
      <BrowserRouter>
        <Navbar />
        {currentLocation !== '' && <BreadCrumb text={currentLocation} />}
        <Routes>
          <Route path="/" element={
            <ProtectedRoutes condition={isUserAuthenticated()} navigationUrl={"/login"}>
              <Home />
            </ProtectedRoutes>} />
          <Route path="/login" element={<Login />} />
          <Route path="/interview-questions" element={<InterviewQuestion />} />
          <Route path="/logical-questions" element={<LogicalQuestion />} />
          <Route path="/hr-question" element={<HrQuestion />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/registration" element={<Registration />} />

        </Routes>
        <RouteChangeDetector routeChange={(activeRoute: string) => setCurrentLocation(activeRoute)} />
      </BrowserRouter>
    </div >

  );
}

const mapStateToProps = (state: { user: UserState }) => {
  return {
    currentUser: state.user.currentUser
  }
}

export default connect(mapStateToProps, null)(App);
