import Link from 'next/link'
import React from 'react'

const ChatHeader = () => {
    return (
        <div
            className='w-full h-16 absolute top-0 left-0 flex flex-row items-center justify-between px-4'
        >
            <div>
                <Link href={`/`}
                    className='text-blue-500 hover:text-blue-600 transition-colors'
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