import { useEffect, useRef } from 'react';
import CurrentChatMessage from "./CurrentChatMessage";

export default function MessageList({currentChat}) {
    const messageListRef = useRef(null);
    
    useEffect(() => {
        if (messageListRef.current) messageListRef.current.scrollTop = messageListRef.current.scrollHeight;
    }, [currentChat.chatMessageList]);

    return (
        <div className="MessageList" ref={messageListRef}>
            {currentChat.chatMessageList.map((message, index) =>
                <CurrentChatMessage currentChat={currentChat} message={message} key={index} />
            )}
        </div>
    )
}



