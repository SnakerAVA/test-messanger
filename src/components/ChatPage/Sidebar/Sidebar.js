import SidebarChatItem from "./SidebarChatItem";
import { useState } from 'react';

function Sidebar({ contactChatList, selectCurrentChat }) {
    const [searchKey, setSearchKey] = useState("");

    let sortedContactChatList = contactChatList.sort((a, b) => b.lastMessage.date - a.lastMessage.date);
    let filteredContactChatList = sortedContactChatList.filter((contactChat) => contactChat.name.toLowerCase().includes(searchKey.toLowerCase()));

    return (
        <div className="Sidebar">
            <div className="SidebarHeader">
                <div className="Avatar">
                    <img src="https://apta.biz/wp-content/uploads/2017/02/avatar-round-4-768x768.png" alt="" />
                </div>
                <div className="SearchPanel">
                    <input value={searchKey} onChange={(event) => setSearchKey(event.target.value)} placeholder="Search or start new chat" />
                </div>
            </div>
            <h2>Chats</h2>
            <div className="ChatList">
                {filteredContactChatList.map((contactChat) =>
                    <SidebarChatItem contactChat={contactChat} key={contactChat.id} selectCurrentChat={selectCurrentChat} />
                )}
            </div>
        </div>
    );
}

export default Sidebar;