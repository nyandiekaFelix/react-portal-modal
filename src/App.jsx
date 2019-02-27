import React, { useState } from 'react';
import Modal from './Modal';


const App = () => {
  const [showModal, setShowModal] = useState(false);

  const open = () => { setShowModal(true); };
  const close = () => { setShowModal(false); };

  return (
    <div className="App container">
      <button onClick={open} className="open-btn btn-primary btn-lg">Open Modal</button>
        {
          showModal ?
          (
            <Modal>
              <div className="modal-contents col-md-4">
                <div className="row">
                  <div className="text">This is the modal content</div>
                  <div className="pull-right">
                    <button
                      onClick={close}
                      className="close-btn btn-danger">
                      Close Modal
                    </button>
                  </div>
                </div>
              </div>
            </Modal>
          ) : null
        }
    </div>
  );
};

export default App;
