import { Button } from '@/components/ui/button'
import { useUser } from '@clerk/nextjs'
import React, { useState } from 'react'
import EmptyState from './EmptyState'
import { useRouter } from 'next/navigation'

function Listing() {
    const { user } = useUser()
    const [userRoomList, setUserRoomList] = useState([])
    const router = useRouter()
    const handleCreateNew = () => {
        router.push('/dashboard/create-new')
    }
    return (
        <div>
            <div className='flex flex-row justify-between items-center'>
                <h2 className='font-bold text-3xl text-primary'>Hello, {user?.firstName}</h2>
                <Button variant="outline" className='bg-primary hover:text-green-300' onClick={handleCreateNew}>+ Redesign Room</Button>
            </div>


            {userRoomList.length == 0 ?
                <EmptyState />
                :
                <p>Listing items</p>
            }
        </div>
    )
}

export default Listing