"use client"
import Image from 'next/image'
import React, { useState } from 'react'

function ImageSelection({selectedImage}) {

    const [file, setFile] = useState();
    const onFileSelected = (event) => {
        console.log(event.target.files[0]);
        setFile(event.target.files[0])
        selectedImage(event.target.files[0])
    }

    return (
        <div>
            <label >Select Image of your Room</label>
            <div className='mt-3'>
                <label htmlFor='upload-image'>
                    <div className={`p-28 border rounded-xl border-dotted flex justify-center items-center border-primary bg-slate-100 dark:bg-slate-800 cursor-pointer hover:shadow-2xl ${file && 'p-0 bg-white' }`}>
                        {!file ?
                            <Image src="/imageUpload.png" alt='image upload' width={100} height={100} />

                            :
                            <img src={URL.createObjectURL(file)} width={300} height={300} className='w-[300px] h-[300px] object-cover' />
                        }
                    </div>
                </label>
                <input
                    type='file'
                    accept='image/*'
                    id='upload-image'
                    style={{ display: 'none' }}
                    onChange={onFileSelected}
                />
            </div>
        </div>
    )
}

export default ImageSelection