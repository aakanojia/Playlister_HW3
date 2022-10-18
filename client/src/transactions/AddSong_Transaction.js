import jsTPS_Transaction from "../common/jsTPS.js";
/**
 * AddSong_Transaction
 *
 */
export default class AddSong_Transaction extends jsTPS_Transaction {
    constructor(store, index, song) {
        super();
        this.app = store;
        this.index = index;
        this.song = song;
    }

    doTransaction() {
        this.app.addSong(this.index, this.song);
    }

    undoTransaction() {
        this.app.deleteSong(this.index);
    }
}