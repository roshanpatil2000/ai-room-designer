import { Button } from '@/components/ui/button'
import React from 'react'


const pricings = [
    {
        credits: 5,
        price:1.99,
        total: "0.398/credit"
    },
    {
        credits: 10,
        price:2.99,
        total: "0.299/credit"
    },
    {
        credits: "25",
        price:6.25,
    },
    {
        credits: "50",
        price:11.99,
    },
    {
        credits: "100",  
        price:22.5,
    }
]
function AddCredits() {
    return (
        <div className='flex flex-col justify-center items-center mt-5'>
            AddCredits
            <div className='grid grid-cols-4 gap-4'>
                <div className='h-[100px] w-[100px] text-center shadow-lg hover:text-primary border border-secondary'>
                    Starup
                    <p>$5</p>
                    <Button variant="outline" className="hover:text-primary hover:border hover:border-primary">Select</Button>
                </div>

            </div>
        </div>
    )
}

export default AddCredits