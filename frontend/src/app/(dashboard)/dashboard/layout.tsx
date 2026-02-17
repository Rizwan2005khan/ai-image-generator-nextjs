import "~/styles/globals.css"

import { Providers } from "~/components/providers";

import { Toaster } from "sonner";


export default function RootLayout({
    children,
}: Readonly<{ children: React.ReactNode}>) {
    return (
        <Providers>
            {children}
            <Toaster />
        </Providers>
    )
}