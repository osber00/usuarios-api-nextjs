import { Raleway } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const raleway = Raleway({ subsets: ["latin"], weight: ["300", "500", "800"] });

export const metadata = {
  title: "App NextJs",
  description: "Creando App con NextJs",
};

export default function RootLayout({ children }) {
  return (
    <html lang='es'>
      <body className={raleway.className}>
        <Navbar />
        <main className='container mx-auto flex justify-center items-center'>
          {children}
        </main>
      </body>
    </html>
  );
}
