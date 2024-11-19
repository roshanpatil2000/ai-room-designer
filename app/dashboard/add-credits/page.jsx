"use client"
import { Button } from '@/components/ui/button'
import React from 'react'


const pricings = [
    {
        "name": "Starter Pack",
        "credits": 10,
        "price_usd": 2.49
    },
    {
        "name": "Creative Bundle",
        "credits": 50,
        "price_usd": 9.99
    },
    {
        "name": "Pro Designer",
        "credits": 200,
        "price_usd": 34.99
    },
    {
        "name": "Unlimited Plan",
        "credits": "Unlimited",
        "price_usd": 99.99
    }
]
function AddCredits() {


    const handleBtnClicked = (pricing) => {
        console.log("Buy button clicked!!", pricing);
        
    }
    return (
        <div className="pt-10 px-10 md:px-20 lg:px-40 xl:px-60">
            <h1 className='font-bold text-2xl text-primary'>Buy More Credits</h1>
            <p>Unlock endless possibilities - Buy more credits and transform your room with AI magic! ✨🛋️</p>

            <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-10'>
                {pricings.map((pricing) => (
                    <div className="flex flex-col gap-2 justify-center items-center border shadow-md rounded-lg p-5" key={pricing.name}>
                        <p className='font-medium text-base text-justify'>
                            {pricing.name}
                        </p>
                        <h2 className="font-bold text-3xl">
                            {pricing.credits}
                        </h2>
                        <h2 className="font-medium text-xl">
                            Credits
                        </h2>
                        <Button variant="outline" className='bg-primary w-full hover:text-green-300' onClick={() => {handleBtnClicked(pricing)}}>
                            Select
                        </Button>
                        <h2 className="font-medium text-primary">
                            $ {pricing.price_usd}
                        </h2>
                    </div>
                ))}
            </div>
        </div>

    )
}

export default AddCredits