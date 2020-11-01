import fromTimestampToDate from "../../../utils/fromTimestampToDate"

function SidebarChatItem({contactChat, selectCurrentChat}) {
    return (
        <div className="SidebarChatItem" onClick={() => selectCurrentChat(contactChat.id)}>
            <div className="Avatar">
                <img className="AvatarImage" src={contactChat.avatar} alt=""/>
            </div>
            <div className="SideContactMainInfo">
                <p className="SideContactName">{contactChat.name}</p>
                <p className="SideContactMessage">{contactChat.lastMessage.text}</p>
            </div>
            <p className="SideContactDate">{fromTimestampToDate(contactChat.lastMessage.date)}</p>
        </div>
    );
}

export default SidebarChatItem;