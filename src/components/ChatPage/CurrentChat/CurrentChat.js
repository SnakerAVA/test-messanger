import { useState, useRef } from 'react';
import ChatMessage from "../../../models/ChatMessage";
import { getRandomJoke } from "../../../services/chuckApiService";
import MessageList from './MessageList';

function CurrentChat({ currentChat, sendMessage }) {
    const [messageText, setMessageText] = useState("");


    function createMessage() {
        if (!messageText) return;
        let message = new ChatMessage(messageText, Date.now(), true);
        sendMessage(message, currentChat.id);
        setMessageText("");
        setTimeout(async ()=>{
            let chuckMessage = await getRandomJoke();
            let message = new ChatMessage(chuckMessage, Date.now(), false);
            sendMessage(message, currentChat.id);
        }, 10000)

    }
    function handleKeyDown(event) {
        if (event.key === 'Enter') createMessage();
    }

    return (
        <div className="CurrentChat">
            <div className="EmptyChat">
                <p>Сhoose who you would like to write to</p>
            </div>
            {currentChat && (
                <div className="ChosenChat">
                    <div className="ChatHeader">
                        <div className="Avatar">
                            <img src={currentChat.avatar} alt=""/>
                        </div>
                        <p className="ContactName">{currentChat.name}</p>
                    </div>
                    <div className="MessageInputWrap">
                        <MessageList currentChat={currentChat}/>
                        <div className="MessageInputBlock">
                            <div className="MessageInputArea">
                                <input value={messageText} onChange={(event) => setMessageText(event.target.value)} onKeyDown={handleKeyDown} type="text" placeholder="Type your message" key={currentChat.id}/>
                                <button className="SendButton" onClick={createMessage}></button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default CurrentChat;