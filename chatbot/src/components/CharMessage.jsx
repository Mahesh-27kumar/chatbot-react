import React from 'react'
import { IoPersonSharp } from "react-icons/io5";
import { SiChatbot } from "react-icons/si";

function CharMessage(props) {
  return (
    <>
    <div className={`d-flex ${props.user && `justify-content-end`}`}>
        
        {
            props.user ?(
                <span className='message-right'>
                  <span className='msg-txt'> {props.message}</span>
                  <IoPersonSharp className='msg-icon'/>
                </span>
            ): <span className='message-left'>
                <SiChatbot className='msg-icon' />
                <span className='msg-txt'>{props.message}</span>
            </span>
}   
    </div>
    </>
  )
}

export default CharMessage