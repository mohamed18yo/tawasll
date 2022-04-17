import { Typography } from "../../../components/widget";
import { AllChatBox, AllChatHeader, NewMsgBox } from "./Chat.style";
import AddBoxIcon from '@material-ui/icons/AddBox';
import { FlexCol } from "../../../Global.style";
import ChatItem from "./ChatItem";
function AllChat(props) {
    return ( <AllChatBox>
        <AllChatHeader>
            <Typography>كل الدردشات</Typography>
            <NewMsgBox>
                <AddBoxIcon style={{color:"#63c2e8",}}/>
            </NewMsgBox>
        </AllChatHeader>
        <FlexCol style={{width:"100%", overflowX:"auto",scrollBehavior:"auto", }}>
            {props.users.map(item=><ChatItem key={item.id} IsNew={true} userDetails={item.user_followed}/>)}
             
        </FlexCol>
    </AllChatBox> );
}

export default AllChat;