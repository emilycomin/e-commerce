import "./App.css";
import NavDropdown from "./componentes/navBar";
import Logo from "./img/logo.png";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={Logo} className="app-logo" alt="logo"></img>
        <NavDropdown />
      </header>
    </div>
  );
}
export default App;
