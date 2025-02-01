import { NavHeader } from "@/components/navigation/nav-header";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="[--header-height:calc(theme(spacing.14))]">
      <SidebarProvider className="flex flex-col">
        <NavHeader />
        {children}
      </SidebarProvider>
    </div>
  );
}
