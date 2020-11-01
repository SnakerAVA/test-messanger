import ChatMessage from "./ChatMessage";

export default class ContactChat {
    /** @type {Array<ChatMessage>} */
    chatMessageList = [];
    name = '';
    avatar = '';
    /** @type {number} */
    id;

    /**
     * @param {any[]} rawMessages
     * @param {string} name
     * @param {string} avatar
     * @param {number} id
     */
    constructor(rawMessages, name, avatar, id) {
        /**
         * @param {{ text: string; date: number; isYours: boolean; }} rawMessage
         */
        rawMessages.forEach(rawMessage => {
            this.chatMessageList.push(new ChatMessage(rawMessage.text, rawMessage.date, rawMessage.isYours));
        });
        this.name = name;
        this.avatar = avatar;
        this.id = id;
    }
    /**
     * @returns {ChatMessage | undefined}
     */
    get lastMessage() {
        if (this.chatMessageList.length === 0) {
            return undefined;
        }
        return this.chatMessageList[this.chatMessageList.length - 1];
    }
}

