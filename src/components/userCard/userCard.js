import { useSelector } from "react-redux";
// import { Img } from "../widget";
import { FlexCol, Img } from "../../Global.style";
import { Typography } from "../widget/Typography";
import styled from "styled-components"
import {
  CustomTypo,
  FolloItme,
  FollorBox,
  UserCardBox,
  UserCardTypo,
  UserCardTypoCat,
  UserCardTypoCount,
  UserCardTypoUserName,
} from "./userCard.style";

const CardImg= styled("img")`
  height:69px ;
  width:69px;
  border-radius:50% ;
  object-fit:cover ;
  @media screen and (max-width: 720px) {
    width:47px;
    height:47px;
  }
`
function UserCard(props) {
  const {user:{user},userProfile} = useSelector(state => state.userDetailes)
// src={`${BASE_URL}/${user.avatar}`||"/userS.png"}
console.log("userProf", userProfile);
  return (
    <UserCardBox height={props.height} paddingTop={props.paddingTop}>
      <CardImg  src={`https://tawsal.net/users/avatars/${userProfile?.avatar}`} />
      <FlexCol style={{alignItems:"center"}}>
        <UserCardTypoUserName>{userProfile?.name} </UserCardTypoUserName>
      <UserCardTypoCat style={{ color:"#808080"}}>
       {userProfile?.email}
      </UserCardTypoCat>
      </FlexCol>
      
      
      <FollorBox>
        <FolloItme>
          <UserCardTypoCount  color="#200E32">{userProfile?.num_followers_me}</UserCardTypoCount>
          <UserCardTypoCat  >متابعين</UserCardTypoCat>
        </FolloItme>
        <FolloItme>
          <UserCardTypoCount>{userProfile?.num_posts}</UserCardTypoCount>
          <UserCardTypoCat  >منشورات</UserCardTypoCat>
        </FolloItme>
        <FolloItme style={{ borderLeft: "0" }}>
          <UserCardTypoCount>{userProfile?.num_followers}</UserCardTypoCount>
          <UserCardTypoCat >متابعون</UserCardTypoCat>
        </FolloItme>
      </FollorBox>
    </UserCardBox>
  );
}

export default UserCard;
