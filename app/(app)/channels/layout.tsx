import Navigation from "../../_components/Navigation";

export default function ChannelsLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    // Fetch the user (because the user will only be used in channels, I suppose) and only if it is authenticated.

    return (
        <main className="flex">
            <Navigation />
            {children}
        </main>
    );
}
