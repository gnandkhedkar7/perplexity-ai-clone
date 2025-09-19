"use client";
import { Button } from "@/components/ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Compass, GalleryHorizontalEnd, LogIn, Search } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";

const MenuOptions = [
  {
    title: "Home",
    icon: Search,
    path: "/",
  },
  {
    title: "Discover",
    icon: Compass,
    path: "/discover",
  },
  {
    title: "Library",
    icon: GalleryHorizontalEnd,
    path: "/library",
  },
  {
    title: "Sign In",
    icon: LogIn,
    path: "#",
  },
];

function AppSidebar() {
  const path = usePathname();
  return (
    <Sidebar className="bg-accent">
      <SidebarHeader className="bg-accent flex items-center ">
        <Image src={"/logo.png"} width={180} height={100} />
      </SidebarHeader>
      <SidebarContent className="bg-accent">
        <SidebarGroup>
          <SidebarContent>
            <SidebarMenu>
              {MenuOptions.map((menu, index) => (
                <SidebarMenuItem key={index}>
                  <SidebarMenuButton
                    asChild
                    className={`px-5 py-5 hover: bg-transparent hover:font-bold
                                ${path?.includes(menu.path) && "font-bold"}
                                `}
                  >
                    <a href={menu.path}>
                      <menu.icon className="h-8 w-8" />
                      <span className="text-lg">{menu.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
            <Button className="rounded-full mx-4 mt-4">Sign Up</Button>
          </SidebarContent>
        </SidebarGroup>
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter className="bg-accent">
        <div className="p-3">
            <h2 className="text-gray-500">Try Now</h2>
<p className="text-gray-400">Upgrade for image upload, smarter AI & more copilot</p>
<Button variant={'secondary'} className="text-gray-500">Learn More</Button>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}

export default AppSidebar;
