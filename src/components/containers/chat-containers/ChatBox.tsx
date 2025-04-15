import MessageItem from '@/components/chat/MessageItem'
import React from 'react'

const ChatBox = () => {
    return (
        <div
            className='w-full h-full my-8 p-4 flex flex-col gap-4 rounded-3xl text-white bg-green-700 overflow-y-auto'
        >

            <MessageItem sender={'bot'}>
                hi
            </MessageItem>

            <MessageItem sender={'user'}>
                hello
            </MessageItem>

        </div>
    )
}

export default ChatBox