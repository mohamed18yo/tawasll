import { DropmenuBox } from './Dropmenu.style';

function Dropmenu(props) {
  return props.isOpen && <DropmenuBox >hello world</DropmenuBox>;
}

export default Dropmenu;
