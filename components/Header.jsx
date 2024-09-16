import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import { Download } from 'lucide-react';

const Header = ({ DownloadIcon }) => {
    return (
        <div className=' flex justify-between p-4 shadow-sm border items-center '>
            {/* <h1 className='text-4xl font-bold'>SpeedXLogo</h1> */}
            <span className=' inline-flex animate-text-gradient bg-gradient-to-r from-[#b2a8fd] via-[#8678f9] to-[#c7d2fe] bg-[200%_auto] bg-clip-text text-3xl font-extrabold text-transparent'>
                SpeedXLogo
            </span>
            <Button className="flex gap-2 items-center" onClick={() => DownloadIcon(Date.now())}>
                <Download className='h-4 w-4' />Downlaod
            </Button>
        </div>
    )
}

export default Header