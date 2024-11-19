import Navbar from "./_components/Navbar";

export default function RootLayout({ children }) {
    return (
        <div>
            <Navbar/>
            {children}
        </div>

    );
}
