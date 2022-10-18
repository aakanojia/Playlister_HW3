import jsTPS_Transaction from "../common/jsTPS.js";
/**
 * UpdateSong_Transaction
 *
 */
export default class UpdateSong_Transaction extends jsTPS_Transaction {
    constructor(initApp, index, oldValue, newValue) {
        super();
        this.app = initApp;
        this.index = index;
        this.oldValue = oldValue;
        this.newValue = newValue;
    }

    doTransaction() {
        this.app.editSong(this.index, this.newValue);
    }

    undoTransaction() {
        this.app.editSong(this.index, this.oldValue);
    }
}