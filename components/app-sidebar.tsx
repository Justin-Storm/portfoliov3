"use client";

import { usePathname } from "next/navigation";
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuSub, SidebarMenuSubButton } from "./ui/sidebar";
import { BadgeQuestionMarkIcon, BrainIcon, FolderArchiveIcon, FolderIcon, FoldersIcon, GraduationCap, GraduationCapIcon, HeartIcon, HomeIcon, LightbulbIcon, PlusIcon, ShieldQuestionMarkIcon, UserCircle2Icon } from "lucide-react";

export default function AppSidebar() {
    const pathname = usePathname();

    const pages = [
        {
            icon: HomeIcon,
            name: "Home",
            href: "/",
        },
        {
            icon: BadgeQuestionMarkIcon,
            name: "About",
            href: "/about"
        },
        {
            icon: GraduationCapIcon,
            name: "Education",
            href: "/education"
        },
        {
            icon: LightbulbIcon,
            name: "Interests",
            href: "/interests",
        },
        {
            icon: FoldersIcon,
            name: "Projects",
            href: "/projects",
        },
        {
            icon: UserCircle2Icon,
            name: "Contact",
            href: "/contact"
        }
    ]

    return (
        <Sidebar collapsible="icon">
            <SidebarHeader className="border-b">
                <SidebarMenu>
                    <SidebarMenuButton asChild size={'lg'}>
                        <a href="/">
                            <img 
                                src={'/images/jroxlogo.jpg'}
                                alt="logo"
                                className="h-full aspect-square rounded-lg" 
                            />
                            <div className="grid grid-cols-1">
                                <h1 className="font-semibold truncate">Justin Storm</h1>
                                <span className="truncate">Portfolio</span>
                            </div>
                        </a>
                    </SidebarMenuButton>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Pages</SidebarGroupLabel>
                    <SidebarMenu>
                        {pages.map((page, index) => (
                            <SidebarMenuButton 
                                tooltip={page.name}
                                size={'lg'}
                                key={index}
                                asChild
                            >
                                <a href={page.href}>
                                    <div className="h-full aspect-square flex items-center justify-center rounded-lg">
                                        <page.icon />
                                    </div>
                                    <span>{page.name}</span>
                                    {pathname === page.href && (
                                        <div className="w-2 h-2 rounded-full bg-sidebar-primary ms-auto" />
                                    )}
                                </a>
                            </SidebarMenuButton>
                        ))}
                    </SidebarMenu>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    )
}