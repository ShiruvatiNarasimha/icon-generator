import React, { useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { icons, Smile } from 'lucide-react'
import { iconList } from '@/constants/icons'


const IconList = ({ selectedIcon }) => {
    const [openDialog, setOpenDialog] = useState(false)
    // Safely parse localStorage value
    const getStorageValue = () => {
        const storedValue = localStorage.getItem('value');
        try {
            return storedValue ? JSON.parse(storedValue) : {};
        } catch (error) {
            console.error("Error parsing localStorage value:", error);
            return {};
        }
    }

    const storageValue = getStorageValue();
    const [icon, setIcon] = useState(storageValue ? storageValue?.icon : "Smile")

    const Icon = ({ name, color, size, rotate }) => {
        const LucidIcon = icons[name];
        if (!LucidIcon) {
            return;
        }
        return <LucidIcon color={color} size={size} />
    }

    return (
        <div>
            <label>Icon</label>
            <div
                onClick={() => setOpenDialog(true)}
                className='p-3 cursor-pointer my-2 bg-gray-200  rounded-md w-[50px] h-[50px] flex items-center justify-center '>
                <Icon name={icon} color={'#000'} size={20} />

            </div>
            <Dialog open={openDialog}>

                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Pick your Favourite Icon✨</DialogTitle>
                        <DialogDescription>
                            <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 overflow-auto h-[400px] p-6'>
                                {iconList.map((icon, index) => (
                                    <div className='border p-3 flex rounded-sm items-center justify-center cursor-pointer' key={index}
                                        onClick={() => { selectedIcon(icon); setOpenDialog(false); setIcon(icon) }}
                                    >
                                        <Icon name={icon} color={'#000'} size={20} />
                                    </div>
                                ))}
                            </div>
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>

        </div>
    )
}

export default IconList