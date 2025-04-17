import MessageItem from '@/components/chat/MessageItem'
import React from 'react'

type Prop = {
    data: string[];
};

const ChatBox = ({ data }: Prop) => {

    console.log(data)
    return (
      <div className="w-full h-[calc(85vh-6rem)] p-4 flex flex-col gap-4 mt-[30px] md:mt-[20px] rounded-xl text-white bg-orange-500 overflow-y-auto">
        <MessageItem sender={"bot"}>hi</MessageItem>

        <MessageItem sender={"user"}>
          helloasdfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        </MessageItem>
        <MessageItem sender={"bot"}>hi</MessageItem>

        <MessageItem sender={"user"}>
          helloasdfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        </MessageItem>
        <MessageItem sender={"bot"}>hi</MessageItem>

        <MessageItem sender={"user"}>
          helloasdfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        </MessageItem>
        <MessageItem sender={"bot"}>hi</MessageItem>

        <MessageItem sender={"user"}>
          helloasdfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        </MessageItem>
        <MessageItem sender={"bot"}>hi</MessageItem>

        <MessageItem sender={"user"}>
          helloasdfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        </MessageItem>
        <MessageItem sender={"bot"}>hi</MessageItem>

        <MessageItem sender={"user"}>
          helloasdfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        </MessageItem>
        <MessageItem sender={"bot"}>hi</MessageItem>

        <MessageItem sender={"user"}>
          helloasdfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        </MessageItem>
        <MessageItem sender={"bot"}>hi</MessageItem>

        <MessageItem sender={"user"}>
          helloasdfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        </MessageItem>
        <MessageItem sender={"bot"}>hi</MessageItem>

        <MessageItem sender={"user"}>
          helloasdfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        </MessageItem>
        <MessageItem sender={"bot"}>hi</MessageItem>

        <MessageItem sender={"user"}>
          helloasdfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        </MessageItem>
        <MessageItem sender={"bot"}>hi</MessageItem>

        <MessageItem sender={"user"}>
          helloasdfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        </MessageItem>
      </div>
    );
}

export default ChatBox