import React, { useState } from 'react'
import { postMessage } from '../ajax-requests';


const Message = ({ token }) => {
    const [message, setMessage] = useState('')
  

    const handleMessage = async (event) => {
        event.preventDefault();
        postMessage()
       
            setMessage('');
            alert("Message Sent!")
            navigate("/Posts");
       
    }



    
    const handleChange = async (event) => {
        await setMessage(event.target.value);
    }



    return (
        <div className="sendAMessage">
            <form onSubmit={handleMessage}>
                <div className="messageCreate">
                    <label className="message" htmlFor="message">Message:</label>
                    <input className="messageContent"
                        type="text"
                        name="message"
                        value={message}
                        onChange={handleChange}
                    />
                </div>
                <button className="sendMessageButton" type="submit">Send Message!</button>
                
            </form>
        </div>
    )
};


;

export default Message;