import { SidebarLeft } from "@/components/navigation/sidebar-left";
import { SidebarInset } from "@/components/ui/sidebar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-1">
      <SidebarLeft />
      <SidebarInset>
        <div className="flex flex-1 flex-col gap-4 p-4">{children}</div>
      </SidebarInset>
    </div>
  );
}
