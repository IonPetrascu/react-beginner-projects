import React, { useState } from 'react';
import './index.scss';

const Modal = ({ openModal, setOpenModal, children }) => (
  <div onClick={() => setOpenModal(false)} className={`overlay animated ${openModal && 'show'}`}>
    <div className="modal">
      <svg onClick={() => setOpenModal(false)} height="200" viewBox="0 0 200 200" width="200">
        <title />
        <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
      </svg>
      <img src={children} />
    </div>
  </div>
);

function App() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="App">
      <button onClick={() => setOpenModal(true)} className="open-modal-btn">
        ✨ Открыть окно
      </button>

      <Modal
        setOpenModal={setOpenModal}
        openModal={openModal}
        children={'https://media2.giphy.com/media/xT0xeJpnrWC4XWblEk/giphy.gif'}
      />
    </div>
  );
}

export default App;
