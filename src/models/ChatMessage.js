export default class ChatMessage {
    text = '';
    date = 0;
    isYours;
    /**
     * @param {string} text
     * @param {number} date
     * @param {boolean} isYours
     */
    constructor(text, date, isYours) {
        this.text = text;
        this.date = date;
        this.isYours = isYours;
    }
}
