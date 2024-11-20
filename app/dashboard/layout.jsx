import Navbar from "./_components/Navbar";

export default function RootLayout({ children }) {
    return (
        <div>
            <Navbar />
            <div className="pt-20 px-10 md:px-20 lg:px-40 xl:px-60"> 
                {children}
            </div>
        </div>

    );
}
