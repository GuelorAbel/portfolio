import About from "./components/About";
import Competences from "./components/Competences";
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
      </main>

      <footer>
        <div className="section py-4">
          <h1>Mon pied de page</h1>
        </div>
      </footer>
    
    </>
  );
}

export default App;
