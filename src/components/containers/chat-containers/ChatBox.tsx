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
                helooo alsd;ifkj a;lkdsjf 'pakjdsf 'paojsdf p;i;ajdfikjasdlkfja 'lka jdlskfjalksjdf'asdf assdsf asdfasdfadsfdaafsdafsfafaafdffdfds
                helooo alsd;ifkj a;lkdsjf 'pakjdsf 'paojsdf p;i;ajdfikjasdlkfja 'lka jdlskfjalksjdf'asdf assdsf asdfasdfadsfdaafsdafsfafaafdffdfdshelooo alsd;ifkj a;lkdsjf 'pakjdsf 'paojsdf p;i;ajdfikjasdlkfja 'lka jdlskfjalksjdf'asdf assdsf asdfasdfadsfdaafsdafsfafaafdffdfdshelooo alsd;ifkj a;lkdsjf 'pakjdsf 'paojsdf p;i;ajdfikjasdlkfja 'lka jdlskfjalksjdf'asdf assdsf asdfasdfadsfdaafsdafsfafaafdffdfdshelooo alsd;ifkj a;lkdsjf 'pakjdsf 'paojsdf p;i;ajdfikjasdlkfja 'lka jdlskfjalksjdf'asdf assdsf asdfasdfadsfdaafsdafsfafaafdffdfds
            </MessageItem>

        </div>
    )
}

export default ChatBox