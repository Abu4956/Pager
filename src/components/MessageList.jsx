import React, { useEffect, useState } from 'react'
import axios from 'axios';

const MessageList = () => {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        axios.get('https://pager-32041-default-rtdb.asia-southeast1.firebasedatabase.app/obaida.json')
        .then(response => {
            console.log(response.data);
            let messageList = [];
            for(let messageId in response.data){
                messageList.push(response.data[messageId])
            }
            messageList.reverse();
            let messageDisplay = messageList.slice(0, 5)
            setMessages(messageDisplay)
        })
    },  [])


  return (
    <div className="message-container">
        {messages.length > 0 && messages.map(message => {
            return(
                <div className="message-card">
                    <div className="user-name">{message.name}</div>
                    <div className="user-message">{message.message}</div>
                </div>
            )                                       
        })}
    </div>
  )
}

export default MessageList
