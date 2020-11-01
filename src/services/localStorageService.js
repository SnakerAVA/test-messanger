import parseContactChatList from '../utils/parseContactChatList';
const CONTACT_LIST_KEY = 'contactList';

const getItem = (key) => {
    return JSON.parse(localStorage.getItem(key));
}

const setItem = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
}

export const getContactListFromLocalStorage = () => {
    let data = getItem(CONTACT_LIST_KEY);
    if (data) {
        return parseContactChatList(data);
    }
}

export const setContactListToLocalStorage = (data) => {
    setItem(CONTACT_LIST_KEY, data);
}