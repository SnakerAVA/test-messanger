import Sidebar from './Sidebar/Sidebar';
import CurrentChat from './CurrentChat/CurrentChat';
import './style.scss';
import { useEffect, useState } from 'react';
import { getContactChats } from "../../services/contactChatService";
import ChatMessage from '../../models/ChatMessage';
import ContactChat from '../../models/ContactChat';
import { getContactListFromLocalStorage, setContactListToLocalStorage } from '../../services/localStorageService';

function ChatPage() {
    const [contactChatList, setContactChatList] = useState([]);
    const [currentChatId, setCurrentChatId] = useState(undefined);

    const currentChat = contactChatList.find(contactChat => contactChat.id === currentChatId);

    useEffect(() => {
        if (getContactListFromLocalStorage()) {
            setContactChatList(getContactListFromLocalStorage())
        }
        else getContactChats().then(data => setContactChatList(data));
    }, []);

    useEffect(() => {
        setContactListToLocalStorage(contactChatList);
    }, [contactChatList]);

    function selectCurrentChat(id) {
        setCurrentChatId(id);
    }

    /**
     * @param {ChatMessage} chatMessage
     * @param {number} id 
     */
    function sendMessage(chatMessage, id) {
        setContactChatList(oldContactChatList => {
            const contactChat = oldContactChatList.find(contactChat => contactChat.id === id);
            const cloneContactChat = new ContactChat(contactChat.chatMessageList, contactChat.name, contactChat.avatar, contactChat.id);
            cloneContactChat.chatMessageList.push(chatMessage);

            return oldContactChatList.map(contactChat => {
                if (contactChat.id === cloneContactChat.id) return cloneContactChat;
                else return contactChat;
            })
        })
    }

    return (
        <div className="ChatPage">
            <Sidebar contactChatList={contactChatList} selectCurrentChat={selectCurrentChat} />
            <CurrentChat currentChat={currentChat} sendMessage={sendMessage} />
        </div>
    );
}

export default ChatPage;
