import React from 'react'
import { ReactTyped } from "react-typed";
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import CharMessage from './CharMessage';
import analyze from './utils';
import { LiaCopyrightSolid } from "react-icons/lia";


const chatbot = () => {
    const [messages, setMessages] = useState([
        {
            message: 'Hi, May I Have Your Name Please?',
        }
    ]);
    const [text, setText] = useState('');
    const onSend = () => {
        let list = [...messages, { message: text, user: true }];
        if (list.length > 2) {
            const reply = analyze(text)
            list = [...list, {
                message: reply
            }];
        }
        else {
            list = [...list, {
                message: `Hi ,${text}`
            },
            {
                message: 'How Can I Help You?',
            }];
        }
        setMessages(list);
        setText('');
        setTimeout(() => {
            document.querySelector(`#copyright`).scrollIntoView();
        },1);
    }
    return (
        <>
            <div className="container-fluid">
                <div className="d-flex align-items-center justify-content-center">
                    <img src="https://img.freepik.com/free-vector/chatbot-chat-message-vectorart_78370-4104.jpg?t=st=1739785463~exp=1739789063~hmac=0705f36c68580fa42fbef261c076499f699920a918a4b3a18bb1d65ff710704a&w=740" alt="chatbotlogo" height={150} width={150} />
                    <h3 className='subtext'>{''}
                        <ReactTyped strings={["Welcome to ChatBot..."]} typeSpeed={200} />
                    </h3>
                </div>
            </div>
            <div className="chat-message">
                {
                    messages.length > 0 && messages.map((data) => <CharMessage  {...data} />)
                }
                <div className="container-fluid">
                    <div className='d-flex mt-3'>
                        <input type="text" className='form-control' value={text} onChange={(e) => setText(e.target.value)} />
                        <Button type='primary' className='ms-5' onClick={onSend}>Send</Button>
                    </div>
                    <div id='copyright' className='text-center mt-3'><LiaCopyrightSolid />copyrights reserved <a href="https://github.com/Mahesh-27kumar" className='primary'>Mahesh 2025</a></div>
                </div>
            </div>
        </>
    )
}


export default chatbot