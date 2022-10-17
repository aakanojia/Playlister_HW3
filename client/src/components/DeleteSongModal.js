import React from "react";

export default function DeleteSongModal({
    currentSong,
    deleteConfirm,
    deleteCancel,
}) {
    return (
        <div
            className="modal"
            id="remove-song-modal"
            data-animation="slideInOutLeft">
            <div className="modal-root" id="verify-remove-song-root">
                <div className="modal-north">Remove song?</div>
                <div className="modal-center">
                    <div className="modal-center-content">
                        Are you sure you wish to permanently remove{" "}
                        <span id="remove-song-span">{currentSong?.title}</span>{" "}
                        from the playlist?
                    </div>
                </div>
                <div className="modal-south">
                    <input
                        type="button"
                        id="remove-song-confirm-button"
                        className="modal-button"
                        value="Confirm"
                        onClick={deleteConfirm}/>
                    <input
                        type="button"
                        id="remove-song-cancel-button"
                        className="modal-button"
                        value="Cancel"
                        onClick={deleteCancel}/>
                </div>
            </div>
        </div>
    );
}