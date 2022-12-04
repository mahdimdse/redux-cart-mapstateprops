import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MainRouter from './MainRouter';

const App = () => {
  return (
    <>
      <ToastContainer />
      <MainRouter />
    </>
  );
};

export default App;
