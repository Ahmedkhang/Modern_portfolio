import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Main from "@/components/Main";
import Navbar from "@/components/Navbar";



export default function Home() {
  return (
    <main className="min-w-screen min-h-screen bg-gray-900">
      <Navbar />
      <Hero />
      <Main />
      <Footer />
    </main>
  );
}
