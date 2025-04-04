import styles from "./App.module.css";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Experiences } from "./components/Experiences/Experiences";
import { Navbar } from "./components/Navbar/Navbar";
import { Projects } from "./components/Projects/Projects";
import { Skills } from "./components/Skills/Skills";

function App() {
    return (
    <div className = {styles.App}>
      <Navbar/>
      <About/>
      <Experiences/>
      <Projects/>
      <Skills/>
      <Contact/>
    </div>
    );
}

export default App;
