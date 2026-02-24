import "~/styles/globals.css";

import type { Metadata } from "next";
import { Providers } from "~/components/providers";
import { Toaster } from "sonner";

import {
  SidebarProvider,
  SidebarInset,
  SidebarTrigger,
} from "~/components/ui/sidebar";

import { Separator } from "~/components/ui/separator";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
} from "~/components/ui/breadcrumb";

import { AppSidebar } from "~/components/sidebar/app-sidebar";

export const metadata: Metadata = {
  title: "AI Image Generator",
  description: "AI Image Generator - Turn text prompts into images",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <Providers>
      <SidebarProvider>
        <div className="flex min-h-screen w-full">
          
          {/* Sidebar */}
          <AppSidebar />

          {/* Main Section */}
          <SidebarInset className="flex flex-1 flex-col">
            
            {/* Header */}
            <header className="bg-background/95 supports-[backdrop-filter]:bg-background/60 border-border/40 sticky top-0 z-10 border-b px-6 py-3 shadow-sm backdrop-blur">
              <div className="flex items-center gap-3">
                
                <SidebarTrigger className="hover:bg-muted -ml-1 h-8 w-8 transition-colors" />

                <Separator
                  orientation="vertical"
                  className="mr-2 h-6"
                />

                <Breadcrumb>
                  <BreadcrumbList>
                    <BreadcrumbItem>Settings</BreadcrumbItem>
                  </BreadcrumbList>
                </Breadcrumb>

              </div>
            </header>

            {/* Page Content */}
            <main className="flex-1 p-6">
              {children}
            </main>

          </SidebarInset>

        </div>
      </SidebarProvider>

      <Toaster />
    </Providers>
  );
}