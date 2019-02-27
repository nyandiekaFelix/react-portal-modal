import { useEffect } from 'react';
import ReactDOM from 'react-dom';


const Modal = ({ children }) => {
  const element = document.createElement('div');

  // To do create parent element with close button

  useEffect(() => {
    const portalOut = document.getElementById('portal-out');
    portalOut.appendChild(element);
    element.setAttribute('class', 'modal-container');

    const removeElement = () => {
      portalOut.removeChild(element);
    };

    return removeElement;
  }, []);

  return ReactDOM.createPortal(children, element);
};

export default Modal;
