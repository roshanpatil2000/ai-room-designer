"use client"
import { Button } from '@/components/ui/button'
import { ModeToggle } from '@/components/ui/theme-toggle'
import { useAuth, UserButton } from '@clerk/nextjs'
import React from 'react'

function Dashboard() {


    return (
        <div className='flex justify-center gap-4 items-center h-screen'> 
            <UserButton />
            <ModeToggle />
        </div>
    )
}

export default Dashboard