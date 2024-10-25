import React, { useContext, useMemo } from "react";
import { GlobalStoreContext } from "../store";
import DeleteSong_Transaction from "../transactions/DeleteSong_Transaction"

export default function DeleteSongModal({ show, index, setShowDelete }) {
    const { store, tps } = useContext(GlobalStoreContext);

    const currentSong = useMemo(() => {
        return store.currentList.songs[index];
    }, [index, store]);
    
    return (
        <div
            className={`modal ${show && "is-visible"}`}
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
                        onClick={() => {
                            tps.addTransaction(
                                new DeleteSong_Transaction(store, index, {
                                    artist: currentSong.artist,
                                    title: currentSong.title,
                                    youTubeId: currentSong.youTubeId,
                                })
                            )
                            setShowDelete(false);
                        }}/>
                    <input
                        type="button"
                        id="remove-song-cancel-button"
                        className="modal-button"
                        value="Cancel"
                        onClick={() => setShowDelete(false)}/>
                </div>
            </div>
        </div>
    );
}