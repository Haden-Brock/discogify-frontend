import './Modal.css';

function Modal ({ isOpen, name, onClose, children}) {
  return (
    <div className={isOpen ? `modal modal_type_${name}` : `modal modal_type_${name} modal_hidden`}>
      <div className="modal__container">
        <button className="modal__exit" onClick={onClose} type="button" />
        {children}
      </div>
      
    </div>
  )
}

export default Modal;