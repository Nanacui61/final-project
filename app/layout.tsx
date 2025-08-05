// app/layout.tsx
import type { Metadata } from "next";
// import StyledComponentsRegistry from "@/lib/registry";
import { EntityProvider } from "@/context/EntityContext";
import Nav from "@/components/Nav";
import "./globals.css";

export const metadata: Metadata = {
    title: "Treasure Hunt",
    description: "An eerie treasure hunting experience",
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <body>
        {/*<StyledComponentsRegistry>*/}
        <EntityProvider>
            <Nav />
            {children}
        </EntityProvider>
        {/*</StyledComponentsRegistry>*/}
        </body>
        </html>
    );
}
