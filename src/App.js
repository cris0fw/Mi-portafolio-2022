import "./style/Estilos.css";
import "./style/Responsive.css";
import Contacto from "./components/Contacto";
import Experiencias from "./components/Experiencias";
import HabilidadesSection from "./components/HabilidadesSection";
import Header from "./components/Header";
import Main from "./components/Main";
import OtrasHabilidades from "./components/OtrasHabilidades";

function App() {
  return (
    <div className="App">
      <Header />

      <Main />

      <HabilidadesSection />

      <OtrasHabilidades />

      <Experiencias />

      <Contacto />
    </div>
  );
}

export default App;
