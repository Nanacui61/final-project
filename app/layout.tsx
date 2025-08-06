//Written by Yuqian Cui
//layout of the game

import type { Metadata } from "next";
// import StyledComponentsRegistry from "@/lib/registry";
import { EntityProvider } from "@/context/EntityContext";
import Nav from "@/components/Nav";
import "./globals.css";


export const metadata: Metadata = {
    title: "Entity Hunt",
    description: "An entity saving game",
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
