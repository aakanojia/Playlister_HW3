import React, { useContext, useState } from 'react'
import { GlobalStoreContext } from '../store'
import MoveSong_Transaction from '../transactions/MoveSong_Transaction';

function SongCard(props) {
    const { store, tps } = useContext(GlobalStoreContext);

    const { song, index, editCallBack, deleteCallBack } = props;
    
    const [isDragging, setIsDragging] = useState(false);
    const [selected, setSelected] = useState(false);

    const handleDragStart = (event) => {
        setIsDragging(true);
        event.dataTransfer.setData("song", index);
    };
    const handleDragOver = (event) => {
        setSelected(true);
        event.preventDefault();
    };
    const handleDragEnter = (event) => {
        setSelected(true);
        event.preventDefault();
    };
    const handleDragLeave = (event) => {
        setSelected(false);
        event.preventDefault();
    };

    const handleDragEnd = (event) => {
        event.preventDefault();
        setIsDragging(false);
    };
    const handleDrop = (event) => {
        event.preventDefault();
        setSelected(false);

        let sourceId = event.dataTransfer.getData("song");
        let targetId = index;

        tps.addTransaction(new MoveSong_Transaction(store, sourceId, targetId));
    };

    return (
        <div
            key={index}
            id={'song-' + index + '-card'}
            className={`list-card 
                ${isDragging && "is-dragging"} 
                ${selected ? "selected-list-card" : "unselected-list-card"}`}
            onDragStart={handleDragStart}
            onDragOver={handleDragOver}
            onDragEnter={handleDragEnter}
            onDragLeave={handleDragLeave}
            onDragEnd={handleDragEnd}
            onDrop={handleDrop}
            draggable="true"
            onDoubleClick={() => {
                editCallBack(index);
            }}
        >
            {index + 1}.
            <a
                id={'song-' + index + '-link'}
                className="song-link"
                href={"https://www.youtube.com/watch?v=" + song.youTubeId}>
                {song.title} by {song.artist}
            </a>
            <input
                type="button"
                id={"remove-song-" + index}
                className="list-card-button"
                value={"\u2715"}
                onClickCapture={() => {
                    deleteCallBack(index);
                }}
            />
        </div>
    );
}

export default SongCard;