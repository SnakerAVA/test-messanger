import ContactChat from "../models/ContactChat";

/**
 * @param {Array} rawData
 * @returns {ContactChat[]}
 */
export default function parseContactChatList (rawData) {
    let contactChatList = [];
    rawData.forEach(item => {
        let contactChat = new ContactChat(item.chatMessageList, item.name, item.avatar, item.id);
        contactChatList.push(contactChat);
    });
    return contactChatList;
}
