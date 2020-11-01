import fromTimestampToDate from "../../../utils/fromTimestampToDate"

function CurrentChatMessage({currentChat, message}) {
    return (
        <div className={`CurrentChatMessage ${message.isYours ? "YourMessage" : "SenderMessage"}`}>
            <div className="Avatar">
                <img src={currentChat.avatar} alt=""/>
            </div>
            <div className="MessageContent">
                <p>{message.text}<span>{fromTimestampToDate(message.date)}</span></p>
                
            </div>

        </div>
    )
}
export default CurrentChatMessage;
