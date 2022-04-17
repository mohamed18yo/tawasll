import ReactDOM from 'react-dom';

export default function Portal({ children }) {
  const parent = typeof document !== 'undefined' && document.getElementById('portal');
  return children && parent ? ReactDOM.createPortal(children, document.getElementById('portal')) : '';
}
