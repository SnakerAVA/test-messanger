import parseContactChatList from '../utils/parseContactChatList';
import ContactChat from "../models/ContactChat";

/**
 * @returns {Promise<ContactChat[]>}
 */
export const getContactChats = async () => {
    let json = await fetch("data.json");
    let parsedData = await json.json();
    return parseContactChatList(parsedData);
}
