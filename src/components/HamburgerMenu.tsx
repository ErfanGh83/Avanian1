import React, { Dispatch, ReactNode, SetStateAction, useEffect, useState } from 'react'
import Link from 'next/link'
import { FaTimes } from 'react-icons/fa'

type Props = {
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
    buttons: {
      icon: ReactNode;
      text: string;
      link: string;
    }[]
};

const HamburgerMenu = ({ isOpen, setIsOpen, buttons }: Props) => {
    const [visible, setVisible] = useState(false);
    const [animateClass, setAnimateClass] = useState('translate-x-full');

    useEffect(() => {
        if (isOpen) {
            setVisible(true);
            setAnimateClass('translate-x-full');
            setTimeout(() => {
                setAnimateClass('translate-x-0');
            }, 20);
        } else {
            setAnimateClass('translate-x-full');
            const timeout = setTimeout(() => setVisible(false), 300);
            return () => clearTimeout(timeout);
        }
    }, [isOpen]);

    return (
        <>
            {visible && (
                <div
                    className={`
                        fixed z-40 top-0 left-0 w-screen h-screen bg-black/90 text-white
                        transition-transform duration-300 ease-in-out
                        ${animateClass}
                    `}
                >
                    <button
                        className='absolute top-5 right-5 text-white text-4xl hover:text-blue-300 transition-all'
                        onClick={() => setIsOpen(false)}
                    >
                        <FaTimes />
                    </button>

                    <nav className='h-full w-full flex flex-col justify-center items-center gap-8'>
                        {buttons.map(({ icon, text, link }, index) => (
                            <Link
                                href={link}
                                key={index}
                                onClick={() => setIsOpen(false)}
                                className='flex items-center gap-3 text-2xl hover:text-blue-300 transition-all'
                            >
                                {icon}
                                <span>{text}</span>
                            </Link>
                        ))}
                    </nav>
                </div>
            )}
        </>
    );
};

export default HamburgerMenu;
