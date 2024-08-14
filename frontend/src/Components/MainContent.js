import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import RequireAuth from "./Auth/RequireAuth";
import Modal from 'react-modal';

import HomePage from "../Pages/Home";
import Articles from "../Pages/Articles";
import Login from "./Auth/Login";
import Logout from "./Auth/Logout";
import Signup from "./Auth/Signup";
import SignupDone from "./Auth/SignupDone";
import AccountActivation from "./Auth/AccountActivation";
import UserProfile from "./Auth/UserProfile";
import UserProfileEdit from "./Auth/UserProfileEdit";
import PasswordChange from "./Auth/PasswordChange";
import PasswordReset from "./Auth/PasswordReset";
import PasswordResetDone from "./Auth/PasswordResetDone";
import PasswordResetConfirm from "./Auth/PasswordResetConfirm";

// import NoMatch from "./NoMatch";





function MainContent(){
    const location = useLocation();
    const previousLocation = location.state?.previousLocation;
    return (
        <div>
            <Routes>
                <Route exact path="/" element={<HomePage />}/>
                <Route path="/articles" element={<Articles/>}/>
                <Route path="/login" element={<Login />}/>
                <Route path="/logout" element={<Logout />}/>
                <Route path="/signup" element={<Signup />}/>
                <Route path="/account/confirm-email/:key" element={<AccountActivation />}/>
                <Route path="/signup_done" element={<SignupDone />}/>
                <Route path="/reset_password" element={<PasswordReset />}/>
                <Route path="/reset_password_done" element={<PasswordResetDone />}/>
                <Route path="/reset/:uid/:token/" element={<PasswordResetConfirm />}/>
                <Route path="/profile" element={RequireAuth(<UserProfile />)}/>
                <Route path="/profile_edit" element={RequireAuth(<UserProfileEdit />)}/>
                <Route path="/change_password" element={RequireAuth(<PasswordChange />)}/>
                {/* <Route element={NoMatch}/> */}
            </Routes>
            {previousLocation && (
                <Routes>
                    <Route path="/modal/" element={<Modal />} />
                </Routes>
            )}
        </div>
    )
}

export default MainContent;
