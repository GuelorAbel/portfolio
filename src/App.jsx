import About from "./components/About";
import Competences from "./components/Competences";
import Construction from "./components/Construction";
import Experiences from "./components/Experiences";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";


function App() {
  return (
    <>
    {/* ENTETE DU SITE, BLOCK DU MENU */}
      <header>
        <Navbar />
      </header>
    {/* #COMPOSANTS DU SITE */}
      <main>
        <Hero />
        <About />
        <Competences />
        <Experiences />
        <Construction />
      </main>
    {/* LE PIED DE PAGE */}
      <footer className="bg-back-gris bg-cover bg-center bg-no-repeat w-full text-gray-900 py-9">
        <Footer />
      </footer>
    
    </>
  );
}

export default App;
