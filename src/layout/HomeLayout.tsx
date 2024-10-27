import Header from "@/components/Header/Header";
import { ReactNode } from "react";

interface DefaultLayoutProps {
    children: ReactNode;
}

export default function HomeLayout({ children }: DefaultLayoutProps) {
    return (
        <>
            <Header className="home" />
            <main className="content">{children}</main>
        </>
    );
}
