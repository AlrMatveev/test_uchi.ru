import { ModalWraper } from "./styled";

const Modal = ({ time, modal, setModal, date }) => {
  return (
    <ModalWraper modal={modal}>
      <div>
        {time ? (
          <>
            <h3>https://calendar.com</h3>
            <div>Enter event time:</div>
            <div>
              {`${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`}{" "}
              {time[0] + 8 + ":00"}
            </div>
            <input type="text" />
            <div>
              <button onClick={() => setModal(false)}>Cancel</button>
              <button>Ok</button>
            </div>
          </>
        ) : (
          <>
            <h3>Select Time</h3>
            <button onClick={() => setModal(false)}>Ok</button>
          </>
        )}
      </div>
    </ModalWraper>
  );
};

export default Modal;
