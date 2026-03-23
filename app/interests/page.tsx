"use client";

import { Button } from "@/components/ui/button";
import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { GraduationCapIcon, LightbulbIcon, SquareArrowOutUpRightIcon } from "lucide-react";

export default function Page() {

    const data = [
        {
            name: "React Native Expo",
            description: "I like to develop mobile applications using React Native + Expo. With these I can develope apps that support both iOS and Android while only using one framework.",
            image: "/images/rnexpologo.png",
            url: "https://www.reactnative.dev/"
        },
        {
            name: "React",
            description: "I like to develop web applications using Next.js. A open-source, full stack React framework that provided a comprehensive set of tools and features for building fast, scalable web applications.",
            image: "/images/reactlogo.png",
            url: "https://www.react.dev/",
        }
    ]

    return (
        <div className="min-h-svh p-5 pt-[90] space-y-15">

            <div className="flex items-center gap-4 max-w-5xl mx-auto">
                <Separator className="flex-1" />
                <h1 className="font-bold text-4xl bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent w-fit">Interests</h1>
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
                                        <LightbulbIcon />
                                        Learn more
                                    </Button>
                                </DialogTrigger>
                                <DialogContent>
                                    <DialogHeader>
                                        <DialogTitle>{item.name}</DialogTitle>
                                        <DialogDescription>{item.description}</DialogDescription>
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