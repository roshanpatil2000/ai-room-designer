import { db } from "@/config/db";
import { storage } from "@/config/firebaseConfig";
import { AiGeneratedAi } from "@/config/schema";
import { useAuth } from "@clerk/nextjs";
import axios from "axios";
import { or } from "drizzle-orm";
import { getDownloadURL, ref, uploadBytes, uploadString } from "firebase/storage";
import { NextResponse } from "next/server";
import Replicate from "replicate";

const replicate = new Replicate({
    auth: process.env.NEXT_PUBLIC_REPLICATE_API_TOKEN
});

export async function POST(req) {

    // const user = useAuth()
    const { imageUrl, roomType, designType, additionalReq,usertEmail } = await req.json();

    try {
        const input = {
            image: imageUrl,
            prompt: `{A ${roomType} with a ${designType} style interior. ${additionalReq}}`
        };

        // const output = await replicate.run("adirik/interior-design:76604baddc85b1b4616e1c6475eca080da339c8875bd4996705440484a6eac38", { input });
        // console.log("output: ", output);
        // return NextResponse.json({ "result": output })

        const output = 'https://replicate.delivery/pbxt/nG98uNdxrLb4F9VhXlNi1CUsOToGwech2aeRrfPgxteeObXeE/out.png'
        const base64Image = await convertImageToBase64(output);
        const fileName = Date.now() + ".png";
        const storageRef = ref(storage, "ai-room-designer/" + fileName);
        await uploadString(storageRef, base64Image, "data_url")
        const downloadURL = await getDownloadURL(storageRef);
        console.log("downloadURL AI Generated: ", downloadURL);

        // return NextResponse.json({ "result": downloadURL })

        const dbResult = await db.insert(AiGeneratedAi).values({
            roomType: roomType,
            designType: designType,
            orgImage: imageUrl,
            aiimage: downloadURL,
            userEmail: usertEmail
        }).returning({ id: AiGeneratedAi.id })
        console.log(dbResult);

        return NextResponse.json({ "result": dbResult[0] })

    } catch (e) {
        return NextResponse.json({ error: e })
    }
    async function convertImageToBase64(imageUrl) {
        const resp = await axios.get(imageUrl, { responseType: 'arraybuffer' });
        const base64ImageRaw = Buffer.from(resp.data).toString('base64');

        return "data:image/png;base64," + base64ImageRaw;
    }



    // return NextResponse.json({ "result": "success" })
}