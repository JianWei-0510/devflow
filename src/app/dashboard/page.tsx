import { NavHeader } from "@/components/navigation/nav-header";
import { SidebarLeft } from "@/components/navigation/sidebar-left";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

export default function Page() {
  return (
    <SidebarProvider>
      <SidebarLeft />
      <SidebarInset>
        <NavHeader />
        <div className="flex flex-1 flex-col gap-4 p-4">
          <div className="mx-auto h-24 w-full max-w-3xl rounded-xl bg-muted/50" />
          <div className="mx-auto h-screen w-full max-w-3xl rounded-xl bg-red-300" />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
