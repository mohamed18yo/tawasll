import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { sharePostAction } from '../../redux/post/postAction';
import { notify } from '../../utils/notify';
import { Typography } from '../widget';
import { ShareMenuBox } from './Dropmenu.style';
function ShareMenu(props) {
  const { isOpen, setIsOpen } = props;
  const dispatch = useDispatch();
  const share = () => {
    dispatch(sharePostAction(props));
    props.setIsMenuOpen((prec) => !prec);
  };
  const copyLink = () => {
    const link = `${window?.location?.origin?.toString()}/post/${props.id}`;
    navigator.clipboard.writeText(link);
    notify("success","تم نسخ الرابط ")
    props.setIsOpen(false);
  };
  return (
    props.isOpen && (
      <ShareMenuBox>
        <Typography onClick={share} style={{ cursor: 'pointer' }}>
          المشاركة الان{' '}
        </Typography>
        <Typography style={{ cursor: 'pointer' }}>المشاركة مع اضافة نص</Typography>
        <Typography onClick={copyLink} style={{ cursor: 'pointer' }}>
          نسخ الرابط
        </Typography>
      </ShareMenuBox>
    )
  );
}

export default ShareMenu;
