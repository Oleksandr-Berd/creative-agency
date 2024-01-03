import About from "./components/About/About";
import SharedLayout from "./layouts/SharedLayout/SharedLayout";
import Services from "./components/Services/Services";
import Projects from "./components/Projects/Projects";
import Footer from "./layouts/Footer/Footer";

function App() {
  return (
    <>
      <SharedLayout>
        <About />
        <Services />
        <Projects />
        <Footer/>
      </SharedLayout>
    </>
  );
}

export default App;
