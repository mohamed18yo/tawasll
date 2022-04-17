import { FlexCol, Img } from "../../Global.style";
import { Typography } from "../widget/Typography";
import { ComentItemBox, PostUserImg } from "./post.sytle";

function ComentItem(props) {
  return (
    <ComentItemBox>
      <PostUserImg alt={props?.user?.name} src={`https://api.tawsal.net/users/avatars/${props?.user?.avatar}`} />
      <FlexCol>
        <Typography fontSize="13px" style={{margin:"0 1rem 0"}}>{props?.user?.name}</Typography>
        <Typography fontSize="12px" style={{margin:"0 1rem 0", width:"80%"}} color="#808080">
         {props?.text}
        </Typography>
      </FlexCol>
    </ComentItemBox>
  );
}

export default ComentItem;
