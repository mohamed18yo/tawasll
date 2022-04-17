import React, { useCallback, useState } from 'react';
import PersonIcon from '@material-ui/icons/Person';
import { ListItem } from './ListItem';
import { ResetPasssword } from '../RestPassword';
import { IneerSetting, LeftSide, RightSide, TopTab, Wrapper } from './style';
import { UpdateProfile } from '../UpdateProfile';
import { IconsLook } from '../svgIcon';
import { useSelector } from 'react-redux';



let MyIcons1 = () => <svg xmlns="http://www.w3.org/2000/svg" width="16.725" height="20" viewBox="0 0 16.725 20">
  <g id="Iconly_Light_Unlock" data-name="Iconly/Light/Unlock" transform="translate(0.75 0.75)">
    <g id="Unlock">
      <path id="Stroke_1" data-name="Stroke 1" d="M8.872,3.062A4.563,4.563,0,0,0,0,4.531V6.7" transform="translate(3.052)" fill="none" stroke="#10000d" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
      <path id="Stroke_3" data-name="Stroke 3" d="M11.433,11.874H3.792A3.793,3.793,0,0,1,0,8.081V3.793A3.793,3.793,0,0,1,3.792,0h7.641a3.793,3.793,0,0,1,3.792,3.793V8.081A3.793,3.793,0,0,1,11.433,11.874Z" transform="translate(0 6.626)" fill="none" stroke="#10000d" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
      <path id="Stroke_5" data-name="Stroke 5" d="M.5,0V2.222" transform="translate(7.113 11.453)" fill="none" stroke="#10000d" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
    </g>
  </g>
</svg>
let MyIcons2 = () =>
  <svg id="Iconly_Light-outline_Profile" data-name="Iconly/Light-outline/Profile" xmlns="http://www.w3.org/2000/svg" width="16.001" height="20" viewBox="0 0 16.001 20">
    <g id="Profile" transform="translate(0)">
      <path id="Profile-2" data-name="Profile" d="M6.676,19.964c-.121,0-.206,0-.284,0l-.144-.005a2.214,2.214,0,0,1-.4-.047,15.4,15.4,0,0,1-2.333-.338l-.256-.054a3.961,3.961,0,0,1-2.975-1.9A2.936,2.936,0,0,1,0,16.363,2.876,2.876,0,0,1,.287,15.1a4.334,4.334,0,0,1,3.2-1.948,16.744,16.744,0,0,1,2.339-.331c.718-.063,1.448-.094,2.17-.094s1.452.031,2.17.094l.461.039a17.218,17.218,0,0,1,1.873.292c1.727.355,2.749.979,3.215,1.962a2.912,2.912,0,0,1,0,2.5c-.464.978-1.512,1.616-3.2,1.949l-.468.1a15.713,15.713,0,0,1-1.88.245c-.715.061-1.442.092-2.158.092C7.563,20,7.114,19.988,6.676,19.964Zm-.734-5.7a15.528,15.528,0,0,0-2.156.305,3.21,3.21,0,0,0-2.205,1.168,1.417,1.417,0,0,0-.14.624,1.452,1.452,0,0,0,.139.627c.255.527,1.025.93,2.228,1.165l.353.075a15.507,15.507,0,0,0,1.874.249,1.84,1.84,0,0,0,.287.033l.393.006c.429.023.866.035,1.3.035.678,0,1.366-.029,2.047-.087a14.344,14.344,0,0,0,2.162-.315l.225-.048c1.061-.24,1.743-.624,1.973-1.108a1.463,1.463,0,0,0,0-1.259c-.245-.516-1.008-.92-2.209-1.167a15.575,15.575,0,0,0-2.152-.3l-.013,0c-.675-.059-1.361-.089-2.038-.089S6.628,14.2,5.943,14.264ZM2.692,5.335A5.313,5.313,0,1,1,8,10.67,5.33,5.33,0,0,1,2.692,5.335Zm1.442,0A3.871,3.871,0,1,0,8,1.448,3.883,3.883,0,0,0,4.134,5.335Z" fill="#24aae1" />
    </g>
  </svg>


const ProfileSetting = (props) => {

  const [setting, setSeting] = useState(0);
  const handelclick = useCallback(
    (value) => {
      setSeting(!setting);
    },
    [setSeting],
  );
  return (
  
    <IneerSetting>
      <TopTab>
        <ListItem
          isActive={setting === 0}
          title={'إعدادات الملف الشخصي'}
          icon={<MyIcons2 />}
          onClick={() => {
            if (setting !== 0) setSeting(0);
            return;
          }}
        />
        <ListItem
          isActive={setting === 1}
          title={'تغيير كلمة المرور'}
          icon={<MyIcons1 />}
          onClick={() => {
            if (setting !== 1) setSeting(1);
            return;
          }}
        />
      </TopTab>
      <Wrapper>
        <LeftSide>
          <ListItem
            isActive={setting === 0}
            title={'إعدادات الملف الشخصي'}
            icon={<MyIcons2 />}
            onClick={() => {
              if (setting !== 0) setSeting(0);
              return;
            }}
          />
          <ListItem
            isActive={setting === 1}
            title={'تغيير كلمة المرور'}
            icon={<MyIcons1 />}
            onClick={() => {
              if (setting !== 1) setSeting(1);
              return;
            }}
          />
        </LeftSide>
      </Wrapper>
      <RightSide>{setting === 0 ? <UpdateProfile /> : <ResetPasssword />}</RightSide>
    </IneerSetting>
  
  );
};

export default ProfileSetting;
