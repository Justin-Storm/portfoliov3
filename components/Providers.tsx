"use client";

import React from 'react';
import { SidebarInset, SidebarProvider, SidebarTrigger } from './ui/sidebar';
import { TooltipProvider } from './ui/tooltip';
import AppSidebar from './app-sidebar';
import { BadgeQuestionMarkIcon, FoldersIcon, GraduationCapIcon, HomeIcon, LightbulbIcon, LucideIcon, UserCircleIcon } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { Separator } from './ui/separator';
import { ConvexProvider, ConvexReactClient } from 'convex/react';

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

export default function Providers({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    const handlePathName = () => {
        let path: String = "Home";
        let icon: LucideIcon = HomeIcon;

        if (pathname !== '/') {
            const current = pathname.slice(1);
            
            path = pathname.charAt(1).toUpperCase() + pathname.slice(2);

            switch (current) {
                case "about":
                    icon = BadgeQuestionMarkIcon;
                    break;
                case "education":
                    icon = GraduationCapIcon;
                    break;
                case "interests":
                    icon = LightbulbIcon;
                    break;
                case "projects":
                    icon = FoldersIcon;
                    break;
                case "contact":
                    icon = UserCircleIcon;
                    break;
            }
        }
        return { path, icon };
    }

    const { path, icon: Icon } = handlePathName();

    return (
        <ConvexProvider client={convex}>
            <TooltipProvider>
                <SidebarProvider>
                    <AppSidebar />
                    <SidebarInset>
                        <header className='backdrop-blur-sm bg-white/20 dark:bg-black/20 absolute top-0 left-0 w-full p-5 flex items-center border-b'>
                            <SidebarTrigger />
                            {/* <Separator orientation='vertical' className='ms-1 me-2' /> */}
                            <Icon className='ms-auto me-2' />
                            <p className='font-semibold'>{handlePathName().path}</p>
                        </header>
                        {children}
                    </SidebarInset>
                </SidebarProvider>
            </TooltipProvider>
        </ConvexProvider>
    )
}