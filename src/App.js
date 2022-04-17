import './App.css';
import { GlobalStyle } from './components/widget/GlobalStyle';
import { RoutesAll } from './Routes';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
    <GlobalStyle/>
    
   <RoutesAll/>
   <ToastContainer autoClose={3000} />

    </>)}
    export default App;
