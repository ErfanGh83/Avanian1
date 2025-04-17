import Link from 'next/link'
import React from 'react'

const ChatHeader = () => {
    return (
        <div
            className='w-full h-16 absolute top-0 left-0 flex flex-row-reverse items-center justify-between px-2'
        >
            <div>
                <Link href={`/`}
                    className='text-white bg-blue-500 hover:bg-blue-600 p-2 transition-colors rounded-2xl flex items-center justify-center'
                >
                    <p>بازگشت به خانه</p>
                </Link>
            </div>

            <div>
                {/* <p>right side of the header</p>*/}
            </div>
        </div>
    )
}

export default ChatHeader