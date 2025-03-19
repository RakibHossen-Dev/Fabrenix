import { AppSidebar } from "@/components/app-sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"

const layout = ({children}) => {
    return (
        <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header
          className="flex justify-between h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12 border border-b bg-gray-50">
          <div className="flex  items-center gap-2 px-4 ">
            <SidebarTrigger className="-ml-1" />
          </div>
           <p className="text-lg  mr-5">Rakib Hossen</p>
        </header>
        <main className="bg-gray-100 w-full h-full">{children}</main>

      </SidebarInset>
    </SidebarProvider>
    );
};

export default layout;

// className="fixed top-0 left-0"