import ChatHeader from '@/components/headers/chat-layout-header/ChatHeader'
import React, { ReactElement } from 'react'

type Props = {
    children: ReactElement
}

const ChatLayout = ({ children }: Props) => {
  return (
    <div
        className='size-full overflow-hidden'
    >
        <header
            className='w-full absolute'
        >
            <ChatHeader />
        </header>

        <main
            className='size-full'
        >
            {children}
        </main>

        <footer>

        </footer>
    </div>
  )
}

export default ChatLayout