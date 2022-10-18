import { useContext } from 'react'
import { GlobalStoreContext } from '../store'
import { useHistory } from 'react-router-dom'
import AddSong_Transaction from "../transactions/AddSong_Transaction"
/*
    This toolbar is a functional React component that
    manages the undo/redo/close buttons.
    
    @author McKilla Gorilla
*/
function EditToolbar() {
    const { store, tps } = useContext(GlobalStoreContext);
    const history = useHistory();

    let enabledButtonClass = "playlister-button";

    const canAddSong = store.currentList !== null;
    const canUndo = tps.hasTransactionToUndo();
    const canRedo = tps.hasTransactionToRedo();
    const canClose = store.currentList !== null;

    const addSong = () => {
        let song = {
            title: "Untitled",
            artist: "Unknown",
            youTubeId: "dQw4w9WgXcQ",
        };

        tps.addTransaction(
            new AddSong_Transaction(store, store.currentList.songs.length, song)
        );
    }
    function handleUndo() {
        store.undo();
    }
    function handleRedo() {
        store.redo();
    }
    function handleClose() {
        tps.clearAllTransactions();
        history.push("/");
        store.closeCurrentList();
    }
    return (
        <span id="edit-toolbar">
            <input
                type="button"
                id='add-song-button'
                disabled={!canAddSong}
                value="+"
                className={enabledButtonClass}
                onClick={addSong}
            />
            <input
                type="button"
                id='undo-button'
                disabled={!canUndo}
                value="⟲"
                className={enabledButtonClass}
                onClick={handleUndo}
            />
            <input
                type="button"
                id='redo-button'
                disabled={!canRedo}
                value="⟳"
                className={enabledButtonClass}
                onClick={handleRedo}
            />
            <input
                type="button"
                id='close-button'
                disabled={!canClose}
                value="&#x2715;"
                className={enabledButtonClass}
                onClick={handleClose}
            />
        </span>);
}

export default EditToolbar;