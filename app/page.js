"use client"
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]"
    >
      This is home page
      <Button
        onClick={() => router.push('/dashboard')}
      >
        Go to Dashboard
      </Button>
    </div>
  );
}