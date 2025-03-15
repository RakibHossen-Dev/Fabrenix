"use client";

import { NavMain } from "@/components/nav-main";
import { TeamSwitcher } from "@/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import {
  SquareTerminal,
  Plus,
  BookOpen,
  CircleUser,
  PackageSearch,
  Settings2,
  GalleryVerticalEnd,
  SquareKanban,
} from "lucide-react";

const data = {
  teams: [{ name: "Fabrenix", logo: GalleryVerticalEnd, plan: "Enterprise" }],
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard/adminDashboard",
      icon: SquareTerminal,
    },
    { title: "Add Product", url: "/dashboard/addProduct", icon: Plus },
    {
      title: "Manage Product",
      url: "/dashboard/manageProduct",
      icon: PackageSearch,
    },
    { title: "Orders", url: "/dashboard/order", icon: SquareKanban },
    { title: "Profile", url: "#", icon: CircleUser },
  ],
};

export function AppSidebar(props) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
