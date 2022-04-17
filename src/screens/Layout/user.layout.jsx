import React from 'react';
import Navbar from '../../components/navbar/navbar';
import Sidebar from '../../components/sidebar/sidebar';

import { IneerSection, Main, SectionRoleGlobal } from '../../Global.style';
import { Outlet } from 'react-router-dom';
import { WrapperItem } from './style';

export const UserLayout = (props) => {
  return (
    <Main>
      <Navbar />
      <SectionRoleGlobal>
          <Sidebar />


          <Outlet />
          
      </SectionRoleGlobal>
    </Main>
  );
};
