import About from "./components/About";
import Competences from "./components/Competences";
import Construction from "./components/Construction";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";


function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <main>
        <Hero />
        <About />
        <Competences />
        <Construction />
      </main>

      <footer className="bg-gray-300 text-gray-800 py-9">
        <Footer />
      </footer>
    
    </>
  );
}

export default App;
