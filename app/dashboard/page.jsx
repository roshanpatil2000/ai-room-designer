"use client"
import { Button } from '@/components/ui/button'
import { ModeToggle } from '@/components/ui/theme-toggle'
import { useAuth, UserButton } from '@clerk/nextjs'
import React, { useContext, useEffect, useState } from 'react'
import Navbar from './_components/Navbar'
import { UserDetailContext } from '../_context/userDetailContext'
import { Skeleton } from '@/components/ui/skeleton'
import Image from 'next/image'
import { useRouter } from 'next/navigation';

function Dashboard() {
    const router = useRouter()
    const [loading, setLoading] = useState(true)

    const { userDetail, setUserDetail } = useContext(UserDetailContext);
    useEffect(() => {
        if (userDetail) {
            setTimeout(() => {
                setLoading(false)
            }, 1000)
        }

    }, [userDetail])



    const handleCreateDesign = () => {
        router.push('/dashboard/create-design')
    }
    return (
        <div>
            {(loading || userDetail.name == null || userDetail.name == undefined) ?
                <div>
                    <div className='flex flex-row justify-between align-center   mt-12 p-10 '>
                        <Skeleton className="h-[2.5rem] w-[250px]" />
                        <Skeleton className="h-[36px] w-[138.1px]" />
                    </div>
                    <div className='flex flex-row justify-center align-center  mt-5 '>
                        <Skeleton className="h-[150px] w-[150px]" />
                    </div>
                </div>
                :
                <div>
                    <div className='flex flex-row justify-between align-center   mt-12 p-10 '>
                        <h1 className='text-4xl'> {`Hello, ${userDetail.name}`}</h1>
                        <Button variant="outline" className='bg-primary hover:text-green-300' onClick={handleCreateDesign}> + Redesign Room</Button>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <Image src="/placeholder.webp" alt="empty list" width={150} height={150} />
                        <p>Nothing to show </p>
                        <p >Create New Iterial Design for your room </p>
                        <Button variant="outline" className='mt-5 bg-primary hover:text-green-300' onClick={handleCreateDesign}>+ Redign Room </Button>
                    </div>
                </div>
            }
        </div>
    )
}

export default Dashboard