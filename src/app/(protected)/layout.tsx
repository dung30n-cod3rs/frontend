import { AppSidebar } from "@/components/app-sidebar";
import { ModeToggle } from "@/components/mode-toggler";
import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";

export default function ProtectedLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4 justify-between w-full">
            <SidebarTrigger className="-ml-1" />
            <ModeToggle />
          </div>
        </header>
        <main className="flex mx-[24px]">{children}</main>
      </SidebarInset>
    </>
  );
}
