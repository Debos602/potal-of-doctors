import React from 'react';

const ConfirmationModal = ({
    title,
    message,
    closeModal,
    successAction,
    modalData,
    successButtonName,
}) => {
    return (
        <div>
            <dialog id="manageModal" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">{title}</h3>
                    <p className="py-4">{message}</p>
                    <div className="modal-action">
                        <form method="dialog">
                            <button
                                className="btn btn-primary"
                                onClick={() => successAction(modalData)}
                            >
                                {successButtonName}
                            </button>
                            <button onClick={closeModal} className="btn">
                                Cancel
                            </button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default ConfirmationModal;
