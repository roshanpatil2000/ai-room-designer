import Image from 'next/image'
import React, { useState } from 'react'

function DesignType({ selectedDesignType }) {

    const [selectedDesign, setSelectedDesign] = useState([])

    const designs = [
        {
            name: "Modern",
            image: "/modern.webp"
        }, {
            name: "Industrial",
            image: "/industrial.webp"
        },
        {
            name: "Bohemian",
            image: "/bohemian.webp"
        }, {
            name: "Traditional",
            image: "/traditional.webp"
        }, {
            name: "Rustic",
            image: "/rustic.webp"
        }, {
            name: "Minimalist",
            image: "/minimalist.webp"
        },
    ]
    return (
        <div className='mt-5'>
            <label className='text-slate-600'>Select Interior Design Type*</label>
            <div className='grid grid-cols-2 mt-3 md:grid-cols-3 lg:grid-cols-4 gap-5'>

                {designs.map((design, index) => (
                    <div
                        key={index}
                        onClick={() => {
                            setSelectedDesign(design.name);
                            selectedDesignType(design.name);
                        }
                        }
                    >
                        <Image src={design.image} alt="design type" width={100} height={100} className={`h-[70px]  rounded-md hover:scale-110 transition-all cursor-pointer ${selectedDesign === design.name && 'border-2 border-primary p-1'}`} />
                        <h2 className='text-center'> {design.name}</h2>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default DesignType