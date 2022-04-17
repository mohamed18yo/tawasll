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
  console.log("props",props);
  const {user:{user}} = useSelector(state => state.userDetailes)
// src={`${BASE_URL}/${user.avatar}`||"/userS.png"}
  return (
    <UserCardBox height={props.height} paddingTop={props.paddingTop}>
      <CardImg  src={`https://tawsal.net/users/avatars/${props.avatar}`} />
      <FlexCol style={{alignItems:"center"}}>
        <UserCardTypoUserName>{props.name} </UserCardTypoUserName>
      <UserCardTypoCat style={{ color:"#808080"}}>
       {props.email}
      </UserCardTypoCat>
      </FlexCol>
      <FollorBox>
        <FolloItme>
          <UserCardTypoCount  color="#200E32">{props.num_followers_me}</UserCardTypoCount>
          <UserCardTypoCat  >متابعين</UserCardTypoCat>
        </FolloItme>
        <FolloItme>
          <UserCardTypoCount>{props.num_posts}</UserCardTypoCount>
          <UserCardTypoCat  >منشورات</UserCardTypoCat>
        </FolloItme>
        <FolloItme style={{ borderLeft: "0" }}>
          <UserCardTypoCount>{props.num_followers}</UserCardTypoCount>
          <UserCardTypoCat >متابعون</UserCardTypoCat>
        </FolloItme>
      </FollorBox>
    </UserCardBox>
  );
}

export default UserCard;
