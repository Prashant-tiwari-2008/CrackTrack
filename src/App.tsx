import './App.css';
import Navbar from './components/Navbar/Navbar.component';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Questions from './domain/questions/view/question.view';
import Home from './domain/home/view/Home.view';
import Registration from './Authentication/Registration';
import BreadCrumb from './components/BreadCrumb'
import Login from './Authentication/Login';
import { useEffect, useState } from 'react';
import RouteChangeDetector from './components/RouteChangeDetector/RouteChangeDetector';
import { Firebase } from './library/firebase/firebase';
import { UserState } from './domain/user/redux/reducer/user.reducer';
import { connect } from 'react-redux';
import { User } from './domain/user/model/user';
import { UserModel } from './domain/user/model/user.model';

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

  const [currentLocation, setCurrentLocation] = useState('');

  return (
    <div className="main-wrapper">
      <BrowserRouter>
        <Navbar />
        {currentLocation !== '' && <BreadCrumb text={currentLocation} />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/questions" element={<Questions />} />
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
