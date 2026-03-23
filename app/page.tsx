"use client"

import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react";

export default function Page() {
  const roles = ["a Student.", "a Web Developer.", "an App Developer."];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [])

  return (
    <div 
      className="flex items-center justify-center min-h-svh p-5" 
      style={{ 
        background: 'url(/images/homebg.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Welcome,<br />my name is Justin Storm,</h1>
        <p id="typewriter" className="text-2xl font-semibold">
          I am{" "}
          <span className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent">{roles[index]}</span>
        </p>
        <Button asChild variant={'outline'}>
          <a href="/about">
            Explore
          </a>
        </Button>
      </div>
    </div>
  )
}
