"use client"
import { UserDetailContext } from '@/app/_context/userDetailContext'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'
import { ModeToggle } from '@/components/ui/theme-toggle'
import { UserButton } from '@clerk/nextjs'
import { LucideShoppingBag, ShoppingBag, ShoppingBagIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useContext, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'


function Navbar() {
    const router = useRouter()

    const { userDetail, setUserDetail } = useContext(UserDetailContext);
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 1000)
    }, [userDetail])


    const handleNavigation = () => {
        router.push('/dashboard/add-credits')
    }

    return (
        <div className='flex flex-row p-5 shadow-xl justify-between items-center '>
            <div className='flex flex-row gap-2 items-center hover:text-primary'>
                <Link href="/dashboard" className='flex flex-row gap-2 items-center hover:text-primary'>
                    <Image src="/placeholder.webp" alt="Vercel Logo" width={45} height={45} className='rounded-full' />
                    <p className='font-bold text-xl'>AI Room Designer</p>
                </Link>
            </div>
            
                <Button variant="outline" className='bg-primary hover:text-green-300' onClick={handleNavigation}>
                    Buy More Credits <ShoppingBagIcon className="h-4 w-4 hover:text-green-300" />
                </Button>
            
            <div className='flex flex-row gap-5 items-center' >
                <div className='flex gap-2 px-2 items-center justify-center border border-primary rounded-full text-primary'>
                    <Image src={"/star.png"} width={18} height={18} alt='credit remains' />
                    {userDetail?.credits ? userDetail?.credits : 0}
                </div>

                {loading ?
                    <Skeleton className="w-[28px] h-[28px] rounded-full" />
                    : <UserButton />
                }
                {/* <UserButton /> */}
                <ModeToggle />
            </div>
        </div>
    )
}

export default Navbar