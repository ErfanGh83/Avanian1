import MessageItem from '@/components/chat/MessageItem'
import React from 'react'

type Prop = {
    data: string[];
};

const ChatBox = ({ data }: Prop) => {

    console.log(data)
    return (
        <div
            className='w-full h-full my-8 p-4 flex flex-col gap-4 rounded-3xl text-white bg-orange-500 overflow-y-auto'
        >

            <MessageItem sender={'bot'}>
                hi
            </MessageItem>

            <MessageItem sender={'user'}>
                helloasdfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            </MessageItem>

        </div>
    )
}

export default ChatBox