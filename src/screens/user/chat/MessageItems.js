import { Typography } from '../../../components/widget';
import { Img } from '../../../Global.style';
import { MsgBox, MsgItemBox } from './Chat.style';

function MessageItems(props) {
  return (
    <MsgItemBox IsMyMsg={props.IsMyMsg}>
      <Img
        style={{
          borderRadius: '50%',
          width: '40px',
          height:"40px",
          border: '1px solid gray',
          marginBottom: props.IsMyMsg ? '' : '3rem',
        }}
        src={props.Img}
      />
      <MsgBox IsMyMsg={props.IsMyMsg}>
        <Typography style={{ margin: '.3rem' }} fontSize="14px" color="#707070">
          {props.theMsg}
        </Typography>
        <Typography style={{ fontFamily: 'apple' }} fontSize="12px" color="#969798">
          {props.Time}
        </Typography>
      </MsgBox>
    </MsgItemBox>
  );
}

export default MessageItems;
