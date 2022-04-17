

import React, { useState } from "react";
import { ListItem } from "./ListItem";
import { WrapperMenu, WrapperSubMenu } from "./style";
// import  deletePost  from'../assets/deletePost.svg'
// import { ReactComponent as deletePost } from "../../../public/assets/deletePost.svg";

const Dropdown = () => {
  const [show, setShow] = useState(true);

  return (
    <WrapperMenu>
      <WrapperSubMenu className="container">
        <div className="sub">
          <div className="relative">
            <div onClick={() => setShow(!show)}>
              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" />
                <circle cx={5} cy={12} r={1} />
                <circle cx={12} cy={12} r={1} />
                <circle cx={19} cy={12} r={1} />
              </svg>
            </div>
            {show && (
              <ul>
                <ListItem title="تعديل المنشور" />
                <ListItem title="حذف المنشور" />
              </ul>
            )}
          </div>
        </div>
      </WrapperSubMenu>
    </WrapperMenu>
  );
};
export { Dropdown };




