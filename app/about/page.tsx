import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Item, ItemActions, ItemContent, ItemHeader, ItemMedia, ItemTitle } from "@/components/ui/item";
import { Separator } from "@/components/ui/separator";
import { GlobeIcon, Share, ShareIcon, SquareArrowOutUpRightIcon, SquareArrowUpRightIcon } from 'lucide-react';
import { CSSProperties } from "react";

export default function About() {

    const data = {
        overview: [
            "Hi, I’m Justin Storm, a student and aspiring software developer with two years of experience building both web and mobile applications. My projects range from responsive websites to full-stack mobile apps built with React, React Native, Appwrite, Convex, and many more.",
            "Alongside my development work, I've also spent the past two years working at McDonald's, where I've built strong teamwork, communication, and time-management skills in a fast-paced environment. This experience has taught me how to stay organized, work efficiently under pressure, and collaborate effectively with others",
            "I enjoy creating user-friendly, visually appealing, and functional applications that solve real problems. Over the past two years, I’ve consistently updated my portfolio with new projects, each one pushing my skills further.",
            "I’m excited to continue developing my expertise in computer science, whether that’s through contributing to professional projects, collaborating with clients, or pursuing my studies in college.",
        ],
        skills: [
            { 
                name: "Frontend",
                color: "#3B82F6",
                items: [

                    {
                        name: "React",
                        image: '/images/reactlogo.png',
                        url: "https://react.dev/",
                    },
                    {
                        name: "React Native",
                        image: '/images/reactlogo.png',
                        url: 'https://reactnative.dev/'
                    },
                    {
                        name: "HTML",
                        image: '/images/htmllogo.png',
                        url: 'https://www.w3schools.com/html/',
                    },
                    {
                        name: "CSS",
                        image: "/images/csslogo.png",
                        url: 'https://www.w3schools.com/css/'

                    },
                    {
                        name: "JS",
                        image: "/images/jslogo.png",
                        url: 'https://www.w3schools.com/js/'
                    }
                ]
            },
            {
                name: "Backend",
                color: "#7C3AED",
                items: [
                    {
                        name: "Convex",
                        image: "/images/convexlogo.png",
                        url: "https://www.convex.dev/"
                    },
                    {
                        name: "Appwrite",
                        image: "/images/appwritelogo.png",
                        url: "https://appwrite.io/"
                    },
                    {
                        name: "Java",
                        image: "/images/javalogo.png",
                        url: "https://www.java.com/"
                    },
                    {
                        name: "Python",
                        image: "/images/pythonlogo.png",
                        url: "https://www.python.org/"
                    }
                ]
            }
        ],
    }

    return (
        <div className="min-h-svh p-5 pt-[90] space-y-15">
            
            <div className="flex items-center gap-4 max-w-5xl mx-auto">
                <Separator className="flex-1" />
                <h1 className="font-bold text-4xl bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent w-fit">About Me</h1>
                <Separator className="flex-1" />
            </div>

            <div className="max-w-5xl mx-auto">
                <div className="flex items-center gap-2">
                    <h3 className="text-2xl mb-2 font-semibold">Overview</h3>
                    <Separator className="flex-1" />
                </div>
                <p>Hi, I’m Justin Storm, a student and aspiring software developer with two years of experience building both web and mobile applications. My projects range from responsive websites to full-stack mobile apps built with React, React Native, Appwrite, Convex, and many more.</p>
                <br />
                <p>Alongside my development work, I've also spent the past two years working at McDonald's, where I've built strong teamwork, communication, and time-management skills in a fast-paced environment. This experience has taught me how to stay organized, work efficiently under pressure, and collaborate effectively with others.</p>
                <br />
                <p>I enjoy creating user-friendly, visually appealing, and functional applications that solve real problems. Over the past two years, I’ve consistently updated my portfolio with new projects, each one pushing my skills further.</p>
                <br />
                <p>I’m excited to continue developing my expertise in computer science, whether that’s through contributing to professional projects, collaborating with clients, or pursuing my studies in college.</p>
            </div>

            <div className="mx-auto max-w-5xl">
                <div className="flex items-center gap-2">
                    <h3 className="text-2xl mb-2 font-semibold">Skills</h3>
                    <Separator className="flex-1" />
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    {data.skills.map((skill, index) => (
                        <div 
                            className="p-4 rounded-xl border bg-[var(--skill-color)]/7 border-[var(--skill-color)]/35" 
                            style={{ "--skill-color": `${skill.color}` } as CSSProperties } 
                            key={index}
                        >
                            <h4 className="text-lg font-semibold mb-4">{skill.name}</h4>
                            <div className="grid grid-cols-1 gap-4">
                                {skill.items.map((item, itemIndex) => (
                                    <div 
                                        key={itemIndex} 
                                        className="bg-[var(--skill-color)]/10 hover:bg-[var(--skill-color)]/20 border border-[var(--skill-color)]/50 hover:border-[var(--skill-color)]/75 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[var(--skill-color)]/20 rounded-xl"
                                        style={{ "--skill-color": `${skill.color}` } as CSSProperties } 
                                    >
                                        <a href={item.url} target="_blank">
                                            <div className="flex items-center gap-4 p-4">
                                                <img 
                                                    src={item.image}
                                                    style={{
                                                        height: '22px',
                                                        aspectRatio: 1
                                                    }}
                                                />
                                                <p>{item.name}</p>
                                                <Button className="ms-auto" size={'icon'} variant={'ghost'}>
                                                    <SquareArrowOutUpRightIcon />
                                                </Button>
                                            </div>
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}