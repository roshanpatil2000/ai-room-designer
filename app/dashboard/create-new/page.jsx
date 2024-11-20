"use client"
import React, { useState } from 'react'
import ImageSelection from './_components/ImageSelection'
import RoomType from './_components/RoomType';
import DesignType from './_components/DesignType';

import AdditionalReq from './_components/AdditionalReq';
import { Button } from '@/components/ui/button';
import axios from 'axios';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { storage } from '@/config/firebaseConfig';
import { useUser } from '@clerk/nextjs';

function CreateNew() {
    const {user} = useUser()
    const [formData, setFormData] = useState([]);
    const onHandleInputChange = (value, fieldName) => {
        setFormData(prev => ({
            ...prev,
            [fieldName]: value
        })
        )
        console.log(formData);

    }
    const genetateAiImage = async () => {
        const rawImageUrl = await saveRawImageToFirebase();
        const result = await axios.post('/api/redesign-room', {
            imageUrl: rawImageUrl,
            roomType: formData?.roomType,
            designType: formData?.designType,
            additionalReq: formData?.additionalReq, 
            usertEmail: user?.primaryEmailAddress?.emailAddress
        });
        // console.log(result);
    }

    const saveRawImageToFirebase = async () => {
        const fileName = Date.now() + "_raw.jpg";
        const imageRef = ref(storage, "ai-room-designer/"+fileName);

        await uploadBytes(imageRef, formData.image)
        .then(resp => {
            console.log("File Uploaded ....");
        })
        .catch(err => {
            console.log(err);
        })

        const downloadURL = await getDownloadURL(imageRef);
        console.log("downloadURL: ", downloadURL);
        
        return downloadURL
    }


    return (
        <div >
            <h2 className='font-bold text-4xl text-primary text-center'>Experience the Magic of AI Remodeling</h2>
            <p className='font-medium text-gray-400 text-center'>Transform any room with a click. Select a space, choose a style, and watch as AI instantly reimagines your environment.</p>


            <div className='grid grid-cols-1 md:grid-cols-2 gap-10 mt-10'>
                {/* image section */}
                <ImageSelection selectedImage={(Value) => onHandleInputChange(Value, 'image')} />

                {/* form */}
                <div className='flex flex-col'>
                    {/* room type*/}
                    <RoomType selectedRoomvalue={(Value) => onHandleInputChange(Value, 'roomType')} />
                    {/* design type*/}
                    <DesignType selectedDesignType={(Value) => onHandleInputChange(Value, 'designType')} />
                    {/* Additional design*/}
                    <AdditionalReq additionalRequirtementInput={(Value) => onHandleInputChange(Value, 'additionalReq')} />
                    {/* Btn to generate img */}
                    <Button variant="outline" className='mt-5 bg-primary hover:text-green-300' onClick={genetateAiImage}>Generate Image</Button>

                    <p className='text-sm text-gray-400 mt-3 mb-60'><span className='text-red-500 font-bold'>NOTE-</span> 1 credit is use to redesign your room</p>
                </div>

            </div>

        </div>
    )
}

export default CreateNew