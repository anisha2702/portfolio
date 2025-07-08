import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import { Poppins } from 'next/font/google';


const poppins = Poppins({ subsets: ['latin'], weight: ['400', '600', '700'] });




export const metadata = {
  title: "Anisha Kumari | Portfolio",
  description: "Creative full-stack web developer portfolio built with Next.js",
  keywords: [
    "Anisha Kumari",
    "Web Developer",
    "Frontend Developer",
    "React",
    "Next.js",
    "Portfolio",
    "Freelancer",
  ],
  creator: "Anisha Kumari",
  authors: [{ name: "Anisha Kumari" }],
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",

};


export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className=" dark scroll-smooth">
      <body suppressHydrationWarning={true} className={`${poppins.className} `}>
         <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen transition-colors duration-300">
       
        <Navbar />
        <main className="max-w-4xl mx-auto px-4  min-h-screen bg-white dark:bg-gray-900">{children}</main>
        <Footer/>

        

        
        <ScrollToTop /> 
        </div>
      </body>
    </html>
  );
}
