"use client"

import { Image, MessageCircle, PencilRuler } from 'lucide-react'
import React, { useState } from 'react'

const SideNav = ({ selectedIndex }) => {
    const menuList = [
        {
            id: 1,
            name: 'Icon',
            icon: PencilRuler
        },
        {
            id: 2,
            name: 'Background',
            icon: Image
        },
        {
            id: 3,
            name: 'Contact Me',
            icon: MessageCircle
        },
    ]
    const [activeIndex, setActiveIndex] = useState(0)
    return (
        <div className='border shadow-sm h-screen'>
            <div>
                {menuList.map((menu, index) => (
                    <h2
                        onClick={() => { setActiveIndex(index); selectedIndex(index) }}
                        key={index}
                        className={`flex items-center gap-2 p-3 text-lg px-7 text-gray-400 my-2 cursor-pointer hover:bg-primary hover:text-white
                      ${activeIndex == index && 'bg-primary text-white'}`}
                    >
                        <menu.icon />
                        {menu.name}
                    </h2>
                ))}
            </div>
        </div >
    )
}

export default SideNav