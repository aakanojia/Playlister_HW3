import jsTPS_Transaction from "../common/jsTPS.js";
/**
 * DeleteSong_Transaction
 *
 */
export default class DeleteSong_Transaction extends jsTPS_Transaction {
    constructor(store, index, song) {
        super();
        this.app = store;
        this.index = index;
        this.song = song;
    }

    doTransaction() {
        this.app.deleteSong(this.index);
    }

    undoTransaction() {
        this.app.addSong(this.index, this.song);
    }
}