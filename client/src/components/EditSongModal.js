import React, { useContext, useEffect, useMemo, useState } from "react";
import { GlobalStoreContext } from "../store";

export default function EditSongModal({show, index, setShow}) {
    const {store} = useContext(GlobalStoreContext);
    const currentSong = store.currentList.songs[index];
    const [state, setstate] = useState({
        artist: currentSong?.artist || "",
        title: currentSong?.title || "",
        youTubeId: currentSong?.youTubeId || "",
    });

    const editSong = () => {
        store.editSong(index, state);
        setShow(false);
    };

    useEffect(() => {
        if (currentSong) {
            setstate(currentSong);
        }
    }, [currentSong]);
    return (
        <div
            className={`modal ${show && "is-visible"}`}
            id="edit-song-modal"
            data-animation="slideInOutLeft">
            <div className="modal-root" id="edit-song-root">
                <div id="edit-song-modal-header" className="modal-north">
                    Edit Song
                </div>
                <div id="edit-song-modal-content" className="modal-center">
                    <div id="title-prompt" className="modal-prompt">
                        Title:
                    </div>
                    <input
                        id="edit-song-modal-title-textfield"
                        className="modal-textfield"
                        type="text"
                        value={state.title}
                        onChange={(e) => {
                            setstate((prevState) => ({
                                ...prevState,
                                title: e.target.value,
                            }));
                        }}/>
                    <div id="artist-prompt" className="modal-prompt">
                        Artist:
                    </div>
                    <input
                        id="edit-song-modal-artist-textfield"
                        className="modal-textfield"
                        type="text"
                        value={state.artist}
                        onChange={(e) => {
                            setstate((prevState) => ({
                                ...prevState,
                                artist: e.target.value,
                            }));
                        }}/>
                    <div id="you-tube-id-prompt" className="modal-prompt">
                        You Tube Id:
                    </div>
                    <input
                        id="edit-song-modal-youTubeId-textfield"
                        className="modal-textfield"
                        type="text"
                        value={state.youTubeId}
                        onChange={(e) => {
                            setstate((prevState) => ({
                                ...prevState,
                                youTubeId: e.target.value,
                            }));
                        }}/>
                </div>
                <div className="modal-south">
                    <input
                        type="button"
                        id="edit-song-confirm-button"
                        className="modal-button"
                        value="Confirm"
                        onClick={editSong}/>
                    <input
                        type="button"
                        id="edit-song-cancel-button"
                        className="modal-button"
                        value="Cancel"
                        onClick={() => setShow(false)}/>
                </div>
            </div>
        </div>
    );
}