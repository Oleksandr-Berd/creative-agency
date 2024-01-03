import About from "./components/About/About";
import SharedLayout from "./layouts/SharedLayout/SharedLayout";
import Services from "./components/Services/Services";
import Projects from "./components/Projects/Projects";

function App() {
  return (
    <>
      <SharedLayout>
        <About />
        <Services />
        <Projects />
      </SharedLayout>
    </>
  );
}

export default App;
