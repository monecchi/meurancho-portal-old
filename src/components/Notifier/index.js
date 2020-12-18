import React from 'react';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
// minified version is also included
// import 'react-toastify/dist/ReactToastify.min.css';

// Custom Component Styles
import './styles.scss';


// Custom Toastify Component
const MRNotifier = ({ message, ...props }) => {

  if (!message) {
    message = "Notificando com Tostify!"
  }
  const notify = () => toast(message);

  return (
    <div>
      <button onClick={notify}>Notificar !</button>
      <ToastContainer
        position="bottom-left"
        autoClose={false} //5000
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default MRNotifier;
