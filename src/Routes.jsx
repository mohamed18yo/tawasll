import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SignUp from './screens/auth/signup/Signup';
import Login from './screens/auth/login/Login';
import { AuthLayout, AuthLayoutWithUser } from './screens/Layout/Auth.layout';
import ResetPassword from './screens/auth/resetpassword/ResetPassword';
import CompleteProfile from './screens/auth/CompleteProfile';
import { UserLayout } from './screens/Layout/user.layout';
import Profile from './screens/user/profile/Profile';
import ProfileSetting from './screens/user/profile/ProfileSetting';
import Home from './screens/user/home/home';
import { SearchResult } from './screens/user/SearchResult';
import Chat from './screens/user/chat/Chat';
import Notification from './screens/user/notification/Notification';
import { RequireAuth } from './components/RouterAuth/AuthRouter';
import PageNotFound from './screens/PageNotFound/PageNotFound';
import PostById from './screens/user/post/Post';

export const RoutesAll = (props) => {
  return (
    <Routes>
      <Route path="auth" element={<AuthLayout />}>
        <Route path="signUp" element={<SignUp />} />
        <Route path="login" element={<Login />} />

      </Route>

        <Route path="reset" element={<AuthLayoutWithUser> 
          <ResetPassword />
          </AuthLayoutWithUser>
          
          } />
        <Route path="completeProfile" element={
        <AuthLayoutWithUser>

          <CompleteProfile />
        </AuthLayoutWithUser>
        } />



      <Route path="/" element={<RequireAuth>
        <UserLayout />
      </RequireAuth>}>
        <Route index element={<Home />} />
        
        <Route path="profileSetting" element={<ProfileSetting />} />
        <Route path="profile" element={<Profile />} />
        <Route path="profile/:id" element={<Profile />} />
        <Route path="/post/:id" element={<PostById />} />
        <Route path="/search" element={<SearchResult />} />
        <Route path="message" element={<Chat />} />
        <Route path="notifications" element={<Notification />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
      <Route path="*" element={<PageNotFound />}/>
    </Routes>
  );
};
