import { useSelector } from "react-redux";
import { Typography } from "../../../components/widget";
import { Img } from "../../../Global.style";
import { ReceiverDetailsBox } from "./Chat.style";

function ReceiverDetails() {
  const state = useSelector((state) => state);
  const resever = state.chats.resever;
  return (
    resever.name ? <ReceiverDetailsBox>
      <Img style={{height:"120px",width:"120px", borderRadius:"50%"}} src={`https://api.tawsal.net/users/avatars/${resever.avatar}`} />
      <Typography>{resever.name} </Typography>
      <Typography color="#707070">{resever.email}</Typography>
      <Typography fontSize="12px" color="#707070">
        هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي
        القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة
        التي يقرأها.
      </Typography>
    </ReceiverDetailsBox> : <></>
    
  );
}

export default ReceiverDetails;
