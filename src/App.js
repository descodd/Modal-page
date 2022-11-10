import Modal from "./components/Modal";
import {
  FaYinYang,
  FaParking,
  FaExchangeAlt,
  FaClone,
  FaCheck,
  FaPlayCircle,
} from "react-icons/fa";
import { useState } from "react";

function App() {
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <div className="container">
      {!showModal && (
        <button className="btn show" onClick={handleShow}>
          Show Modal
        </button>
      )}
      {showModal && (
        <Modal>
          <div className="icons">
            <p className="ying">
              <FaYinYang />
            </p>
            <p className="ex">
              <FaExchangeAlt />
            </p>
            <p className="park">
              <FaParking />
            </p>
          </div>
          <div className="connect">
            <h2>Connect Linear to Intercom</h2>
            <p>
              Prioritize work based on customer needs and build a tighter
              feedback loop with your customers.
            </p>
          </div>
          <div className="input">
            <input
              type="text"
              className="text"
              placeholder="app.untitledui.com/integrations/intercom"
            />

            <div className="copy">
              <p>
                <FaClone />
              </p>
              <p>Copy Link</p>
            </div>
          </div>

          <hr />

          <div className="untitled">
            <h2>Untitled would like to</h2>
            <div className="basic">
              <p className="check">
                <FaCheck />
              </p>
              <p>Access basic company informationa and details</p>
            </div>
            <div className="basic">
              <p className="check">
                <FaCheck />
              </p>
              <p>Access and edit bug reports and create new issues</p>
            </div>
            <div className="basic">
              <p className="check">
                <FaCheck />
              </p>
              <p>Change issues status and assignee of issues</p>
            </div>
            <div className="basic">
              <p className="check">
                <FaCheck />
              </p>
              <p>Open and resolve Intercom conversations</p>
            </div>
            <div className="basic">
              <p className="check">
                <FaCheck />
              </p>
              <p>Add or remove users and change user roles</p>
            </div>
            <p className="privacy">
              We care about your privacy in our <span>Privacy Policy.</span> By
              clickng Allow access, you authorize Untitled to access your
              information.
            </p>
          </div>

          <hr />

          <div className="footer">
            <div className="play">
              <p>
                <FaPlayCircle />
              </p>
              <p>How it works</p>
            </div>
            <div className="cancel">
              <button className="btn" onClick={handleClose}>
                Cancel
              </button>
              <p className="allow">Allow access</p>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}

export default App;
