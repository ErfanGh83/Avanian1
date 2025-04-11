import Image from 'next/image';
import React from 'react'

type Props = {
    age: number;
}

const AgePic = ({ age }: Props) => {
  const getImagePath = () => {
    if (age <= 7) return '/images/1to7.png';
    if (age <= 14) return '/images/8to14.png';
    if (age <= 25) return '/images/15to25.png';
    if (age <= 50) return '/images/26to50.png';
    if (age <= 80) return '/images/50to80.png';
    return '/images/80plus.png';
  };

  const getAltText = () => {
    if (age <= 7) return 'Age 1 to 7 illustration';
    if (age <= 14) return 'Age 8 to 14 illustration';
    if (age <= 25) return 'Age 15 to 25 illustration';
    if (age <= 50) return 'Age 26 to 50 illustration';
    if (age <= 80) return 'Age 50 to 80 illustration';
    return 'Age 80+ illustration';
  };

  return (
    <div className="relative size-fit rounded-full flex items-center justify-center bg-white border-[2px] border-black">
      <Image 
        src={getImagePath()}
        alt={getAltText()}
        width={80}
        height={100}
        className="object-contain"
        priority={false}
        quality={90}
      />
    </div>
  )
}

export default AgePic