import Navigation from "../_components/Navigation";

export default function ChannelsLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main className="">
            <Navigation />
            {children}
        </main>
    );
}
