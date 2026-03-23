"use client";

import { Button } from "@/components/ui/button";
import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogPortal, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { GraduationCapIcon, SquareArrowOutUpRightIcon } from "lucide-react";

export default function Page() {
    
    const data = [
        {
            name: "Freehold Township High School",
            description: "I am a senior at Freehold Township High School in Freehold New Jersey. I am currently enrolled in the Web Design Pathway Program (WDPP) where we build beautiful and interactive websites using many languages such as HTML, CSS, and JavaScript.",
            location: "Freehold, NJ",
            image: "/images/fthslogo.png",
            url: "https://freeholdtwp.frhsd.com/"
        },
        {
            name: "New Jersey Institute of Technology",
            description: "Pursuing a B.S. in Computer Science with a concentration in Cyber Security at New Jersey Institute of Technology (NJIT).",
            location: "Newark, NJ",
            image: "/images/njitlogo.png",
            url: "https://www.njit.edu/",
        }
    ]

    return (
        <div className="min-h-svh p-5 pt-[90] space-y-15">

            <div className="flex items-center gap-4 max-w-5xl mx-auto">
                <Separator className="flex-1" />
                <h1 className="font-bold text-4xl bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent w-fit">Education</h1>
                <Separator className="flex-1" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 max-w-5xl mx-auto">
                {data.map((item, index) => (
                    <Card key={index}>
                        <img 
                            src={item.image}
                            alt={item.name}
                            style={{
                                maxHeight: '200px',
                                objectFit: 'contain',
                                padding: 10
                            }}
                        />
                        <CardHeader>
                            <CardTitle>{item.name}</CardTitle>
                        </CardHeader>
                        <CardFooter className="gap-1">
                            <Dialog>
                                <DialogTrigger asChild>
                                    <Button>
                                        <GraduationCapIcon />
                                        Learn more
                                    </Button>
                                </DialogTrigger>
                                <DialogContent>
                                    <DialogHeader>
                                        <DialogTitle>{item.name}</DialogTitle>
                                        <DialogDescription>{item.description}</DialogDescription>
                                        <DialogDescription>{item.location}</DialogDescription>
                                    </DialogHeader>
                                    <DialogFooter>
                                        <DialogClose asChild>
                                            <Button variant={'outline'}>Close</Button>
                                        </DialogClose>
                                        <Button asChild>
                                            <a href={item.url} target="_blank">
                                                <SquareArrowOutUpRightIcon />
                                                Visit Site
                                            </a>
                                        </Button>
                                    </DialogFooter>
                                </DialogContent>
                            </Dialog>
                            <Button asChild variant={'outline'}>
                                <a href={item.url} target="_blank">
                                    <SquareArrowOutUpRightIcon />
                                    Visit Site
                                </a>
                            </Button>
                        </CardFooter>
                    </Card>
                ))}

            </div>

        </div>
    )
}