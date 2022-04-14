import React from 'react'

function Modal({ pic, firstName, handleHide, show }) {
    return (
        <>
            <div class="modal fade" id="userProfile" show={show}>
            <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="userProfileLabel">Modal title</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close" onClick={handleHide}>
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                        <img src={pic} className="" alt="" />
                        <div>{firstName}</div>
                        </div>
                        <div class="modal-footer">
                            <button class="btn btn-rose" onClick={handleHide}>Close</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Modal