"use client";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { useSession } from "next-auth/react";

const DashboardNav = () => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <header className="flex justify-between h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12 border border-b bg-gray-50">
        <div className="flex items-center gap-2 px-4">
          <SidebarTrigger className="-ml-1" />
        </div>
        {session ? (
          <div className="flex items-center gap-3">
            <img
              className="w-12 h-12 rounded-full border"
              src={session.user?.image || "https://i.ibb.co/r2p6Nyh/image.png"}
              alt="profile"
            />
            <div>
              <p className="text-md mr-5">{session.user?.name || "User"}</p>
              <p className="text-sm mr-5">Admin</p>
            </div>
          </div>
        ) : (
          <p className="text-md mr-5">Not Signed In</p>
        )}
      </header>
    </div>
  );
};

export default DashboardNav;
